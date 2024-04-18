import React, { useState, useEffect } from "react";
import { BUS_OFFERS } from "../../../constants";
import { fetchOffersDetails } from "../../../apis/hotel-page-apis";
import CarouselOffersDe from "../components/CarouselOffersDe";
function HotelOffers() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetchOffersDetails("HOTELS").then((data) => {
      setOffers(data);
    });
  }, []);
  return (
    <div className="bg-white  pb-[20px]  ">
      <div className="bg-white ">
        <CarouselOffersDe data={BUS_OFFERS} />
      </div>
    </div>
  );
}

export default HotelOffers;
