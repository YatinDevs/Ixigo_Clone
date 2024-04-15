import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import BusListing from "./BusListing/BusListing";
import { fetchBusListing } from "../../../apis/bus-page-apis";

function BusSearchPage() {
  const location = useLocation();
  const { source, destination } = location.state;
  const { departureDate } = useParams();
  const [busJourneyDetails, setBusJourneyDetails] = useState({
    source,
    destination,
    departureDate: dayjs(departureDate),
  });
  const day = dayjs(Date(departureDate)).format("ddd");

  const [sort, setSort] = useState({});
  const [fare, setFare] = useState({});
  const [busListing, setBusListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchBusListing(
      busJourneyDetails.source,
      busJourneyDetails.destination,
      day,
      sort,
      filter,
      10,
      page
    ).then((res) => {
      console.log(res, `busListing`);
      setBusListing(res?.data?.buses);
      setIsLoading(false);
      setTotalResults(res?.totalResults);
    });
  }, [busJourneyDetails, page, sort]);
  return (
    <div className="mt-20">
      <UpdatedSearchPanel
        busJourneyDetails={busJourneyDetails}
        setBusJourneyDetails={setBusJourneyDetails}
      />
      <FilterPanel />
      <BusListing
        busListing={busListing}
        isLoading={isLoading}
        departureDate={departureDate}
      />
    </div>
  );
}

export default BusSearchPage;
