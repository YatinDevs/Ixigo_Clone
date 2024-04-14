import React from "react";
import swapSVG from "../../../../assets/svgs/swap.svg";
import irctcLogo from "../../../../assets/images/trains/irctc-logo.webp";
import guaranteeIMG1 from "../../../../assets/images/trains/train-guarantee-1.webp";
import guaranteeIMG2 from "../../../../assets/images/trains/train-guarantee-2.webp";
import guaranteeIMG3 from "../../../../assets/images/trains/train-guarantee-3.webp";
import guaranteeIMG4 from "../../../../assets/images/trains/train-guarantee-4.webp";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";

function TrainPartners() {
  const guarantees = [
    { img: guaranteeIMG1, text: "₹0 Payment Gateway Fee on Payments via UPI" },
    {
      img: guaranteeIMG2,
      text: "ixigo Assured: Free Cancellation of Train Tickets",
    },
    {
      img: guaranteeIMG3,
      text: "Instant Refund on Indian Railway Reservation Cancellation",
    },
    { img: guaranteeIMG4, text: "24*7 Support for IRCTC Train Ticket Booking" },
  ];
  return (
    <ContentWrapper>
      <div className="p-[32px]">
        <div>
          <h1 className="text-md md:text-2xl font-bold text-center">
            IRCTC Train Ticket Booking on ixigo
          </h1>
          <div className="flex justify-center items-center gap-5 mb-5 mt-2">
            <h4 className="text-md md:text-xl font-thin">
              IRCTC Authorised Partner
            </h4>
            <img src={irctcLogo} className="w-10 md:w-16 h-10 md:h-16" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-[20px] md:mx-[140px]">
          {guarantees?.map((detail) => (
            <div
              className="flex gap-5 justify-center items-center"
              key={detail.text}
            >
              <img src={detail.img} className="w-10 md:w-20 h-10 md:h-20 " />
              <p className="font-bold text-xs md:text-md md:text-xl">
                {detail.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}

export default TrainPartners;
