import React, { useState } from "react";
import { BiCloset } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Counter from "../Counter/Counter";

const TravellersCount = ({ value, handleValue, className, error }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(value);
  return (
    <div
      className={`text-left ${className}   relative border-b-2  p-0 mt-3 md:m-3 w-full hover:border-b-orange-500 cursor-pointer ${
        showMenu ? "border-b border-b-orange-500" : ""
      } `}
      onClick={() => {
        setShowMenu(true);
      }}
    >
      <p className="font-medium leading-0 px-4 pt-2 m-0 text-xs md:text-lg">
        {value?.numbers?.adult} {value?.numbers?.adult > 1 ? "Adults" : "Adult"}
        {value?.numbers?.child > 0
          ? value?.numbers?.child > 1
            ? ", " + value?.numbers?.child + " Children"
            : ", " + value?.numbers?.child + " Child"
          : ""}
        {value?.numbers?.infant > 0
          ? value?.numbers?.infant > 1
            ? ", " + value?.numbers?.infant + " Infants"
            : ", " + value?.numbers?.infant + " Infant"
          : ""}
      </p>
      <span className="py-0 px-4 m-0 font-thin text-xs capitalize">
        {value?.class}
      </span>

      <label
        htmlFor={"id"}
        className={`absolute hover:border-orange-500 focus:border-orange-500  select-none top-[-6px] md:top-[-5px] left-1 px-1 font-medium leading-[18px] text-xs md:text-md ${
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        } `}
      >
        Travellers & Class
      </label>

      <div
        className={`counter absolute top-20 -left-1 bg-white rounded shadow-all w-[250px] md:w-96 p-4 px-8 z-[2] flex flex-col md:right-0 md:left-auto  transition-all duration-500 origin-top-left md:origin-top-right ${
          showMenu ? "scale-100 " : "scale-0"
        }`}
      >
        <button
          className="close text-black shadow-all text-center flex items-center justify-center w-6 h-6 bg-white absolute -top-3 -right-3 rounded-full"
          onClick={() => {
            // console.log("clicked cross");
            setTimeout(() => {
              setShowMenu((prev) => {
                // console.log("click", prev);
                return false;
              });
            }, 0);
          }}
        >
          <MdClose />
        </button>
        <Counter
          name="Adults"
          desc="(Aged 12+ yrs)"
          count={value?.numbers?.adult}
          disabledNeg={value?.numbers?.adult == 1}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.infant ===
            9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "adult");
          }}
        />
        <Counter
          name="Children"
          desc="(Aged 2-12 yrs)"
          count={value?.numbers?.child}
          disabledNeg={value?.numbers?.child == 0}
          disabledPos={
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.infant ==
            9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "child");
          }}
        />
        <Counter
          name="Infants"
          desc="(Below 2 yrs)"
          count={value?.numbers?.infant}
          disabledNeg={value?.numbers?.infant == 0}
          disabledPos={
            value?.numbers?.adult <= value?.numbers?.infant ||
            value?.numbers?.adult +
              value?.numbers?.child +
              value?.numbers?.infant ==
              9
          }
          handleClick={(secondType) => {
            handleValue(secondType, "infant");
          }}
        />
      </div>
    </div>
  );
};

export default TravellersCount;
