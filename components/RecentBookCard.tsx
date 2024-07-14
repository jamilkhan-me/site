import Image from "next/image";
import Link from "next/link";
import { RecentBookNote } from "@/app/bookNote/RecentBookNote";

const BookNotes = () => {
  return (
    <div className="mt-40">
      <div className="flex justify-between items-center mb-8">
        <span className="text-2xl font-bold tracking-wider">
          <span className="text-orange-400 mr-1">#</span>
          Read my book notes
        </span>
        <span>
          <Link
            href="/bookNote"
            className="text-orange-400 hover:text-orange-200"
          >
            View all →
          </Link>
        </span>
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RecentBookNote.map((item) => (
            <Link href={item.slug} key={item.text}>
              <BookNote
                image={item.image}
                text={`${item.text} – Summary With Notes and Highlights`}
                description={item.description}
                slug={item.slug}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export type BookNoteTypeProps = {
  image: string;
  text: string;
  slug: string;
  description: string;
};

const BookNote = ({ image, text, slug, description }: BookNoteTypeProps) => {
  return (
    <div className="flex space-x-4 group">
      <div className="w-1/3">
        <Image
          src={image}
          alt={`Cover of ${text}`}
          width={150}
          height={225}
          className="w-full mt-2 rounded-lg h-auto"
        />
      </div>
      <div className="w-2/3">
        <Link
          href={slug}
          className="text-xl group-hover:text-orange-400 font-semibold text-white mb-2"
        >
          {text}
        </Link>

        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookNotes;
