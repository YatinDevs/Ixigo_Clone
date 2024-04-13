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
    <div className="text-sm md:text-md md:mx-4 my-6  text-gray-400  font-thin flex flex-col py-4">
      {logo && (
        <img
          src={logo}
          alt={airline?.name}
          className=" w-6 md:w-15 h-6 md:h-12 self-center"
        />
      )}
      <div className="text-md text-gray-400  font-thin flex flex-col p-1 md:p-4">
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

function FlightCard({
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
}) {
  const [showDetails, setShowDetails] = useState(false);

  console.log(
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
    ticketPrice
  );

  AIRPORTS.filter;
  return (
    <ContentWrapper>
      <div className="mx-2 md:mx-16">
        <div className="w-full h-[150px] mx-auto border border-1 border-slate-100 shadow-lg bg-white flex ">
          <div className="">
            <AirlineName flightID={flightID} />
          </div>
          <div className="border-l border-gray-200"></div>
          <div className="flex gap-2 flex-1 w-full text-sm md:text-lg">
            <div className="text-md text-gray-700 md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
              <p className="inline-block text-sm text-center">{source}</p>

              <p className="inline-block text-black font-semibold text-lg text-center">
                {arrivalTime}
              </p>
              {getCityFromIATACode(source)}
            </div>

            <div className="flex flex-col justify-center  items-center text-center w-full">
              <div className="border-b-2 border-slate-500 text-center w-full text-md text-gray-700 justify-center  font-thin flex flex-col p-1 md:p-4">
                {duration} hours
              </div>
              <div className="text-md text-gray-700 justify-center text-center font-thin flex flex-col p-1 md:p-4">
                Stops {stops}
              </div>
            </div>
            <div className="text-md md:mx-10 text-gray-700 justify-center font-thin flex flex-col p-1 md:p-4">
              <p className="inline-block text-sm text-center">{destination}</p>

              <p className="inline-block text-black font-semibold text-lg text-center">
                {departureTime}
              </p>
              {getCityFromIATACode(destination)}
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
              className="bg-orange-500  rounded-md mx-1 shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2 md:px-6 "
            />
            <div
              className="font-medium text-center text-xl text-gray-600 cursor-pointer select-none transition-all"
              onClick={() => {
                setShowDetails((prev) => !prev);
              }}
            >
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
      </div>
    </ContentWrapper>
  );
}

export default FlightCard;
