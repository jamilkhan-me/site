import Image from "next/image";
import Link from "next/link";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BookNote
          coverSrc="/bookImage/atomichabit.jpg"
          title="Die With Zero – Summary With Notes and Highlights"
          author="Bill Perkins"
          description="A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book."
        />
        <BookNote
          coverSrc="/bookImage/anythingyouwant.jpg"
          title="Atomic Habits (James Clear) – Book Summary, Notes & Highlights"
          author="James Clear"
          description="This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals."
        />
        <BookNote
          coverSrc="/bookImage/cannothurtme.jpg"
          title="Die With Zero – Summary With Notes and Highlights"
          author="Bill Perkins"
          description="A practical guide to getting the most out of your money – and your life. Including highlights, recommendations, and a full summary of the book."
        />
        <BookNote
          coverSrc="/bookImage/deepwork.jpeg"
          title="Atomic Habits (James Clear) – Book Summary, Notes & Highlights"
          author="James Clear"
          description="This book helped me understand how habits are formed and what we can do to build long-lasting chains of cues, cravings, responses, and rewards to create systems that will help us achieve our goals."
        />
      </div>
    </div>
  );
};

export type BookNoteTypeProps = {
  coverSrc: string;
  title: string;
  author: string;
  description: string;
};

const BookNote = ({
  coverSrc,
  title,
  author,
  description,
}: BookNoteTypeProps) => {
  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <Image
          src={coverSrc}
          alt={`Cover of ${title}`}
          width={150}
          height={225}
          className="w-full mt-2 rounded-lg h-auto"
        />
      </div>
      <div className="w-2/3">
        <Link
          href={""}
          className="text-xl hover:text-orange-400 font-semibold text-white mb-2"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-600 mb-2">
          Summary With Notes and Highlights
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BookNotes;
