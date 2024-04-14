import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import BusSearchForm from "./BusSearchForm";

function BusSearchPanel({ busProp, onSubmitForm }) {
  return (
    <div className="w-full ">
      <ContentWrapper>
        <BusSearchForm busProp={busProp} onSubmitForm={onSubmitForm} />
      </ContentWrapper>
    </div>
  );
}

export default BusSearchPanel;
