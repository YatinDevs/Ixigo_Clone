import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchInput from "./SearchInput";

function SearchPanel() {
  return (
    <div className="w-full ">
      <ContentWrapper>
        <SearchInput />
      </ContentWrapper>
    </div>
  );
}

export default SearchPanel;
