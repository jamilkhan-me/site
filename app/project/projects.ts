type ProjectProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
  link: string;
  tools: string[];
  cta: string;
  source?: string;
};

export const projects: ProjectProps[] = [
  {
    title: "My Personal website",
    description: "Building my new identity on the Web",
    src: "/projectImages/myportfolio.png",
    alt: "My personal website",
    link: "https://jamilkhan.me",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
    source: "https://github.com/JamilKhan-me",
  },
  {
    title: "Roketso : Japanese cuisine",
    description: "Authentic japanese cuisine website",
    src: "/projectImages/roketso.png",
    alt: "Roketso : Japanese cuisine",
    link: "/project/compsigh",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
    source: "https://github.com/JamilKhan-me",
  },
  {
    title: "Carhub",
    description: "A car renting website. Find your car",
    src: "/projectImages/carhub.png",
    alt: "Carhub banner",
    link: "/project/deploy23",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
    source: "https://github.com/JamilKhan-me",
  },
  {
    title: "Amer's portfolio",
    description: "Portfolio site for a data scientist",
    src: "/projectImages/amer.png",
    alt: "Amer's portfolio banner",
    link: "/project/deploy23",
    tools: ["Reactjs", "Typescript", "Tailwindcss", "Nodejs"],
    cta: "View project",
    source: "https://github.com/JamilKhan-me",
  },
];