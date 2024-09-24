// "use client";

import CategoryList from "@/components/CategoryList";
import Delivery from "@/components/Delievery";
import PopularList from "@/components/PopularList";
// import ProductList from "@/components/ProductList";
import Reservation from "@/components/Reservation";
import SocialMediaBar from "@/components/reusable/SocialMediaBar";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
// import { WixClientContext } from "@/context/wixContext";
// import { useWixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const HomePage = async () => {
  // TEST (FETCHING ON THE CLIENT COMPONENT)

  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res)
  //   };

  //   getProducts();
  // }, [wixClient]);

  // TEST (FETCHING ON THE SERVER COMPONENT)

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <>
      <Slider />
      <PopularList />
      <Suspense fallback={<Skeleton />}>
        <CategoryList />
      </Suspense>
      <Delivery />
      <SocialMediaBar />
      <Reservation />
    </>
  );
};

export default HomePage;
