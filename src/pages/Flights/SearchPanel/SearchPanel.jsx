import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchInput from "./SearchInput";

function SearchPanel() {
  return (
    <div className="searchPanel ">
      <ContentWrapper>
        <h1
          className=" text-right font-medium  text-lg mr-[30px] "
          style={{ textShadow: "rgba(0, 0, 0, 0.25)" }}
        >
          Flight Booking
        </h1>
        <SearchInput />
      </ContentWrapper>
    </div>
  );
}

export default SearchPanel;
