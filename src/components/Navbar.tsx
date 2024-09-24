"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { usePathname } from "next/navigation";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Hem",
      href: "/",
    },

    {
      name: "Menu",
      href: "/menu",
    },
  ];

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-black text-orange-400 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Rimboträffan</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-2 h-full">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            {" "}
            {/* Set the container size */}
            <Image
              src="/logo.svg"
              alt="Logo"
              fill // Use fill to allow the image to cover the container
              className="object-contain" // Use CSS for object-fit
            />
          </div>
          <div className="text-lg text-white tracking-wide">Rimboträffan</div>
        </Link>

        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center justify-center gap-12">
          <div className="hidden text-xl xl:flex gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex h-[48px] mx-2 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-orange-100 active:text-orange-100 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "text-orange-100": pathname === link.href, // Active link style
                  }
                )}
              >
                <p className="hidden md:block"> | {link.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/4 xl:w-1/4 flex items-center justify-center gap-8">
          {/* <SearchBar /> */}
          {/* <NavIcons /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
