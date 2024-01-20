"use client";

import useSWR from "swr";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { signOut } from "next-auth/react";
import { getUserOrderings } from "@/lib/apis";
import { User } from "@/models/user";
import LoadingSpinner from "../../loading";
import { useState } from "react";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import Table from "@/components/Table/Table";
import Chart from "@/components/Chart/Chart";
import RatingModal from "@/components/RatingModal/RatingModal";
import BackDrop from "@/components/BackDrop/BackDrop";
import toast from "react-hot-toast";

import { UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const UserDetails = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;

  const [currentNav, setCurrentNav] = useState<
    "orderings" | "amount" | "ratings"
  >("orderings");
  const [tshirtId, setTshirtId] = useState<string | null>(null);
  const [isRatingVisible, setIsRatingVisible] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [ratingText, setRatingText] = useState("");

  const toggleRatingModal = () => setIsRatingVisible((prevState) => !prevState);

  const reviewSubmitHandler = async () => {
    if (!ratingText.trim().length || !ratingValue) {
      return toast.error("Please provide a rating text and a rating");
    }

    if (!tshirtId) toast.error("Id not provided");

    setIsSubmittingReview(true);

    try {
      const { data } = await axios.post("/api/users", {
        reviewText: ratingText,
        ratingValue,
        tshirtId,
      });

      toast.success("Review Submitted");
    } catch (error) {
      toast.error("Review Failed");
    } finally {
      setRatingText("");
      setRatingValue(null);
      setTshirtId(null);
      setIsSubmittingReview(false);
      setIsRatingVisible(false);
    }
  };

  const fetchUserOrdering = async () => getUserOrderings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userOrderings,
    error,
    isLoading,
  } = useSWR("/api/userordering", fetchUserOrdering);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorGettingUserData) throw new Error("Cannot fetch data");
  if (typeof userOrderings === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  if (typeof userData === "undefined" && !loadingUserData)
    throw new Error("Cannot fetch data");

  if (loadingUserData) return <LoadingSpinner />;
  if (!userData) throw new Error("Cannot fetch data");

  return (
    <div className="min-h-screen  flex flex-row flex-wrap justify-center overflow-hidden items-center ">
      <div className="grid md:grid-cols-12 gap-10 ">
        <div className="md:col-span-8 lg:col-span-9">
          {userData.image ? (
            <div className="md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden">
              <Image
                src={userData.image}
                alt={userData.name}
                width={500}
                height={500}
                className="img scale-animation rounded-full"
                priority
              />
            </div>
          ) : (
            <UserIcon />
          )}
          <div className="flex items-center flex-col justify-center">
            <h5 className="text-2xl font-bold mr-3">Hello, {userData.name}</h5>

            <h6 className="text-xl font-bold pb-3">About</h6>
            <p className="block w-fit text-sm py-2">{userData.about ?? ""}</p>
            <p className="text-xs py-2 font-medium">
              Joined In {userData._createdAt.split("T")[0]}
            </p>
          </div>
          <div className=" flex items-center justify-center my-2">
            <Button onClick={() => signOut({ callbackUrl: "/" })}>
              <span>SIGN OUT</span>
              <FaSignOutAlt className="text-2xl cursor-pointer ml-2" />
            </Button>
          </div>

          <nav className="sticky top-0 px-2 w-fit mx-auto md:w-full md:px-5 py-3 mb-8 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mt-7">
            <ol
              className={`${
                currentNav === "orderings" ? "text-blue-600" : "text-gray-700"
              } inline-flex mr-1 md:mr-5 items-center space-x-1 md:space-x-3`}
            >
              <li
                onClick={() => setCurrentNav("orderings")}
                className="inline-flex items-center cursor-pointer"
              >
                <BsJournalBookmarkFill />
                <a className="inline-flex items-center mx-1 md:mx-3 text-xs md:text-sm font-medium">
                  Current Orderings
                </a>
              </li>
            </ol>
            <ol
              className={`${
                currentNav === "amount" ? "text-blue-600" : "text-gray-700"
              } inline-flex mr-1 md:mr-5 items-center space-x-1 md:space-x-3`}
            >
              <li
                onClick={() => setCurrentNav("amount")}
                className="inline-flex items-center cursor-pointer"
              >
                <GiMoneyStack />
                <a className="inline-flex items-center mx-1 md:mx-3 text-xs md:text-sm font-medium">
                  Amount Spent
                </a>
              </li>
            </ol>
          </nav>

          {currentNav === "orderings" && userOrderings && (
            <Table
              orderingDetails={userOrderings}
              setTshirtId={setTshirtId}
              toggleRatingModal={toggleRatingModal}
            />
          )}

          {currentNav === "amount" && userOrderings && (
            <Chart userOrderings={userOrderings} />
          )}
        </div>
      </div>

      <RatingModal
        isOpen={isRatingVisible}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        ratingText={ratingText}
        setRatingText={setRatingText}
        isSubmittingReview={isSubmittingReview}
        reviewSubmitHandler={reviewSubmitHandler}
        toggleRatingModal={toggleRatingModal}
      />
      <BackDrop isOpen={isRatingVisible} />
    </div>
  );
};

export default UserDetails;

// const UserDetails = (props: { params: { id: string } }) => {
//   const {
//     params: { id: userId },
//   } = props;
//   const fetchUserOrdering = async () => getUserOrderings(userId);
//   const fetchUserData = async () => {
//     const { data } = await axios.get<User>("/api/users");
//     return data;
//   };
//   const {
//     data: userOrderings,
//     error,
//     isLoading,
//   } = useSWR("/api/userordering", fetchUserOrdering);

//   const {
//     data: userData,
//     isLoading: loadingUserData,
//     error: errorGettingUserData,
//   } = useSWR("/api/users", fetchUserData);

//   if (error || errorGettingUserData) throw new Error("Cannot fetch data");
//   if (typeof userOrderings === "undefined" && !isLoading)
//     throw new Error("cannot fetch data");

//   if (error || errorGettingUserData) throw new Error("Cannot fetch data");
//   if (typeof userData === "undefined" && !loadingUserData)
//     throw new Error("cannot fetch data");

//   if (loadingUserData) return <LoadinSpinner />;
//   if (!userData) throw new Error("Cannot fetch data");

//   return (
//     <div className="container mx-auto px-2 md:px-4 py10">
//       <div className="grid md:grid-cols-12 gap-10">Hello, {userData.name}</div>
//       <div>
//         {userData.image? <div>

//           </div>: ''}
//       </div>
//     </div>
//   );
// };
// export default UserDetails;
