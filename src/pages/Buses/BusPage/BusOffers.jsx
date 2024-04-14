import React from "react";
import { BUS_OFFERS } from "../../../constants";
import CarouselOffer from "../components/CarouselOffer";
function BusOffers() {
  return (
    <div className="bg-white  pt-[30px] pb-[20px]  ">
      <div className="bg-white py-[10px]">
        <CarouselOffer data={BUS_OFFERS} />
      </div>
    </div>
  );
}

export default BusOffers;
