import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  src: string;
  alt: string;
  link: string;
  tools: string[];
  cta: string;
  source?: string;
};

export function ProjectCard({
  title,
  description,
  src,
  alt,
  link,
  tools,
  cta,
  source,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col sm:flex-row rounded-[12px] overflow-hidden
      bg-[#f5f2ee] dark:bg-[#1a1a1a] border border-[#e0dbd3] dark:border-[#222]
      hover:border-[#e07230] hover:bg-[#ede8e1] dark:hover:bg-[#1c1c1c]
      transition-all duration-200 hover:-translate-y-[2px]">

      {/* ── Thumbnail ── */}
      <div className="relative w-full h-[180px] sm:w-[200px] md:w-[280px] lg:w-[450px] sm:h-auto flex-shrink-0 bg-[#e8e3dc] dark:bg-[#111] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover opacity-55 group-hover:opacity-70 transition-opacity duration-200"
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col gap-[10px] p-[20px] flex-1 min-w-0">

        {/* Title */}
        <p className="text-[15px] font-bold text-[#111] dark:text-white leading-[1.4]">
          {title}
        </p>

        {/* Description */}
        <p className="text-[13px] text-[#666] dark:text-[#555] leading-[1.65] line-clamp-2">
          {description}
        </p>

        {/* Tool pills */}
        <div className="flex flex-wrap gap-[6px]">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-[12px] text-[#555] dark:text-[#c0c0c0] border border-[#d0cbc4] dark:border-[#2e2e2e]
                bg-[#ede8e1] dark:bg-[#1e1e1e] px-[9px] py-[3px] rounded-[5px]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center gap-2 pt-[10px] border-t border-[#e0dbd3] dark:border-[#1e1e1e] mt-auto">

          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[6px] text-[13px] font-medium text-[#666] dark:text-[#555]
                border border-[#d0cbc4] dark:border-[#2a2a2a] bg-[#ede8e1] dark:bg-[#1e1e1e] px-[10px] py-[5px] rounded-[6px]
                hover:border-[#e07230] hover:text-[#e07230] transition-all duration-150"
            >
              <GithubIcon />
              Source
            </a>
          )}

          <a
            href={link}
            className="flex items-center gap-[6px] text-[13px] font-medium text-[#666] dark:text-[#555]
              border border-[#d0cbc4] dark:border-[#2a2a2a] bg-[#ede8e1] dark:bg-[#1e1e1e] px-[10px] py-[5px] rounded-[6px]
              hover:border-[#e07230] hover:text-[#e07230] transition-all duration-150"
          >
            {cta}
            <ArrowIcon />
          </a>

        </div>
      </div>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
