"use client";

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
    <div className="group w-full h-full flex flex-col bg-[#f5f2ee] dark:bg-[#1a1a1a] border border-[#e0dbd3] dark:border-[#222]
      rounded-[12px] overflow-hidden
      hover:border-[#e07230] hover:bg-[#ede8e1] dark:hover:bg-[#1c1c1c]
      transition-all duration-200">

      {/* ── Thumbnail ── */}
      <div className="relative w-full h-[152px] bg-[#e8e3dc] dark:bg-[#111] flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={text ?? "article thumbnail"}
          fill
          className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-200"
        />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col gap-[10px] p-[18px] flex-1">

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-[6px]">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[12px] font-medium text-[#e07230] bg-[#f5e8d8] dark:bg-[#1e1410] border border-[#e8c8a0] dark:border-[#3a2010]
                  px-2 py-[2px] rounded-[5px] tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        {text && (
          <p className="text-[15px] font-bold text-[#111] dark:text-white leading-[1.4] line-clamp-2">
            {text}
          </p>
        )}

        {/* Description */}
        <p className="text-[13px] text-[#666] dark:text-[#555] leading-[1.65] line-clamp-2 flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-[10px] border-t border-[#e0dbd3] dark:border-[#1e1e1e] mt-auto">
          <span className="text-[12px] text-[#999] dark:text-[#3a3a3a]">Aug 17, 2024</span>
          <span className="text-[12px] font-medium text-[#e07230] flex items-center gap-1
            opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            Read article
            <ArrowIcon />
          </span>
        </div>

      </div>
    </div>
  );
};

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default ArticleCard;
