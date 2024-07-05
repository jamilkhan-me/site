type NoteProps = {
  text: string;
  slug: string;
  tags: string[];
};

export const bookNote: NoteProps[] = [
  {
    text: "anything you want",
    slug: "anything-you-want",
    tags: ["life"],
  },
  {
    text: "Do It today",
    slug: "do-it-today",
    tags: ["devlog", "engineering"],
  },
  {
    text: "Hell Yeah or No",
    slug: "hell-yeah-or-no",
    tags: ["guide", "setup"],
  },
  {
    text: "How to get rich",
    slug: "how-to-get-rich",
    tags: ["guide", "engineering"],
  },
];
