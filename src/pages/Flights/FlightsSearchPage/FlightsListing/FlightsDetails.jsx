import React from "react";
import { AIRLINES_INFO } from "../../../../constants";
import AILogo from "../../../../assets/images/airlines/AI.png";
import INLogo from "../../../../assets/images/airlines/6E.png";
import G8Logo from "../../../../assets/images/airlines/G8.png";
import SGLogo from "../../../../assets/images/airlines/SG.png";
import UKLogo from "../../../../assets/images/airlines/UK.png";
import { AIRPORTS } from "../../../../constants";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
dayjs.locale("en");
import { FaWifi, FaPlug, FaYoutube } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { AiTwotoneClockCircle } from "react-icons/ai";

const getCityFromIATACode = (iataCode) => {
  const airport = AIRPORTS.find((airport) => airport.iata_code === iataCode);
  return airport ? airport.city : "Unknown City";
};

function AirlineDetails({
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
  const key = flightID?.slice(0, 2).toUpperCase();
  const airlines = AIRLINES_INFO.find((airline) => airline.key === key);
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
    <div className="text-xs md:text-lg bg-gray-100 border   text-black py-1 gap-2 font-thin flex flex-row ">
      <div className="">
        {logo && (
          <img
            src={logo}
            alt={airlines?.name}
            className=" w-4 md:w-4 h-4 md:h-4 self-center "
          />
        )}
      </div>
      <div className="h-1 w-1 bg-black rounded flex justify-center self-center items-center"></div>

      <div className="text-xs md:text-lg text-black list-disc font-thin flex flex-col">
        <p className="inline-block text-xs md:text-lg">
          {airlines ? airlines.name : "Unknown Airline"}
          {/* {aircraftModel} */}
          {airlines ? ` ${key}${flightID}` : "Unknown ID"}
        </p>
      </div>
      <div className="h-1 w-1 bg-black rounded flex justify-center self-center items-center"></div>
      <div>
        <p className="inline-block text-xs md:text-lg text-center">Economy</p>
      </div>
    </div>
  );
}

const AirportDetails = (iataCode) => {
  console.log(iataCode);
  const airport = AIRPORTS.find((airport) => airport.iata_code === iataCode);

  if (!airport) {
    return <p>Unknown Airport</p>;
  }

  return <p className="text-sm text-center">{airport.name}</p>;
};

function FlightsDetails({ ...props }) {
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
    <div>
      <div className="border-b border-gray-200">
        <AirlineDetails {...props} />
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="flex gap-2  w-full text-xs md:text-lg">
          <div className="text-xs md:text-lg text-gray-700 gap-1  md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
            <p className="inline-block text-black  text-xs md:text-lg text-center">
              {source}
            </p>
            <p className="inline-block text-xs md:text-lg text-center">
              {getCityFromIATACode(source)}
            </p>
            <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
              {arrivalTime}
            </p>
            <p className="inline-block text-xs md:text-lg text-center">
              {formatDate(date)}
            </p>
            <div className="inline-block text-xs md:text-lg text-center">
              {AirportDetails(source)}{" "}
            </div>
          </div>

          <div className="flex flex-col justify-center text-xs md:text-lg items-center text-center w-full">
            <AiTwotoneClockCircle className="text-2xl" />

            <div className="0 text-center w-full text-md text-gray-700 justify-center  font-thin flex flex-col p-1 md:p-4">
              {duration} hours
            </div>
          </div>
          <div className="text-xs md:text-lg md:mx-10 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
            <p className="inline-block text-black  text-xs md:text-lg text-center">
              {destination}
            </p>
            <p className="inline-block text-xs md:text-lg text-center">
              {getCityFromIATACode(destination)}
            </p>
            <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
              {departureTime}
            </p>
            <p className="inline-block text-xs md:text-lg text-center">
              {formatDate(date)}
            </p>
            <div className="inline-block text-xs md:text-lg text-center">
              {AirportDetails(destination)}{" "}
            </div>
          </div>
        </div>
        <div className="border-l border-gray-200"></div>

        <AmenitiesDetails {...props} />
      </div>
    </div>
  );
}

export default FlightsDetails;

function AmenitiesDetails({ ...props }) {
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

  return (
    <div className="flex gap-4 mx-2">
      <div className="flex flex-col justify-around">
        <div className="flex gap-2 items-center h-10">
          <FaWifi
            className={`text-${
              ticketPrice >= 2250 && duration >= 4 ? "black" : "gray-400"
            } text-xs md:text-lg`}
          />
          <p className="text-xs md:text-lg">Wifi</p>
        </div>
        <div className="flex gap-2 items-center h-10">
          <FaPlug
            className={`text-${
              ticketPrice >= 2400 ? "black" : "gray-400"
            } text-xs md:text-lg`}
          />
          <p className="text-xs md:text-lg">In-seat Power</p>
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <div className="flex gap-2 items-center h-10">
          <IoMdRestaurant
            className={`text-${
              duration >= 6 ? "black" : "gray-400"
            } text-xs md:text-lg`}
          />
          <p className="text-xs md:text-lg">Food</p>
        </div>
        <div className="flex gap-2 items-center h-10">
          <FaYoutube
            className={`text-${
              ticketPrice >= 2100 ? "black" : "gray-400"
            } text-xs md:text-lg`}
          />
          <p className="text-xs md:text-lg">On demand video</p>
        </div>
      </div>
    </div>
  );
}
