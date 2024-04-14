import React, { useState } from "react";
import InputBox from "../../../../components/InputBox/InputBox";
import SwapButton from "../../../../components/Buttons/SwapButton";
import DateSelect from "../../../../components/DateSelect/DateSelect";
import SearchButton from "../../../../components/Buttons/SearchButton";
import dayjs from "dayjs";
function SearchTrainInput() {
  const [inputFromTrain, setInputFromTrain] = useState("");
  const [inputToTrain, setInputToTrain] = useState("");
  const [date_of_journey, set_date_of_journey] = useState(dayjs(Date.now()));
  return (
    <div className="p-8 md:p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)] rounded-[20px]  my-2 mx-auto flex flex-col"
      >
        <div className="border-none px-6 py-6 md:p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox
              className="w-full"
              label="From"
              placeholder="Enter Train Station"
            />
            <SwapButton className="self-center swap-button flex items-center justify-center bg-white cursor-pointer  z-[1] rounded-xl border shadow-md w-9 h-9 m-[-20px] " />
            <InputBox
              className="w-full"
              label="To"
              placeholder="Enter Train Station"
            />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect value={date_of_journey} />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
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
