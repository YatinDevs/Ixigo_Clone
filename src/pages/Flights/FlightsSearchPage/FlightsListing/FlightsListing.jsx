import React from "react";
import FlightCard from "./FlightCard";
import { Skeleton } from "antd";

function FlightsListing({ flightsListingResult, isLoading }) {
  return (
    <div id="flightsListContainer" className=" flex flex-col gap-2">
      {!isLoading ? (
        flightsListingResult.length !== 0 ? (
          flightsListingResult?.map((details) => (
            <FlightCard {...details} key={details._id} />
          ))
        ) : (
          <p className="text-3xl font-bold my-8 text-slate-500">
            No flights found
          </p>
        )
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Skeleton
            key={item}
            active
            className="border bg-white shadow-lg p-4 rounded-md min-h-40"
          />
        ))
      )}
      {flightsListingResult?.length !== 0 && (
        <span className="text-2xl font-normal text-slate-300 py-4 "></span>
      )}
    </div>
  );
}

export default FlightsListing;
