import { FC } from "react";
import { Tshirt } from "@/models/tshirt";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  featuredTshirt: Tshirt;
};

const FeaturedTshirt: FC<Props> = ({ featuredTshirt }) => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-4 px-4 py-10">
      <div className="md:w-1/2 md:p-8 bg-gray-100">
        <div className="flex h-48 border">
          <Image
            src={featuredTshirt.coverImage.url}
            alt={featuredTshirt.name}
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        <div className="flex gap-4">
          {featuredTshirt.images.map((image) => (
            <div
              key={image._key}
              className="rounded-2xl overflow-hidden border"
            >
              <Image
                src={image.url}
                alt={image._key}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 md:p-8">
        <h3 className="text-3xl font-bold mb-4">Featured Tshirt</h3>
        <p className="text-gray-600 mb-6">{featuredTshirt.description}</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <PriceInfo
            label="Starting From"
            value={`Rs.${featuredTshirt.price}`}
          />
          <PriceInfo label="Discount" value={`Rs.${featuredTshirt.discount}`} />
        </div>

        <Button>
          <Link href={`/tshirts/${featuredTshirt.slug.current}`}>
            More Details
          </Link>
        </Button>
      </div>
    </section>
  );
};

const PriceInfo: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-bold text-lg">{value}</p>
  </div>
);

export default FeaturedTshirt;
