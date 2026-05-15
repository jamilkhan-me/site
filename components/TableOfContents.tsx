import Link from "next/link";

import styles from "./TableOfContents.module.css";

export function TableOfContents({ entries }: { entries: string[] }) {
  return (
    <>
      <nav>
        <ul>
          {entries.map((entry, index) => (
            <li className="before:content-['#']" key={index}>
              <Link
                href={`#${entry
                  .toLowerCase()
                  .replace(/[^\w\s]/g, "")
                  .replace(/\s/g, "-")}`}
              >
                {entry}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
