"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex flex-row w-full space-x-5  justify-center items-center">
      <button
        className="rounded-md bg-orange-400 text-black p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-100"
        disabled={!hasPrev}
        onClick={() => createPageUrl(currentPage - 1)}
      >
        {"<Previous"}
      </button>
      <button
        className="rounded-md bg-orange-200 text-black p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-100"
        disabled={!hasNext}
        onClick={() => createPageUrl(currentPage + 1)}
      >
        {"Next>"}
      </button>
    </div>
  );
};

export default Pagination;
