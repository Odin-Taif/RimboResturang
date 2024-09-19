import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./reusable";
import Container from "./reusable/Container";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();
  const slide = {
    id: 1,
    title: "Rimbo Resturang!",
    description: "People disapoints, pizza is eternal.",
    img: "/hands-taking.png",
    url: "/",
    bg: "bg-gradient-to-r from-black to-black",
  };

  return (
    <Container>
      <section className="grid grid-cols-4 md:grid-cols-4 mx-auto h-fit gap-6">
        {/* Left Section: Image and Text */}
        <div className="relative md:col-span-2 col-span-4 h-auto flex flex-col justify-center items-center gap-6">
          {/* Text Container */}
          <div className="text-center  mt-4">
            <div className="text-4xl font-semibold">
              <span className="text-orange-500">Pizza</span> Of The Month
            </div>
            <h1 className="text-5xl font-bold">
              The Big <span className="text-orange-500">BIRD</span>
            </h1>
          </div>
          {/* Image Container */}
          <div className="w-full h-80 relative">
            <Image
              src="/hands-taking.png"
              layout="fill" // Ensure the image fills its container
              objectFit="contain" // Make sure the image fits without distortion
              alt="About Us Image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md"
            />
          </div>
        </div>
        {/* Right Section: Menu and Buttons */}
        <div className=" flex flex-col md:col-span-2 col-span-4 items-center justify-center space-y-8">
          {/* Menu List */}
          <ol className="text-xl text-white space-y-4 pl-2 border-l-4 border-orange-400">
            <li>Meat Pizza</li>
            <li>Margarita Pizza</li>
            <li>Hawaiian Pizza</li>
            <li>Pepperoni Pizza</li>
            <li>Veggie Pizza</li>
            <li>Cheese Pizza</li>
          </ol>

          {/* Buttons */}
          <div className="flex space-x-4 pt-6">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
              Order Online Now
            </button>
            <button className="px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg">
              See Our Menu
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CategoryList;
