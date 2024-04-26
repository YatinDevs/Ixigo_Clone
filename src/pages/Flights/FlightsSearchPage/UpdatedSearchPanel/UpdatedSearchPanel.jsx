import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import InputBox from "../../../../components/InputBox/InputBox";
import SwapButton from "../../../../components/Buttons/SwapButton";
import DateSelect from "../../../../components/DateSelect/DateSelect";
import TravellersCount from "../../../../components/TravellersCount/TravellersCount";
import SearchButton from "../../../../components/Buttons/SearchButton";
import "./style.css";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import { useFlightsContext } from "../../../../context/FlightsDetailProvider";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
function UpdatedSearchPanel({
  flightsDetails,
  flightsListingResult,
  dispatchFlightsDetails,
  setflightsListingResult,
}) {
  const { journeyDetails: details } = useFlightsContext();

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

  let [adult, child, infant] = counts?.split("-");
  // console.log(`a:${adult},c: ${child},i: ${infant}`);
  adult *= 1;
  child *= 1;
  infant *= 1;
  console.log({ adult, child, infant });
  const {
    source_location,
    destination_location,
    oneway,
    travel_details,
    date_of_journey,
  } = flightsDetails;

  useEffect(() => {
    dispatchFlightsDetails({
      type: "set_travel_details_numbers",
      payload: { value: { adult, child, infant } },
    });
  }, []);

  // To Make update Search
  const [inputSourceValue, setInputSourceValue] = useState(source);
  const [inputDestValue, setInputDestValue] = useState(destination);
  const [selectedDate, setSelectedDate] = useState(date);
  const [pageLoad, setPageLoad] = useState(false);

  // const [travelDetails, setTravelDetails] = useState({
  //   numbers: {
  //     adult: parseInt(adult),
  //     child: parseInt(child),
  //     infant: parseInt(infant),
  //   },
  //   class: "economy",
  // });

  // console.log(travel_details, `details travel`);
  const navigate = useNavigate();

  const regex = /\((.*?)\)/;

  function handleSearch() {
    setPageLoad(true);

    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${travel_details.numbers.adult}-${travel_details.numbers.child}-${travel_details.numbers.infant}`
    );

    navigate(`/flight/air-${encodedPath}`);
  }

  return (
    <div className="searchpanel">
      <ContentWrapper>
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="source_location"
              className="w-full text-white"
              inputValue={inputSourceValue}
              selectedValue={inputSourceValue}
              setInputValue={setInputSourceValue}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_source_location",
                  payload: { value },
                });
              }}
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                const temp = inputDestValue;
                setInputDestValue(inputSourceValue);
                setInputSourceValue(temp);
                dispatchFlightsDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-transparent cursor-pointer  z-[1] rounded-xl  shadow-md w-9 h-9 m-[-20px] "
            />
            <InputBox
              className="w-full text-white"
              inputValue={inputDestValue}
              id="destination_location"
              setInputValue={setInputDestValue}
              selectedValue={destination_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_destination_location",
                  payload: { value },
                });
              }}
              type="text"
              placeholder="Enter city or airport"
              label="To"
            />
          </div>
          <div className="flex relative md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <label
              htmlFor={"id"}
              className={`absolute text-gray-400 hover:border-orange-500 focus:border-orange-500  select-none top-[-6px] md:top-[-5px] left-1 px-1 font-medium leading-[18px] text-xs md:text-kg `}
            >
              Departure
            </label>
            <DatePicker
              className={`w-full relative bg-transparent  focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-xs md:text-xs md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 text-white `}
              locale={locale}
              format={"DD-MM-YYYY"}
              value={dayjs(date_of_journey)}
              onChange={(value) => {
                // console.log("handleDate");
                const date = dayjs(value.$d).format();
                const dateFormat = dayjs(date).format("YYYY-MM-DD");
                dispatchFlightsDetails({
                  type: "set_date_of_journey",
                  payload: { value: dateFormat },
                });
              }}
            />

            <TravellersCount
              value={travel_details}
              handleValue={(secondType, target) => {
                dispatchFlightsDetails({
                  type: "set_travel_details",
                  secondType: secondType,
                  target: target,
                });
              }}
              className="text-white"
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              type="submit"
              onClick={handleSearch}
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
            >
              SEARCH
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default UpdatedSearchPanel;
