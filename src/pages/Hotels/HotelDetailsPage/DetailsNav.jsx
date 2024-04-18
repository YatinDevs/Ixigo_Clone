import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function DetailsNav() {
  return (
    <div className="tabs w-full mx-auto  md:8/12 sticky top-16 h-12 bg-white z-10 ">
      <ContentWrapper>
        <div className="nav-links font-semibold text-gray-500 flex justify-start  md:w-6/12 px-2 h-10 items-start text-center">
          <div className="h-full w-full text-left py-2 px-5 hover:shadow-even nav-item">
            <a href="#overviewSection" className="">
              Overview
            </a>
          </div>
          <div className="h-full w-full text-left py-2 hover:shadow-even nav-item">
            <a href="#roomsSection">Rooms</a>
          </div>
          <div className="h-full w-full text-left py-2 hover:shadow-even nav-item">
            <a href="#policiesSection">Policies</a>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default DetailsNav;
