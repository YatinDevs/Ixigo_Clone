import React, { useState } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import Button from "../../../../components/Buttons/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { AIRLINES_INFO } from "../../../../constants";
import AILogo from "../../../../assets/images/airlines/AI.png";
import INLogo from "../../../../assets/images/airlines/6E.png";
import G8Logo from "../../../../assets/images/airlines/G8.png";
import SGLogo from "../../../../assets/images/airlines/SG.png";
import UKLogo from "../../../../assets/images/airlines/UK.png";
import { AIRPORTS } from "../../../../constants";
import FlightCardSummary from "./FlightCardSummary";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
dayjs.locale("en");

const getCityFromIATACode = (iataCode) => {
  const airport = AIRPORTS.find((airport) => airport.iata_code === iataCode);
  return airport ? airport.city : "Unknown City";
};

function AirlineName({ flightID }) {
  const key = flightID.slice(0, 2).toUpperCase();
  const flightsID = flightID.slice(13, 16).toUpperCase();
  const airline = AIRLINES_INFO.find((airline) => airline.key === key);
  let logo;
  switch (key) {
    case "AI":
      logo = AILogo;
      break;
    case "6E":
      logo = INLogo;
      break;
    case "G8":
      logo = G8Logo;
      break;
    case "SG":
      logo = SGLogo;
      break;
    case "UK":
      logo = UKLogo;
      break;
    default:
      logo = null;
  }

  return (
    <div className="text-sm md:text-md md:mx-4 my-2  text-gray-400  font-thin flex flex-col py-2">
      {logo && (
        <img
          src={logo}
          alt={airline?.name}
          className=" w-6 md:w-15 h-6 md:h-12 self-center"
        />
      )}
      <div className="text-md text-gray-400  font-thin flex flex-col p-1 md:p-2">
        <p className="inline-block">
          {airline ? airline.name : "Unknown Airline"}
        </p>

        <p className="inline-block text-sm text-center">
          {airline ? ` ${key}${flightsID}` : "Unknown ID"}
        </p>
      </div>
    </div>
  );
}

function FlightCard({ ...props }) {
  const [showDetails, setShowDetails] = useState(false);
  const {
    _id,
    flightID,
    airline,
    aircraftModel,
    source,
    stops,
    amenities,
    arrivalTime,
    availableSeats,
    departureTime,
    destination,
    duration,
    ticketPrice,
  } = props;

  const { searchQuery } = useParams();
  const encodedString = searchQuery ?? "";
  const extractedEncodedPath = encodedString.replace("air-", "");
  const decodedPath = atob(extractedEncodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  console.log(date);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    const formattedDate = date.format("ddd D MMM");
    return formattedDate;
  };

  return (
    <ContentWrapper>
      <div className="mx-2 md:mx-16">
        <div
          onClick={(e) => {
            e.preventDefault();
            setShowDetails((prev) => !prev);
          }}
          className="w-full h-[150px] mx-auto border border-1 border-b-0  border-slate-100 shadow-lg bg-white flex "
        >
          <div className="">
            <AirlineName flightID={flightID} />
          </div>
          <div className="border-l border-gray-200"></div>
          <div className="flex gap-2  w-full text-sm md:text-lg">
            <div className="text-md text-gray-700 gap-1  md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
              <p className="inline-block text-sm text-center">{source}</p>

              <p className="inline-block text-black font-semibold text-lg text-center">
                {arrivalTime}
              </p>
              <p className="inline-block text-sm text-center">
                {formatDate(date)}
              </p>
              <p className="inline-block text-sm text-center">
                {getCityFromIATACode(source)}
              </p>
            </div>

            <div className="flex flex-col justify-center  items-center text-center w-full">
              <div className="border-b-2 border-slate-500 text-center w-full text-md text-gray-700 justify-center  font-thin flex flex-col p-1 md:p-4">
                {duration} hours
              </div>
              <div className="text-md text-gray-700 justify-center text-center font-thin flex flex-col p-1 md:p-4">
                Stops {stops}
              </div>
            </div>
            <div className="text-md md:mx-10 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
              <p className="inline-block text-sm text-center">{destination}</p>

              <p className="inline-block text-black font-semibold text-lg text-center">
                {departureTime}
              </p>
              <p className="inline-block text-sm text-center">
                {formatDate(date)}
              </p>
              <p className="inline-block text-sm text-center">
                {getCityFromIATACode(destination)}
              </p>
            </div>
          </div>
          <div className="border-l border-gray-200"></div>
          <div className="flex items-center  justify-center  gap-2 flex-col md:flex-row  md:mx-6">
            <p className="text-orange-500 text-md md:text-xl font-semibold p-1 md:p-2">
              <span>&#x20B9;</span>
              {ticketPrice}
            </p>
            <Button
              type={`Book `}
              handleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                console.log("booked");
              }}
              className="bg-orange-500  rounded-md mx-1 shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2  md:px-6 "
            />
            <div className="font-medium text-center text-xl text-gray-600 cursor-pointer select-none transition-all">
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
        {showDetails && <FlightCardSummary date={date} {...props} />}
      </div>
    </ContentWrapper>
  );
}

export default FlightCard;
