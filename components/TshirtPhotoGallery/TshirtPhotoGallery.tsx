"use client";
import { Image as ImageType } from "@/models/tshirt";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { FcCancel } from "react-icons/fc";

const TshirtPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
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

  const maximumVisible = 2;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisible - 1);
  const remainingPhotos = totalPhotos - maximumVisible;

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 relative gap-5 px-3">
        <div className="h-[540px] relative rounded-2xl overflow-hidden">
          <div className="hidden md:flex justify-center items-center w-full h-full">
            <Image
              src={photos[0].url}
              alt={`Tshirt Photos ${currentPhotoIndex + 1}`}
              className="cursor-pointer"
              width={150}
              height={150}
              onClick={() => openModal(0)}
            />
          </div>
          <div className="md:hidden flex justify-center items-center w-full h-full">
            <Image
              src={photos[currentPhotoIndex].url}
              alt={`Tshirt Photos ${currentPhotoIndex + 1}`}
              width={150}
              height={150}
              onClick={() => openModal(0)}
            />
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <div className="flex space-x-2">
            <ArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <ArrowRight className="cursor-pointer" onClick={handleNext} />
          </div>
          <span>
            {currentPhotoIndex + 1} / {photos.length}
          </span>
        </div>
        <div className="hidden md:grid grid-cols-2 h-full gap-5">
          {displayPhotos.map((photo, index) => (
            <div key={index} className="cursor-pointer h-64">
              <Image
                width={150}
                height={150}
                src={photo.url}
                alt={`Tshirt Photo ${index + 2}`}
              />
            </div>
          ))}
          {remainingPhotos > 0 && (
            <div
              className="cursor-pointer relative h-64 rounded-2xl overflow-hidden"
              onClick={() => openModal(maximumVisible)}
            >
              <Image
                src={photos[maximumVisible - 1].url}
                alt={`Tshirt Photo ${maximumVisible}`}
                width={150}
                height={150}
              />
              <div>+ {remainingPhotos}</div>
            </div>
          )}
        </div>
        {showModal && (
          <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="h-3/4 w-full md:w-2/3 relative">
              <Image
                src={photos[currentPhotoIndex].url}
                alt={`Room Photo ${currentPhotoIndex + 1}`}
                width={150}
                height={150}
                priority
              />
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-2 items-center">
                  <ArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <ArrowRight className="cursor-pointer" onClick={handleNext} />
                </div>
                <span>
                  {currentPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <Button variant="destructive" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtPhotoGallery;
