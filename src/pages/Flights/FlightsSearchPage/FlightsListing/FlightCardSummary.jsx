import React, { useState } from "react";
import FlightsBaggage from "./FlightsBaggage";
import FlightsDetails from "./FlightsDetails";

function CustomTabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}
function FlightCardSummary({ ...props }) {
  const [tab, setTab] = useState(0);
  const handleTabSwitch = (newValue) => {
    setTab(newValue);
  };
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
  return (
    <div className="w-full  mx-auto  flex-col border-slate-100 shadow-lg bg-white flex ">
      <div className="flex ">
        <div
          onClick={() => handleTabSwitch(0)}
          className={`flex-1 md:py-2 text-center text-xs md:text-lg border-b-2 ${
            tab === 0 ? "border-orange-600 text-orange-600" : "text-slate-500"
          } cursor-pointer`}
        >
          FLIGHT DETAILS
        </div>
        <div
          onClick={() => handleTabSwitch(1)}
          className={`flex-1 md:py-2 text-xs md:text-lg text-center border-b-2 ${
            tab === 1 ? "border-orange-600 text-orange-600" : "text-slate-500"
          } cursor-pointer`}
        >
          BAGGAGE
        </div>
      </div>
      <CustomTabPanel value={tab} index={0}>
        <FlightsDetails {...props} />
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <FlightsBaggage {...props} />
      </CustomTabPanel>
    </div>
  );
}

export default FlightCardSummary;
