// // import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { wixClientServer } from "@/lib/wixClientServer";
// import Link from "next/link";
// import Image from "next/image";
// const Filter = async () => {
//   // const pathname = usePathname();
//   // const searchParams = useSearchParams();
//   // const { replace } = useRouter();
//   const wixClient = await wixClientServer();
//   const cats = await wixClient.collections.queryCollections().find();
//   // const handleFilterChange = (
//   //   e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//   // ) => {
//   //   const { name, value } = e.target;
//   //   const params = new URLSearchParams(searchParams);
//   //   params.set(name, value);
//   //   replace(`${pathname}?${params.toString()}`);
//   // };

//   // console.log(cats.items.map((item) => item.media?.mainMedia?.image?.url));

//   return (
//     <div className="mx-auto mt-10 flex justify-center items-center">
//       <div className="flex gap-6 flex-wrap mx-auto justify-center items-center">
//         {/* TODO: Filter Categories */}
//         {cats.items.map((item) => (
//           <Link href={`/list?cat=${item.slug}`} key={item._id} className="m-2">
//             <div className="flex flex-col items-center w-20">
//               <div className="w-16 h-16 relative rounded-full overflow-hidden">
//                 <Image
//                   src={item.media?.mainMedia?.image?.url || ""}
//                   layout="fill" // Ensure the image fills its container
//                   objectFit="cover" // Ensure the image covers the container without distortion
//                   alt={item.name || ""}
//                   className="rounded-full"
//                 />
//               </div>
//               <p className="text-center text-sm mt-2  text-white hover:text-orange-400">
//                 {item.name}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;

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
      <div className="flex gap-6 flex-wrap mx-auto justify-center items-center">
        {cats.items.map((item) => {
          // Check if the current category matches the category in the URL
          const isActive = currentCategory === item.slug;

          return (
            <Link
              href={`/list?cat=${item.slug}`}
              key={item._id}
              className={`m-2 ${isActive ? " " : ""}`} // Apply active class if current category is active
            >
              <div className="flex flex-col items-center w-20">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={item.media?.mainMedia?.image?.url || ""}
                    layout="fill"
                    objectFit="cover"
                    alt={item.name || ""}
                    className="rounded-full"
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
