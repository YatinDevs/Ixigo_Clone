import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import InputBoxHotel from "../components/InputBoxHotel";
import locale from "antd/es/date-picker/locale/en_US";
import { DatePicker } from "antd";
import Room_Guests from "../components/Room_Guests";

function UpdatedSearchPanel({ hotelDetails, sethotelDetails }) {
  const [updatedInputData, setUpdatedInputData] = useState(hotelDetails);
  console.log(updatedInputData);
  const navigate = useNavigate();

  const handleUpdatedSearch = () => {
    sethotelDetails(updatedInputData);

    let query =
      hotelDetails.destination.replaceAll(" ", "+") +
      "&" +
      JSON.stringify(hotelDetails.checkIn) +
      "&" +
      JSON.stringify(hotelDetails.checkOut) +
      "&" +
      JSON.stringify(hotelDetails.roomNguestsData) +
      "&" +
      JSON.stringify(hotelDetails.nights);
    console.log(query);

    navigate(`/hotels/${query}`);
  };
  //   console.log(updatedInputData.departureDate, `update SearchPanel`);

  const handleRoomNguestsData = (type, action) => {
    if (action == "increase") {
      setUpdatedInputData((prev) => {
        prev.roomNguestsData.numbers[type] =
          prev.roomNguestsData.numbers[type] + 1;
        return { ...prev };
      });
    } else {
      setUpdatedInputData((prev) => {
        if (type == "adult" || type == "room") {
          if (prev[type] == 1) {
            return;
          }
          if (prev[type] == 0) {
            return;
          }
          prev.roomNguestsData.numbers[type] =
            prev.roomNguestsData.numbers[type] - 1;

          return { ...prev };
        }
      });
    }
  };
  return (
    <div className="w-full bg-white">
      <ContentWrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-white    mx-auto flex flex-col"
        >
          <div className="border-none px-6 py-4 md:p-[35px] gap-2 md:gap-2 flex md:flex-row flex-col rounded-[20px] ">
            <div className="flex flex-1 gap-1 md:gap-2 flex-col md:flex-row justify-center items-center">
              <InputBoxHotel
                className="w-full "
                label="Destination"
                placeholder={"Enter destination"}
                value={updatedInputData?.destination}
                setInputValue={(data) => {
                  setUpdatedInputData((prev) => {
                    prev.destination = data;
                    return { ...prev };
                  });
                }}
              />
            </div>
            <div className="flex md:gap-4 flex-1/2 flex-col md:flex-row justify-center items-center">
              <label className="date relative flex-1  w-full">
                <div className="font-medium text-sm text-slate-500 z-[1] bg-white absolute left-7">
                  Check-in
                </div>
                <DatePicker
                  locale={locale}
                  format={"DD-MM-YYYY"}
                  allowClear={false}
                  value={updatedInputData?.checkIn}
                  disabledDate={(current) =>
                    current && current < dayjs().startOf("day")
                  }
                  onChange={(value) => {
                    setUpdatedInputData((prev) => {
                      return { ...prev, checkIn: value };
                    });
                  }}
                  className="flex-1 w-full relative rounded-lg my-1 md:m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
                "
                />
              </label>

              <label className="date relative flex-1  w-full">
                <div className="font-medium text-sm text-slate-500 z-[1] bg-white absolute left-7">
                  Check-out
                </div>

                <DatePicker
                  locale={locale}
                  format={"DD-MM-YYYY"}
                  value={updatedInputData?.checkOut}
                  allowClear={false}
                  disabledDate={(current) => {
                    return (
                      current <
                      updatedInputData?.checkIn.add(1, "day").startOf("day")
                    );
                  }}
                  onChange={(value) => {
                    setUpdatedInputData((prev) => {
                      return { ...prev, checkOut: value };
                    });
                  }}
                  className="flex-1  w-full relative rounded-lg my-1 md:m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
                "
                />
              </label>
            </div>

            <Room_Guests
              value={updatedInputData?.roomNguestsData}
              handleValue={handleRoomNguestsData}
              className="w-full flex-1"
            />

            <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
              <button
                onClick={handleUpdatedSearch}
                type="submit"
                className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-4 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
              >
                SEARCH
              </button>
            </div>
          </div>
        </form>
      </ContentWrapper>
    </div>
  );
}

export default UpdatedSearchPanel;
