import Link from "next/link";
import { Route } from "next";
import Image from "next/image";
import { Spacer } from "./Spacer";

export type GalleryCardProps = {
  title?: string;
  description?: React.ReactElement;
  link?: Route;
  cta?: string;
  src: string;
  alt?: string;
  maxWidth?: number;
};

export function GalleryCard({
  title,
  description,
  link,
  cta,
  src,
  alt,
  maxWidth,
}: GalleryCardProps) {
  const image = (
    <Image
      unoptimized
      src={src}
      alt={alt || title || ""}
      width={200}
      height={500}
    />
  );

  return (
    <div className="flex flex-row flex-wrap">
      <figure>
        {link ? (
          <Link className="relative w-28 h-56 rounded align-middle" href={link}>
            {image}
          </Link>
        ) : (
          image
        )}
        {title && <figcaption className="py-4">{title}</figcaption>}
        {description && <div className="text-gray-300">{description}</div>}
        {link && (
          <>
            <Spacer size={10} />
            <Link href={link}>{cta}</Link>
          </>
        )}
      </figure>
    </div>
  );
}
