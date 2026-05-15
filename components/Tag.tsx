"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export function Tag({ text, ...props }: TagProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tagsParam = searchParams.get("tags") || "";
  const tags = tagsParam.split(",").filter(Boolean);
  const selected = tags.includes(text);
  let destination =
    tags.length > 0
      ? `${pathname}?tags=${searchParams.get("tags")},${text}`
      : `${pathname}?tags=${text}`;
  if (selected)
    destination = `${pathname}?tags=${tags
      .filter((tag) => tag !== text)
      .join(",")}`;
  if (selected && tags.length === 1) destination = pathname;

  return (
    <span {...props}>
      <Link
        href={destination}
        scroll={false}
        className="inline-block px-2  bg-orange-300 rounded-md text-[0.875rem] uppercase tracking-[1px] text-orange-900 font-semibold  before:content-['#'] mr-1 hover:bg-orange-200 selection:border selection:border-solid selection:before:content-['*'] selection:before:mr-1"
      >
        {text}
      </Link>
    </span>
  );
}
