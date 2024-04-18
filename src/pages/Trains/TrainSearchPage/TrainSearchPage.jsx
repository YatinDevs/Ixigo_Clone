import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import TrainsListing from "./TrainsListing/TrainsListing";
import { fetchTrainsListing } from "../../../apis/trains-page-apis";

function TrainSearchPage() {
  const location = useLocation();
  const { source, destination } = location.state;
  const { departureDate } = useParams();
  console.log(departureDate);

  const [trainJourneyDetails, setTrainJourneyDetails] = useState({
    source,
    destination,
    departureDate: dayjs(departureDate),
  });
  // console.log(departureDate);
  console.log(trainJourneyDetails);
  const day = dayjs(Date(departureDate)).format("ddd");
  console.log(day);
  const [sort, setSort] = useState({});
  const [fare, setFare] = useState({});
  const [filter, setFilter] = useState({});
  const [trainsListing, setTrainsListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    fetchTrainsListing(
      trainJourneyDetails.source,
      trainJourneyDetails.destination,
      day,
      sort,
      filter,
      10,
      page
    ).then((res) => {
      // console.log(res, `trainListing`);
      setTrainsListing(res?.data?.trains);
      setIsLoading(false);
      setTotalResults(res?.totalResults);
    });
  }, [trainJourneyDetails, page, sort]);

  // console.log(trainsListing);
  return (
    <div className="mt-16">
      <UpdatedSearchPanel
        trainJourneyDetails={trainJourneyDetails}
        setTrainJourneyDetails={setTrainJourneyDetails}
      />
      <FilterPanel />
      <TrainsListing
        departureDate={departureDate}
        trainsListing={trainsListing}
        isLoading={isLoading}
      />
    </div>
  );
}

export default TrainSearchPage;
