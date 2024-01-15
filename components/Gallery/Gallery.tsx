import Image from "next/image";

const Gallery = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-14">
      <div className="flex flex-wrap justify-center -mx-2">
        {[1, 2, 3, 4, 1].map((index) => (
          <div
            key={index}
            className="w-full md:w-1/2 p-2 md:p-4 h-full md:h-auto"
          >
            <Image
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
              src={`/p0${index}.jpg`}
              height={500}
              width={500}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
