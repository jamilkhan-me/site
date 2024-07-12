import Image from "next/image";
import React from "react";

export type ProjectCardTypeProps = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  buttons?: string[];
  logo: string;
};

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  buttons,
  logo,
}: ProjectCardTypeProps) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          {logo && (
            <Image
              src={logo}
              alt={`${title} logo`}
              width={200}
              height={200}
              className="h-8 mb-2"
            />
          )}
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        {buttons && (
          <div className="flex space-x-2">
            {buttons.map((button, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded bg-gray-700 text-white"
              >
                {button}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
    <div className="px-4 py-2 bg-gray-700">
      <p className="text-xs text-gray-400">{tags.join(" ")}</p>
    </div>
    <div className="px-4 py-2 bg-gray-900 flex space-x-2">
      {["Live", "Cached"].map((btn, index) => (
        <button
          key={index}
          className="px-3 py-1 text-sm rounded border border-purple-500 text-purple-500"
        >
          {btn} {btn === "Live" ? "↔" : "≥"}
        </button>
      ))}
    </div>
  </div>
);

const Projects = () => (
  <div className="bg-gray-900 p-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-purple-500">#projects</h2>
      <a href="#" className="text-white">
        View all →
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard
        title="ChertNodes"
        subtitle="Лучший майнкрафт хостинг"
        description="Minecraft servers hosting"
        tags={["HTML", "SCSS", "Python", "Flask"]}
        buttons={["дешево", "Мощно", "Легко"]}
        logo="/path-to-chertnodes-logo.png"
      />
      <ProjectCard
        title="ProtectX"
        subtitle="Лучшая защита вашего сервера"
        description="Discord anti-crash bot"
        tags={[
          "React",
          "Express",
          "Discord.js",
          "Node.js",
          "HTML",
          "SCSS",
          "Python",
          "Flask",
        ]}
        logo="/path-to-protectx-logo.png"
      />
      <ProjectCard
        title="Kahoot Answers Viewer"
        description="Get answers to your kahoot quiz"
        tags={["CSS", "Express", "Node.js"]}
        logo="/path-to-kahoot-logo.png"
      />
    </div>
  </div>
);

export default Projects;
