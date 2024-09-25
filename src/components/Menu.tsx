"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronCompactUp } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Hem", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
    { name: "Cart(1)", href: "/cart" },
    { name: "Logout", href: "/logout" },
  ];

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      {/* mobile nav */}
      <div className="flex items-center justify-end md:justify-between relative z-50">
        {/* Toggle Button */}
        <span
          onClick={() => setOpen((prev) => !prev)}
          className="p-[9px] bg-gray-100 rounded-full md:hidden cursor-pointer fixed top-4 right-4 z-50"
        >
          <GiHamburgerMenu
            size={25}
            className={`transition-transform ease-in duration-150 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`md:hidden bg-gray-200 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          open ? "pb-4 px-5 opacity-100 visible" : "h-0 invisible opacity-0"
        }`}
      >
        <div className="flex flex-col text-[15px] pt-10 opacity-75 px-2 justify-center items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-orange-400 py-2"
              onClick={handleLinkClick} // Close the menu on link click
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
