import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFlightsContext } from "../../../context/FlightsDetailProvider";
import dayjs from "dayjs";
import { fetchBookedFlightDetails } from "../../../apis/flights-page-apis";
import FlightsDetails from "../FlightsSearchPage/FlightsListing/FlightsDetails";
import FlightsBaggage from "../FlightsSearchPage/FlightsListing/FlightsBaggage";
import Button from "../../../components/Buttons/Button";
import UserDetails from "../../Hotels/HotelPaymentPage/UserDetails";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function FlightBookingPage() {
  // console.log(useParams());
  const { searchQuery, bookingInfo } = useParams();

  const extractedEncodedsearchQuery = searchQuery.replace("air-", "");
  const decodedsearchQuery = atob(extractedEncodedsearchQuery);
  const [location, date, counts] = decodedsearchQuery?.split("--");

  const [source, dest] = location?.split("-");
  const [adult, child, infant] = counts?.split("-");

  const [userFlightDetails, setUserFlightDetails] = useState({
    source_location: source,
    dest_location: dest,
    date_of_journey: dayjs(date),
    travel_details: {
      class: "economy",
      numbers: {
        adult: JSON.parse(adult),
        child: JSON.parse(child),
        infant: JSON.parse(infant),
      },
    },
  });
  console.log(userFlightDetails);
  let adults = userFlightDetails.travel_details.numbers.adult;
  let childs = userFlightDetails.travel_details.numbers.child;
  console.log(bookingInfo);
  let [_id, ticketPrice] = bookingInfo.split("--");

  ticketPrice = ticketPrice * adults + (ticketPrice * childs) / 2;

  const extraCharges = (ticketPrice * 0.18 + 309).toFixed(0);

  const finalTicketPrice = JSON.parse(ticketPrice) + JSON.parse(extraCharges);

  const [bookedFlightDetails, setBookedFlightDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    fetchBookedFlightDetails(_id, token)
      .then((res) => {
        console.log(res?.data);
        setBookedFlightDetails(res?.data);
        setIsLoading(false);
      })
      .then((data) => {});
  }, []);
  console.log(bookedFlightDetails);

  const navigate = useNavigate();
  const handlePayment = (e) => {
    const encodedPrice = btoa(JSON.stringify(finalTicketPrice));
    setTimeout(() => {
      navigate(`payment?${encodedPrice}`);
    }, 200);
  };
  return (
    <>
      <ContentWrapper>
        {" "}
        <div className="mt-36 md:mt-20  rounded-md my-2 mx-5">
          <UserDetails />
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-3">
          <div className="col-span-2 border rounded-md my-5 mx-5">
            <div className="m-4">
              <FlightsDetails {...bookedFlightDetails} />
            </div>
            <div className="m-4">
              <FlightsBaggage {...bookedFlightDetails} />
            </div>
          </div>
          <div className="col-span-1 border rounded-md my-5 mx-5">
            <div>
              <div className="flex flex-col m-4">
                <p className="px-2 text-md md:text-xl text-black font-bold">
                  Fare Summary{" "}
                </p>{" "}
                <span className=" px-2 inline-block text-gray-400 text-xs  ">
                  ( travellers {adults} adults & {childs} childrens)
                </span>
              </div>
              <div className="flex justify-between mx-4">
                <p className="text-black text-xs md:text-lg font-semibold p-1 md:p-2">
                  Base Fare
                </p>
                <p className="text-orange-500 text-xs md:text-lg font-semibold p-1 md:p-2">
                  <span>&#x20B9;</span>
                  {ticketPrice}
                </p>
              </div>
              <div className="flex justify-between mx-4">
                <div className="flex flex-col ">
                  <p className="px-2 text-xs md:text-lg font-semibold">
                    Taxes & Fees
                    <span className="inline-block text-gray-400 text-xs  ">
                      (18% GST + Conv. fee ₹309/- per traveller)
                    </span>
                  </p>
                </div>
                <p className="text-orange-500 text-xs md:text-lg font-semibold p-1 md:p-2">
                  <span>&#x20B9;</span>
                  {extraCharges}
                </p>
              </div>
              <div className="flex justify-between mx-4">
                <p className="text-black text-xs md:text-lg font-semibold p-1 md:p-2">
                  Total Fare
                </p>
                <p className="text-orange-500 text-xs md:text-lg font-semibold p-1 md:p-2">
                  <span>&#x20B9;</span>
                  {finalTicketPrice}
                </p>
              </div>
              <div className="mx-4 m-4 md:m-4">
                <Button
                  type={`MAKE PAYMENT `}
                  handleClick={handlePayment}
                  className="bg-orange-500 w-full text-xs md:text-lg rounded-md  shadow-md text-white hover:bg-orange-600 cursor-pointer py-2 md:py-2 px-4  md:px-6 "
                />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}

export default FlightBookingPage;
