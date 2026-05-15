import React from "react";

export type FunFactTypeProps = {
  text: string;
};

const FunFact = ({ text }: FunFactTypeProps) => (
  <div className="flex items-center gap-2 text-[14px] text-gray-500 dark:text-[#555]
    bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1e1e1e] rounded-[8px]
    px-3 py-2 cursor-default
    hover:border-[#e07230] hover:text-gray-700 dark:hover:text-[#c0c0c0] hover:bg-orange-50 dark:hover:bg-[#1c1c1c]
    transition-all duration-150">
    <span className="w-[4px] h-[4px] rounded-full bg-[#e07230] flex-shrink-0" />
    {text}
  </div>
);

const MyFunFacts = () => {
  const facts = [
    "I like summer more than winter",
    "I often bike with my friends",
    "I like Turkish cuisine most",
    "Travelled Germany, Italy, France, Netherlands, Belgium, Poland, Austria, Czech Republic & Scotland",
    "My favorite movie is The Pursuit of Happyness",
    "I am still in school",
    "I don't have any siblings",
  ];

  return (
    <div className="mb-14">
      <div className="mb-6">
        <p className="text-[10px] font-bold text-[#e07230] uppercase tracking-[0.12em]
          flex items-center gap-2 mb-2
          before:content-[''] before:inline-block before:w-4 before:h-px before:bg-[#e07230]">
          Get to know me
        </p>
        <h2 className="text-[24px] font-extrabold text-gray-900 dark:text-white tracking-tight">
          Fun facts
        </h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {facts.map((fact, i) => (
          <FunFact key={i} text={fact} />
        ))}
      </div>
    </div>
  );
};

export default MyFunFacts;
