import React from "react";
import PopularDestinations from "./HotelPage/PopularDestinations";
import WhyHotel from "./HotelPage/WhyHotel";
import SearchPanel from "./HotelPage/SearchPanel";
import HotelOffers from "./HotelPage/HotelOffers";

function Hotels() {
  return (
    <div className="mt-16">
      <SearchPanel />

      <WhyHotel />
      <PopularDestinations />
      <HotelOffers />
    </div>
  );
}

export default Hotels;
