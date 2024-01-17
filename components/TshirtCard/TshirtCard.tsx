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
    <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full md:w-72 mx-auto mb-10 md:mx-0">
      <div className="h-64 md:h-48 lg:h-64 overflow-hidden">
        <Image
          src={coverImage.url}
          alt={name}
          width={900}
          height={900}
          className="img "
          priority
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-between text-xl font-semibold mb-2">
          <p className="text-gray-800">{name}</p>
          <p className="text-blue-600">Rs {price}</p>
        </div>
        <p className="text-xs text-gray-500">Size: {size}</p>
        <p className="mt-2 text-sm text-gray-700">
          {description.slice(1, 60)}...
        </p>
        <Link href={`/tshirts/${slug.current}`}>
          <Button
            className={`mt-4 ${
              isBooked ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
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
