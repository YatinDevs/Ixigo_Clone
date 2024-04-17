import React from "react";
import { HOTEL_OFFERS_CAROUSEL } from "../hotel";
import CarouselWhy from "../components/Carouselwhy";
function WhyHotel() {
  return (
    <div>
      <CarouselWhy data={HOTEL_OFFERS_CAROUSEL} />
    </div>
  );
}

export default WhyHotel;
