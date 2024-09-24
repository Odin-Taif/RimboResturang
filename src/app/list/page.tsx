import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-orange-50 px-4 sm:flex justify-between h-40">
        <div className="w-2/3 flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-semibold leading-[48px] text-gray-700">
            Bara för <span className="text-red-400 text-3xl">139 SEK</span> och
            Få en stor pizza!
          </h1>
          <button className="rounded-3xl bg-orange-400 hover:bg-orange-300 text-white w-max py-1 px-5 text-sm">
            Beställa Nu!
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/pizza-ria.png"
            alt=""
            fill
            sizes=""
            className="object-contain"
          />
        </div>
      </div>
      {/* FILTER */}
      <Filter searchParams={searchParams} />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
