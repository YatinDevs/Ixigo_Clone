import React from "react";
import SearchTrainInput from "./SearchTrainInput";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";

function SearchTrainPanel() {
  return (
    <div className="w-full ">
      <ContentWrapper>
        <SearchTrainInput />
      </ContentWrapper>
    </div>
  );
}

export default SearchTrainPanel;
