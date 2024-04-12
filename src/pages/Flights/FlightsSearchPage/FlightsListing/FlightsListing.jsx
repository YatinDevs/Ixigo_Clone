import React from "react";
import FlightsCard from "./FlightsCard";

function FlightsListing({ flightsResult }) {
  return (
    <div>
      <div>
        <h1>Flights Listing</h1>
        {flightsResult?.map((details) => (
          <FlightsCard {...details} />
        ))}
      </div>
    </div>
  );
}

export default FlightsListing;
