import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useState } from "react";

const InputField = ({
  label,
  placeholder,
  id,
  type,
  selectedValue,
  handleValue,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className={`inputBox flex relative p-0 `}>
      <input
        placeholder={placeholder ? placeholder : "Enter your text"}
        type={type}
        id={id}
        value={inputValue}
        className="w-full relative rounded-lg  focus:outline-none  border-2 border-solid border-slate-200 hover:border-slate-500 focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 "
        onChange={(e) => {
          console.log(e.target.value);
          handleInput(e.target.value);
          autoComplete = "off";
        }}
        autoComplete="off"
      />
    </div>
  );
};

export default InputField;
