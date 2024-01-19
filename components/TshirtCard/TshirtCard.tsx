import { FC } from "react";
import { Tshirt } from "@/models/tshirt";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  tshirt: Tshirt;
};

const TshirtCard: FC<Props> = (props) => {
  const {
    tshirt: { coverImage, name, price, size, description, slug, isBooked },
  } = props;

  return (
    <div className="rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black">
      <div className="h-60 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={900}
          height={900}
          className="img"
          priority
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between text-xl font-semibold">
          <p className="text-gray-800">{name}</p>
          <p className="text-black">${price}</p>
        </div>
        <p className="text-xs text-gray-500">Size: {size}</p>
        <p className="mt-2 text-sm text-gray-700">
          {description.slice(1, 60)}...
        </p>
        <Link href={`/tshirts/${slug.current}`}>
          <Button
            className={`mt-4 ${
              isBooked ? " cursor-not-allowed" : " md:w-full"
            }`}
            disabled={isBooked}
          >
            {isBooked ? "Booked" : "Book Now"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TshirtCard;
