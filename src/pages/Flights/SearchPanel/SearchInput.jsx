import React from "react";
import "./style.css";
import SearchButton from "../../../components/Buttons/SearchButton";
function SearchInput() {
  return (
    <form className="border-none p-[20px] gap-10 flex my-2 mx-5 flex-col rounded-[20px] bg-white shadow-[10px_35px_40px_-15px_rgba(0,0,0,0.2)]">
      <div className="text-bold">
        <button className="items-center min-h-[40px] py-[8px] border  text-orange-500 border-orange-500 rounded-full px-[15px] border-selection-outline hover:bg-orange-50">
          One Way
        </button>
      </div>
      <div className="flex flex-row ">
        <div className="border rounder-l-lg py-4 px-2 bg-gray-300"></div>
        <div className="border py-4 px-2 bg-gray-300"></div>
        <div className="border py-4 px-2 bg-gray-300"></div>
        <div className="border py-4 px-2 bg-gray-300"></div>
        <SearchButton />
      </div>
      <div></div>
    </form>
  );
}

export default SearchInput;
