import React from "react";
import FlightsDiscount from "./FlightsDiscount/FlightsDiscount";
import HeroBanner from "./HeroBanner/HeroBanner";
import FlightsOffers from "./FlightsOffers/FlightsOffers";
import WhyIxigo from "./WhyIxigo/WhyIxigo";
import SearchPanel from "./SearchPanel/SearchPanel";
import Advertisement from "./Advertisement/Advertisement";

function Flights() {
  return (
    <div className="mt-32 md:mt-0">
      <HeroBanner />
      {/* <SearchPanel /> */}
      {/* <Advertisement /> */}
      <FlightsOffers />
      <WhyIxigo />
    </div>
  );
}

export default Flights;
