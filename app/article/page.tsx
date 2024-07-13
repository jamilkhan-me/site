import Link from "next/link";
import type { Metadata } from "next";
import { Spacer } from "@/components/Spacer";
import { Comment } from "@/components/Comment";
import { TagGroup } from "@/components/TagGroup";
import { notes } from "./notes";
import styles from "./Notes.module.css";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "I DON'T WRITE NEARLY ENOUGH TO BE GOOD BUT THIS IS MY PLACE TO PRACTICE. I WRITE ARTICLES ON A DIVERSE RANGE OF NON-FICTION TOPICS. LONG AND SHORT, SERIOUS AND FUN, GOOD AND BAD. I HOPE YOU CAN FIND SOMETHING YOU ENJOY! 😊",
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
  let filteredNotes = notes;
  if (tagString)
    filteredNotes = notes.filter((note) =>
      tags.every((tag) => note.tags.includes(tag))
    );

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl pt-6 font-bold tracking-wider uppercase">
          Articles
        </span>
        <Comment type="block">
          I don&apos;t write nearly enough to be good but this is my place to
          practice. I write articles on a diverse range of non-fiction topics.
          Long and short, serious and fun, good and bad. <br />
          <br /> I hope you can find something you enjoy! 😊
        </Comment>
        <Spacer size={8} />
        <TagGroup
          tags={Array.from(new Set(notes.flatMap((note) => note.tags))).map(
            (tag) => ({ text: tag })
          )}
        />
      </div>
      <Spacer size={8} />

      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-3">
          {filteredNotes.map((note, index) => (
            <Link key={index} href={`/article/${note.slug}`}>
              <ArticleCard
                text={note.text}
                image={note.image}
                description={note.description}
                tags={note.tags}
              />
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
