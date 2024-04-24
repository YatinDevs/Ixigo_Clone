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
  const [fare, setFare] = useState({});
  const [trainsListing, setTrainsListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [totalResults, setTotalResults] = useState(10);
  const [filterChange, setFilterChange] = useState(false);

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
  }, [trainJourneyDetails, page, sort, filter, filterChange]);

  // console.log(trainsListing);
  const handleFilter = (type, value) => {
    setFilterChange((prev) => !prev);
    // console.log("handleFilter called")

    if (type == "coachType") {
      setFilter((prev) => {
        // console.log("inside setFilter")
        if (value.length > 0) {
          prev["coaches.coachType"] = value;
        } else {
          delete prev["coaches.coachType"];
        }
        return prev;
      });
    }

    if (type == "trainType") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["trainType"] = value;
        } else {
          delete prev["trainType"];
        }
        return prev;
      });
    }

    if (type == "price") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["fare"] = { $gte: parseInt(value[0]), $lte: parseInt(value[1]) };
        }
        return prev;
      });
    }

    setPage(1);
  };
  return (
    <div className="mt-32 md:mt-16">
      <UpdatedSearchPanel
        trainJourneyDetails={trainJourneyDetails}
        setTrainJourneyDetails={setTrainJourneyDetails}
      />
      <FilterPanel
        setPage={setPage}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
        handleFilter={handleFilter}
        totalResults={totalResults}
        departureDate={departureDate}
        trainsListing={trainsListing}
        isLoading={isLoading}
        results={trainsListing?.length}
        total={totalResults < 10 ? totalResults : 10}
        setSortValue={(value) => {
          // console.log({ value });
          setSort(JSON.parse(value));
        }}
      />
      <TrainsListing
        departureDate={departureDate}
        trainsListing={trainsListing}
        isLoading={isLoading}
      />
    </div>
  );
}

export default TrainSearchPage;
