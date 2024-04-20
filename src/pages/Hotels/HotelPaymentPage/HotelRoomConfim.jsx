import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHotelDetails } from "../../../apis/hotel-page-apis";
import CustomInputBox from "../../../components/CustomInputBox/CustomInputBox";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import UserDetails from "./UserDetails";
import FareSummary from "./FareSummary";
import HotelSummary from "./HotelSummary";

function HotelRoomConfim() {
  let { hotelQuery, hotelId, roomDetails } = useParams();
  roomDetails = roomDetails.replaceAll("+", " ");
  roomDetails = JSON.parse(roomDetails);

  let [destination, checkIn, checkOut, roomNguestsData, nights] =
    hotelQuery.split("&");
  destination = destination?.replaceAll("+", " ");
  checkIn = JSON.parse(checkIn);
  checkOut = JSON.parse(checkOut);
  roomNguestsData = JSON.parse(roomNguestsData);
  nights = JSON.parse(nights);
  const [hotelDetails, setHotelDetails] = useState(null);

  const [hotelReservations, setHotelReservations] = useState({
    destination,
    checkIn,
    checkOut,
    roomNguestsData,
    nights,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [priceDetails, setPriceDetails] = useState({});
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
  console.log(roomDetails, hotelDetails, hotelId);

  return (
    <div className="mt-36 md:mt-28">
      <ContentWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-2 md:mx-auto justify-around m-5 ">
          <div className="col-span-1 p-5  bg-white rounded-md border">
            <FareSummary
              roomDetails={roomDetails}
              hotelDetails={hotelDetails}
              hotelReservations={hotelReservations}
            />
          </div>
          <div className="col-span-2 flex gap-2 flex-col   ">
            <UserDetails />
            <HotelSummary
              roomDetails={roomDetails}
              hotelDetails={hotelDetails}
              hotelReservations={hotelReservations}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HotelRoomConfim;
