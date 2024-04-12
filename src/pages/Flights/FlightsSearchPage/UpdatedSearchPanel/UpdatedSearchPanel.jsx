import React from "react";
import InputBox from "../../../../components/InputBox/InputBox";
import SwapButton from "../../../../components/Buttons/SwapButton";
import DateSelect from "../../../../components/DateSelect/DateSelect";
import TravellersCount from "../../../../components/TravellersCount/TravellersCount";
import SearchButton from "../../../../components/Buttons/SearchButton";
import "./style.css";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
function UpdatedSearchPanel(
  flightsDetails,
  dispatchFlightsDetails,
  flightsResult
) {
  return (
    <div className="searchpanel">
      <ContentWrapper>
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <InputBox className="w-full" />
            <SwapButton />
            <InputBox className="w-full" />
          </div>
          <div className="flex md:gap-4 flex-1 flex-col md:flex-row justify-center items-center">
            <DateSelect className="w-full relative rounded-lg  focus:outline-none  border-b-2 border-slate-200 hover:border-b-orange-500 focus:border-b-orange-500 active:border-b-orange-500  font-medium text-lg leading-7 text-[rgb(20,24,35)] py-[20px] px-[16px]  " />
            <TravellersCount className="w-full" />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <SearchButton className="bg-orange-500 hover:bg-orange-700 flex-1 py-4 px-7  text-white font-semibold w-full" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default UpdatedSearchPanel;
