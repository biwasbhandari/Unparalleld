"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DotIcon } from "lucide-react";

function Slider() {
  const slides = [
    {
      url: "/p01.jpg",
    },
    {
      url: "/p02.jpg",
    },
    {
      url: "/p03.jpg",
    },
    {
      url: "/p04.jpg",
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
  const intervalRef = useRef<any>(null);

  const autoSlide = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    autoSlide();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [currentIndex]);

  return (
    <div className="max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
      ></div>

      <div className="hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Slider;
