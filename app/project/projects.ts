type ProjectProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
  link: string;
  tools: string[];
  cta: string;
};

export const projects: ProjectProps[] = [
  {
    title: "My Personal website",
    description: "Crafting &amp; curating my new identity on the Web",
    src: "/og/root.png",
    alt: "website",
    link: "/project/site",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
  {
    title: "Compsigh",
    description: "My computer science club at the University of SF",
    src: "/og/compsigh.png",
    alt: "compsigh banner",
    link: "/project/compsigh",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
  {
    title: "DEPLOY/23",
    description: "An entirely student-bootstrapped, project for a weekend.",
    src: "/og/deploy23.png",
    alt: "DEPLOY/23 banner",
    link: "/project/deploy23",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
];
