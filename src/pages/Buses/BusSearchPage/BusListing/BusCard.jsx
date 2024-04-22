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
import { RiSteering2Fill } from "react-icons/ri";
import { OpenSeat } from "../../../../assets/svgs";
import { useNavigate } from "react-router-dom";

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
  const [count, setCount] = useState(0);
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

  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleCount = (type) => {
    if (type == "add") {
      if (count == 48) {
        return;
      } else {
        setCount((prev) => prev + 1);
      }
    } else if (type == "remove") {
      if (count == 0) {
        return;
      } else {
        setCount((prev) => prev - 1);
      }
    }
  };

  const totalFare = (count > 0 ? count : 1) * fare;
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    const encodedPrice = btoa(JSON.stringify(totalFare));
    setTimeout(() => {
      navigate(`payment--${encodedPrice}`);
    }, 500);
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
                type={`SEATS `}
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

          {
            <div
              className={`fifthRow selectSeats text-xs md:text-lg w-full transition-transform origin-top ${
                showDetails ? "scale-y-100" : "scale-y-0 h-0"
              }`}
            >
              <div className="w-full gap-4 flex p-4 max-md:flex-col ">
                <div className="departure max-md:w-full mx-auto border rounded-md">
                  <div className="px-4 py-2 text-xs md:text-lg bg-orange-600 text-center font-medium text-white ">
                    Boarding Point
                  </div>
                  <div className="time m-3 text-xs md:text-lg font-medium leading-3 ">
                    {departureTime}
                  </div>
                  <div className="source m-3 text-xs md:text-lg leading-3">
                    {source}
                  </div>
                </div>
                <div className="arrival max-md:w-full text-xs md:text-lg mx-auto border rounded-md ">
                  <div className="px-4 py-2  bg-orange-600 text-center font-medium text-white text-xs md:text-lg">
                    Dropping Point
                  </div>
                  <div className="time m-3 text-xs md:text-lg font-medium leading-3">
                    {arrivalTime}
                  </div>
                  <div className="source m-3 text-xs md:text-lg leading-3">
                    {destination}
                  </div>
                </div>
                <div className="seatSelector w-full min-h-fit max-h-full border">
                  <h1 className="text-center p-2 text-xs md:text-lg h-[20%] font-semibold text-slate-800 ">
                    Select Your Seat
                  </h1>

                  <div className="bus w-[94%] border h-[160px] m-4 flex justify-between overflow-x-auto">
                    <div className="engine w-6 h-full bg-slate-200 relative max-md:hidden">
                      <RiSteering2Fill className="absolute -rotate-90 top-4 left-1 text-slate-700 " />
                    </div>

                    <div
                      className={
                        "seating p-4 relative flex flex-col justify-between " +
                        _id
                      }
                    >
                      <div className="leftSeats flex gap-2 ">
                        {tempArr.map((item) => (
                          <div key={item} className="space-y-2">
                            <OpenSeat count={count} handleCount={handleCount} />{" "}
                            <OpenSeat count={count} handleCount={handleCount} />{" "}
                          </div>
                        ))}
                      </div>

                      <div className="rightSeats  flex gap-2 ">
                        {tempArr.map((item) => (
                          <div key={item} className="space-y-2">
                            <OpenSeat count={count} handleCount={handleCount} />{" "}
                            <OpenSeat count={count} handleCount={handleCount} />{" "}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full select-none">
                <h1 className="text-right text-xs md:text-lg mr-5 text-slate-800">
                  Total Fare :{" "}
                  <span className="font-semibold text-xs md:text-lg">
                    {" "}
                    ₹{totalFare}{" "}
                  </span>{" "}
                </h1>
              </div>

              <div className="flex w-full justify-end my-2 select-none ">
                <button
                  onClick={handlePayment}
                  className="bg-orange-500  px-6 py-2 mr-4 font-medium text-white text-xs md:text-lg   active:bg-blue-700 hover:bg-blue-700 hover:text-slate-100 active:text-slate-100  transition-all"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          }
        </div>
      </ContentWrapper>
    </>
  );
}

export default BusCard;
