import React from "react";

export type FunFactTypeProps = {
  text: string;
};

const FunFact = ({ text }: FunFactTypeProps) => (
  <div className="bg-gray-800 border border-gray-700 rounded p-2 text-gray-300 text-sm">
    {text}
  </div>
);

const MyFunFacts = () => {
  const facts = [
    "I like winter more than summer",
    "I often bike with my friends",
    "I like pizza and pasta",
    "I was in Egypt, Poland and Turkey",
    "My favorite movie is The Green Mile",
    "I am still in school",
    "I don't have any siblings",
  ];

  return (
    <div className="my-40">
      <h2 className="text-2xl font-medium tracking-wider">
        <span className="text-orange-400 mr-1">#</span>
        My fun facts
      </h2>
      <div className="flex flex-row flex-wrap gap-2 w-2/3">
        {facts.map((fact, index) => (
          <FunFact key={index} text={fact} />
        ))}
      </div>
      <div className="absolute right-8 bottom-0">
        <div className="w-16 h-16 border-2 border-purple-500 opacity-50 rotate-12"></div>
        <div className="w-16 h-16 border-2 border-purple-500 opacity-50 -rotate-12 -mt-12 ml-4"></div>
        <div className="w-16 h-16 border-2 border-purple-500 opacity-50 mt-4 -ml-4"></div>
      </div>
    </div>
  );
};

export default MyFunFacts;
