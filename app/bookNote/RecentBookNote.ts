type RecentBookNoteTypeProps = {
  text: string;
  slug: string;
  image: string;
  description: string;
  tags: string[];
};

export const RecentBookNote: RecentBookNoteTypeProps[] = [
  {
    text: "anything you want",
    slug: "/bookNote/anything-you-want",
    image: "/bookImage/anythingyouwant.jpg",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Business"],
  },
  {
    text: "Do It today",
    slug: "/bookNote/do-it-today",
    image: "/bookImage/doittoday.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Motivation"],
  },
  {
    text: "Hell Yeah or No",
    slug: "/bookNote/Hell-Yeah-or-No",
    image: "/bookImage/hellyeahorno.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Self-help"],
  },
  {
    text: "How to get rich",
    slug: "/bookNote/how-to-get-rich",
    image: "/bookImage/howtogetrich.png",
    description:
      "A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book.",
    tags: ["Money"],
  },
];
