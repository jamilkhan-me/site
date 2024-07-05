---
title: "Site v1.1: Tags"
description: "The first devlog for my site, where I push updates to styles, introduce new components, and refactor the Notes and Artifacts pages"
published: true
---

# Site `v1.1`: Tags

The first devlog for my site *(after [the project page](/projects/site))!* I wanted to start writing these for myself as a personal record, as well as to showcase things that were fun to build. I aim to publish one after an update that I feel is noteworthy enough. This is one of those. :)

In this update:

- [I tweak the site's visuals](#visuals)
- [I introduce new components](#new-components)
- [I add tags to Artifacts and Notes](#tags)

## Visuals

So, as it turns out, when you use macOS Night Shift 24/7, you forget it's on when working with color *(or is it just me?)*. One day I had turned it off and *wow*, it strained my eyes to look at pure white on pure black. I tinted all of the site's colors with *just a bit* of the same yellow as links.

<Spacer size={16} />

<Grid columns={2}>
  <GalleryCard
    src="/assets/before-color-tweak.png"
    alt="A screenshot of the site before I tweaked the colors"
  />
  <GalleryCard
    src="/assets/after-color-tweak.png"
    alt="A screenshot of the site after I tweaked the colors"
  />
</Grid>

<Spacer size={16} />

For consistency, I also updated the OG images, both static and dynamic. Send a link to the site to a friend to see it in action! ;)

## New components

As I've been building out my site, I've been writing fun little components that spruce up the place and make it more my aesthetic, like `Comment`. Or, that make it convenient to write and showcase my work, like `Grid`.

*[All of them are open-source](https://github.com/edwardshturman/site), if you're interested!*

I've got a few new ones:

### `Mention`

As I was backfilling [my projects](/projects), it was important to me to shout out my collaborators. I took inspiration from Notion's inline mention, and crafted something similar. Check it out:

<Spacer size={16} />

<Playground editable={true}>
  A demo of the <code>Mention</code> component, written by <Mention name="Edward Shturman" avatar="/avatars/edward.png" link="#mention" />
</Playground>

<Spacer size={16} />

### `Playground`

The playground above is new too! I can pass in `editable` to let visitors play around with whatever's being demoed.

## Tags

As much as I love the natural authoring experience Markdown brings — *check out [my guide](/notes/mdx-nextjs-14) if you want the same setup!* — it becomes cumbersome to parse the content within.

[Artifacts](/artifacts) is my collection of wisdom from across the Internet & literature. I wanted to be able to reference categories of wisdom or types of media — like self-improvement vs. creative work, or tweets vs. books — without it feeling like I'm accessing a database.

Enter: tags!

<Spacer size={16} />

<Playground editable={false}>
  <div style={{ padding: '20px' }}>
    <TagGroup
      tags={[
        {text: 'demo'},
        {text: 'playground'},
        {text: 'tag'},
      ]}
    />
  </div>
</Playground>

<Spacer size={16} />

The tags are in sync with the URL in the form of query parameters. This means that if you have a filter you like, like `tweets` on `life`, you can save and share it! This avoids any React state acrobatics.

I'm also happy with how the design turned out. It really plays to the technical vibe of the site in my opinion.

I added tags to [my Notes page](/notes) as well, so as I write more of them, being able to filter by topic will come in handy.

<Spacer size={32} />

That's it for this release; I hope you enjoyed! [Follow me on X](https://x.com/edwardshturman) for real-time updates as I build things — I'm working on posting more often. :)
