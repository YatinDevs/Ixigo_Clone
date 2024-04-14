import React, { useEffect, useState } from "react";
import { BUS_STATION_NAMES } from "../../../constants";
import { IoBusSharp } from "react-icons/io5";

function BusInputBox({
  placeholder,
  label,
  value,
  error,
  type,
  id,
  className,
  labelClass,
  handleLocation,
}) {
  const [busInputValue, setBusInputValue] = useState(value);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [busStationList, setBusStationList] = useState(BUS_STATION_NAMES);

  useEffect(() => {
    setBusInputValue(value);
  }, [value]);

  function handleInput(inputText) {
    setBusInputValue(inputText);
    if (inputText.length > 0) {
      setShowSuggestion(true);
      const filteredList = BUS_STATION_NAMES.filter((busStation) => {
        return busStation.toLowerCase().includes(inputText.toLowerCase());
      });
      setBusStationList(filteredList);
    } else {
      setShowSuggestion(false);
    }
  }

  function handleSelect(selectedCity) {
    handleLocation(selectedCity);
    setShowSuggestion(false);
    setBusStationList(BUS_STATION_NAMES);
  }
  return (
    <div className={`relative p-0 ${className} `}>
      <input
        placeholder={placeholder ? placeholder : "Enter train station"}
        type={type}
        id={id}
        autoComplete="off"
        value={busInputValue}
        className={`w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-xs md:text-lg md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 
        ${className} ${
          error ? "border-red-500" : "border-slate-200 hover:border-slate-500"
        }`}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <label
        htmlFor={id}
        className={`absolute hover:border-orange-500 focus:border-orange-500  select-none top-[-6px] md:top-[-15px] left-1 px-1 font-medium leading-[18px] text-xs md:text-md ${
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        } `}
      >
        {label ? label : "Input"}
      </label>
      {showSuggestion && (
        <ul className="absolute text-black max-h-[200px] md:h-[200px] overflow-y-auto bg-white border-2 border-gray-200 rounded-lg w-full text-sm md:text-lg z-10">
          {busStationList?.length > 0 ? (
            busStationList?.map((stationDetails) => (
              <li
                key={stationDetails}
                className="flex flex-row gap-1 item-center "
                onClick={() => handleSelect(stationDetails)}
              >
                <IoBusSharp className="p-2 w-10 h-10" />

                <p className="self-center">
                  <span>{stationDetails}</span>
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

export default BusInputBox;
