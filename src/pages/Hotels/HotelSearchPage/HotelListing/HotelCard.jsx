import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiRoundStar } from "react-icons/gi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdSpa } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdLocalBar } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdPool } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import dayjs from "dayjs";
import Button from "../../../../components/Buttons/Button";

const HOTEL_AMENITIES = [
  { name: "Spa", Component: <MdSpa /> },
  { name: "Free WiFi", Component: <FaWifi /> },
  { name: "Restaurant", Component: <MdRestaurantMenu /> },
  { name: "Bar", Component: <MdLocalBar /> },
  { name: "Gym", Component: <CgGym /> },
  { name: "Swimming Pool", Component: <MdPool /> },
];

function getRating(rating) {
  if (rating >= 9) return "Exceptional";
  if (rating >= 8) return "Excellent";
  if (rating >= 7) return "Very Good";
  if (rating >= 6) return "Good";
  return "Pleasant";
}

export const CURRENCY_FORMATTER = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

function HotelCard({
  images,
  _id,
  name,
  rating,
  amenities,
  avgCostPerNight,
  childAndExtraBedPolicy,
  houseRules,
  rooms,
  location,
  checkIn,
}) {
  console.log(
    images,
    _id,
    name,
    rating,
    amenities,
    avgCostPerNight,
    childAndExtraBedPolicy,
    houseRules,
    rooms,
    location
  );
  const [open, setOpen] = useState(false);
  const toggleButton = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <>
      <ContentWrapper>
        <div className="mx-2 md:mx-5 rounded-md h-[220px]  flex shadow-md border hover:shadow-lg">
          <div className="m-2 ">
            <img
              src={images[0]}
              className="w-[200px] h-full rounded-md md:w-[250px]"
            />
          </div>
          <div className="flex md:flex-1 flex-row md:flex-row justify-between items-center ">
            <div className="flex flex-col flex-1 gap-1 py-2 px-2">
              <p className="text-xs md:text-lg font-semibold">{name}</p>
              <p className="text-xs md:text-lg font-thin">{location}</p>
              <div className="flex gap-1 md:gap-2 text-xs md:text-lg  items-center text-green-600">
                <IoCheckmarkSharp className="" />
                <p>Free Cancellation till {dayjs(checkIn).format("MMM DD")}</p>
              </div>
              <AmenitiesNrating
                rating={rating}
                amenities={amenities}
                toggleButton={toggleButton}
                open={open}
              />{" "}
            </div>
            <div className=" flex flex-1  flex-col text-xs md:text-lg  ">
              <div className="flex gap-1 flex-col justify-center items-center ">
                <p className="px-1 md:px-2 md:py-1 text-xs md:text-md  md:border-2 rounded-lg w-fit bg-red-100 self-start border-red-400 text-red-400">
                  {rooms.length} rooms left{" "}
                </p>
                {rooms.length > 7 && amenities.length >= 5 && (
                  <p className="px-1 md:px-2 md:py-1 md:border-2 text-xs md:text-md rounded-lg w-fit bg-red-100 self-start border-red-400 text-red-400">
                    Luxorious
                  </p>
                )}
                <p className="text-orange-500 self-start text-md md:text-xl font-semibold p-1 md:p-1">
                  {CURRENCY_FORMATTER(avgCostPerNight)}
                </p>
                <p className="text-gray-500 self-start text-xs p-2">
                  + {CURRENCY_FORMATTER(avgCostPerNight * 0.18)} taxes & fees
                  per night, per room
                </p>
              </div>
              <div className="flex items-center  md:justify-start">
                <Button
                  type={`Book `}
                  // handleClick={handleBook}
                  className="bg-orange-500  rounded-md mx-1 shadow-md text-white hover:bg-orange-600 cursor-pointer py-1 md:py-2 px-2  md:px-6 "
                />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}

export default HotelCard;

function AmenitiesNrating({ rating, amenities, toggleButton, open }) {
  return (
    <div className="flex-1 flex flex-col  gap-1 md:flex-col">
      <div className="flex items-center gap-2 ">
        <div
          className={`flex text-xs md:text-lg items-center gap-0.5 py-1 px-2 w-[35px] md:w-[40px] rounded-md 
            ${
              rating >= 4
                ? "bg-green-500"
                : rating >= 2
                ? "bg-yellow-500"
                : "bg-red-500"
            }
            text-white text-xs`}
        >
          <p className="text-xs md:text-lg font-thin">
            {(rating * 1.9).toFixed(1)}
          </p>
        </div>
        <p className="text-xs md:text-lg font-thin">
          {getRating((rating * 1.9).toFixed(1))}
        </p>
      </div>

      <div className="relative">
        <button
          className="inline-flex items-center gap-1 py-1 px-1 text-xs md:text-lg font-medium bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          onClick={toggleButton}
        >
          <span className="text-xs md:text-lg">Amenities</span>
          <IoIosArrowDown
            className={`transform transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
            size={16}
          />
        </button>
        {open && (
          <div className="absolute z-10 mt-1  bg-white border border-gray-300 shadow-lg">
            {amenities.map((amenitie) => {
              const facility = HOTEL_AMENITIES.find(
                (item) => item.name === amenitie
              );
              return (
                <div
                  key={amenitie}
                  className="flex items-center gap-1 md:gap-4 px-1 py-1 md:py-2 md:px-2 text-xs md:text-lg text-gray-700"
                >
                  {facility ? facility.Component : null}
                  <span>{amenitie}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
