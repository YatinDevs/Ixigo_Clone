import dayjs from "dayjs";
import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const roomImage = {
  Single: {
    image1:
      "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1634208006171-6713e0c9a25e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Double: {
    image1:
      "https://images.unsplash.com/photo-1530334580314-1e7a340426a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Deluxe: {
    image1:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1505692433770-36f19f51681d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Suite: {
    image1:
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};
function RoomCard({ ...props }) {
  console.log(props);
  const { roomDetails, hotelDetails } = props;

  const discountRate =
    (roomDetails?.costDetails?.taxesAndFees * roomDetails.roomNumber) % 89;

  const navigate = useNavigate();
  function handleReserveRoom() {
    let query = JSON.stringify(roomDetails).replaceAll(" ", "+");
    console.log(query);
    navigate(query);
  }

  return (
    <>
      <div
        id={`${roomDetails.roomType}`}
        className="mx-2 md:mx-5 rounded-md  h-[220px] md:h-[300px]  flex shadow-md border hover:shadow-lg"
      >
        <div className="flex-1">
          <div className="imageContainer flex flex-col max-w-full p-2 px-4 gap-1">
            <img
              src={roomImage[roomDetails?.roomType].image1}
              alt="hotel"
              className="w-full rounded-lg h-[100px] md:h-[135px] "
            />
            <img
              src={roomImage[roomDetails?.roomType].image2}
              alt="hotel"
              className="w-full rounded-lg h-[100px] md:h-[135px] "
            />
          </div>
        </div>
        <div className="flex-1 text-md md:text-lg flex py-2 justify-start items-start flex-col gap-1">
          <p className="font-bold text-md md:text-xl">
            {roomDetails.roomType} Room
          </p>
          <p className="font-bold text-md md:text-xl">
            {roomDetails.bedDetail}
          </p>
          <div className="flex gap-1 md:gap-2 text-xs md:text-lg  items-center text-green-600">
            <IoCheckmarkSharp className="" />
            <p>
              Free Cancellation till{" "}
              {dayjs(hotelDetails.checkIn).format("MMM DD")}
            </p>
          </div>{" "}
          <div>
            {" "}
            <img
              className="inline-block mb-1"
              src="https://gos3.ibcdn.com/roomSizeBlack-1678093548.png"
              width="18px"
            />{" "}
            <span className="text-sm text-slate-700 pl-1  inline-block">
              {roomDetails.roomSize} sq.ft
            </span>{" "}
          </div>{" "}
          <span className="text-sm text-slate-700 pl-1  inline-block">
            Room Number {roomDetails.roomNumber}
          </span>{" "}
        </div>
        <div className="flex-1 text-xs md:text-lg flex justify-center items-center flex-col gap-1">
          <div
            className="discount relative bg-red-100 w-fit text-xs md:text-lg rounded-md border px-2 py-0.5 text-red-500 border-red-300 text-nowrap font-semibold  md:text-white md:bg-red-500 md:border-red-500

        "
          >
            {`${discountRate}% off `}
          </div>

          <div className="price text-xs md:text-lg py-1 text-slate-500 line-through">
            {`₹${Math.round(
              roomDetails.costDetails.baseCost * (1 + discountRate / 100)
            )} `}
          </div>
          <div className="DiscountePrice font-medium text-md md:text-xl md:font-semibold ">
            {`₹${roomDetails.costDetails.baseCost} `}
          </div>
          <div className="text-xs md:text-lg text-slate-500">
            {" "}
            {`+₹${roomDetails.costDetails.taxesAndFees} taxes & fees`}
          </div>
          <div className="text-xs text-slate-500">
            {" "}
            <span className="font-medium text-xs md:text-lg">1 room</span> per
            night
          </div>

          <Button
            type={`Reserve 1 ROOM `}
            handleClick={handleReserveRoom}
            className="bg-orange-500  rounded-md mx-4 shadow-md text-white hover:bg-orange-600 cursor-pointer py-2 md:py-2 px-4  md:px-6 "
          />
        </div>
      </div>
    </>
  );
}

export default RoomCard;
