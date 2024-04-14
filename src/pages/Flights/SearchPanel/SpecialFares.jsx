import React from "react";
import { FLIGHT_SEARCH_PANNEL_SPECIAL_FARES } from "../../../constants";
import { Tooltip, Button } from "antd";
function SpecialFares() {
  console.log(FLIGHT_SEARCH_PANNEL_SPECIAL_FARES);
  return (
    <div className=" px-0 py-2 md:py-2 md:px-5 flex flex-col md:flex-row">
      <p className="text-slate-500 text-center text-xs md:text-lg self-center">
        Special Fares(Coming Soon):{" "}
      </p>
      <div className="flex gap-2 m-2 flex-col md:flex-row">
        {FLIGHT_SEARCH_PANNEL_SPECIAL_FARES.map((details) => (
          <Tooltip
            key={details.title}
            placement="topLeft"
            title={
              <div className="">
                <img src={details.logo} />
                <p>
                  {details.header.pre} {details.header.mid}{" "}
                  {details.header.post}
                </p>
                <p>{details.body}</p>
              </div>
            }
          >
            <Button className="flex text-xs md:text-xs gap-1 justify-center items-center">
              <img src={details.logo} className="inline w-5 h-4" />
              {details.title}
            </Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default SpecialFares;
