"use client"; // Directive for next.js to ensure this code runs on the client-side.

import React, { FC } from "react";
import Image from "next/image"; // Next.js component for image optimization.
import Container from "./reusable/Container";
import ContactForm from "./reusable/ContactForm";

const Contact: FC = () => {
  return (
    <>
      <Container>
        <section className="grid grid-cols-4 md:grid-cols-4 mx-auto h-fit gap-2">
          {/* Left side for the image and background */}
          <div className="relative md:col-span-2 col-span-4 h-auto flex flex-col justify-center items-center gap-6">
            {/* Text Container */}
            <div className="flex flex-col space-y-4 text-center">
              {/* Center the text */}
              <div className="text-lg font-semibold">
                DO YOU HAVE ANY DINNER PLAN TODAY?
              </div>
              <span className="text-orange-500"> Book your table now</span>
              <h1 className="text-lg font-bold">
                <span className="text-orange-500">Quick order</span> +0123 456
                789
              </h1>
            </div>

            {/* Image Container */}
            <div className="w-full h-80 relative flex justify-center items-center">
              <Image
                src="/reserv.svg"
                fill // Ensure the image fills its container
                alt="Reservation Image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="select-none object-contain"
              />
            </div>
          </div>

          {/* Right Side for Contact Form */}
          <div className="flex flex-col col-span-4 md:col-span-2 items-center justify-center space-y-8 bg-black text-black">
            <ContactForm />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Contact;
