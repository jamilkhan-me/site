import Image from "next/image";
import Link from "next/link";
import { RecentBookNote } from "@/app/bookNote/RecentBookNote";
import { SectionHeader } from "./LatestArticles";

// ─── Book card ────────────────────────────────────────────────────────────────

type BookNoteTypeProps = {
  image: string;
  text: string;
  slug: string;
  description: string;
};

const BookNoteCard = ({ image, text, slug, description }: BookNoteTypeProps) => (
  <Link
    href={slug}
    className="group flex gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.02] hover:bg-orange-50 dark:hover:bg-white/[0.05] hover:border-orange-300 dark:hover:border-orange-500/20 transition-all duration-200 no-underline"
  >
    {/* Book cover */}
    <div className="flex-shrink-0 w-12 h-16 rounded overflow-hidden shadow-md">
      <Image
        src={image}
        alt={text}
        width={48}
        height={72}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Info */}
    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors leading-snug my-0 line-clamp-2">
        {`${text} – Notes`}
      </h3>
      <p className="text-[13px] text-gray-500 mt-1.5 leading-relaxed my-0 line-clamp-2">
        {description}
      </p>
      <span className="inline-block mt-2 text-[12px] text-orange-500/70 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
        Read notes →
      </span>
    </div>
  </Link>
);

// ─── Export ───────────────────────────────────────────────────────────────────

const BookNotes = () => (
  <section
    className="my-8 p-5 md:p-6 rounded-2xl border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-[hsl(38,10%,5%)]"
  >
    <SectionHeader label="Book Notes" href="/bookNote" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {RecentBookNote.map((item) => (
        <BookNoteCard
          key={item.text}
          image={item.image}
          text={item.text}
          description={item.description}
          slug={item.slug}
        />
      ))}
    </div>
  </section>
);

export default BookNotes;
