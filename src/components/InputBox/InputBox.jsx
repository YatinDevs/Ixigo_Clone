import React, { useEffect, useState } from "react";
import { projectID } from "../../constants";

const InputBox = ({
  label,
  placeholder,
  id,
  type,
  className,
  inputValue,
  setInputValue,
  handleValue,
  selectedValue,
  error,
}) => {
  const [airportList, setAirportList] = useState(null);
  const [showsuggestion, setShowsuggestion] = useState(false);
  const [suggestionList, setSuggestionList] = useState(null);
  useEffect(() => {
    async function FetchAirportFromAPI() {
      const data = await fetch(
        "https://academics.newtonschool.co/api/v1/bookingportals/airport?limit=30",
        {
          headers: { projectID: projectID },
        }
      );
      const resData = await data.json();
      // console.log(resData.data.airports);
      setAirportList(resData?.data?.airports);
      setSuggestionList(resData?.data?.airports);
    }

    FetchAirportFromAPI();
  }, []);

  useEffect(() => {
    if (suggestionList) {
      setSuggestionList((prevList) => {
        return airportList?.filter(({ name, city, iata_code }) => {
          return (
            name.toLowerCase().includes(inputValue.toLowerCase()) ||
            iata_code.toLowerCase().includes(inputValue.toLowerCase()) ||
            city.toLowerCase().includes(inputValue.toLowerCase())
          );
        });
      });
    }
  }, [inputValue]);

  const handleInput = (inputText) => {
    if (inputText.trim().length > 0) {
      setShowsuggestion(true);
    } else {
      setShowsuggestion(false);
    }
  };

  function handleSelect(airport) {
    // console.log(airport);
    setShowsuggestion(false);
    handleValue(airport?.iata_code);
    setInputValue(`${airport?.city}, (${airport?.iata_code})`);
  }
  return (
    <div className={`relative p-0 ${className} `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          // console.log(e.target.value);
          setInputValue(e.target.value);
          handleInput(e.target.value);
        }}
        className="w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-xs md:text-lg md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 "
      />

      <label
        htmlFor={id}
        className={`absolute hover:border-orange-500 focus:border-orange-500  select-none top-[-6px] md:top-[-15px] left-1 px-1 font-medium leading-[18px] text-xs md:text-md ${
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        } `}
      >
        {label ? label : "Input"}
      </label>
      {showsuggestion && (
        <ul className="absolute text-black max-h-[200px] md:h-[200px] overflow-y-auto bg-white border-2 border-gray-200 rounded-lg w-full text-sm md:text-lg z-10">
          {suggestionList?.length > 0 ? (
            suggestionList?.map((airportDetails) => (
              <li
                key={airportDetails?.iata_code}
                className="flex flex-row gap-1 item-center "
                onClick={() => handleSelect(airportDetails)}
              >
                <img
                  src="https://gos3.ibcdn.com/flightIcon-1675492260.png"
                  alt="flight Icon"
                  className="p-2 w-10 h-10"
                />
                <p className="self-center">
                  {airportDetails.iata_code} - {airportDetails.city},
                  {airportDetails.country}.
                  <span>{airportDetails.airportName}</span>
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
};

export default InputBox;
