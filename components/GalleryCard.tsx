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
      width={500}
      height={500}
    />
  );

  return (
    <div className="flex flex-row flex-wrap gap-10">
      <figure>
        {link ? <Link href={link}>{image}</Link> : image}
        {title && <figcaption>{title}</figcaption>}
        {description && <div>{description}</div>}
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