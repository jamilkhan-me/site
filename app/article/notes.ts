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
      "I've given a brand new look to my portfolio. I've always wanted to build an aesthetic and minimal type portfolio. I wanted not to depend on so many plugins. So, finally I met my criteria to build my identity on the web.",
    tags: ["life"],
  },
  
  {
    text: `"It's easy"`,
    slug: "easy",
    image: "/og/dcraft.png",
    description:
      "I don't like this phrase. The struggle of the task is part of the reward of seeing it through.",
    tags: ["life"],
  },
  {
    text: "Site v1.1: Tags",
    slug: "site-v1-1",
    image: "/og/compsigh.png",
    description:
      "The first devlog for my site. I tweak visuals, introduce new components, and add tags to Artifacts and Notes.",
    tags: ["devlog", "engineering"],
  },
  {
    text: "VS Code: an Artist's Canvas",
    slug: "vs-code",
    image: "/og/cue.png",
    description:
      "Extending aesthetics to the developer experience — how I set up VS Code to feel more like a canvas than a cockpit.",
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