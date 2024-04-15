import React, { Component, useState } from "react";
import dayjs from "dayjs";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../../components/Buttons/Button";
import { FaWifi, FaPlug } from "react-icons/fa";
import { BiSolidBlanket } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const FACILITIES = [
  { type: "Blanket", Component: <BiSolidBlanket /> },
  { type: "Water Bottle", Component: <FaBottleWater /> },
  { type: "WiFi", Component: <FaWifi /> },
  { type: "Charging Point", Component: <FaPlug /> },
  { type: "Snack Box", Component: <IoFastFood /> },
];

function BusCard({
  _id,
  name,
  type,
  departureTime,
  arrivalTime,
  destination,
  source,
  seats,
  fare,
  amenities,
  available,
  departureDate,
}) {
  console.log(
    _id,
    name,
    type,
    departureTime,
    arrivalTime,
    destination,
    source,
    seats,
    fare,
    amenities,
    available,
    departureDate
  );

  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(false);
  function calculateDuration(departureTime, arrivalTime) {
    const departure = departureTime.split(":").map(Number);
    const arrival = arrivalTime.split(":").map(Number);

    if (arrival[0] > departure[0]) {
      let hours = arrival[0] - departure[0];
      return `${hours} hours`;
    } else {
      let hours = departure[0] - arrival[0];
      return `${hours} hours`;
    }
  }

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    const formattedDate = date.format("ddd D MMM");
    return formattedDate;
  };
  const handleAvailability = () => {
    setShowDetails(!showDetails);
  };
  const rating = amenities.length;
  const toggleButton = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <>
      <ContentWrapper>
        <div className="mx-auto md:mx-5 shadow-md border hover:shadow-lg">
          <div className="w-full border-b text-xs md:text-lg flex justify-between items-center  max-h-[130px] md:max-h-[180px] bg-white ">
            <div className=" w-[100px] md:w-[450px] flex flex-col gap-1 py-2 border-r  md:px-4 ">
              <p className="flex flex-col gap-4">
                <span className="text-wrap">{name}</span>
                <span className="text-xs text-gray-400 ">{type}</span>
              </p>
              <div className="flex flex-col gap-1 md:flex-row">
                <div
                  className={`flex text-xs md:text-lg items-center gap-0.5 py-1 px-2 w-[35px] md:w-[40px] rounded-md 
                ${
                  rating >= 4
                    ? "bg-green-500"
                    : rating >= 2
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }
                text-white text-xs`}
                >
                  <GiRoundStar className="w-2 md:w-3 h-2 md:h-3" />
                  {rating}
                </div>

                <div className="relative">
                  <button
                    className="inline-flex items-center gap-1 py-1 px-1 text-xs md:text-lg font-medium bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    onClick={toggleButton}
                  >
                    <span className="text-xs md:text-lg">Amenities</span>
                    <IoIosArrowDown
                      className={`transform transition-transform ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      size={16}
                    />
                  </button>
                  {open && (
                    <div className="absolute z-10 mt-1  bg-white border border-gray-300 shadow-lg">
                      {amenities.map((amenitie) => {
                        const facility = FACILITIES.find(
                          (item) => item.type === amenitie
                        );
                        return (
                          <div
                            key={amenitie}
                            className="flex items-center gap-1 md:gap-4 px-1 py-1 md:py-2 md:px-2 text-xs md:text-lg text-gray-700"
                          >
                            {facility ? facility.Component : null}
                            <span>{amenitie}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2  w-full text-xs md:text-lg">
              <div className="text-xs md:text-lg text-gray-700 gap-1  md:mx-6 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-xs md:text-lg text-center">
                  {source}
                </p>

                <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
                  {arrivalTime}
                </p>
                <p className=" text-xs md:text-lg text-center">
                  {formatDate(departureDate)}
                </p>
              </div>

              <div className="flex flex-row justify-center  items-center text-center text-xs md:text-lg w-full">
                <div className="border-b-2 border-dashed border-slate-500 text-center w-full text-xs md:text-lg text-gray-700 justify-center  font-thin flex flex-col "></div>
                <div className="border p-1 md:px-6 md:py-2 rounded-lg">
                  {" "}
                  {calculateDuration(arrivalTime, departureTime)}
                </div>
                <div className="border-b-2 border-dashed border-slate-500 text-center w-full text-xs md:text-lg text-gray-700 justify-center  font-thin flex flex-col "></div>
              </div>

              <div className="text-xs md:text-lg md:mx-6 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-xs md:text-lg text-center">
                  {destination}
                </p>

                <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
                  {departureTime}
                </p>
                <p className="inline-block text-xs md:text-lg text-center">
                  {formatDate(departureDate)}
                </p>
              </div>
            </div>
            <div className="md:px-4 flex flex-col justify-center items-center gap-1">
              <p className="text-orange-500 text-md md:text-xl font-semibold p-1 md:p-2">
                <span>&#x20B9;</span>
                {fare}
              </p>
              <Button
                type={`Book `}
                handleClick={handleAvailability}
                className="bg-orange-500 mx-1 shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2  md:px-6 "
              />
              <div className="font-medium text-center text-xs md:text-lg text-gray-600 cursor-pointer select-none transition-all">
                {showDetails ? (
                  <>
                    <FaAngleUp className="inline" />
                  </>
                ) : (
                  <>
                    <FaAngleDown className="inline" />
                  </>
                )}
              </div>
              <div className="text-xs text-gray-400">
                {seats} seats available
              </div>
            </div>
          </div>

          {showDetails && (
            <div className=" flex overflow-x-auto  gap-3 py-3 text-xs md:text-lg border-b shadow-sm p-2">
              {coaches?.map((coach) => (
                <>
                  <div
                    onClick={() => {
                      console.log("booked");
                    }}
                    className="h-25 md:h-fit shadow-md  flex flex-col gap-1 rounded-md border bg-green-50"
                  >
                    <div className="pt-2 px-2">
                      <div className="flex gap-2 text-xs md:text-lg  justify-center items-center">
                        <div className="h-1 w-1  bg-black rounded flex justify-center self-center items-center"></div>
                        <p className="">
                          <span>&#x20B9;</span>
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-center text-green-700">AVL</p>
                      </div>
                      <p className="text-xs text-left">8 min ago</p>
                    </div>
                    <div className=" ">
                      <Button
                        type={`Book `}
                        className="bg-orange-500 rounded-b-md  w-full shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2  md:px-6 "
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </ContentWrapper>
    </>
  );
}

export default BusCard;
