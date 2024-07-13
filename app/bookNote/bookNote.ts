type NoteProps = {
  text: string;
  slug: string;
  image: string;
  tags: string[];
};

export const bookNote: NoteProps[] = [
  {
    text: "anything you want",
    slug: "anything-you-want",
    image: "/bookImage/anythingyouwant.jpg",
    tags: ["Business"],
  },
  {
    text: "Do It today",
    slug: "do-it-today",
    image: "/bookImage/doittoday.png",
    tags: ["Motivation"],
  },
  {
    text: "Hell Yeah or No",
    slug: "hell-yeah-or-no",
    image: "/bookImage/hellyeahorno.png",
    tags: ["Self-help"],
  },
  {
    text: "How to get rich",
    slug: "how-to-get-rich",
    image: "/bookImage/howtogetrich.png",
    tags: ["Money"],
  },
];
