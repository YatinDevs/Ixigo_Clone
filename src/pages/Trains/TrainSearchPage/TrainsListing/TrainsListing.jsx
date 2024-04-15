import React from "react";
import TrainCard from "./TrainCard";
import { Skeleton } from "antd";

function TrainsListing({ trainsListing, isLoading, departureDate }) {
  return (
    <div id="trainsListContainer" className=" flex flex-col gap-2">
      {!isLoading ? (
        trainsListing?.length !== 0 ? (
          trainsListing?.map((details) => (
            <TrainCard
              {...details}
              key={details._id}
              departureDate={departureDate}
            />
          ))
        ) : (
          <p className="text-3xl font-bold my-8 text-slate-500">
            No Trains found
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
      {trainsListing?.length !== 0 && (
        <span className="text-2xl font-normal text-slate-300 py-4 "></span>
      )}
    </div>
  );
}

export default TrainsListing;
