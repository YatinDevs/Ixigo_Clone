import React, { useState } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import dayjs from "dayjs";
import Button from "../../../../components/Buttons/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TrainAvailabilityCard from "./TrainAvailabilityCard";
import { useNavigate } from "react-router-dom";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function TrainCard({
  _id,
  trainName,
  trainNumber,
  source,
  destination,
  arrivalTime,
  departureTime,
  travelDuration,
  fare,
  trainType,
  coaches,
  daysOfOperation,
  departureDate,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const handleAvailability = () => {
    setShowDetails(!showDetails);
  };

  function getColor(day) {
    if (daysOfOperation.includes(day)) {
      return "orange-600";
    } else {
      return "slate-200";
    }
  }

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    const formattedDate = date.format("ddd D MMM");
    return formattedDate;
  };

  const handleBooking = (fare) => {
    console.log("booked");
    navigate(`/trains/booking`, {
      state: { trainId: _id, fare, departureDate },
    });
  };
  return (
    <>
      <ContentWrapper>
        <div className="mx-2 md:mx-5 shadow-md border">
          <div className="w-full border-b text-xs  md:text-lg flex justify-between items-center  h-[120px] md:h-[160px] bg-white ">
            <div className=" w-[150px] md:w-[450px] flex flex-col gap-2 border-r px-2 md:px-4 ">
              <p className="text-orange-600 flex flex-col md:flex-row gap-2  md:font-semibold uppercase">
                <span className="">{trainNumber}</span>
                <span>{trainName}</span>
              </p>

              <p className="flex gap-1 md:gap-2 justify-center items-center">
                <span className="hidden md:block">Runs on:</span>
                {weekDays.map((day) => (
                  <span className={`text-${getColor(day)}`} key={day}>
                    {day[0]}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex gap-2  w-full text-xs md:text-lg">
              <div className="text-xs md:text-lg text-gray-700 gap-1  md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
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

              <div className="flex flex-col justify-center  items-center text-center text-xs md:text-lg w-full">
                <div className="border-b-2 border-slate-500 text-center w-full text-xs md:text-lg text-gray-700 justify-center  font-thin flex flex-col ">
                  {travelDuration} hours
                </div>
                <div className="text-xs md:text-lg text-gray-700 justify-center text-center font-thin flex flex-col p-1 md:p-4"></div>
              </div>
              <div className="text-xs md:text-lg md:mx-10 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
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
            <div className="md:px-4 flex flex-col justify-center items-center gap-4">
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
            </div>
          </div>

          {showDetails && (
            <div className=" flex overflow-x-auto  gap-3 py-3 text-xs md:text-lg border-b shadow-sm p-2">
              {coaches?.map((coach) => (
                <>
                  <div
                    onClick={() => {
                      handleBooking(getFare(coach.coachType, fare));
                    }}
                    className="h-25 md:h-fit shadow-md  flex flex-col gap-1 rounded-md border bg-green-50"
                  >
                    <div className="pt-2 px-2">
                      <div className="flex gap-2 text-xs md:text-lg  justify-center items-center">
                        <p className="font-semibold">{coach.coachType}</p>
                        <div className="h-1 w-1  bg-black rounded flex justify-center self-center items-center"></div>
                        <p className="">
                          <span>&#x20B9;</span>
                          {getFare(coach.coachType, fare)}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-center text-green-700">
                          AVL {coach.numberOfSeats}
                        </p>
                      </div>
                      <p className="text-xs text-left">8 min ago</p>
                    </div>
                    <div className=" ">
                      <Button
                        type={`Book `}
                        handleClick={handleAvailability}
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

export default TrainCard;

function getFare(type, baseFare) {
  switch (type) {
    case "CC":
      return Math.round(baseFare * 2);
    case "2S":
      return Math.round(baseFare * 0.75);
    case "SL":
      return Math.round(baseFare);
    case "1A":
      return Math.round(baseFare * 6.25);
    case "2A":
      return Math.round(baseFare * 3.5);
    case "3A":
      return Math.round(baseFare * 2.75);
    case "3E":
      return Math.round(baseFare * 1.75);
    case "EA":
      return Math.round(baseFare * 5);
  }
  return baseFare;
}
