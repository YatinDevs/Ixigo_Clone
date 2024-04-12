import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFlightsContext } from "../../../context/FlightsDetailProvider";

function FlightSearchPage() {
  const { searchQuery } = useParams();
  //   console.log(useParams());

  const encodedString = searchQuery ?? "";
  //   console.log(encodedString);
  const extractedEncodedPath = encodedString.replace("air-", "");
  //   console.log(extractedEncodedPath);
  const decodedPath = atob(extractedEncodedPath);
  console.log(decodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  console.log(`L: ${location} ,D: ${date},C: ${counts}`);

  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  console.log(flightsDetails);
  const [currentSearchDetails, setCurrentSearchDetails] = useState("");
  console.log(currentSearchDetails);
  useEffect(() => {
    setCurrentSearchDetails(flightsDetails);
  }, []);
  return <div>FlightSearchPage</div>;
}

export default FlightSearchPage;
