import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/project/projects";
import { SectionHeader } from "./LatestArticles";

// ─── Project card ─────────────────────────────────────────────────────────────

type ProjectItemProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
  link: string;
  tools: string[];
  cta: string;
};

const ProjectItem = ({
  title,
  description,
  src,
  alt,
  link,
  tools,
  cta,
}: ProjectItemProps) => (
  <Link
    href={link}
    target={link.startsWith("http") ? "_blank" : "_self"}
    className="group flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:bg-orange-50 dark:hover:bg-white/[0.05] hover:border-orange-300 dark:hover:border-orange-500/20 transition-all duration-200 no-underline"
  >
    {/* Thumbnail */}
    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-zinc-800">
      <Image
        src={src}
        alt={alt || title}
        width={80}
        height={80}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between min-w-0">
      <div>
        <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors leading-snug my-0 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed my-0 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {tools.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[12px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

// ─── Export ───────────────────────────────────────────────────────────────────

const LatestProjects = () => (
  <section
    className="my-8 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-[hsl(38,10%,5%)]"
  >
    <SectionHeader label="Featured Projects" href="/project" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {projects.map((project: any) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default LatestProjects;
