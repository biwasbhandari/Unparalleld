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
    <section className="container mx-auto flex flex-col md:flex-row items-center -z-30 gap-12 px-4 py-10">
      <div className="md:grid grid-cols-1 gap-8">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image
            src={featuredTshirt.coverImage.url}
            alt={featuredTshirt.name}
            width={300}
            height={300}
            className="img scale-animation -z-50 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 h-50 ">
          {featuredTshirt.images.slice(1, 3).map((image) => (
            <div key={image._key} className="rounded-2xl overflow-hidden ">
              <Image
                src={image.url}
                alt={image._key}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 md:py-10 text-left">
        <h3 className="text-2xl font-bold mb-6 md:mb-8">Featured Tshirt</h3>
        <p className="text-gray-600 mb-6">{featuredTshirt.description}</p>

        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <PriceInfo
            label="Starting From"
            value={`Nrs ${featuredTshirt.price}`}
          />
          <PriceInfo
            label="Discount"
            value={`Nrs ${featuredTshirt.discount}`}
          />
          <Button>
            <Link href={`/tshirts/${featuredTshirt.slug.current}`}>
              More Details
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const PriceInfo: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex gap-3 flex-col items-center justify-center mr-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-bold text-lg">{value}</p>
  </div>
);

export default FeaturedTshirt;
