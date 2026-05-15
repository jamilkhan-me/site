import type { Metadata } from "next";
import { bookNote } from "./bookNote";
import BookNoteClient from "./BookNoteClient"; // ← local, not @/components

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

export default function Notes() {
  const allTags = Array.from(
    new Set((bookNote ?? []).flatMap((note) => note.tags))
  );

  return <BookNoteClient books={bookNote ?? []} allTags={allTags} />;
}