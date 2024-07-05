import Link from "next/link";
import type { Metadata } from "next";

import { Spacer } from "@/components/Spacer";
import { Comment } from "@/components/Comment";
import { TagGroup } from "@/components/TagGroup";
import { bookNote } from "./bookNote";

export const metadata: Metadata = {
  title: "Notes",
  description: "Thoughts on design, engineering, learning, and life",
  openGraph: {
    siteName: "Edward Shturman's personal website",
    images: [
      {
        url: "api/og?title=Notes",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function Notes({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const tagString = searchParams.tags as string;
  const tags = tagString?.split(",") || [];
  let filteredNotes = bookNote;
  if (tagString)
    filteredNotes = bookNote.filter((note) =>
      tags.every((tag) => note.tags.includes(tag))
    );

  return (
    <>
      <h1>Notes</h1>
      <Comment type="block">
        Thoughts on design, engineering, learning, and life
      </Comment>
      <Spacer size={8} />
      <TagGroup
        tags={Array.from(new Set(bookNote.flatMap((note) => note.tags))).map(
          (tag) => ({ text: tag })
        )}
      />
      <Spacer size={8} />
      <nav>
        <ul>
          {filteredNotes.map((note, index) => (
            <li key={index}>
              <Link href={`/bookNote/${note.slug}`}>
                {note.text}
                <NoteIcon
                  style={{
                    scale: 0.8,
                    marginLeft: "4px",
                    verticalAlign: "-6px",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function NoteIcon(props: JSX.IntrinsicElements["svg"]) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.75 14H13.25M8.75 10H15.25M4.75 20.25H19.25C19.8023 20.25 20.25 19.8023 20.25 19.25V4.75C20.25 4.19772 19.8023 3.75 19.25 3.75H4.75C4.19772 3.75 3.75 4.19772 3.75 4.75V19.25C3.75 19.8023 4.19772 20.25 4.75 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
