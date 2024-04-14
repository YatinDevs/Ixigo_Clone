import React from "react";

const InputBoxRef = React.forwardRef(
  (
    {
      label,
      placeholder,
      id,
      type,
      className,
      onChange,
      error, // removed ref from here
    },
    ref // added ref here
  ) => {
    return (
      <div className={`relative p-0 ${className} `}>
        <input
          placeholder={placeholder ? placeholder : "Enter your text"}
          id={id}
          type={type}
          onChange={onChange}
          ref={ref} // use the forwarded ref here
          className="w-full relative bg-transparent focus:outline-none border-b-2 border-slate-200 hover:border-orange-500 focus:border-orange-500 font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 "
        />

        <label
          htmlFor={id}
          className={`absolute hover:border-orange-500 focus:border-orange-500 select-none top-[-5px] left-5 px-1 font-medium leading-[18px] text-sm ${
            error ? "text-red-500" : "text-[rgb(119,119,119)]"
          } `}
        >
          {label ? label : "Input"}
        </label>
      </div>
    );
  }
);

export default InputBoxRef;
