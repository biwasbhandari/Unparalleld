"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/navigation";

import { Ordering } from "@/models/ordering";

type Props = {
  orderingDetails: Ordering[];
  setTshirtId: Dispatch<SetStateAction<string | null>>;
  toggleRatingModal: () => void;
};

const Table: FC<Props> = ({
  orderingDetails,
  setTshirtId,
  toggleRatingModal,
}) => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto max-w-[340px] rounded-lg mx-auto md:max-w-full shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Tshirt name</th>
            <th className="px-6 py-3">Unit Price</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Discount</th>
            <th className="px-6 py-3">No. Items Orderd</th>
            <th className="px-6 py-3">Items Left</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {orderingDetails.map((ordering) => (
            <tr
              key={ordering._id}
              className="bg-white border-b hover:bg-gray-50"
            >
              <th
                onClick={() =>
                  router.push(`/rooms/${ordering.tShirt.slug.current}`)
                }
                className="px-6 underline text-blue-600 cursor-pointer py-4 font-medium whitespace-nowrap"
              >
                {ordering.tShirt.name}
              </th>
              <td className="px-6 py-4">{ordering.tShirt.price}</td>
              <td className="px-6 py-4">{ordering.totalPrice}</td>
              <td className="px-6 py-4">{ordering.discount}</td>
              <td className="px-6 py-4">{ordering.numberOfItems}</td>
              <td className="px-6 py-4">0</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => {
                    setTshirtId(ordering.tShirt._id);
                    toggleRatingModal();
                  }}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Rate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
