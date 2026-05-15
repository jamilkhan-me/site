import React from "react";

export type HelpCardProps = {
  icon: string;
  title: string;
  description: string;
  step?: string;
};

const HelpCard = ({ icon, title, description, step }: HelpCardProps) => (
  <div className="group flex gap-4 items-start bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1e1e1e]
    rounded-[12px] p-6
    hover:border-[#e07230] hover:bg-orange-50 dark:hover:bg-[#1c1c1c]
    transition-all duration-150">

    {step && (
      <span className="flex-shrink-0 mt-[2px] font-mono text-[12px] font-bold
        text-[#e07230] bg-orange-50 dark:bg-[#1e1410] border border-orange-200 dark:border-[#2e1a0a]
        px-2 py-1 rounded-[5px]">
        {step}
      </span>
    )}

    <div className="flex flex-col gap-2 min-w-0">
      <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug">
        {title}
      </h3>
      <p className="text-[14px] text-gray-500 dark:text-[#555] leading-[1.75]
        group-hover:text-gray-600 dark:group-hover:text-[#666] transition-colors duration-100">
        {description}
      </p>
    </div>
  </div>
);

const HelpSection = () => {
  const helpItems = [
    {
      icon: "📝",
      step: "01",
      title: "Planning & strategy",
      description:
        "We'll map out your website's goals, target audience, and key functionalities — site structure, navigation, and content requirements.",
    },
    {
      icon: "💻",
      step: "02",
      title: "Development & progress updates",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive in. From initial sketches to polished code, I keep you updated every step.",
    },
    {
      icon: "🚀",
      step: "03",
      title: "Build & launch",
      description:
        "Based on the approved design, I'll translate everything into functional code and build your website from the ground up.",
    },
    {
      icon: "📈",
      step: "04",
      title: "Continuous improvement",
      description:
        "After launch, I monitor performance and iterate. Continuous improvement and vigilant monitoring form the foundation of sustained excellence.",
    },
  ];

  return (
    <div className="mb-14">
      <div className="mb-6">
        <p className="text-[10px] font-bold text-[#e07230] uppercase tracking-[0.12em]
          flex items-center gap-2 mb-2
          before:content-[''] before:inline-block before:w-4 before:h-px before:bg-[#e07230]">
          How I work
        </p>
        <h2 className="text-[24px] font-extrabold text-gray-900 dark:text-white tracking-tight">
          My approach
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {helpItems.map((item, i) => (
          <HelpCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
