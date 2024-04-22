import React, { useState } from "react";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

function FareSummary({ hotelDetails, roomDetails, hotelReservations }) {
  const baseCost =
    hotelReservations?.roomNguestsData.numbers.room *
    roomDetails?.costDetails.baseCost *
    hotelReservations?.nights;
  const taxes =
    hotelReservations?.roomNguestsData.numbers.room *
    roomDetails?.costDetails.taxesAndFees *
    hotelReservations?.nights;
  const netCost = baseCost + taxes;

  const [priceDetails, setPriceDetails] = useState({
    baseCost,
    taxes,
    netCost,
  });
  const navigate = useNavigate();

  const handlePayment = (e) => {
    const encodedPrice = btoa(JSON.stringify(priceDetails.netCost));
    setTimeout(() => {
      navigate(`payment--${encodedPrice}`);
    }, 1000);
  };
  return (
    <div className="flex flex-col  gap-4">
      <h1 className="text-md md:text-2xl font-bold">Fare Summary</h1>
      <div className="flex text-xs md:text-lg justify-between border-b py-2">
        <p>
          {" "}
          {hotelReservations?.roomNguestsData.numbers.room} Room,
          {hotelReservations?.nights} Night{" "}
        </p>
        <p className="font-bold">
          {" "}
          <span>&#x20B9;</span>
          {baseCost}
        </p>
      </div>
      <div className="flex text-xs md:text-lg justify-between border-b py-2">
        <p>Taxes & Charges : </p>
        <p className="font-bold">
          <span>&#x20B9;</span>
          {taxes}
        </p>
      </div>
      <div className="flex text-xs md:text-lg justify-between font-bold border-b py-2">
        <p>Net Amount Payable</p>
        <p>
          <span>&#x20B9;</span>
          {netCost}
        </p>
      </div>
      <div>
        <Button
          type={`MAKE PAYMENT `}
          handleClick={handlePayment}
          className="bg-orange-500 w-full rounded-md  shadow-md text-white hover:bg-orange-600 cursor-pointer py-2 md:py-2 px-4  md:px-6 "
        />
      </div>
    </div>
  );
}

export default FareSummary;
