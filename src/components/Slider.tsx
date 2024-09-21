"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heading } from "./reusable";
import Container from "./reusable/Container";

const slides = [
  {
    id: 1,
    title: "Rimbo Resturang!",
    description: "People disapoints, pizza is eternal.",
    img: "/burger2.png",
    url: "/",
    bg: "bg-gradient-to-r from-black to-black",
  },
  {
    id: 2,
    title: "Rimbo Resturang!",
    description: "People disapoints, pizza is eternal.",
    img: "/homepage.svg",
    url: "/",
    bg: "bg-gradient-to-r from-black to-black",
  },
  {
    id: 3,
    title: "Rimbo Resturang!",
    description: "People disapoints, pizza is eternal.",
    img: "/homepage.svg",
    url: "/",
    bg: "bg-gradient-to-r from-black to-black",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(60vh-60px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-2 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-6 2xl:gap-6 text-center">
              {/* IMAGE CONTAINER */}
              <div className="h-2/4 xl:w-2/3 xl:h-2/4 relative">
                <Image
                  src={slide.img}
                  alt="Background with spices"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="select-none"
                />
              </div>
              {/* Text Container */}
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  Pizza <span className="text-orange-500">Rimboträffan</span>
                </h1>
              </div>
              <Link href={slide.url}>
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded">
                  Order Online Now
                </button>
              </Link>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-2/3 xl:h-full relative">
              <Image
                src="/hands-taking.png"
                alt="Background with spices"
                layout="fill"
                objectFit="contain"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="select-none"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative m-auto left-1/2 bottom-10 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-4 h-4  rounded-full ring-1 ring-orange-200 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
