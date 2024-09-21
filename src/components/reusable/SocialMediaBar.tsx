import Link from "next/link";
import { FunctionComponent } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobileAlt,
  FaTiktok,
} from "react-icons/fa";

interface SocialMediaItem {
  name: string;
  icon: JSX.Element;
  href: string;
  target: string;
}

// Array containing social media and contact information

// interface SocialMediaBarProps {
//   socialmedia: SocialMediaItem[];
// }

const SocialMediaBar: FunctionComponent = () => {
  const socialmedia = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/",
      target: "_blank",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      href: "https://www.tiktok.com/@",
      target: "_blank",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/",
      target: "_blank",
    },
    {
      name: "mailto",
      icon: <FaMailBulk />,
      href: "mailto:info@evomina.com",
      target: "_blank",
    },
  ];
  return (
    <div className="w-full flex items-center text-center justify-center  border-t-2 border-orange-400">
      {/* Social media icons container */}
      <div className="flex flex-row m-2">
        {socialmedia &&
          socialmedia.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center justify-center p-2 m-2 text-black shadow-lg font-normal h-10 w-10 rounded-full outline-none focus:outline-none bg-white hover:bg-yellow-500"
            >
              {item.icon}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;
