import Link from "next/link";
import Image from "next/image";

export function Mention({
  name,
  avatar,
  link,
}: {
  name: string;
  avatar: string;
  link: string;
}) {
  return (
    <>
      <Link href={link}>
        <span className="inline-block px-1 rounded-md hover:bg-gray-200 ">
          <Image
            className="mr-2 rounded-sm align-text-bottom pointer-events-none select-none"
            src={avatar}
            alt={name}
            width={20}
            height={20}
          />
          <span>{name}</span>
        </span>
      </Link>
    </>
  );
}
