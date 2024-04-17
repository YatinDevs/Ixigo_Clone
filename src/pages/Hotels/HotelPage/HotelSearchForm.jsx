import React, { useState, useEffect } from "react";
import InputBoxHotel from "../components/InputBoxHotel";
import SwapButton from "../../../components/Buttons/SwapButton";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import Room_Guests from "../components/Room_Guests";

function HotelSearchForm() {
  const [destination, setDestination] = useState("Mumbai, Maharashtra");
  const [checkIn, setCheckIn] = useState(dayjs(Date.now()));
  const [checkOut, setCheckOut] = useState(dayjs(checkIn.add(1, "day")));
  const [nights, setNights] = useState(checkOut.diff(checkIn, "day"));

  const [roomNguestsData, setRoomNguestsData] = useState({
    numbers: {
      adult: 1,
      child: 0,
      room: 1,
    },
  });
  const handleRoomNguestsData = (type, action) => {
    if (action == "increase") {
      setRoomNguestsData((prev) => {
        prev.numbers[type] = prev.numbers[type] + 1;
        return { ...prev };
      });
    } else {
      setRoomNguestsData((prev) => {
        if (type == "adult" || type == "room") {
          if (prev[type] == 1) {
            return;
          }
          if (prev[type] == 0) {
            return;
          }
          prev.numbers[type] = prev.numbers[type] - 1;

          return { ...prev };
        }
      });
    }
  };

  useEffect(() => {
    setNights(checkOut.diff(checkIn, "day"));
  }, [checkIn, checkOut]);
  const navigate = useNavigate();

  function handleHotelSearch() {
    if (destination.trim().length == 0) {
      errorToast("Please Enter Valid Input");
      return;
    }

    let query =
      destination.replaceAll(" ", "+") +
      "&" +
      JSON.stringify(checkIn) +
      "&" +
      JSON.stringify(checkOut) +
      "&" +
      JSON.stringify(roomNguestsData) +
      "&" +
      nights;
    console.log(query);
    navigate(`/hotels/${query}`);
  }
  return (
    <div className="p-8 md:p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white border  border-slate-200 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.2)] rounded-[20px]  my-2 mx-auto flex flex-col"
      >
        <div className="border-none px-6 py-6 md:p-[35px] gap-2 md:gap-2 flex md:flex-row flex-col rounded-[20px] ">
          <div className="flex flex-1 gap-1 md:gap-2 flex-col md:flex-row justify-center items-center">
            <InputBoxHotel
              className="w-full "
              label="Destination"
              placeholder={"Enter destination"}
              value={destination}
              setInputValue={setDestination}
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
                value={checkIn}
                disabledDate={(current) =>
                  current && current < dayjs().startOf("day")
                }
                onChange={(value) => {
                  setCheckIn(value);
                  setCheckOut(value.add(1, "day"));
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
                value={checkOut}
                allowClear={false}
                disabledDate={(current) => {
                  return current < checkOut;
                }}
                onChange={(value) => {
                  setCheckOut(value);
                }}
                className="flex-1  w-full relative rounded-lg my-1 md:m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
                "
              />
            </label>
          </div>

          <Room_Guests
            value={roomNguestsData}
            handleValue={handleRoomNguestsData}
            className="w-full flex-1"
          />

          <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
            <button
              onClick={handleHotelSearch}
              type="submit"
              className="bg-orange-500 mx-10  md:mx-0  text-xs md:text-lg py-2 px-8 md:py-4 hover:bg-orange-600 text-white rounded-lg hover:shadow-md"
            >
              SEARCH
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HotelSearchForm;
