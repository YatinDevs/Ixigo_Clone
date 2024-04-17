import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

function CarouselWhy({ data, loading, endpoint, title }) {
  // console.log(data);
  const carouselContainer = useRef();

  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    let count = 0;
    count = count + 1;
    return (
      <div className="w-[300px] h-[250px] shrink-0 border-none max-md:w-[270px] max-md:h-[180px] bg-red-200 rounded-2xl">
        {count}
      </div>
    );
  };

  return (
    <div className="relative w-full mx-4  ">
      <ContentWrapper className="relative">
        <IoMdArrowBack
          className="carouselLeftNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[60%] md:block transition-all hover:scale-110 left-6 shadow-even"
          onClick={() => navigation("left")}
        />
        <IoMdArrowForward
          className="carouselRightNav arrow text-2xl text-black bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[60%] md:block transition-all hover:scale-110 right-6 shadow-even"
          onClick={() => navigation("right")}
        />
        <h1 className="text-left text-md md:text-xl  font-semibold  ">
          Why Book Hotels With ixigo?
        </h1>
        {!loading ? (
          <div
            className="carouselItems flex gap-2.5 sm:gap-5 py-[10px] mx-auto overflow-x-scroll overflow-y-hidden "
            ref={carouselContainer}
          >
            {data?.map((data) => {
              return (
                <div
                  key={data.src}
                  className="shadow-md hover:shadow-xl cursor-pointer w-[300px] h-[100px] shrink-0 border-none max-md:w-[150px] max-md:h-[80px] bg-red-200 rounded-2xl"
                >
                  <img
                    src={data.src}
                    className="rounded-2xl md:w-[300px] h-[100px] max-md:w-[150px] max-md:h-[80px]"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default CarouselWhy;
