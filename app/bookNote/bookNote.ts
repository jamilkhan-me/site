type NoteProps = {
  text: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
};

export const bookNote: NoteProps[] = [
  {
    text: "Do It today",
    slug: "do-it-today",
    image: "/bookImage/doittoday.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Motivation"],
  },
  {
    text: "How to get rich",
    slug: "how-to-get-rich",
    image: "/bookImage/howtogetrich.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Money"],
  },
  {
    text: "Atomic habit",
    slug: "atomic-habit",
    image: "/bookImage/atomichabit.jpg",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["habit", "productivity"],
  },
  {
    text: "Hell Yeah or No",
    slug: "Hell-Yeah-or-No",
    image: "/bookImage/hellyeahorno.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Self-help"],
  },
  {
    text: "anything you want",
    slug: "anything-you-want",
    image: "/bookImage/anythingyouwant.jpg",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Business"],
  },
  {
    text: "Show Your work",
    slug: "show-your-work",
    image: "/bookImage/show-your-work.png",
    description:
      "Show Your Work! is about why generosity trumps genius. It’s about getting findable, about using the network instead of wasting time “networking.” It’s not self-promotion, it’s self-discovery—let others into your process, then let them steal from you. Filled with illustrations, quotes, stories, and examples, Show Your Work! offers ten transformative rules for being open, generous, brave, productive.",
    tags: ["Nonfiction", "Productivity", "Personal Development"],
  },
];
