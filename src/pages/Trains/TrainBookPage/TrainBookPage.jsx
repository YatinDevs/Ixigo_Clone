import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchBookedTrainDetails } from "../../../apis/trains-page-apis";
import dayjs from "dayjs";
import UserDetails from "../../Hotels/HotelPaymentPage/UserDetails";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import { FaArrowRightLong } from "react-icons/fa6";

function TrainBookPage() {
  console.log(useLocation());
  const { state } = useLocation();
  const { departureDate, fare, trainId, coachType } = state;
  console.log(departureDate, fare, trainId);

  const [bookedTrainDetails, setBookedTrainDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    fetchBookedTrainDetails(trainId, token)
      .then((res) => {
        console.log(res?.data);
        setBookedTrainDetails(res?.data);
        setIsLoading(false);
      })
      .then((data) => {});
  }, []);
  console.log(bookedTrainDetails);

  const formatDate = (dateString) => {
    const date = dayjs(dateString);
    const formattedDate = date.format("ddd D MMM");
    return formattedDate;
  };
  return (
    <div className="mt-32 md:mt-16">
      <div className="w-full searchpanel">
        <ContentWrapper>
          <div className="mx-5 flex p-2  flex-col text-center text-white">
            <div>Booking Details :</div>
            <div className="flex justify-center items-center gap-2">
              {bookedTrainDetails.source} <FaArrowRightLong />{" "}
              {bookedTrainDetails.destination}{" "}
            </div>
            <div> </div>
            <p className=" ">{formatDate(departureDate)}</p>
          </div>
        </ContentWrapper>
      </div>
      <ContentWrapper>
        <div className="mx-5 text-xs md:text-lg bg-white p-5">
          <div className="bg-gray-300 p-4 font-semibold border ">
            <h1>BOOKING DETAILS</h1>
          </div>
          <div className="border flex justify-between p-5 text-xs md:text-lg">
            <div>
              <span>&#x20B9; {fare} per seat </span>
            </div>
            <div className="border p-2 self-center rounded-lg bg-gray-100">
              <span> {coachType}</span>
            </div>
            <div>{bookedTrainDetails.availableSeats} Seats Available</div>
          </div>
          <div className="border  p-4">
            <div>
              {" "}
              <p className=" text-xs md:text-lg text-left mx-10 p-2 ">
                {formatDate(departureDate)}
              </p>
            </div>
            <div className="flex gap-2  w-full text-xs md:text-lg">
              <div className="text-xs md:text-lg text-gray-700 gap-1  md:mx-10 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-xs md:text-lg text-center">
                  {bookedTrainDetails.source}
                </p>

                <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
                  {bookedTrainDetails.arrivalTime}
                </p>
              </div>

              <div className="flex flex-col justify-center  items-center text-center text-xs md:text-lg w-full">
                <div className="border-b-2 border-slate-500 text-center w-full text-xs md:text-lg text-gray-700 justify-center  font-thin flex flex-col ">
                  {bookedTrainDetails.travelDuration} hours
                </div>
                <div className="text-xs md:text-lg text-gray-700 justify-center text-center font-thin flex flex-col p-1 md:p-4"></div>
              </div>
              <div className="text-xs md:text-lg md:mx-10 text-gray-700 gap-1 justify-center font-thin flex flex-col p-1 md:p-4">
                <p className="inline-block text-xs md:text-lg text-center">
                  {bookedTrainDetails.destination}
                </p>

                <p className="inline-block text-black font-semibold text-xs md:text-lg text-center">
                  {bookedTrainDetails.departureTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 text-xs md:text-lg bg-white p-5">
          <div className="bg-gray-300 p-4 font-semibold border ">
            <h1>TRAVELLERS</h1>
            <span className="text-xs">
              (Seats are not allotted or mentioned in the ticket for infant
              passengers(0-4 years),as no booking amount is charged)
            </span>
          </div>
          <UserDetails finalfare={fare} />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default TrainBookPage;
