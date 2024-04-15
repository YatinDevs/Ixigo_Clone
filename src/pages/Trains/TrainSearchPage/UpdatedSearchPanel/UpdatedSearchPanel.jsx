import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrainInputBox from "../../components/TrainInputBox";
import SwapButton from "../../../../components/Buttons/SwapButton";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import dayjs from "dayjs";
import DateSelect from "../../components/DateSelect/DateSelect";

function UpdatedSearchPanel({ trainJourneyDetails, setTrainJourneyDetails }) {
  const [updatedInputData, setUpdatedInputData] = useState(trainJourneyDetails);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    let temp = updatedInputData.source;
    setUpdatedInputData((prev) => {
      prev.source = prev.destination;
      prev.destination = temp;
      return prev;
    });
  }, [swap]);

  const navigate = useNavigate();
  const handleUpdatedSearch = () => {
    if (updatedInputData.source === updatedInputData.destination) {
      errorToast("FROM and TO can not be the same");
      return;
    }
    setTrainJourneyDetails(updatedInputData);

    const dateParams = dayjs(updatedInputData?.departureDate).format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );

    setTimeout(() => {
      navigate(`/trains/searchTrains/${dateParams}`, {
        state: { ...trainJourneyDetails },
      });
    }, 200);
  };
  //   console.log(updatedInputData.departureDate, `update SearchPanel`);
  return (
    <div className="searchpanel">
      <ContentWrapper>
        <div className="border-none p-[20px] gap-2 md:gap-10 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row justify-center items-center">
            <TrainInputBox
              value={updatedInputData.source}
              label="FROM"
              handleLocation={(data) => {
                setUpdatedInputData((prev) => {
                  prev.source = data;
                  return { ...prev };
                });
              }}
              className="w-full text-white"
            />
            <SwapButton
              handleSwap={(e) => {
                e.preventDefault();
                setSwap((prev) => !prev);
              }}
            />
            <TrainInputBox
              className="w-full text-white"
              value={updatedInputData.destination}
              label="TO"
              handleLocation={(data) => {
                setUpdatedInputData((prev) => {
                  prev.destination = data;
                  return { ...prev };
                });
              }}
            />
          </div>
          <div className="flex md:gap-4 flex-1/2 flex-col md:flex-row justify-center items-center">
            <DateSelect
              value={updatedInputData.departureDate}
              handleDepartureDate={(value) => {
                setUpdatedInputData((prev) => {
                  return { ...prev, departureDate: value };
                });
              }}
              className="w-full relative   bg-transparent text-white focus:outline-none  border-b-2 border-slate-200 hover:border-b-orange-500 hover:bg-transparent focus:border-b-orange-500 active:border-b-orange-500  font-medium text-lg leading-7  py-[20px] px-[16px]  "
            />
          </div>
          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              type="submit"
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-2 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
              onClick={handleUpdatedSearch}
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
