import React from "react";
import CarouselWhy from "../components/Carouselwhy";
import { HOTEL_OFFERS_CAROUSEL } from "../hotel";
function WhyHotel() {
  return (
    <div>
      {" "}
      <CarouselWhy data={HOTEL_OFFERS_CAROUSEL} />
    </div>
  );
}

export default WhyHotel;
