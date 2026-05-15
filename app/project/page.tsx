import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./projects";
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
    <div className="min-h-screen bg-gray-50 dark:bg-[#141414] px-4 sm:px-8 md:px-12 py-8 sm:py-12 pb-20 text-gray-600 dark:text-[#a0a0a0]">

      {/* ── Page header ── */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-[4px] h-[28px] bg-[#e07230] rounded-[2px] flex-shrink-0" />
          <h1 className="text-[24px] sm:text-[28px] font-extrabold text-gray-900 dark:text-white tracking-tight">
            Projects
          </h1>
        </div>
        <p className="text-[15px] text-gray-500 dark:text-[#555] leading-[1.75] max-w-full sm:max-w-[540px]
          border-l-2 border-gray-200 dark:border-[#1e1e1e] pl-[14px] ml-[16px]">
          I&apos;ve been building a lot of things. From small experiments to
          full-fledged web applications. Each one reflects my passion for coding
          and design. Come explore the fruits of my labor and see what I&apos;ve
          been up to!
        </p>
      </div>

      {/* ── Section bar ── */}
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200 dark:border-[#1e1e1e]">
        <span className="text-[13px] font-bold text-gray-500 dark:text-[#444] uppercase tracking-[0.1em]">
          Featured work
        </span>
        <span className="text-[13px] text-gray-400 dark:text-[#2a2a2a] font-mono">
          {projects.length} projects
        </span>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 gap-[14px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            src={project.src}
            alt={project.alt}
            link={project.link}
            tools={project.tools}
            cta={project.cta}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
}
