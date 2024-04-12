import React from "react";
import { FLIGHT_SEARCH_PANNEL_SPECIAL_FARES } from "../../../constants";
import { Tooltip, Button } from "antd";
function SpecialFares() {
  console.log(FLIGHT_SEARCH_PANNEL_SPECIAL_FARES);
  return (
    <div className=" px-5 py-2 flex flex-col md:flex-row">
      <p className="text-slate-500 text-center self-center">
        Special Fares(Coming Soon):{" "}
      </p>
      <div className="flex gap-2 m-2">
        {FLIGHT_SEARCH_PANNEL_SPECIAL_FARES.map((details) => (
          <Tooltip
            key={details.title}
            placement="topLeft"
            title={
              <div>
                <img src={details.logo} />
                <p>
                  {details.header.pre} {details.header.mid}{" "}
                  {details.header.post}
                </p>
                <p>{details.body}</p>
              </div>
            }
          >
            <Button className="flex justify-center items-center">
              <img src={details.logo} className="inline" />
              {details.title}
            </Button>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default SpecialFares;
