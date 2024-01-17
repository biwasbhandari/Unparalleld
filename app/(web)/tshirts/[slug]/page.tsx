"use client";

import { getTshirt } from "@/lib/apis";
import useSWR from "swr";
import LoadinSpinner from "../../loading";
import TshirtPhotoGallery from "@/components/TshirtPhotoGallery/TshirtPhotoGallery";

const TshirtDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;
  const fetchTshirt = async () => getTshirt(slug);
  const { data: tshirt, error, isLoading } = useSWR("/api/tshirt", fetchTshirt);

  if (error) throw new Error("Cannot fetch data");
  if (typeof tshirt === "undefined" && !isLoading)
    throw new Error("cannot fetch data");
  if (!tshirt) return <LoadinSpinner />;
  console.log(tshirt);

  return (
    <div>
      <TshirtPhotoGallery photos={tshirt.images} />

      <div className="container mx-auto mt-8 p-4">
        <div className="md:grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 md:w-full">
            <div className="text-center">
              <h2 className="font-bold text-lg md:text-2xl mb-2">
                {tshirt.name}
              </h2>
              <p className="text-gray-700">{tshirt.description}</p>
            </div>

            <div className="mt-8 shadow bg-white p-4 rounded">
              <div className="flex items-center mb-4">
                <p className="text-lg font-semibold">Customer Reviews</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reviews */}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 mt-8 md:mt-0">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-2">Book this T-shirt</p>
              {/* Add your CTA button or form here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtDetails;
