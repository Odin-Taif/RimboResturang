import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import Container from "./reusable/Container";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();
  // console.log(cats.items.map((item) => item.media));

  // console.log(cats);

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
              src="/burger1.png"
              layout="fill" // Ensure the image fills its container
              objectFit="contain" // Make sure the image fits without distortion
              alt="About Us Image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="select-none"
            />
          </div>
        </div>
        {/* Right Section: Menu and Buttons */}
        <div className="flex flex-col md:col-span-2 col-span-4 items-center justify-center space-y-8">
          <ul className="pl-3 border-l-2 border-orange-400">
            {cats.items.map((item) => (
              <Link
                href={`/list?cat=${item.slug}`}
                className="w-full"
                key={item._id}
              >
                <li className="text-lg m-2 font-semibold text-white hover:text-orange-400">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>

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
