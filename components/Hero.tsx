import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" mt-28 mb-40 relative overflow-hidden">
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
          <Link
            href="https://www.linkedin.com/in/jamilkhaninfo/"
            target="_blank"
          >
            <Image
              src="/socialMediaIcon/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://x.com/JamilkhanInfo" target="_blank">
            <Image
              src="/socialMediaIcon/twitter.svg"
              alt="twitter"
              width={30}
              height={30}
            />
          </Link>
          <Link href="https://github.com/JamilKhan-me" target="_blank">
            <Image
              src="/socialMediaIcon/github.svg"
              alt="css"
              width={30}
              height={30}
            />
          </Link>
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
