import Image from "next/image";
import Link from "next/link";

const galleryItems = ["/p01.png", "/p04.png", "/p03.png", "/p02.png"];

const Gallery = () => {
  return (
    <div className="mx-auto container py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-slate-200 rounded-sm cursor-pointer hover:bg-white transition"
          >
            <Link href={`/tshirts`}>
              <Image
                alt={`gallery-${index}`}
                className="h-full w-full object-cover rounded-sm"
                src={item}
                width={800}
                height={800}
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
