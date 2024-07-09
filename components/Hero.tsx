import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" my-20 p-8 relative overflow-hidden">
      <div className="md:w-2/3">
        <h1 className="text-6xl font-bold mb-2">
          <span className="text-gray-300">Hæ</span>
          <br />
          <span className="text-orange-500 font-bold">I'm Jamil.</span>
        </h1>
        <p className="text-gray-400 text-xl mb-6">
          A <span className="text-orange-500">Software Engineer</span> and a
          visual storyteller who's passionate about creating meaningful and
          memorable experiences. Don't be shy—{" "}
          <span className="text-orange-500">lets talk!</span>
        </p>
        <div className="flex space-x-4">
          <Image src="/icons/css.svg" alt="css" width={20} height={20} />
          <Image src="/icons/css.svg" alt="css" width={20} height={20} />
          <Image src="/icons/css.svg" alt="css" width={20} height={20} />
          <Image src="/icons/css.svg" alt="css" width={20} height={20} />
        </div>
      </div>
      {/* <div className="absolute right-0 top-0 w-1/3 h-full">
        <Image src="/logo.svg" alt="profile" width={500} height={500} />
      </div> */}
    </div>
  );
};

export type SocialIconProps = {
  Icon: string;
  href: string;
};

const SocialIcon = ({ Icon, href }: SocialIconProps) => {
  return (
    <a
      href={href}
      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
    >
      <Icon />
    </a>
  );
};

export default Header;
