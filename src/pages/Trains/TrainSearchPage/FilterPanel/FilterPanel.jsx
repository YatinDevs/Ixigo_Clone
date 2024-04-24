import React from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import FilterTrains from "./FilterTrains";
import SortSection from "./SortSection";

function FilterPanel({
  results,
  total,
  setSortValue,
  setPage,
  setSort,
  filter,
  setFilter,
  handleFilter,
}) {
  return (
    <div className="w-full mb-5 bg-white ">
      <ContentWrapper>
        <FilterTrains
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
