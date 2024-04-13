import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "./style.css";
import locale from "antd/es/date-picker/locale/en_US";
const DateSelect = ({ value, handleDepartureDate, className, labelClass }) => {
  return (
    <label className="date relative hover:cursor-pointer w-full ">
      <label
        htmlFor={"id"}
        className={`absolute -top-2 left-3 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px] text-sm z-[2]`}
      >
        Departure
      </label>
      <DatePicker
        locale={locale}
        format={"DD-MM-YYYY"}
        value={dayjs() && dayjs(value)}
        disabledDate={(current) => current && current < dayjs().startOf("day")}
        onChange={(value) => {
          handleDepartureDate(value);
        }}
        allowClear={false}
        className={`w-full  relative rounded-lg focus:outline-none font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
         ${className} `}
      />
    </label>
  );
};

export default DateSelect;
