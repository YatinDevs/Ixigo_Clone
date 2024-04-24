import React from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import BusFilter from "./BusFilter";
import SortSection from "./SortSection";

function FilterPanel({
  filter,
  setFilter,
  handleFilter,
  results,
  total,
  setSortValue,
}) {
  return (
    <div className=" md:h-[500px] bg-white border p-2 m-2">
      <ContentWrapper>
        <BusFilter
          filter={filter}
          setFilter={setFilter}
          handleFilter={handleFilter}
        />
        <SortSection
          results={results}
          total={total}
          setSortValue={setSortValue}
        />
      </ContentWrapper>
    </div>
  );
}

export default FilterPanel;
