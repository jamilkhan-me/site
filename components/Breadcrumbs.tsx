"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const path = usePathname();
  if (path === "/") return null;
  const crumbs = path.split("/").filter(Boolean);
  crumbs.pop();

  return (
    <nav className="text-lg text-orange-400 uppercase tracking-wider mt-10">
      <ol className="flex list-none p-0 m-0">
        <Crumb key="/" href="/">
          Jamil Khan
        </Crumb>
        {crumbs.map((text, i) => (
          <Crumb key={i} href={`/${crumbs.slice(0, i + 1).join("/")}`}>
            {text}
          </Crumb>
        ))}
      </ol>
    </nav>
  );
}

function Crumb({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mr-2.5 last:mr-2.5 after:content-['/'] after:ml-2.5">
      <Link href={href}>{children}</Link>
    </li>
  );
}
