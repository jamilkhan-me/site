---
title: "People"
description: "People I admire and want to meet in real life"
published: true
---

# Hello World

MDX on Next.js 14: An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata & OG image generation, and static site generation

# Setting up MDX on Next.js 14

It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.

### Fetching files & generating routes

A "slug" is an identifier for a file we want to make available as a route. For example, to generate the route `/notes/mdx-nextjs-14`, we want to have a file `mdx-nextjs-14.md` in the `app/notes/` directory. Let's write a function to return all the slugs for our app:

```typescript
function getMdSlugs(folder: string, paths: string[] = []) {
  const slugs = paths
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""))
    .map((slug) => path.join(folder, slug))
    .map((slug) => slug.split("/"))
    .map((slug) => ({ slug }));
  return slugs;
}
```

# People

## Gen Z creators doing cool stuff

- [ ] [Ari Dutilh](https://x.com/aridutilh)
- [ ] [Theo Bleier](https://x.com/theombl)
- [ ] [Kane Pixels](https://youtube.com/@kanepixels)
- [ ] [Jace Attard](https://x.com/JaceThings)
- [ ] [Neel Redkar](https://x.com/_neelr_)
- [ ] [Nicholas Tao](https://youtube.com/@nicholast)
- [ ] [Kai Notebook](https://youtube.com/@KaiNotebook)
- [ ] [Richard Sabiaga](https://youtube.com/@RichardSabiagaYT)
- [x] [Matthew Stanciu](https://x.com/MatthewStanciu)

## Designers & artists

- [ ] [Fons Mans](https://x.com/fonsmans)
- [ ] [Brett Williams](https://x.com/BrettFromDJ)
- [x] [Matt D. Smith](https://x.com/mds)
- [ ] [Andreas Storm](https://x.com/avstorm)
- [ ] [Nick St. Pierre](https://x.com/nickfloats)
- [ ] [James Shedden](https://x.com/jamesshedden)
- [ ] [Laurent Del Rey](https://x.com/laurentdelrey)

## Indie creators

- [ ] [XH](https://x.com/xhfloz)
- [ ] [Andy Allen](https://x.com/asallen)
- [ ] [Steph Ango](https://x.com/kepano)
- [ ] [Andy Chung](https://read.cv/andy)

## Builders of products & communities

- [ ] [Carl Pei](https://x.com/getpeid)
- [x] [Alex Hao](https://x.com/alexhaobao)
- [x] [Ben Lang](https://x.com/benln)
- [ ] [Ivan Zhao](https://x.com/ivanzhao)
- [ ] [Josh Miller](https://x.com/joshm)
- [ ] [Zeno Rocha](https://x.com/zenorocha)
- [ ] [Sam Altman](https://x.com/sama)
- [ ] [Pedro Duarte](https://x.com/peduarte)
- [ ] [Lee Robinson](https://x.com/leeerob)
- [x] [Vlad Magdalin](https://x.com/callmevlad)
- [ ] [Greg Brockman](https://x.com/gdb)
- [x] [Francisco Cruz](https://x.com/Franciscocrz)
- [x] [Emma Yee Yick](https://x.com/emmayeeyick)
- [ ] [Guillermo Rauch](https://x.com/rauchg)
- [ ] [Thomas Paul Mann](https://x.com/thomaspaulmann)

## Design-engineers

- [ ] [Shu Ding](https://x.com/shuding_)
- [ ] [Evil Rabbit](https://x.com/evilrabbit_)
- [ ] [John Pham](https://x.com/JohnPhamous)
- [ ] [Steven Tey](https://x.com/steventey)
- [ ] [Lydia Hallie](https://x.com/lydiahallie)
- [ ] [Delba Oliveira](https://x.com/delba_oliveira)
- [ ] [Paco Coursey](https://x.com/pacocoursey)
- [ ] [Emil Kowalski](https://x.com/emilkowalski_)
- [ ] [Rauno Freiberg](https://x.com/raunofreiberg)
- [ ] [Nanda Syahrasyad](https://x.com/nandafyi)

## Content creators

- [ ] [GxAce](https://youtube.com/@GxAce)
- [ ] [MKBHD](https://youtube.com/@mkbhd)
- [ ] [Fireship](https://youtube.com/@Fireship)
- [ ] [Net Ninja](https://youtube.com/@NetNinja)
- [ ] [Ali Abdaal](https://youtube.com/@aliabdaal)
- [ ] [Theo Browne](https://youtube.com/@t3dotgg)
- [ ] [Casey Neistat](https://youtube.com/@casey)
