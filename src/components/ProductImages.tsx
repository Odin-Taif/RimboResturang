import Image from "next/image";

const ProductImages = ({ items }: { items: any }) => {
  return (
    <div className="">
      <div className="h-[400px] relative">
        <Image
          src={items.image?.url}
          alt=""
          fill
          sizes="40vw"
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductImages;
