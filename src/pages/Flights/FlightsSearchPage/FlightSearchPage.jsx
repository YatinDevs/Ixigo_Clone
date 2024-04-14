import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFlightsContext } from "../../../context/FlightsDetailProvider";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import { fetchFlightDetails } from "../../../apis/flights-page-apis";
import dayjs from "dayjs";
import SearchPanel from "../SearchPanel/SearchPanel";
import UpdatedSearchPanel from "./UpdatedSearchPanel/UpdatedSearchPanel";
import FilterPanel from "./FilterPanel/FilterPanel";
import FlightsListing from "./FlightsListing/FlightsListing";
import { Pagination, Select } from "antd";

function FlightSearchPage() {
  // Extracting data from params
  const { searchQuery } = useParams();
  //   console.log(useParams());
  const encodedString = searchQuery ?? "";
  //   console.log(encodedString);
  const extractedEncodedPath = encodedString.replace("air-", "");
  //   console.log(extractedEncodedPath);
  const decodedPath = atob(extractedEncodedPath);
  // console.log(decodedPath);
  const [location, date, counts] = decodedPath?.split("--");
  // console.log(`L: ${location} ,D: ${date},C: ${counts}`);
  const [source, destination] = location.split("-");
  // console.log(`S: ${source} ,D: ${destination}`);
  const day = dayjs(date).format("ddd");
  // console.log(day);

  const [adult, child, infant] = counts?.split("-");
  // console.log(`a:${adult},c: ${child},i: ${infant}`);
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  const [flightsResult, setFlightsResult] = useState([]);
  // console.log(`flightsResult`, flightsResult);

  useEffect(() => {
    setIsLoading(true);

    fetchFlightDetails(source, destination, day, sort, filter, 10, page).then(
      (data) => {
        setIsLoading(false);
        // console.log(data, `data fetched`);
        setFlightsResult(data?.data.flights);
      }
    );
  }, [source, destination, day, sort, page, filter]);

  useEffect(() => {
    dispatchFlightsDetails({
      type: "set_source_location",
      payload: { value: source },
    });

    dispatchFlightsDetails({
      type: "set_destination_location",
      payload: { value: destination },
    });

    dispatchFlightsDetails({
      type: "set_date_of_journey",
      payload: { value: date },
    });
    dispatchFlightsDetails({
      type: "set_travel_details_numbers",
      payload: { value: { adult, child, infant } },
    });
  }, []);

  const { source_location, destination_location, date_of_journey } =
    flightsDetails;

  return (
    <div className="mt-16">
      <UpdatedSearchPanel
        flightsDetails={flightsDetails}
        dispatchFlightsDetails={dispatchFlightsDetails}
        flightsResult={flightsResult}
        setFlightsResult={setFlightsResult}
      />
      <FilterPanel />
      <FlightsListing flightsResult={flightsResult} isLoading={isLoading} />
      <Pagination
        className="my-4 flex items-center justify-center"
        total={total}
        onChange={(page) => {
          setPage(page);
          window.scrollBy(0, -window.innerHeight);
          document.getElementById("flightsListContainer").scrollTop = 0;
        }}
      />
    </div>
  );
}

export default FlightSearchPage;
