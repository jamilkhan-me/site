import MyFunFacts from "@/components/FunFactCard";
import HelpSection from "@/components/HelpCard";
import Skills from "@/components/SkillCard";
import Image from "next/image";
import React from "react";

const About = () => {
  const stats = [
    { num: "6+", label: "Projects built" },
    { num: "1+", label: "Years experience" },
    { num: "9",  label: "Countries visited" },
    { num: "32", label: "Books read" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#141414] px-4 sm:px-8 md:px-12 py-8 sm:py-12 pb-20 text-gray-600 dark:text-[#a0a0a0]">

      {/* ── Hero ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 md:gap-12 items-center mb-10 md:mb-14">

        <div className="flex flex-col gap-5">
          <span className="text-[11px] font-bold text-[#e07230] uppercase tracking-[0.12em]
            flex items-center gap-2
            before:content-[''] before:inline-block before:w-4 before:h-px before:bg-[#e07230]">
            Full-Stack Developer
          </span>

          <div>
            <h1 className="text-[28px] sm:text-[36px] font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-[-0.5px]">
              Jamil Khan
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-[#555] font-medium uppercase tracking-[0.04em] mt-1">
              Based in London, UK
            </p>
          </div>

          <p className="text-[16px] text-gray-500 dark:text-[#8a8a8a] leading-[1.85] max-w-full sm:max-w-[480px]">
            I&apos;m a self-taught developer who builds responsive websites from scratch
            and turns them into modern, user-friendly experiences. I&apos;ve been helping
            clients establish their presence online while constantly learning the newest
            technologies and frameworks.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Available for work", "London, UK", "1+ yr experience"].map((tag) => (
              <span
                key={tag}
                className="text-[13px] font-medium text-[#e07230]
                  bg-orange-50 dark:bg-[#1e1410] border border-orange-200 dark:border-[#2e1a0a]
                  px-3 py-[5px] rounded-[6px] tracking-[0.03em]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="flex justify-center md:justify-end">
          <div className="flex flex-col gap-3 w-[200px]">
            <div className="relative w-full h-[240px] rounded-[14px] overflow-hidden
              bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#222]">
              <Image
                src="/profile.png"
                alt="Jamil Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
        {stats.map(({ num, label }) => (
          <div
            key={label}
            className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#1e1e1e] rounded-[10px] px-[18px] py-4"
          >
            <div className="text-[28px] font-extrabold text-[#e07230] leading-none mb-1">
              {num}
            </div>
            <div className="text-[13px] text-gray-500 dark:text-[#444] uppercase tracking-[0.06em] font-medium">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gray-200 dark:bg-[#1e1e1e] mb-14" />

      <Skills />

      <div className="w-full h-px bg-gray-200 dark:bg-[#1e1e1e] mb-14" />

      <MyFunFacts />

      <div className="w-full h-px bg-gray-200 dark:bg-[#1e1e1e] mb-14" />

      <HelpSection />
    </div>
  );
};

export default About;
