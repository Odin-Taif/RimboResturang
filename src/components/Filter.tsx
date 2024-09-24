import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import Image from "next/image";

// Dynamic server-side rendering to check for the active category in URL
const Filter = async ({ searchParams }: { searchParams: { cat?: string } }) => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  // Get the current category from query parameters
  const currentCategory = searchParams.cat || ""; // Get the 'cat' from query params, or default to an empty string

  return (
    <div className="mx-auto mt-10 flex justify-center items-center">
      <div className="flex gap-6 flex-nowrap overflow-x-auto  md:overflow-x-visible md:flex-wrap mx-auto justify-center items-center">
        {cats.items.map((item) => {
          // Check if the current category matches the category in the URL
          const isActive = currentCategory === item.slug;

          return (
            <Link
              href={`/menu?cat=${item.slug}`}
              key={item._id}
              className={`m-2 ${isActive ? "" : ""}`} // Apply active class if current category is active
            >
              <div className="flex flex-col items-center w-20">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={item.media?.mainMedia?.image?.url || ""}
                    fill // Ensure the image fills its container
                    alt={item.name || ""}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 15vw, 10vw" // Responsive image sizes
                    className="rounded-full object-cover" // Ensures the image covers the container without distortion
                  />
                </div>
                <p
                  className={`text-center text-sm mt-2 ${
                    isActive ? "text-orange-400 underline" : "text-white"
                  } hover:text-orange-400`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
