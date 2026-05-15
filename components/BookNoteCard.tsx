import Image from "next/image";

type BookNoteCardProps = {
  image: string;
  text: string;
};

export default function BookNoteCard({ image, text }: BookNoteCardProps) {
  return (
    <div className="group w-full flex flex-col rounded-[12px] overflow-hidden
      bg-[#1a1a1a] border border-[#222]
      hover:border-[#e07230] hover:bg-[#1c1c1c]
      transition-all duration-200">

      {/* Book cover */}
      <div className="relative w-full aspect-[2/3] bg-[#111] overflow-hidden">
        <Image
          src={image}
          alt={text}
          fill
          className="object-cover opacity-80 group-hover:opacity-100
            group-hover:scale-[1.03] transition-all duration-300"
        />
      </div>

      {/* Title bar */}
      <div className="flex items-center justify-between gap-2 px-[14px] py-[12px] border-t border-[#1e1e1e]">
        <p className="text-[13px] font-semibold text-white leading-snug line-clamp-1">
          {text}
        </p>
        <span className="flex-shrink-0 text-[#e07230] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}