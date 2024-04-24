import React from "react";
import BusCard from "./BusCard";
import { Skeleton } from "antd";

function BusListing({ busListing, isLoading, departureDate }) {
  return (
    <div id="busListContainer" className=" md:m-2 flex flex-col gap-4">
      {!isLoading ? (
        busListing?.length !== 0 ? (
          busListing?.map((details) => (
            <BusCard
              {...details}
              key={details._id}
              departureDate={departureDate}
            />
          ))
        ) : (
          <p className="text-3xl font-bold my-8 text-slate-500">No Bus found</p>
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
      {busListing?.length !== 0 && (
        <span className="text-2xl font-normal text-slate-300 py-4 "></span>
      )}
    </div>
  );
}

export default BusListing;
