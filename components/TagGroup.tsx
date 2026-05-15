"use client";

import { useSearchParams } from "next/navigation";

// import { Tag, type TagProps } from "@/components/Tag";
import { Tag, type TagProps } from "./Tag";

export function TagGroup({ tags }: { tags: TagProps[] }) {
  const searchParams = useSearchParams();
  const tagsParam = searchParams.get("tags") || "";
  const selectedTags = tagsParam.split(",").filter(Boolean);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {tags.map((tag, index) => (
        <Tag key={index} text={tag.text} />
      ))}
    </div>
  );
}
