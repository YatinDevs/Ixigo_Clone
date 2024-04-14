import React, { useEffect, useRef, useState } from "react";
import bgBus from "../../../assets/images/busoffers/bus-banner.webp";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import BusSearchPanel from "./BusSearchPanel";
import "./style.css";
function BusHeroBanner({ busProp, onSubmitForm }) {
  return (
    <div
      style={{
        background: `url('${bgBus}') no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full relative h-[500px] md:h-[600px]  flex items-center bg-center bg-cover "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent  flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <span className="title text-black text-3xl font-thin md:text-6xl  mb-2 md:mb-0">
            Book Bus Tickets
          </span>
          <BusSearchPanel busProp={busProp} onSubmitForm={onSubmitForm} />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default BusHeroBanner;
