import Link from "next/link";
import { Route } from "next";
import Image from "next/image";

export type ProjectCardProps = {
  title?: string;
  description?: React.ReactElement;
  link?: Route;
  cta?: string;
  src: string;
  alt?: string;
  tools: React.ElementType[];
  maxWidth?: number;
};

export function ProjectCard({
  title,
  description,
  link,
  cta,
  src,
  alt,
  tools,
  maxWidth,
}: ProjectCardProps) {
  const image = (
    <Image
      unoptimized
      src={src}
      alt={alt || title || ""}
      width={500}
      height={500}
    />
  );

  return (
    <div className="flex flex-row flex-wrap gap-10">
      <div className="relative group block p-2">
        <figure className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50">
          {link ? (
            <Link
              className="h-44 sm:h-60 md:h-44 w-full relative rounded-2xl transition duration-500 bg-black/10 group-hover:bg-transparent"
              href={link}
            >
              {image}
            </Link>
          ) : (
            image
          )}
          <div className="p-4">
            {title && (
              <figcaption className="text-zinc-100 font-bold tracking-wide mt-4">
                {title}
              </figcaption>
            )}
            {description && (
              <div className="mt-8 text-zinc-400 text-wrap tracking-wide leading-relaxed text-sm">
                {description}
              </div>
            )}
            <div>
              <div className="flex flex-row flex-wrap mt-8">
                {tools.map((tool) => (
                  <span className="text-gray-500 mr-4 inline-block stroke-1">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {link && (
              <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="h-3 w-3 stroke-1.5 text-zinc-500 group-hover:text-cyan-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"></path>
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"></path>
                </svg>
                <Link
                  className="text-zinc-500 group-hover:text-cyan-500 text-xs"
                  href={link}
                >
                  {cta}
                </Link>
              </div>
            )}
          </div>
        </figure>
      </div>
    </div>
  );
}
