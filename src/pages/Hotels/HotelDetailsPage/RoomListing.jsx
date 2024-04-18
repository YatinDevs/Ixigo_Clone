import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import RoomCard from "./RoomCard";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function RoomListing({ ...props }) {
  console.log(props);
  const [toggle, setToggle] = useState(false);
  const toggleButton = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  const { rooms } = props;

  const roomTypes = new Set();

  rooms.forEach((room) => {
    roomTypes.add(room.roomType);
  });

  const uniqueRoomTypes = Array.from(roomTypes);

  return (
    <>
      <ContentWrapper>
        <div className="mx-2 md:mx-auto border rounded-md my-4">
          <div
            className="mx-2 md:mx-auto flex flex-row justify-evenly items-center bg-white p-2 border text-xs md:text-lg rounded-md my-4"
            id="roomsSection"
          >
            <div className="self-start ">
              <button
                className="inline-flex items-center gap-1 py-1 px-1 text-xs md:text-lg font-medium bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                onClick={toggleButton}
              >
                <span className="text-xs md:text-lg">
                  {uniqueRoomTypes.length + 1} Room Type
                </span>
                <IoIosArrowDown
                  className={`transform transition-transform ${
                    toggle ? "rotate-180" : "rotate-0"
                  }`}
                  size={16}
                />
              </button>
              {toggle && (
                <div className="absolute z-10 mt-1 rounded-md bg-white border border-gray-300 shadow-lg">
                  {uniqueRoomTypes.map((roomtypes) => (
                    <li className=" list-none p-2 text-xs md:text-lg">
                      <a href={`#${roomtypes}`}>{roomtypes} Room</a>
                    </li>
                  ))}
                </div>
              )}
            </div>
            <div>Options</div>
            <div>Price</div>
          </div>
          <div className="flex flex-col gap-4">
            {rooms &&
              rooms.map((room) => (
                <RoomCard roomDetails={room} hotelDetails={props} />
              ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}

export default RoomListing;
