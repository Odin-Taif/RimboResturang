import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-10 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-orange-100 text-black text-sm mt-24">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          {/* <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">Rimboträffan!</div>
            </Link>
            <p></p>
            <span className="font-semibold"></span>
            <span className="font-semibold"></span>
            <div className="flex gap-6">
              <Image src="/facebook.png" alt="" width={16} height={16} />
              <Image src="/instagram.png" alt="" width={16} height={16} />
              <Image src="/youtube.png" alt="" width={16} height={16} />
              <Image src="/pinterest.png" alt="" width={16} height={16} />
              <Image src="/x.png" alt="" width={16} height={16} />
            </div>
          </div> */}
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/3">
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">COMPANY</h1>
              <div className="flex flex-col gap-6">
                <Link href="">About Us</Link>
                <Link href="">Careers</Link>
                <Link href="">Affiliates</Link>
                <Link href="">Blog</Link>
                <Link href="">Contact Us</Link>
              </div>
            </div>
            {/* <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div> */}
            <div className="flex flex-col justify-between">
              <h1 className="font-medium text-lg">HELP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Customer Service</Link>
                <Link href="">My Account</Link>
                <Link href="">Find a Store</Link>
                <Link href="">Legal & Privacy</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-2/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p>
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4"
              />
              <button className="w-1/4 bg-orange-400 text-white">JOIN</button>
            </div>
            <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image src="/discover.png" alt="" width={40} height={20} />
              <Image src="/skrill.png" alt="" width={40} height={20} />
              <Image src="/paypal.png" alt="" width={40} height={20} />
              <Image src="/mastercard.png" alt="" width={40} height={20} />
              <Image src="/visa.png" alt="" width={40} height={20} />
            </div>
          </div>
        </div>
        {/* BOTTOM */}
      </div>
      <hr className="border-gray-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm font-semibold py-1 text-gray-400">
            {/* Displaying the current year and the copyright text */}
            Copyright © {new Date().getFullYear()} | Rimboträffan
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
