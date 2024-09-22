import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { usePathname } from "next/navigation";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  const links = [
    {
      name: "Hem",
      href: "/",
    },

    {
      name: "Menu",
      href: "/list?cat=all-products",
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
          <Image src="/logo.svg" alt="|" width={50} height={50} />
          <div className="text-lg text-white tracking-wide">Rimboträffan</div>
        </Link>
        {/* RIGHT */}

        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center justify-center gap-12">
          <div className="hidden text-xl xl:flex gap-10">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={"text-orange-400 hover:text-white"}
                >
                  <p className="hidden md:block"> | {link.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-1/4 xl:w-1/4 flex items-center justify-center gap-8">
          {/* <SearchBar /> */}
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
