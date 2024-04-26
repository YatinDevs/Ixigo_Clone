import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import BusListing from "./BusListing/BusListing";
import { fetchBusListing } from "../../../apis/bus-page-apis";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

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

  const [fare, setFare] = useState({});
  const [busListing, setBusListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
  const [filter, setFilter] = useState({});
  const [filterChange, setFilterChange] = useState(false);

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
  }, [busJourneyDetails, page, sort, filter, filterChange]);

  const handleFilter = (type, value) => {
    setFilterChange((prev) => !prev);
    // console.log("handleFilter called")

    if (type == "busType") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["type"] = value;
        } else {
          delete prev["type"];
        }
        return prev;
      });
    }

    if (type == "price") {
      console.log(filter);
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
    <div className="mt-16">
      <ContentWrapper>
        <UpdatedSearchPanel
          busJourneyDetails={busJourneyDetails}
          setBusJourneyDetails={setBusJourneyDetails}
        />
        <div className="flex flex-col md:flex-row justify-around ">
          <FilterPanel
            setPage={setPage}
            setSort={setSort}
            filter={filter}
            setFilter={setFilter}
            handleFilter={handleFilter}
            totalResults={totalResults}
            busListing={busListing}
            isLoading={isLoading}
            departureDate={departureDate}
            results={busListing?.length}
            total={totalResults < 10 ? totalResults : 10}
            setSortValue={(value) => {
              // console.log({ value });
              setSort(JSON.parse(value));
            }}
          />
          <BusListing
            busListing={busListing}
            isLoading={isLoading}
            departureDate={departureDate}
          />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default BusSearchPage;
