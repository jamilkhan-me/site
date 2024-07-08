import Image from "next/image";
import React from "react";

export type ArticleCardProps = {
  text?: string;
  description: string;
  image: string;
  tags?: string[];
};

const ArticleCard = ({ text, image, description, tags }: ArticleCardProps) => {
  return (
    <div className="w-96 h-[470px] rounded-md bg-slate-800 p-4 gap-4 hover:border hover:border-zinc-700 relative z-50">
      <Image
        src={image}
        alt="cue"
        width={200}
        height={200}
        className="w-[360px] h-[240px] rounded-md object-cover "
      />
      <div className="flex flex-col  p-2">
        <div className="w-24 flex flex-row gap-2 py-4">
          {tags?.map((tag) => (
            <small className="font-light text-sm capitalize tracking-wide text-orange-400 ">
              {tag}
            </small>
          ))}
        </div>
        <span className=" font-semibold text-xl leading-7 tracking-wider capitalize ">
          {text}
        </span>
        <span className=" font-light text-sm py-4 text-gray-300 tracking-wider  ">
          The impact of technology on the workplace: how technlogy is changing.
          How techlogy is going to impact our life
        </span>
        <div className="flex flex-row justify-between">
          <small className="font-light tracking-wide text-gray-400">
            August 17, 2024
          </small>
          <small className="font-light tracking-wide text-gray-400">
            August 17, 2024
          </small>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
