"use client";

import { getTshirt } from "@/lib/apis";
import useSWR from "swr";
import LoadinSpinner from "../../loading";
import TshirtPhotoGallery from "@/components/TshirtPhotoGallery/TshirtPhotoGallery";
import axios from "axios";
import BookTshirtCta from "@/components/BookTshirtCta/BookTshirtCta";
import { useState } from "react";
import toast from "react-hot-toast";
import { getStripe } from "@/lib/stripe";
import TshirtReview from "@/components/TshirtReview/TshirtReview";

const TshirtDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [male, setMale] = useState(1);
  const [female, setFemale] = useState(0);

  const fetchTshirt = async () => getTshirt(slug);

  const { data: tshirt, error, isLoading } = useSWR("/api/tshirt", fetchTshirt);

  if (error) throw new Error("Cannot fetch data");
  if (typeof tshirt === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (!tshirt) return <LoadinSpinner />;

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const handleBookNowClick = async () => {
    if (!checkinDate || !checkoutDate)
      return toast.error("please provide ordered date and receiving date");

    if (checkinDate > checkoutDate)
      return toast.error("Please choose a valid date");

    const numberOfItems = calcNumberOfItems();

    const tShirtSlug = tshirt.slug.current;

    const stripe = await getStripe();

    try {
      const { data: stripeSession } = await axios.post("/api/stripe", {
        checkinDate,
        checkoutDate,
        male,
        female,
        numberOfItems,
        tShirtSlug,
      });

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: stripeSession.id,
        });

        if (result.error) {
          toast.error("Payment Failed");
        }
      }
    } catch (error) {
      console.log("Error: ", error);
      toast.error("An error occured");
    }
  };

  const calcNumberOfItems = () => {
    male + female;
  };

  return (
    <div className="bg-gray-100">
      <TshirtPhotoGallery photos={tshirt.images} />

      <div className="container mx-auto py-20 flex">
        <div className="md:grid md:grid-cols-12 gap-10 px-3">
          <div className="md:col-span-8 md:w-full">
            <div>
              <h2 className="font-bold text-left text-lg md:text-2xl">
                {tshirt.name}
              </h2>

              <div className="mb-11">
                <h2 className="font-bold text-3xl mb-2">Description</h2>
                <p>{tshirt.description}</p>
              </div>

              <div className="shadow dark:shadow-white rounded-lg p-6">
                <div className="items-center mb-4">
                  <p className="md:text-lg font-semibold">Customer Reviews</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TshirtReview tshirtId={tshirt._id} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto">
            <BookTshirtCta
              discount={tshirt.discount}
              price={tshirt.price}
              specialNote={tshirt.specailNote}
              checkinDate={checkinDate}
              setCheckinDate={setCheckinDate}
              checkoutDate={checkoutDate}
              setCheckoutDate={setCheckoutDate}
              calcMinCheckoutDate={calcMinCheckoutDate}
              male={male}
              female={female}
              setMale={setMale}
              setFemale={setFemale}
              isBooked={tshirt.isBooked}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TshirtDetails;
