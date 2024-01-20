"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { Image as ImageType } from "@/models/tshirt";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const TshirtPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currenPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <div className="container mx-auto pt-5">
      <div className="grid md:grid-cols-2  gap-5 px-3">
        <div className="h-[540px]  rounded-2xl overflow-hidden">
          <div className="hidden md:flex justify-center items-center w-full h-full ">
            <Image
              src={photos[0].url}
              alt={`Room Photo ${currenPhotoIndex + 1}`}
              className="h-full w-full object-cover  cursor-pointer"
              width={500}
              height={500}
              onClick={openModal.bind(this, 0)}
              priority
            />
          </div>
          <div className="md:hidden flex justify-center items-center w-full h-full">
            <Image
              src={photos[currenPhotoIndex].url}
              alt={`Room Photo ${currenPhotoIndex + 1}`}
              className="img"
              width={500}
              height={500}
              onClick={openModal.bind(this, 0)}
              priority
            />
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <div className="flex space-x-2">
            <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <FaArrowRight className="cursor-pointer" onClick={handleNext} />
          </div>
          <span>
            {currenPhotoIndex + 1} / {photos.length}
          </span>
        </div>

        <div className="hidden md:grid grid-cols-2 h-full gap-5">
          {displayPhotos.map((photo, index) => (
            <div
              key={index}
              className="cursor-pointer h-64 rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image
                width={500}
                height={500}
                src={photo.url}
                alt={`Room Photo ${index + 2}`}
                className="img "
                priority
              />
            </div>
          ))}
          {remainingPhotosCount > 0 && (
            <div
              className="cursor-pointer  h-64 rounded-2xl overflow-hidden"
              onClick={openModal.bind(this, maximumVisiblePhotos)}
            >
              <Image
                width={500}
                height={500}
                src={photos[maximumVisiblePhotos - 1].url}
                alt={`Room Photo ${maximumVisiblePhotos}`}
                className="img"
                priority
              />
              <div className="absolute cursor-pointer text-white inset-0 flex justify-center bg-[rgba(0,0,0,0.5)] items-center text-2xl">
                + {remainingPhotosCount}
              </div>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
            <div className="h-[75vh] w-[320px] md:w-[700px] ">
              <Image
                src={photos[currenPhotoIndex].url}
                alt={`Room Photo ${currenPhotoIndex + 1}`}
                width={500}
                height={500}
                className="object-contain w-full h-full"
                priority
              />
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-2 items-center text-white">
                  <FaArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <FaArrowRight
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
                <span className="text-white text-sm">
                  {currenPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <button
                className="absolute top-2 right-2 text-white text-lg"
                onClick={closeModal}
              >
                <MdCancel className="font-medium text-2xl text-tertiary-dark" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtPhotoGallery;
