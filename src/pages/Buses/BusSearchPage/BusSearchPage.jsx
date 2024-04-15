import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import BusListing from "./BusListing/BusListing";

function BusSearchPage() {
  const location = useLocation();
  const { source, destination, departureDate } = location.state;

  const [busJourneyDetails, setBusJourneyDetails] = useState({
    source,
    destination,
    departureDate,
  });
  console.log(busJourneyDetails);

  const [sort, setSort] = useState({});
  const [fare, setFare] = useState({});
  const [busListing, setBusListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
  const day = dayjs(Date(departureDate)).format("ddd");

  return (
    <div className="mt-20">
      <h1>hello</h1>
      <p>{`${source}`}</p>
      <p>{`${destination}`}</p>
      <p>{`${departureDate.$d}`}</p>
      <UpdatedSearchPanel
        busJourneyDetails={busJourneyDetails}
        setBusJourneyDetails={setBusJourneyDetails}
      />
      <FilterPanel />
      <BusListing busListing={busListing} />
    </div>
  );
}

export default BusSearchPage;
