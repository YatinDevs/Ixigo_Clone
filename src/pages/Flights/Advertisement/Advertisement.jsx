import React from "react";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function Advertisement() {
  return (
    <ContentWrapper>
      <div className="max-w-[1440px]  rounded-2xl overflow-hidden shadow-lg mx-2 h-[64px] md:h-fit md:mx-10 my-10">
        {/* // Ad */}
        <img
          src={
            "https://images.ixigo.com/image/upload/a/5a1ada722ed472c9192c3637d9624303-suxez.png"
          }
          className="w-full h-full object-fit object-center"
          alt="advertisment"
        />
      </div>
    </ContentWrapper>
  );
}

export default Advertisement;
