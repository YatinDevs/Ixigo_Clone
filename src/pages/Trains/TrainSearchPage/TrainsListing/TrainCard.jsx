import React, { useState } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import dayjs from "dayjs";
import Button from "../../../../components/Buttons/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TrainAvailabilityCard from "./TrainAvailabilityCard";

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
  console.log(
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
    departureDate
  );
  const [showDetails, setShowDetails] = useState(false);

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
                <div className="border-b-2 border-slate-500 text-center w-full text-xs md:text-lg text-gray-700 justify-center  font-thin flex flex-col p-1 md:p-4">
                  {travelDuration} hours
                </div>
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
          <div className="flex">
            <div className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7  gap-2  text-xs md:text-lg border-b shadow-sm p-2">
              {coaches?.map((coach) => (
                <>
                  <div className="h-14 md:h-20 pt-2 px-2 flex flex-col gap-2 rounded-md border bg-green-50">
                    <div className="flex gap-2 justify-center items-center">
                      <p>{coach.coachType}</p>
                      <div className="h-1 w-1  bg-black rounded flex justify-center self-center items-center"></div>
                      <p className="">
                        <span>&#x20B9;</span>
                        {getFare(coach.coachType, fare)}
                      </p>
                    </div>
                    <p className="text-center text-green-700">
                      AVL {coach.numberOfSeats}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          {showDetails && <TrainAvailabilityCard />}
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
