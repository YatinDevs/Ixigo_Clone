import React, { useState, useEffect } from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchPanel from "../SearchPanel/SearchPanel";
import {
  locationImg1Con,
  locationImg1Org,
  locationImg2Con,
  locationImg2Org,
  locationImg3Con,
  locationImg3Org,
  locationImg4Con,
  locationImg4Org,
  locationImg5Con,
  locationImg5Org,
} from "../../../constants";
import "./style.css";
import Advertisement from "../Advertisement/Advertisement";
import flightLogo from "../../../assets/images/homePage/flight-booking.png";

function HeroBanner() {
  const [background, setBackground] = useState("");

  const images = [
    locationImg1Org,

    locationImg2Org,

    locationImg3Org,

    locationImg4Org,

    locationImg5Org,
  ];

  useEffect(() => {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    setBackground(randomImagePath);
  }, []);

  return (
    <div
      style={{
        background: `url(${background}) no-repeat`,
      }}
      className="w-full relative h-[600px] md:h-[600px]  flex items-center bg-center bg-cover "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent  flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <img src={flightLogo} className="" />
          <span className="title text-3xl text-white md:text-6xl font-bold mb-2 md:mb-0">
            Search . Book . Go
          </span>
          <SearchPanel />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
