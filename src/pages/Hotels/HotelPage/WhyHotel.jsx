import React from "react";
import { HOTEL_OFFERS_CAROUSEL } from "../../../constants";
import Carouselw from "../components/Carouselw";
function WhyHotel() {
  return (
    <div>
      <Carouselw data={HOTEL_OFFERS_CAROUSEL} />
    </div>
  );
}

export default WhyHotel;
