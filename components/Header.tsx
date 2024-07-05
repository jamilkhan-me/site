import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-col justify-center items-center gap-3">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={200} height={200} />
        </Link>
      </div>
      <div className="flex flex-row justify-center gap-3 ">
        {navItems.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className="text-orange-400 inline-block px-2 uppercase text-sm tracking-wide border border-orange-400 border-dashed  hover:bg-orange-200 selection:border-solid selection:border "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
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
];
