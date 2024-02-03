import React from "react";
import Carousel2 from "../../../components/Carousel/Carousel2";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const whydetails = [
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2Fd342d760405178f20c83ec4f96212be7-riwbq.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2F469668e2505b963e09eb337ac304719f-lgamx.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2Fe59d86d72e215897f82d703eaa497d83-azyhc.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2F91c2fbfdc90c2d2c28bc3b5bb8fe92b8-ypgav.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2Fcb85f0f9d5413f6eec07c95d304a1679-gduui.png&w=640&q=75",
  },
  {
    img: "https://www.ixigo.com/vimaan/_next/image?url=https%3A%2F%2Fimages.ixigo.com%2Fimage%2Fupload%2Fwhybook%2F83773706a371de71cf6bebbfab043b30-qveui.png&w=640&q=75",
  },
];
function WhyIxigo() {
  return (
    <div className="bg-white  pt-[30px] pb-[20px]  ">
      <div className="bg-white py-[10px]">
        <Carousel2 data={whydetails} />
      </div>
    </div>
  );
}

export default WhyIxigo;
