import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col list-none gap-2">
        {navItems.map((item) => (
          <Link href={item.link} key={item.name} className="text-orange-400">
            / {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

export const navItems = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Article",
    link: "/article",
  },
  {
    name: "Book Note",
    link: "/bookNote",
  },
  {
    name: "Project",
    link: "/project",
  },
  {
    name: "People",
    link: "/people",
  },
];
