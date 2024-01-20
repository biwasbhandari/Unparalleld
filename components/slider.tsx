"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
function Slider() {
  const slides = [
    { url: "/p01.png" },
    { url: "/p02.png" },
    { url: "/p03.png" },
    { url: "/p04.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef: any = useRef(null);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  const goToSlide = (slideIndex: any) => setCurrentIndex(slideIndex);

  const autoSlide = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(nextSlide, 4000);
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
    <div className="flex flex-col items-center max-w-full mx-auto h-[70vh] md:h-[90vh] bg-gray-100 hover:bg-gray-200 transition-colors">
      <div className="flex-1 overflow-hidden">
        <Link href={`/tshirts`}>
          <Image
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="img "
            height={900}
            width={900}
            priority
          />
        </Link>
      </div>
    </div>
  );
}

export default Slider;
