import React, { useState } from "react";
import "./style.css";
import dayjs from "dayjs";
import SearchButton from "../../../components/Buttons/SearchButton";
import TripSelection from "../../../components/TripSelection/TripSelection";
import CustomInputBox from "../../../components/CustomInputBox/CustomInputBox";
import { useFlightContext } from "../../../context/FlightContextProvider/FlightContextProvider";
function SearchInput() {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");
  // const { flightDetails, dispatchFlightDetails } = useFlightContext();

  return (
    <form className="border-none p-[20px] gap-10 flex my-2 mx-5 flex-col rounded-[20px] bg-white shadow-[10px_35px_40px_-15px_rgba(0,0,0,0.2)]">
      <TripSelection />
      <div className="flex flex-row gap-0.5 h-[60px] shrink-0 flex-wrap">
        <CustomInputBox
          className=""
          label="From"
          placeholder="From"
          id="location_from"
        />
        <CustomInputBox
          className=""
          label="To"
          placeholder="To"
          id="source_location"
        />

        <SearchButton
          handleSubmit={"handleSubmit"}
          type={"flight"}
          className=""
        />
      </div>
      <div></div>
    </form>
  );
}

export default SearchInput;
