import React from "react";

export type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <ul className="text-gray-300 text-sm">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = {
    Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    Frameworks: [
      "React JS",
      "Next JS",
      "Gatsby",
      "Express.js",
      "TailwindCSS",
      "SCSS",
    ],

    Databases: ["Mongo", "Firebase", "PostgreSQL"],
    Tools: ["VSCode", "Linux", "Figma", "NPM", "Git", "AWS"],
  };

  return (
    <div className="">
      <span className="text-2xl font-medium tracking-wider">
        <span className="text-orange-400 mr-1">#</span>
        Skills
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
