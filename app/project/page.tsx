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
    "Larger endeavors that have changed my life & work in some meaningful way",
  openGraph: {
    siteName: "Edward Shturman's personal website",
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
          Thoughts on design, engineering, learning, and life
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
