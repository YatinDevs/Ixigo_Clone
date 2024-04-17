import React from "react";
import { POPULAR_DESTINATIONS } from "../hotel";
import Carousel from "../components/CarouselOffer";
import CarouselOffer from "../components/CarouselOffer";
function PopularDestinations() {
  return (
    <div className="mb-10">
      <CarouselOffer data={POPULAR_DESTINATIONS} />
    </div>
  );
}

export default PopularDestinations;
