"use client"; // Directive for next.js to ensure this code runs on the client-side.

import React, { FC } from "react";
import Image from "next/image"; // Next.js component for image optimization.
import Container from "./reusable/Container";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaHamburger, FaDoorOpen } from "react-icons/fa";

const Delivery: FC = () => {
  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-6">
          <div className="md:col-span-2 col-span-1 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-lg font-bold text-orange-400"></h1>
            <div className="text-4xl font-semibold">
              <span className="text-orange-400"> Your Favorite Burger </span> On
              the Way!
            </div>

            <ul className="flex flex-col space-y-4">
              <li className="flex items-center">
                <MdOutlineDeliveryDining
                  size={45}
                  color="orange"
                  className="mr-4"
                />
                Delivery in 30 minutes
              </li>
              <li className="flex items-center">
                <FaHamburger size={40} className="mr-4" color="orange" /> Free
                shipping from 200SEK
              </li>
              <li className="flex items-center">
                <FaDoorOpen size={40} className="mr-4" color="orange" />{" "}
                Delivery on your Doorstep
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 col-span-1 relative">
            <Image
              src="/delivery.svg"
              layout="responsive" // Ensure the image is responsive
              width={800} // Adjust width and height as per your image dimensions
              height={600}
              objectFit="contain" // Make sure the image fits without distortion
              alt="About Us Image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="select-none"
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Delivery;

// <div className="flex flex-wrap mx-4 lg:justify-between">
// {/* Left side for the image and background */}

// <div className="relative md:col-span-1 col-span-1 flex flex-col justify-center items-center gap-6">
//   {/* Text Container */}
//   <div className="text-center mt-4">
//     <div className="text-lg font-semibold">
//       DO YOU HAVE ANY DINNER PLAN TODAY?
//       <span className="text-orange-500"> Book your table now</span>
//     </div>
//     <h1 className="text-lg font-bold">
//       <span className="text-orange-500"> Quick order</span>
//       +0123 456 789
//     </h1>
//   </div>
//   {/* Image Container */}
//   <div className="w-full h-80 relative">
//     <Image
//       src="/delivery.svg"
//       layout="fill" // Ensure the image fills its container
//       objectFit="contain" // Make sure the image fits without distortion
//       alt="About Us Image"
//       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       className="select-none"
//     />
//   </div>
// </div>

// <div className="w-full px-auto lg:w-1/2 xl:w-5/12 text-black">
//   <div className="text-center mt-4">
//     <div className="text-lg font-semibold">
//       Your Favorite Burger On the Way
//       <span className="text-orange-500"> Book your table now</span>
//     </div>
//     <h1 className="text-lg font-bold">
//       <span className="text-orange-500"> Quick order</span>
//       +0123 456 789
//     </h1>
//   </div>
// </div>
// </div>
