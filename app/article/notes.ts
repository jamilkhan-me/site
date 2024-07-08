type NoteProps = {
  text: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
};

export const notes: NoteProps[] = [
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
