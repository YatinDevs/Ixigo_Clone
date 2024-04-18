import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelDetails } from "../../../apis/hotel-page-apis";
import DetailsNav from "./DetailsNav";
import OverviewSection from "./OverviewSection";
import RoomListing from "./RoomListing";
import HotelPolicies from "./HotelPolicies";

function HotelDetailsPage() {
  //   console.log(useParams());
  const { hotelId, hotelQuery } = useParams();
  let [destination, checkIn, checkOut, roomNguestsData, nights] =
    hotelQuery.split("&");
  destination = destination?.replaceAll("+", " ");
  checkIn = JSON.parse(checkIn);
  checkOut = JSON.parse(checkOut);
  roomNguestsData = JSON.parse(roomNguestsData);
  const [hotelDetails, setHotelDetails] = useState(null);
  const [hotelJourneyDetails, setHotelJourneyDetails] = useState({
    destination,
    checkIn: dayjs(checkIn),
    checkOut: dayjs(checkOut),
    roomNguestsData,
    nights,
  });
  const [isLoading, setIsLoading] = useState(false);

  console.log(hotelJourneyDetails, hotelDetails, hotelId);
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");

    fetchHotelDetails(hotelId, token).then((res) => {
      if (res.message === "success") {
        setIsLoading(false);
        setHotelDetails(res?.data);
      }
    });
  }, []);

  return (
    <div className="mt-16 scroll-smooth">
      {hotelDetails && (
        <>
          <DetailsNav />
          <OverviewSection {...hotelDetails} />
          <RoomListing {...hotelDetails} />
          <HotelPolicies {...hotelDetails} />
        </>
      )}
    </div>
  );
}

export default HotelDetailsPage;
