import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SwapButton from "../../../../components/Buttons/SwapButton";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import DateSelect from "../../../../components/DateSelect/DateSelect";
import BusInputBox from "../../components/BusInputBox";
function UpdatedSearchPanel({ busJourneyDetails, setBusJourneyDetails }) {
  const { source, destination, departureDate } = busJourneyDetails;

  console.log(source, destination, departureDate, `update SearchPanel`);

  return (
    <div className="searchpanel">
      <ContentWrapper>
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <BusInputBox className="w-full text-white" />
            <SwapButton />
            <BusInputBox className="w-full text-white" />
          </div>
          <div className="flex md:gap-4 flex-1/2  flex-col md:flex-row justify-center items-center">
            <DateSelect className="w-full relative   bg-transparent text-white focus:outline-none  border-b-2 border-slate-200 hover:border-b-orange-500 hover:bg-transparent focus:border-b-orange-500 active:border-b-orange-500  font-medium text-lg leading-7  py-[20px] px-[16px]  " />
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
      </ContentWrapper>
    </div>
  );
}

export default UpdatedSearchPanel;
