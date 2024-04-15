import React, { useState } from "react";
import SwapButton from "../../../../components/Buttons/SwapButton";
import DateSelect from "../../../../components/DateSelect/DateSelect";
import SearchButton from "../../../../components/Buttons/SearchButton";
import dayjs from "dayjs";
import TrainInputBox from "../../components/TrainInputBox";

function SearchTrainInput({ trainProp, onSubmitForm }) {
  const { departureDate, handleDepartureDate } = trainProp;
  const { source, destination, handleDestination, handleSource, handleSwap } =
    trainProp;
  console.log(departureDate);
  return (
    <div className="p-8 md:p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)] rounded-[20px]  my-2 mx-auto flex flex-col"
      >
        <div className="border-none px-6 py-6 md:p-[35px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <TrainInputBox
              className="w-full"
              label="From"
              value={source}
              placeholder="Enter Train Station"
              handleLocation={handleSource}
            />
            <SwapButton
              handleSwap={() => {
                const temp = source;
                handleSource(destination);
                handleDestination(temp);
              }}
              className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] "
            />
            <TrainInputBox
              className="w-full"
              label="To"
              placeholder="Enter Train Station"
              handleLocation={handleDestination}
              value={destination}
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect
              value={departureDate}
              handleDepartureDate={handleDepartureDate}
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              onClick={onSubmitForm}
              type="submit"
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
            >
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchTrainInput;
