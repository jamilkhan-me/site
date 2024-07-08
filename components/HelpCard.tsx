import React from "react";

export type HelpCardProps = {
  icon: string;
  title: string;
  description: string;
};

const HelpCard = ({ icon, title, description }: HelpCardProps) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const HelpSection = () => {
  const helpItems = [
    {
      icon: "🚀",
      title: "Be More Productive",
      description:
        "How to execute efficiently, make time for what matters and have fun along the way.",
    },
    {
      icon: "🎬",
      title: "Grow a Youtube Channel",
      description:
        "Learn how to start a YouTube channel based on my years of experience.",
    },
    {
      icon: "🤑",
      title: "Build an Online Business",
      description:
        "How I built my business and the learnings I've made over the years so you can do the same.",
    },
    {
      icon: "✍️",
      title: "Boost Your Grades",
      description:
        "How to study effectively for exams, with the best evidence-based techniques.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-2">How can I help you?</h2>
      <div className="w-16 h-1 bg-blue-500 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpItems.map((item, index) => (
          <HelpCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
