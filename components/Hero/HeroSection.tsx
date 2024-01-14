import React from "react";
import { Button } from "../ui/button";
import { ShirtIcon, TruckIcon, ArrowBigDownDash } from "lucide-react";
import CountUp from "../CountUp/CountUp";

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-[#222] z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Custom Printed Clothes
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Your Style, Your Design
          </p>
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <ShirtIcon className="text-white w-8 h-8" />{" "}
              {/* Replace with your t-shirt icon */}
            </div>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              <CountUp duration={4000} endValue={50} />+ customizable t-shirts!
            </p>
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <TruckIcon className="text-white w-8 h-8" />{" "}
              {/* Replace with your delivery icon */}
            </div>
            <p className="text-base md:text-lg lg:text-xl mb-2">
              Free delivery within the valley.
            </p>
          </div>

          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
