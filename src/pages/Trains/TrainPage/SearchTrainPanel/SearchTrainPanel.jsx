import React from "react";
import SearchTrainInput from "./SearchTrainInput";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";

function SearchTrainPanel({ trainProp, onSubmitForm }) {
  return (
    <div className="w-full ">
      <ContentWrapper>
        <SearchTrainInput trainProp={trainProp} onSubmitForm={onSubmitForm} />
      </ContentWrapper>
    </div>
  );
}

export default SearchTrainPanel;
