import { Content } from "antd/es/layout/layout";
import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import { FaMapMarkerAlt } from "react-icons/fa";

function getRating(rating) {
  if (rating >= 9) return "Exceptional";
  if (rating >= 8) return "Excellent";
  if (rating >= 7) return "Very Good";
  if (rating >= 6) return "Good";
  return "Pleasant";
}
function OverviewSection({ images, name, location, rating, rooms }) {
  console.log(rooms);
  return (
    <div className="" id="overviewSection">
      <ContentWrapper>
        <div className=" p-4 md:p-10 border rounded-lg mx-2 md:mx-auto">
          <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-10 py-2">
            {images &&
              images.map((src, index) => (
                <div
                  key={index}
                  className={`rounded-lg ${
                    index === 0
                      ? "col-span-2 row-span-2 h-[300px] md:h-[600px]"
                      : "h-[145px] md:h-[280px]"
                  }`}
                >
                  <img
                    loading="lazy"
                    src={src}
                    className="object-cover w-full h-full rounded-lg"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
          </div>

          <div className="flex gap-2 flex-col md:p-5">
            <div className="flex flex-col">
              <h1 className="title font-bold text-slate-800 text-md md:text-3xl">
                {name}
              </h1>
              <div className="flex gap-4 items-center">
                <p className="text-blue-500 bg-gray-100 w-fit p-1 rounded-md text-xs md:text-lg">
                  {(rating * 1.9).toFixed(1)}
                </p>
                <p className="text-blue-500 text-xs md:text-lg">
                  {getRating((rating * 1.9).toFixed(1))}
                </p>
              </div>
            </div>
            <div className="location text-orange-500 flex gap-2">
              <FaMapMarkerAlt size={22} />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default OverviewSection;
