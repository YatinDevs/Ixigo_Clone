import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./style.css";
import locale from "antd/es/date-picker/locale/en_US";

const DateSelect = ({
  value,
  handleDepartureDate,
  className,
  error,
  labelClass,
}) => {
  return (
    <label className="date relative hover:cursor-pointer w-full ">
      <div
        htmlFor={"id"}
        className={`absolute hover:border-orange-500 focus:border-orange-500  select-none top-[-6px] md:top-[-15px] left-1 px-1 font-medium leading-[18px] text-xs md:text-kg ${
          error ? "text-red-500" : "text-[rgb(119,119,119)]"
        } `}
      >
        Departure
      </div>
      <DatePicker
        locale={locale}
        format={"DD-MM-YYYY"}
        value={dayjs() && dayjs(value)}
        disabledDate={(current) => current && current < dayjs().startOf("day")}
        onChange={(value) => {
          handleDepartureDate(value);
        }}
        allowClear={false}
        className={`w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-xs md:text-xs md:leading-7 text-[rgb(20, 24, 35)] py-2 px-2 md:py-5 md:px-4 ${className} `}
      />
    </label>
  );
};

export default DateSelect;
