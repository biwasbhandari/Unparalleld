import { FC } from "react";
import { Tshirt } from "@/models/tshirt";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  featuredTshirt: Tshirt;
};

// const ImageComponent: FC<{ src: string; alt: string }> = ({ src, alt }) => (
//   <div className="rounded-2xl overflow-hidden border-r">
//     <Image
//       src={src}
//       alt={alt}
//       width={500}
//       height={500}
//       priority
//       className="img"
//     />
//   </div>
// );

const FeaturedTshirt: FC<Props> = ({ featuredTshirt }) => {
  const { coverImage, name, description, slug } = featuredTshirt;

  return (
    <section className="container mx-auto flex flex-col  items-center md:flex-row gap-4 px-4 py-10 min-h-screen">
      <div className="md:w-1/2 md:p-8  rounded-sm cursor-pointer hover:bg-gray-100 transition-colors ">
        <div className="flex  border-r border-b ">
          <Link href={`/tshirts/${slug.current}`}>
            <Image
              src={coverImage.url}
              alt={name}
              width={600}
              height={600}
              className="h-full w-full object-cover "
            />
          </Link>
        </div>

        {/* <div className="flex gap-4 mt-3">
          {images.map((image) => (
            <ImageComponent key={image._key} src={image.url} alt={image._key} />
          ))}
        </div> */}
      </div>

      <div className="md:w-1/2 md:p-8 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-gray-100 transition-all">
        <h3 className="text-3xl font-bold mb-4">Featured Tshirt</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button>
          <Link href={`/tshirts/${slug.current}`}>More Details</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedTshirt;
