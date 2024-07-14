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
    description: "Bulding my new identity on the Web",
    src: "/projectImages/myportfolio.png",
    alt: "website",
    link: "https://jamilkhan.me",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
  {
    title: "Roketso : Japanese cuisine",
    description: "Authentic japanese cuisine website",
    src: "/projectImages/roketso.png",
    alt: "Roketso : Japanese cuisine",
    link: "/project/compsigh",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
  {
    title: "Carhub",
    description: "A car renting website. Find your car",
    src: "/projectImages/carhub.png",
    alt: "DEPLOY/23 banner",
    link: "/project/deploy23",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
  {
    title: "Amer's portfolio",
    description: "Portfolio site for a data scientist",
    src: "/projectImages/amer.png",
    alt: "DEPLOY/23 banner",
    link: "/project/deploy23",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
  },
];
