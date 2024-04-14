import React from "react";

function OfferCard({
  lobDisplayText,
  newHeroOfferCardUrl,
  heroUrl,
  newHeroUrl,
  hero,
  pTl,
  pTx,
}) {
  // title description of the offer in each card
  // nav arrows in carousel
  return (
    <div className="max-w-[280px] w-[200px] md:w-[350px] md:max-w-[350px]  h-[250px] md:h-[340px] bg-white  shrink-0 rounded-lg overflow-hidden shadow-md  ">
      <div className="max-w-full w-full flex text-xs md:text-lg flex-col">
        <div className="w-full">
          <img
            src={newHeroOfferCardUrl || newHeroUrl}
            alt={pTl}
            className="rounded-md bg-orange-600 w-full h-[120px] md:h-[160px] object-cover object-center"
          />
        </div>
        <div className="details p-2  text-left w-full text-ellipsis overflow-hidden ">
          <h2 className="font-medium text-xs md:text-lg capitalize text-slate-400  pb-1">
            {lobDisplayText.toLowerCase()}{" "}
          </h2>
          <h3 className="font-medium text-xs md:text-lg text-wrap truncate pb-1 ">
            {pTl}
          </h3>
          <p className=" text-slate-500 text-wrap text-xs md:text-lg text-clip pt-1 overflow-hidden">
            {pTx}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
{
  /* <section className=" max-w-[20rem] w-[20rem] md:w-[476px] md:max-w-[476px]  h-[220px]  m-2 border rounded-lg hover:shadow-all shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300">
<div className=" max-w-full w-full h-4/5  flex">
  <img
    src={newHeroOfferCardUrl || newHeroUrl}
    alt={pTl}
    className="m-2 rounded-md bg-red-800 flex-grow-0 aspect-square"
  />
  <div className="details p-2  text-left w-full text-ellipsis overflow-hidden ">
    <h2 className="font-medium capitalize text-slate-400 text-base pb-1">
      {lobDisplayText.toLowerCase()}{" "}
    </h2>
    <h3 className="font-medium text-lg text-wrap truncate pb-1 ">
      {pTl}
    </h3>
    <p className=" text-slate-500 text-wrap text-clip pt-1">{pTx}</p>
  </div>
</div>
<div className="w-full my-2 p-1 border-t-2 border-dotted font-medium text-lg text-blue-500 hover:bg-blue-100 transition-all duration-300">
  <a href="https://www.goibibo.com/offers/">View Details</a>
</div>
</section> */
}
