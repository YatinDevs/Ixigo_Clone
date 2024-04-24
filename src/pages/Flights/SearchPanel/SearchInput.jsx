import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import dayjs from "dayjs";
import InputBox from "../../../components/InputBox/InputBox";
import SwapButton from "../../../components/Buttons/SwapButton";
import TravellersCount from "../../../components/TravellersCount/TravellersCount";
import SpecialFares from "./SpecialFares";
import SearchButton from "../../../components/Buttons/SearchButton";
import { useFlightsContext } from "../../../context/FlightsDetailProvider";
import DateSelect from "../../../components/DateSelect/DateSelect";

function SearchInput() {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log(selectedDate);
  // console.log(inputFromValue);
  // console.log(inputToValue);
  const { flightsDetails, dispatchFlightsDetails } = useFlightsContext();
  // console.log(useFlightsContext());

  const {
    source_location,
    destination_location,
    oneway,
    travel_details,
    date_of_journey,
  } = flightsDetails;
  // console.log(flightsDetails);

  const pathname = useLocation().pathname;
  // console.log(pathname);

  const navigate = useNavigate();
  // console.log(navigate);

  // console.log(source_location, `before nav`);
  // console.log(destination_location);
  // console.log(date_of_journey);
  // console.log(travel_details);
  const handleSearch = (e) => {
    // console.log("clicked");
    const { adult, child, infant } = travel_details?.numbers;
    if (source_location == "") {
      errorToast("Please Enter Source Location");
      return;
    }
    if (destination_location == "") {
      errorToast("Please Enter Destination Location");
      return;
    }

    if (source_location == destination_location) {
      errorToast(
        "Both airports are the same, Please Select Different Airports"
      );
      return;
    }
    const encodedPath = btoa(
      `${source_location}-${destination_location}--${date_of_journey}--${adult}-${child}-${infant}`
    );
    console.log(source_location, destination_location);
    if (pathname.includes("flight")) {
      navigate(`air-${encodedPath}`);
    } else {
      navigate(`flight/air-${encodedPath}`);
    }
  };
  return (
    <div className="p-8 md:p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)]   my-2 mx-auto
    flex flex-col"
      >
        <div className="border-none px-6 pt-6 md:p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="From"
              id="from_location"
              inputValue={inputFromValue}
              setInputValue={setInputFromValue}
              className="w-full"
              selectedValue={source_location}
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
                const temp = inputFromValue;
                setInputFromValue(inputToValue);
                setInputToValue(temp);
                dispatchFlightsDetails({ type: "swap_location" });
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <InputBox
              type="text"
              placeholder="Enter city or airport"
              label="To"
              id="to_location"
              inputValue={inputToValue}
              setInputValue={setInputToValue}
              className="w-full"
              selectedValue={destination_location}
              handleValue={(value) => {
                dispatchFlightsDetails({
                  type: "set_destination_location",
                  payload: { value },
                });
              }}
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect
              className="w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-xs md:text-lg md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 "
              value={date_of_journey || dayjs()}
              handleDepartureDate={(value) => {
                // console.log("handleDate");
                dispatchFlightsDetails({
                  type: "set_date_of_journey",
                  payload: { value },
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
        <div>
          <SpecialFares />
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
