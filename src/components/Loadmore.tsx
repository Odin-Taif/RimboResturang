"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const LoadMore = ({
  initialProducts,
  categoryId,
  searchParams,
}: {
  initialProducts: any[];
  categoryId: string;
  searchParams?: any;
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialProducts.length > 0);

  const loadMoreProducts = async () => {
    setLoading(true);

    // Prepare the URL search parameters for the next page
    const params = new URLSearchParams(searchParams || {});
    params.set("page", page.toString());

    // Fetch the next set of products
    const response = await fetch(
      `/api/products?categoryId=${categoryId}&${params.toString()}`
    );

    if (response.ok) {
      const data = await response.json();
      setProducts((prev) => [...prev, ...data.items]);
      setHasMore(data.items.length > 0); // Check if there are more items to load
      setPage((prevPage) => prevPage + 1); // Increment the page count
    }

    setLoading(false);
  };

  return (
    <>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            {/* Render each product */}
            {/* <div className="relative w-full h-60">
              <img
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name}
                className="absolute object-cover rounded-md z-10 transition-opacity easy duration-500 w-full h-full"
              />
            </div> */}
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* {hasMore && (
        <div className="mt-12 flex justify-center w-full">
          <button
            className="rounded-md bg-orange-500 text-white p-2 text-sm w-32 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
            onClick={loadMoreProducts}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )} */}
    </>
  );
};

export default LoadMore;
