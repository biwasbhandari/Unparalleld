import React from "react";
import { Button } from "../ui/button";
import { ShirtIcon, TruckIcon } from "lucide-react";
import CountUp from "../CountUp/CountUp";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center  h-screen flex items-center">
      <div className="text-center text-[#222] mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Custom Printed Clothes
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Your Style, Your Design
        </p>
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gray-800 p-4 rounded-full mb-4">
            <ShirtIcon className="text-white w-8 h-8" />
          </div>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            <CountUp duration={4000} endValue={50} />+ customizable t-shirts!
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gray-800 p-4 rounded-full mb-4">
            <TruckIcon className="text-white w-8 h-8" />
          </div>
          <p className="text-base md:text-lg lg:text-xl mb-2">
            Free delivery within the valley.
          </p>
        </div>

        <Link href={"/tshirts"}>
          <Button>Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
