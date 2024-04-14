import React, { useEffect, useRef, useState } from "react";
import trainLogo from "../../../../assets/images/trains/train-booking.png";
import swapSVG from "../../../../assets/svgs/swap.svg";
import irctcLogo from "../../../../assets/images/trains/irctc-logo.webp";
import guaranteeIMG1 from "../../../../assets/images/trains/train-guarantee-1.webp";
import guaranteeIMG2 from "../../../../assets/images/trains/train-guarantee-2.webp";
import guaranteeIMG3 from "../../../../assets/images/trains/train-guarantee-3.webp";
import guaranteeIMG4 from "../../../../assets/images/trains/train-guarantee-4.webp";
import ContentWrapper from "../../../../components/ContentWrapper/ContentWrapper";
import "./style.css";
import SearchTrainPanel from "../SearchTrainPanel/SearchTrainPanel";

function HeroBannerTrain() {
  return (
    <div
      style={{
        background: `url('https://images.ixigo.com/image/upload/misc/f3c5fc0564afd3390b0d7fedfba8e8c2-qsbuo.webp') no-repeat`,
        backgroundSize: "cover",
      }}
      className="w-full relative h-[500px] md:h-[600px]  flex items-center bg-center bg-cover "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent  flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <img src={trainLogo} className="" />
          <span className="title text-3xl text-white md:text-6xl font-bold mb-2 md:mb-0">
            Train Ticket Booking
          </span>
          <SearchTrainPanel />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBannerTrain;
