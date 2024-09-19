// pages/index.tsx
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full h-screen bg-gray-50">
      {/* Vector with Background and Transformation */}
      <div
        className="absolute"
        style={{
          left: "65.1%",
          right: "-15.23%",
          top: "-6.67%",
          bottom: "16.49%",
          transform: "matrix(0.8, 0.6, -0.6, 0.8, 0, 0)", // Apply transformation here
        }}
      >
        <Image
          src="/homepageBg.svg"
          alt="Paint Vector"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Second Group with Burger Image */}
      <div
        className="absolute"
        style={{
          left: "45.94%",
          right: "3.39%",
          top: "17.31%",
          bottom: "18.13%",
        }}
      >
        <Image
          src="/homepage.svg"
          alt="Burger Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
