import Link from "next/link";
import type { Metadata } from "next";

import { Spacer } from "@/components/Spacer";
import { GalleryCard } from "@/components/GalleryCard";
import { projects } from "./projects";
import { Comment } from "@/components/Comment";
import { TagGroup } from "@/components/TagGroup";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "I'VE BEEN BUILDING A LOT OF THINGS. FROM SMALL EXPERIMENTS TO FULL-FLEDGED WEB APPLICATIONS. EACH ONE REFLECTS MY PASSION FOR CODING AND DESIGN. COME EXPLORE THE FRUITS OF MY LABOR AND SEE WHAT I'VE BEEN UP TO!",
  openGraph: {
    siteName: "Jamil Khan's personal website",
  },
};

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl pt-6 font-bold tracking-wider uppercase">
          Projects
        </span>
        <Comment type="block">
          I&apos;ve been building a lot of things. From small experiments to
          full-fledged web applications. Each one reflects my passion for coding
          and design. Come explore the fruits of my labor and see what I&apos;ve
          been up to!
        </Comment>
        <Spacer size={8} />
      </div>
      <Spacer size={8} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project: any) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            link={project.link}
            tools={project.tools}
            cta={project.cta}
          />
        ))}
      </div>
    </>
  );
}
