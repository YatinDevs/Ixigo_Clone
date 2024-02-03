import React from "react";
import "./style.css";
import Img from "../../../components/lazyLoadImage/Img";
import SearchPanel from "../SearchPanel/SearchPanel";

function HeroBanner() {
  return (
    <div className="heroBanner">
      <div className="banner-Img">
        {/* <Img
          className="w-full object-cover object-center h-full"
          src="https://images.ixigo.com/image/upload/banner/83963788ee686e58841a2f820364e169-rypoa.webp"
        /> */}
      </div>
      {/* <div className="banner-Img ">
        <Img
          className="w-full object-cover object-center h-full"
          src="https://images.ixigo.com/image/upload/banner/454f2e71a29d80524e19dfdf3e68a721-lbvfx.webp"
        />
      </div> */}
      <SearchPanel />
    </div>
  );
}

export default HeroBanner;
