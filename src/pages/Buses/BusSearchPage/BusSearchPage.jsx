import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function BusSearchPage() {
  const location = useLocation();
  const { source, destination, departureDate } = location.state;

  const [busJourneyDetails, setBusJourneyDetails] = useState({
    source,
    destination,
    departureDate,
  });
  console.log(busJourneyDetails);

  return (
    <div className="mt-20">
      <h1>hello</h1>
      <p>{`${source}`}</p>
      <p>{`${destination}`}</p>
      <p>{`${departureDate.$d}`}</p>
    </div>
  );
}

export default BusSearchPage;
