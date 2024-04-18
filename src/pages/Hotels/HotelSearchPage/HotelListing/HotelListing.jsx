import React from "react";
import { Skeleton } from "antd";
import HotelCard from "./HotelCard";

function HotelListing({ isLoading, hotelsListing, checkIn }) {
  return (
    <div
      id="hotelContainer"
      className="w-full rounded-md overflow-hidden border-b-2  mx-auto flex flex-col items-center justify-start h-[120vh] overflow-y-scroll gap-3 "
    >
      {!isLoading
        ? hotelsListing &&
          hotelsListing.map((hotelDetails, index) => (
            <HotelCard checkIn={checkIn} key={index} {...hotelDetails} />
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton
              key={item}
              active
              className="border bg-white shadow-lg p-4 rounded-md min-h-60"
            />
          ))}
    </div>
  );
}
export default HotelListing;
