---
title: "Setting up MDX on Next.js 14"
description: "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it."
published: true
og_image: "/og/mdx-nextjs-14.png"
---

# Setting up MDX on Next.js 14

It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.

<TableOfContents
  entries={[
    "My criteria",
    "Ecosystem",
    "Setup",
    "Bells & whistles"
  ]}
/>

## My criteria

I set out to check a few boxes:

1. **A natural authoring experience**: it should feel intuitive enough to edit as actual Markdown, such as in editors like Obsidian.
2. **As little dependencies & acrobatics as possible**: many of the solutions in guides I read while trying to build this used either multiple packages (like `gray-matter` + `next-mdx-remote`) or unmaintained ones like Contentlayer. It should be elegant — enough ;).
3. **Flexibility**: I don't want to be confined to something like a `/blog` route to use MDX. I want to be able to use what I want, where I want it, based on my needs.

I'm happy to say I managed to check all of the above, with some bells & whistles, including:

- YAML frontmatter support
- Dynamic metadata & OG image generation
- Static generation of MDX pages at build time

## Ecosystem

### `@next/mdx`

While very fast when using SSR, [`@next/mdx`](https://www.npmjs.com/package/@next/mdx) is not very flexible: you can't name files anything other than `<slug>/page.mdx`, which does not get prettier over time. Also, YAML frontmatter is not natively supported.

### `gray-matter`

If the `@next/mdx` tradeoffs don't bother you, [`gray-matter`](https://github.com/jonschlinkert/gray-matter) is a great package for parsing frontmatter. In addition to standard YAML, it supports JSON and TOML as well.

### `mdx-bundler`

[`mdx-bundler`](https://github.com/kentcdodds/mdx-bundler) is nice for apps with a lot of components used sparsely in different places, as well as for non-Next.js apps, but it does come with a developer experience tradeoff in my opinion.

### `next-mdx-remote`

This is it. [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) allows you to write full-fat Markdown — you don't even need to use an `.mdx` extension — and just *use* your components, no import required. That does mean you have to package all of them for every page. But, since I use just a few small ones I wrote for convenience — in almost all of my pages anyway — this isn't a concern for me personally.

## Setup

In this guide, I'll walk you through creating an MVP for serving MDX content on your Next.js app. I've scaffolded a [complete template repository](https://github.com/edwardshturman/mdx-nextjs-14) you can use to follow along.

If you'd prefer to start from scratch, let's get going with a clean install of Next.js:

```shell
npx create-next-app@latest
```

For the reasons outlined above, let's roll with `next-mdx-remote`:

```shell
npm install next-mdx-remote
```

At this point, you get to decide the scope of rendering Markdown for your app. For this site, any `.md` file in the `app/` directory will be rendered. If this is what you're looking for, go ahead and create a new file: `app/[...slug]/page.tsx`.

Our implementation can be boiled down into five steps:

1. Fetch all `.md` files
2. Statically generate routes for each file
3. Read each file's content
4. Compile Markdown → HTML
5. Render the generated page

### Fetching files & generating routes

A "slug" is an identifier for a file we want to make available as a route. For example, to generate the route `/notes/mdx-nextjs-14`, we want to have a file `mdx-nextjs-14.md` in the `app/notes/` directory. Let's write a function to return all the slugs for our app:

```typescript
function getMdSlugs(folder: string, paths: string[] = []) {
  const slugs = paths
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
    .map((slug) => path.join(folder, slug))
    .map((slug) => slug.split('/'))
    .map((slug) => ({ slug }))
  return slugs
}
```

<Spacer size={32} />

<Comment type="block">An aside on <code>generateStaticParams()</code></Comment>

You might be wondering why we're returning an array of *objects*. That's because to [statically generate a catch-all dynamic segment](https://nextjs.org/docs/app/api-reference/functions/generate-static-params#catch-all-dynamic-segment):

- Next.js expects an array of objects,
- Where the value of each key is an array,
- And each element in that array maps to a segment in the route to be generated.

For example:

```typescript
export function generateStaticParams() {
  return [
    { slug: ['roadmap'] },
    { slug: ['notes', 'mdx-nextjs-14'] },
    { slug: ['notes', 'vs-code'] }
  ]
}
```

Three routes will be statically generated:

- `/roadmap`
- `/notes/mdx-nextjs-14`
- `/notes/vs-code`

<Comment type="block">End aside</Comment>

<Spacer size={32} />

Let's set up the logic for traversing each folder:

```typescript
const app = path.join(process.cwd(), 'app')
const files = await fs.readdir(app, { withFileTypes: true })
const folders = files.filter((file) => file.isDirectory())
let slugs = await Promise.all(
  folders.map(async (folder) => {
    const pathsInFolder = await fs.readdir(path.join(app, folder.name))
    return getMdSlugs(folder.name, pathsInFolder)
  })
)
.then((slugs) => slugs.flat())

const pathsInAppFolder = files.map((file) => file.name)
const slugsFromAppFolder = getMdSlugs('', pathsInAppFolder)
slugs = slugs.concat(slugsFromAppFolder)
```

Great! In order to generate each route at build time, let's wrap all of this in `generateStaticParams()`:

```typescript
export const dynamicParams = false
export async function generateStaticParams() {
  // function getMdSlugs(...) {...}

  // Traversal logic from above...

  return slugs
}
```

### Reading files & compiling content

Great, we're generating all Markdown files as routes at build time! But, there's no page content to generate yet. Now, we need each route to render its respective page's content and frontmatter (metadata about the page).

For frontmatter, you can add anything that might be useful for you and/or your users, such as `date_published`, `tags`, and so on. For now, let's keep it simple:

```typescript
type Frontmatter = {
  title: string
  description: string
  og_image?: string
}
```

Let's now compile the Markdown content of each page using `next-mdx-remote`'s `compileMDX()`:

```typescript
async function readPage(slug: string[]) {
  try {
    const filePath = path.join(process.cwd(), 'app', ...slug) + '.md'
    const page = await fs.readFile(filePath, 'utf8')

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: page,
      options: { parseFrontmatter: true }
    })

    return { content, frontmatter }
  }

  catch (error) {
    notFound()
  }
}
```

### Rendering generated routes

We can define the page as such:

```typescript
export default async function Page(
  { params }:
  { params: { slug: string[] } }
) {
  const { content, frontmatter } = await readPage(params.slug)

  return (
    <>
      {content}
    </>
  )
}
```

There we have it — we've just implemented a basic MDX on Next.js 14 app. But we're not done just yet.

## Bells & whistles

Before we go any further, now's a good time to get an example running. Create `app/hello-world.md`:

```markdown
---
title: "Hello World"
description: "MDX on Next.js 14: An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata & OG image generation, and static site generation"
---

# Hello World

MDX on Next.js 14: An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata & OG image generation, and static site generation
```

You can verify that it works by going to `localhost:3000/hello-world`.

Now, let's implement a couple ✨ additions ✨:

- Dynamic metadata
- OG image generation

The [complete template repository](https://github.com/edwardshturman/mdx-nextjs-14) has way more, including syntax highlighting, the `<Breadcrumbs />` component you see here on my site, and some styles to get you started.

### Dynamic metadata

Having rich metadata for sharing across the web greatly contributes to SEO, and it just looks good too. Let's dynamically generate metadata to go along with each route. The best part? It stays in sync with each Markdown file, thanks to your frontmatter.

```typescript
export async function generateMetadata(
  { params }:
  { params: { slug: string[] } }
) {
  const { frontmatter } = await readPage(params.slug)
  const metadata: Metadata = {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      siteName: 'MDX on Next.js 14'
    }
  }

  if (frontmatter.og_image)
    metadata.openGraph!.images = [{
      url: frontmatter.og_image,
      width: 1200,
      height: 630,
      alt: ''
    }]

  return metadata
}
```

We can take it a step further, and generate a new OG image on the fly if you don't have a static one linked in your frontmatter.

### OG image generation

Next.js has a library for generating dynamic images using JSX and CSS: `next/og`.

Create a new file `app/api/og/route.tsx`:

```typescript
export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')
    : 'MDX on Next.js 14'

  // Example of loading an image
  const imageData = await fetch(
    new URL('../../../public/og-background.png', import.meta.url))
    .then((res) => res.arrayBuffer())

  // Example of loading a font
  const Geist = await fetch(
    new URL('../../../public/fonts/Geist-Regular.otf', import.meta.url))
    .then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // JSX
      // You can include anything from text to images to flexboxxed divs
      // You can style it, though there are limits — see the next/og docs
      // For example:
      <div
        style={{
          color: 'black',
          fontSize: 30,
          fontFamily: '"Geist Regular"'
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist Regular',
          data: Geist,
          style: 'normal'
        }
      ]
    }
  )
}
```

I'll admit, the syntax isn't that pretty, and the library has its limitations, but in both concept and practice this is very cool.

Back in `app/[...slug]/page.tsx`:

```typescript {14-19}#add
export async function generateMetadata(
  { params }:
  { params: { slug: string[] } }
) {
  const { frontmatter } = await readPage(params.slug)
  const metadata: Metadata = {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      siteName: 'MDX on Next.js 14'
    }
  }

  metadata.openGraph!.images = [{
    url: `api/og?title=${frontmatter.title}`,
    width: 1200,
    height: 630,
    alt: ''
  }]

  if (frontmatter.og_image)
    metadata.openGraph!.images = [{
      url: frontmatter.og_image,
      width: 1200,
      height: 630,
      alt: ''
    }]

  return metadata
}
```

And that's it! This was my first technical post; if you liked it, please [let me know](https://x.com/edwardshturman/status/1797016250830524447)! I learned a lot building my site, and I hope this guide helped you soar off the runway in building your awesome Next.js app with MDX.

## Resources

- The [complete template repository](https://github.com/edwardshturman/mdx-nextjs-14) fit with this setup and more
- Josh Comeau's (the 🐐) [post on how he built his blog](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)
- The fantastic plugins I'm using:
  - [`rehype-pretty-code`](https://rehype-pretty-code.netlify.app/)
  - [`rehype-slug`](https://github.com/rehypejs/rehype-slug)
  - [`remark-math` with `rehype-katex`](https://github.com/remarkjs/remark-math)
- The [`generateStaticParams()` docs](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- The [Vercel OG Playground](https://og-playground.vercel.app/)
