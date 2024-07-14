type NoteProps = {
  text: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
};

export const notes: NoteProps[] = [
  {
    text: `Redesign my portfolio version 3.0`,
    slug: "/redesign-my-portfolio",
    image: "/projectImages/myportfolio.png",
    description:
      "I've given a brand new look to my portfolio. I've always wanted to build an asthetic and minimal type portfolio. I wanted not too depend on so many plugins. So, Finally I met my criteria to build my identity on the web.",
    tags: ["life"],
  },
  {
    text: `My 2023 annual review`,
    slug: "/article/my-2023-annual-review",
    image: "/og/dcraft.png",
    description:
      "Annual review is sort of self-reflection. Reflecting on the past year might allow me to learn from experiences, recognizing what worked well and what didn't. It's like looking in the rearview mirror before steering toward the destination",
    tags: ["life"],
  },
  {
    text: `"It's easy"`,
    slug: "easy",
    image: "/og/dcraft.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["life"],
  },
  {
    text: "Site v1.1: Tags",
    slug: "site-v1-1",
    image: "/og/compsigh.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["devlog", "engineering"],
  },
  {
    text: "VS Code: an Artist's Canvas",
    slug: "vs-code",
    image: "/og/cue.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["guide", "setup"],
  },
  {
    text: "Setting up MDX on Next.js 14",
    slug: "mdx-nextjs-14",
    image: "/og/mdx-nextjs-14.png",
    description:
      "It's comically nontrivial to set up an ergonomic, performant MDX Next.js app, with all the bells & whistles like parsing YAML frontmatter. Here's how I did it.",
    tags: ["guide", "engineering"],
  },
];
