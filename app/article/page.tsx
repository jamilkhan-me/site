import type { Metadata } from "next";
import { notes } from "./notes";
import NotesClient from "./NotesClient";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "I don't write nearly enough to be good but this is my place to practice. I write articles on a diverse range of non-fiction topics. Long and short, serious and fun, good and bad. I hope you can find something you enjoy!",
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
  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));
  return <NotesClient notes={notes} allTags={allTags} />;
}