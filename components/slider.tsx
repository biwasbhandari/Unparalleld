"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DotIcon } from "lucide-react";
import Link from "next/link";

function Slider() {
  const slides = [
    {
      url: "https://source.unsplash.com/2672x2672/?male,model",
    },
    {
      url: "https://source.unsplash.com/2672x2672/?male,model",
    },
    {
      url: "https://source.unsplash.com/2672x2672/?male,model",
    },
    {
      url: "https://source.unsplash.com/2672x2672/?male,model",
    },
    {
      url: "https://source.unsplash.com/2671x2671/?male,model",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto  relative group">
      <Link
        href="/shop"
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </Link>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex  justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer top-4"
          >
            <DotIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
