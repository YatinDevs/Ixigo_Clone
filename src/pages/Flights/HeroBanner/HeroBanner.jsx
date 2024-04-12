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

function HeroBanner() {
  const [background, setBackground] = useState("");

  const images = [
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
  ];

  useEffect(() => {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    setBackground(randomImagePath);
  }, []);

  return (
    <div
      style={{
        background: `url(${background})`,
      }}
      className="w-full imgBack relative h-[600px] md:h-[600px] flex items-center "
    >
      <div className="absolute w-full "></div>
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent text-white flex flex-col items-center justify-center relative max-w-screen-xl mx-auto">
          <span className="title text-3xl md:text-6xl font-bold mb-2 md:mb-0">
            Search . Book . Go
          </span>
          <SearchPanel />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
