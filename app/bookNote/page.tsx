import Link from "next/link";
import type { Metadata } from "next";

import { Spacer } from "@/components/Spacer";
import { Comment } from "@/components/Comment";
import { TagGroup } from "@/components/TagGroup";
import { bookNote } from "./bookNote";
import BookNote from "@/components/BookNoteCard";

export const metadata: Metadata = {
  title: "Book Notes",
  description:
    "I'M AN AVID READER, ALWAYS LOOKING TO LEARN AND GROW. HERE, I SHARE DETAILED NOTES AND INSIGHTS FROM THE BOOKS I'VE READ, CAPTURING THE KEY IDEAS AND LESSONS THAT HAVE INSPIRED ME ALONG THE WAY.",
  openGraph: {
    siteName: "Jamil Khan's personal website",
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
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl pt-6 font-bold tracking-wider uppercase">
          My Digital BookShelf
        </span>
        <Comment type="block">
          I&apos;m an avid reader, always looking to learn and grow. Here, I
          share detailed notes and insights from the books I&apos;ve read,
          capturing the key ideas and lessons that have inspired me along the
          way.
        </Comment>
        <Spacer size={8} />
        <TagGroup
          tags={Array.from(new Set(bookNote.flatMap((note) => note.tags))).map(
            (tag) => ({ text: tag })
          )}
        />
      </div>
      <Spacer size={8} />
      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-16 md:mx-auto">
          {filteredNotes.map((note, index) => (
            <Link key={index} href={`/bookNote/${note.slug}`}>
              <BookNote image={note.image} text={note.text} />
            </Link>
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
