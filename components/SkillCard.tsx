import React from "react";

export type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="group bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1e1e1e] rounded-[10px] p-[18px]
    hover:border-[#e07230] hover:bg-orange-50 dark:hover:bg-[#1c1c1c] transition-all duration-150">
    <h3 className="text-[12px] font-bold text-[#e07230] uppercase tracking-[0.08em]
      mb-3 pb-2 border-b border-gray-100 dark:border-[#1e1e1e]">
      {title}
    </h3>
    <ul className="flex flex-col gap-[6px]">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-center gap-2 text-[14px] text-gray-500 dark:text-[#666]
          group-hover:text-gray-700 dark:group-hover:text-[#888] transition-colors duration-100">
          <span className="w-[3px] h-[3px] rounded-full bg-[#e07230] opacity-60 flex-shrink-0" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsData = {
    Languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    Frameworks: ["React JS", "Next JS", "Gatsby", "Express.js", "TailwindCSS", "SCSS"],
    Databases: ["Mongo", "Firebase", "PostgreSQL"],
    Tools: ["VSCode", "Linux", "Figma", "NPM", "Git", "AWS"],
  };

  return (
    <div className="mb-14">
      <div className="mb-6">
        <p className="text-[10px] font-bold text-[#e07230] uppercase tracking-[0.12em]
          flex items-center gap-2 mb-2
          before:content-[''] before:inline-block before:w-4 before:h-px before:bg-[#e07230]">
          Expertise
        </p>
        <h2 className="text-[24px] font-extrabold text-gray-900 dark:text-white tracking-tight">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Object.entries(skillsData).map(([cat, skills]) => (
          <SkillCategory key={cat} title={cat} skills={skills} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
