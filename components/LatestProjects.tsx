import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/project/projects";
import Link from "next/link";

const LatestProjects = () => {
  return (
    <div className="my-28">
      <div className="flex justify-between items-center mb-8">
        <span className="text-2xl font-bold tracking-wider">
          <span className="text-orange-400 mr-1">#</span>
          Check my projects
        </span>
        <span>
          <Link
            href="/project"
            className="text-orange-400 hover:text-orange-200"
          >
            View all →
          </Link>
        </span>
      </div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-4">
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
    </div>
  );
};

export default LatestProjects;
