import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function WhyBus() {
  return (
    <ContentWrapper>
      <div className="p-10">
        <div className=" p-2 rounded-md bg-slate-50">
          <h1 className="text-md md:text-xl font-bold mx-2 my-2">
            Why Choose ixigo for Bus Ticket Booking?
          </h1>
          <p className="text-md md:text-xl font-thin mx-2">
            ixigo Bus Booking is powered by AbhiBus which is India’s fastest
            growing online ticket booking platform. AbhiBus is the official
            ticketing partner of several State Road Transport Corporation (SRTC)
            operators and over 3500+ private bus partners covering more than
            100,000 bus routes
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default WhyBus;
