import React from "react";
import HotelSearchForm from "./HotelSearchForm";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function SearchPanel() {
  return (
    <div className="w-full ">
      <ContentWrapper>
        <HotelSearchForm />
      </ContentWrapper>
    </div>
  );
}

export default SearchPanel;
