import MyFunFacts from "@/components/FunFactCard";
import HelpSection from "@/components/HelpCard";
import Skills from "@/components/SkillCard";
import SkillCard from "@/components/SkillCard";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-16">
      <span className="text-2xl font-medium tracking-wider">
        <span className="text-orange-400 mr-1">#</span>
        About me
      </span>
      <p>Who am i ?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-gray-300">
            Hello, i’m Jamil Khan !!!
            <br />
            <br />
            I’m a self-taught front-end developer based in London, UK. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. <br /> <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <div>
          <Image src="/profile.png" alt="my image" height={300} width={300} />
        </div>
      </div>
      <Skills />
      <MyFunFacts />
      <HelpSection />
    </div>
  );
};

export default About;
