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
      icon: "📝",
      title: "Planning & strategy",
      description:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
      icon: "💻",
      title: "Development & Progress Update",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    },
    {
      icon: "🚀",
      title: "Development & Launch",
      description:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    },
    {
      icon: "📈",
      title: "Continuous improvement & monitor",
      description:
        "Continuous improvement is the relentless pursuit of perfection, while monitoring is the vigilant guardian of progress. Together, I form the foundation of sustained excellence.",
    },
  ];

  return (
    <div className="my-40">
      <h2 className="text-2xl font-medium tracking-wider">
        <span className="text-orange-400 mr-1">#</span>
        My approach
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpItems.map((item, index) => (
          <HelpCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
