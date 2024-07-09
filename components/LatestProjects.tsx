import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/app/project/projects";

const LatestProjects = () => {
  return (
    <div className=" p-8">
      <div className="mb-8">
        <span className="text-3xl font-medium tracking-wider">
          <span className="text-orange-400 mr-1">#</span>
          Recent projects
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
