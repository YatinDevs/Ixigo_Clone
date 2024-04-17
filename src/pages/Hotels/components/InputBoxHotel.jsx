import { useState } from "react";
import React, { useEffect } from "react";
import { fetchHotelCities } from "../../../apis/hotel-page-apis";
import { FaHotel } from "react-icons/fa";

function InputBoxHotel({
  placeholder,
  label,
  value,
  error,
  type,
  id,
  className,
  labelClass,
  setInputValue,
}) {
  const [hotelInputValue, setHotelInputValue] = useState(value);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [hotelLocationList, setHotelLocationList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetchHotelCities(hotelInputValue, token).then((res) => {
      setHotelLocationList(res?.data.cities);
    });
  }, [hotelInputValue]);

  function handleInput(inputText) {
    setHotelInputValue(inputText);
    setInputValue(inputText);
    if (inputText.trim().length > 0) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  }
  function handleSelect(selectedCity) {
    setInputValue(selectedCity);

    setShowSuggestion(false);
  }
  return (
    <div className={`relative p-0 ${className} `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        ref={label == "Password" ? inputRef : null}
        value={value}
        autoComplete="off"
        className={`w-full relative rounded-lg  focus:outline-none hover:border-orange-500 border-2 border-solid   focus:border-orange-500 font-medium text-xs md:text-lg leading-7 text-[rgb(20, 24, 35)] py-2 px-4 md:py-4 md:px-4 ${className} ${
          error ? "border-red-500" : "border-slate-200 hover:border-slate-500"
        }`}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <label
        htmlFor={"id"}
        className={`absolute -top-3 left-3 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm z-[2] ${labelClass}`}
      >
        {label}
      </label>

      {showSuggestion && (
        <ul className="absolute text-black max-h-[200px] md:h-[200px] overflow-y-auto bg-white border-2 border-gray-200 rounded-lg w-full text-sm md:text-lg z-10">
          {hotelLocationList?.length > 0 ? (
            hotelLocationList?.map((details) => (
              <li
                key={details?._id}
                className="flex flex-row gap-1 item-center "
                onClick={() => handleSelect(details?.cityState)}
              >
                <FaHotel className="p-2 w-10 h-10 text-slate-500" />
                <p className="font-medium text-slate-700 ">
                  {details?.cityState}
                </p>
              </li>
            ))
          ) : (
            <div className="font-medium text-black text-lg py-4 text-center w-full h-full flex justify-center items-center">
              NO RESULT FOUND
            </div>
          )}
        </ul>
      )}
    </div>
  );
}

export default InputBoxHotel;
