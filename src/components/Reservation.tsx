"use client"; // Directive for next.js to ensure this code runs on the client-side.

import React, { FC } from "react";
// import axios from "axios";
import Image from "next/image"; // Next.js component for image optimization.
import { useState } from "react";
import { toast } from "react-toastify"; // For showing toast notifications.
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"; // Hook for handling form validation and submission.
import { BsFillSendCheckFill } from "react-icons/bs"; // React icons, though it seems to be imported but not used.
// import {
//   isValidEmail,
//   isValidName,
//   isValidPhoneNumber,
// } from "@/utils/AuthValidation"; // Utility function for email validation.
import { MoonLoader } from "react-spinners"; // Spinner component to indicate loading state.
import {} from "./reusable/index";
import Container from "./reusable/Container";
import SocialMediaBar from "./reusable/SocialMediaBar";
import { Input } from "./reusable/Input";

// import ContactTextArea from "../components/inputs/ContactTextArea";
// import Input from "../components/inputs/Input";
// import SocialMediaBar from "../components/reusableComponents/SocialMediaBar";
const Contact: FC = () => {
  const [isLoading, setIsLoading] = useState(false); // State to manage the loading status.
  // Function to validate email using a utility function.
  // const handleEmailValidation = (email: string) => {
  //   const isValid = isValidEmail(email);
  //   return isValid;
  // };
  // const handleNameValidation = (name: string) => isValidName(name);
  // const handlePhoneNumberValidation = (telephone: string) =>
  //   isValidPhoneNumber(telephone);

  // Using 'react-hook-form' for form handling.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  // Function to handle form submission.
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // axios
    //   .post("/api/contact-us", data)
    //   .then(() => {
    //     toast.success("Message successfully sent!");
    //     reset({
    //       email: "",
    //       message: "",
    //     });
    //   })
    //   .catch((err: any) => toast.error("Something Went Wrong")) // Better to handle the error more gracefully.
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <>
      <Container>
        <section className=" py-2 overflow-hidden relative z-1">
          <div className="flex flex-wrap mx-4 lg:justify-between">
            {/* Left side for the image and background */}

            <div className="relative md:col-span-2 col-span-4 flex flex-col justify-center items-center">
              {/* Text Container */}
              <div className="flex flex-col space-y-4">
                <div className="text-lg font-semibold">
                  DO YOU HAVE ANY DINNER PLAN TODAY?
                </div>
                <span className="text-orange-500"> Book your table now</span>
                <h1 className="text-lg font-bold">
                  <span className="text-orange-500"> Quick order</span>
                  +0123 456 789
                </h1>
              </div>
              {/* Image Container */}
              <div className="w-full h-80 relative ">
                <Image
                  src="/reserv.svg"
                  layout="fill" // Ensure the image fills its container
                  objectFit="contain" // Make sure the image fits without distortion
                  alt="About Us Image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="select-none"
                />
              </div>
            </div>

            <div className="w-full px-auto lg:w-1/2 xl:w-5/12 bg-orange-100 text-black">
              <div className="relative p-2 rounded-lg shadow-lg sm:p-12">
                <Input
                  id="name"
                  label="Full Name"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  // validate={handleNameValidation}
                  required
                />
                {errors.firstName?.message && (
                  <small className="text-rose-500 px-3 ">
                    {errors.firstName.message.toString()}
                  </small>
                )}
                <Input
                  id="email"
                  label="Email Address"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  // validate={handleEmailValidation}
                />
                {/* error email handling */}
                {errors.email?.message && (
                  <small className="text-rose-500 px-3 ">
                    {errors.email.message.toString()}
                  </small>
                )}
                <Input
                  id="telephone"
                  label="Phone number"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  // validate={handlePhoneNumberValidation}
                />
                {errors.phoneNumber?.message && (
                  <small className="text-rose-500 px-3">
                    {errors.phoneNumber.message.toString()}
                  </small>
                )}

                <div className="mb-3">
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className={
                      "w-full px-4 py-3 border-2 text-black bg-orange-200  rounded-md outline-none  h-36 focus:ring-4"
                    }
                    {...register("message", {
                      required: "Enter your Message",
                    })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.message.toString()}</small>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className="inline-flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed rounded hover:opacity-80 transition bg-orange-400 w-full border-amber-300 text-white text-sm py-2 font-light border-[1px] relative"
                  >
                    <span className="flex items-center gap-2">
                      <BsFillSendCheckFill />
                      <span>Send</span>
                    </span>
                    {isLoading && (
                      <span className="absolute right-4">
                        <MoonLoader
                          color="#000000"
                          size={15}
                          loading={isLoading}
                        />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Contact;
