import Image from "next/image";
import React from "react";

export type BookDetailTypeProps = {
  title: string;
  author: string;
  image: string;
  genre: string[];
  read: string;
  recommendation: string;
};

export function BookDetail({
  title,
  author,
  image,
  genre,
  read,
  recommendation,
}: BookDetailTypeProps) {
  return (
    <div className="flex flex-row justify-start gap-8">
      <Image src={image} alt={title} width={200} height={300} />
      <div>
        <h2>{title}</h2>
        <h4>By {author}</h4>
        <h5>{genre}</h5>
        <h6 className="font-light text-sm tracking-wide text-gray-300">
          Date Read : {read}
        </h6>
        <h6 className="font-light text-sm tracking-wide text-gray-300">
          My recommendation: {recommendation}
        </h6>
      </div>
    </div>
  );
}
