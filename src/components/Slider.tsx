"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Rimbo Resturang!",
    description: "People disapoints, pizza is eternal.",
    img: "/homepage.svg",
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
    <div className="h-[calc(100vh-80px)]  text-orange-400 overflow-hidden">
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
            <div className="h-1/2 xl:w-1/3 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-left xl:ml-20 pl-1  xl:border-l-2 border-white">
              <h1 className="text-5xl lg:text-6xl 2xl:text-6xl font-semibold">
                {slide.title}
              </h1>
              <h2 className="text-xl lg:text-3xl 2xl:text-4xl">
                {slide.description}
              </h2>

              <Link href={slide.url}>
                <button className="rounded-md bg-orange-400 text-white py-6 px-10">
                  Order Now
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-2/3 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
