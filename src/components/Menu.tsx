"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      name: "Hem",
      href: "/",
    },

    {
      name: "Menu",
      href: "/menu",
    },

    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Cart(1)",
      href: "/cart",
    },

    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "Logout",
      href: "/logout",
    },
  ];

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer bg-orange-400"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          {links &&
            links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-orange-400"
                >
                  <p>{link.name}</p>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Menu;
