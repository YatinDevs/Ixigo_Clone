import { Checkbox, Select, Slider } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";

const Filter = ({
  setFilter,
  filter,
  handleFilter,
  results,
  setSortValue,
  total,
}) => {
  const [priceRange, setPriceRange] = useState([200, 4000]);

  return (
    <div className="w-full mb-5 bg-white ">
      <ContentWrapper>
        <div className="flex md:flex-row  flex-col  justify-evenly mx-5">
          <div className="max-md:border-b md:border-l mb-2 p-2">
            <h1 className="font-medium ">Stops</h1>
            <Checkbox.Group
              className="px-4 flex flex-col gap-4 my-4 flex-wrap mx-auto justify-center items-start"
              onChange={(value) => {
                // console.log(value);
                handleFilter("stops", value);
              }}
              options={[
                {
                  label: "Non-Stop",
                  value: 0,
                },
                {
                  label: "1 Stop",
                  value: 1,
                },
                {
                  label: "2 Stop",
                  value: 2,
                },
              ]}
            ></Checkbox.Group>
          </div>
          <div className="max-md:border-b md:border-l mb-2 p-2">
            <h1 className="font-medium  ">Duration</h1>
            <Checkbox.Group
              className="px-4 flex flex-col gap-4 my-4 flex-wrap mx-auto justify-center items-start"
              onChange={(value) => {
                // console.log(value);
                handleFilter("duration", value);
              }}
              options={[
                {
                  label: "EARLY MORNING 2 hour",
                  value: 2,
                },
                {
                  label: "MID DAY 3 hours",
                  value: 3,
                },
                {
                  label: "NIGHT 4 hours",
                  value: 4,
                },
                {
                  label: "MORNING 6 hours",
                  value: 6,
                },
              ]}
            ></Checkbox.Group>
          </div>

          <div className="max-md:border-b md:border-l w-full md:w-[300px]  mb-2 p-2 ">
            <h1 className="font-medium ">
              Max Price{" "}
              <span className="text-xs text-slate-500 font-normal"></span>
            </h1>

            <Slider
              range={{ draggableTrack: true }}
              defaultValue={priceRange}
              min={200}
              max={4000}
              className="w-11/12 mx-auto"
              onChangeComplete={(value) => {
                // console.log(value);
                setPriceRange(value);
                handleFilter("price", value);
              }}
            />
            <div className="flex justify-between mt-4">
              <span className="text-sm bg-slate-200 bg-opacity-75 p-1 rounded-lg ">
                {priceRange[0]}
              </span>{" "}
              <span className="text-sm bg-slate-200 bg-opacity-75 p-1 rounded-lg ">
                {priceRange[1]}
              </span>{" "}
            </div>
          </div>
          <div className="sort max-md:border-b md:border-l mb-2 p-2">
            {
              <span className="text-xs px-6 my-2 inline-block text-slate-400">
                {results
                  ? `Showing ${results} of ${total}`
                  : "No Results Found"}
              </span>
            }

            <Select
              defaultValue="Select to Sort"
              className="min-w-32"
              label="Sort"
              onClear={() => {
                setSortValue("{}");
              }}
              allowClear={true}
              onChange={(value) => {
                // console.log(value);
                setSortValue(value);
              }}
              options={[
                {
                  value: JSON.stringify({ ticketPrice: 1 }),
                  label: <SortLabel heading="Price" subheading="Low to High" />,
                },
                {
                  value: JSON.stringify({ ticketPrice: -1 }),
                  label: <SortLabel heading="Price" subheading="High to Low" />,
                },
                {
                  value: JSON.stringify({ departureTime: 1 }),
                  label: (
                    <SortLabel
                      heading="Departure Time"
                      subheading="Low to High"
                    />
                  ),
                },
                {
                  value: JSON.stringify({ departureTime: -1 }),
                  label: (
                    <SortLabel
                      heading="Departure Time"
                      subheading="High to Low"
                    />
                  ),
                },
                {
                  value: JSON.stringify({ arrivalTime: 1 }),
                  label: (
                    <SortLabel heading="Arrival Time" subheading="Low toHigh" />
                  ),
                },
                {
                  value: JSON.stringify({ arrivalTime: -1 }),
                  label: (
                    <SortLabel
                      heading="Arrival Time"
                      subheading="High to Low"
                    />
                  ),
                },
                {
                  value: JSON.stringify({ duration: 1 }),
                  label: (
                    <SortLabel heading="Duration" subheading="Low to High" />
                  ),
                },
                {
                  value: JSON.stringify({ duration: -1 }),
                  label: (
                    <SortLabel heading="Duration" subheading="High to Low" />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Filter;

const SortLabel = ({ heading, subheading }) => {
  return (
    <span className="font-medium">
      {heading}{" "}
      <span className="font-normal text-slate-400 text-xs">({subheading})</span>{" "}
    </span>
  );
};
