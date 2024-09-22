import Image from "next/image";

const ProductImages = ({ url }: { url: any }) => {
  return (
    <div className="h-[400px] w-[400px] relative">
      <Image
        src={url || "/product.png"}
        alt=""
        layout="contain"
        fill
        sizes="20vw"
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default ProductImages;
