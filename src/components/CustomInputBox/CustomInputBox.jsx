import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

const CustomInputBox = ({
  label,
  placeholder,
  id,
  type,
  handleInput,
  value,
  error,
  className,
  labelClass,
  inputRef,
}) => {
  return (
    <div className={`relative p-0 ${className} `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        ref={label == "Password" ? inputRef : null}
        value={value}
        autoComplete="off"
        className={`w-full relative rounded-lg  focus:outline-none hover:border-orange-500 border-2 border-solid   focus:border-orange-500 font-medium text-xs md:text-lg leading-7 text-[rgb(20, 24, 35)] py-2 px-4 md:py-4 md:px-4 ${className} ${
          error ? "border-red-500" : "border-slate-200 hover:border-slate-500"
        }`}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <label
        htmlFor={"id"}
        className={`absolute -top-3 text-xs md:text-lg left-3 px-1 rounded bg-[#fff] text-[rgb(119,119,119)] font-medium leading-[18px]  z-[2] ${labelClass}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInputBox;
