import React from "react";
import { AIRLINES_INFO } from "../../../../constants";
import AILogo from "../../../../assets/images/airlines/AI.png";
import INLogo from "../../../../assets/images/airlines/6E.png";
import G8Logo from "../../../../assets/images/airlines/G8.png";
import SGLogo from "../../../../assets/images/airlines/SG.png";
import UKLogo from "../../../../assets/images/airlines/UK.png";

function AirlineName({
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
  const flightsID = flightID?.slice(13, 16).toUpperCase();
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
    <div className="text-xs md:text-lg  text-black py-1 gap-2 font-thin flex flex-row ">
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
const FlightsBaggage = ({ ...props }) => {
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
    <div className="w-full">
      <div className="bg-gray-100 border border-gray-200 rounded-lg">
        <div>
          <AirlineName {...props} />
        </div>
        <div className="p-4 flex items-center justify-around border-b border-gray-200">
          <div>
            <p className=" text-xs md:text-lg">
              {ticketPrice <= 2250
                ? "7 kgs (1 piece per pax)"
                : "10 kgs (1 piece per pax)"}
            </p>
          </div>
          <div>
            <p className=" text-xs md:text-lg">
              {ticketPrice <= 2250
                ? "15 kgs (1 piece per pax)"
                : "20 kgs (1 piece per pax)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsBaggage;
