import React from "react";
import FlightsCard from "./FlightsCard";
import FlightCard from "./FlightCard";

function FlightsListing({ flightsResult }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {flightsResult?.map((details) => (
          <FlightCard {...details} key={details._id} />
        ))}
      </div>
    </div>
  );
}

export default FlightsListing;
