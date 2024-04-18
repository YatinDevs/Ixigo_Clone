import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import dayjs from "dayjs";

function HotelSummary({ hotelDetails, roomDetails, hotelReservations }) {
  console.log(hotelDetails, hotelReservations);
  return (
    <div className="px-10 py-5 flex flex-row gap-5 bg-white  border rounded-md">
      <div className="hotel flex my-2 gap-4">
        <img
          src={hotelDetails?.images[0]}
          alt={hotelDetails?.name}
          width={300}
          height={300}
          className="w-32 h-32 rounded-xl md:w-48 md:h-48"
        />
      </div>
      <div>
        <div className="name text-lg md:text-lg font-semibold my-1">
          {hotelDetails?.name}
        </div>
        <div className="address my-1 grid items-center gap-2 text-slate-600 ">
          <FaLocationDot className="inline col-span-1 text-slate-400 text-sm md:text-base " />{" "}
          <span className="col-start-2 text-xs md:text-lg leading-3">
            {hotelDetails?.location}
          </span>
        </div>
        <div className="rating my-2 text-xs md:text-lg">
          {hotelDetails?.rating}/5
        </div>
        <div className="text-xs md:text-lg">{roomDetails.roomType}</div>
        <div className="text-xs md:text-lg">{roomDetails.bedDetail}</div>
      </div>
    </div>
  );
}

export default HotelSummary;
