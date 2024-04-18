import React, { useState, useEffect } from "react";
import UpdatedSearchPanel from "./UpdatedSearchPanel";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import locale from "antd/es/date-picker/locale/en_US";
import { fetchHotelListing } from "../../../apis/hotel-page-apis";
import HotelListing from "./HotelListing/HotelListing";

function HotelSearchPage() {
  const { hotelQuery } = useParams();

  let [destination, checkIn, checkOut, roomNguestsData, nights] =
    hotelQuery.split("&");
  destination = destination?.replaceAll("+", " ");
  checkIn = JSON.parse(checkIn);
  checkOut = JSON.parse(checkOut);
  roomNguestsData = JSON.parse(roomNguestsData);

  const [hotelDetails, sethotelDetails] = useState({
    destination,
    checkIn: dayjs(checkIn),
    checkOut: dayjs(checkOut),
    roomNguestsData,
    nights,
  });
  console.log(hotelDetails);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [hotelsListing, setHotelsListing] = useState(null);
  const [results, setResults] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterChange, setFilterChange] = useState("{}");
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    setIsLoading(true);

    fetchHotelListing(
      hotelDetails?.destination,
      sort,
      filter,
      10,
      page,
      token
    ).then((res) => {
      // console.log("res", res);
      setTotal(res?.totalResults);
      setResults(res?.results);
      setHotelsListing(res?.data?.hotels);
      setIsLoading(false);
    });
  }, [hotelDetails?.destination, page, sort, filterChange]);
  console.log(hotelsListing);
  return (
    <div className="mt-16">
      <UpdatedSearchPanel
        hotelDetails={hotelDetails}
        sethotelDetails={sethotelDetails}
      />
      <HotelListing
        checkIn={checkIn}
        hotelsListing={hotelsListing}
        isLoading={isLoading}
      />
    </div>
  );
}

export default HotelSearchPage;
