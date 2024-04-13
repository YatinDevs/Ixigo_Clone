import React from "react";

const Button = ({ type, className, handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className={`${className} uppercase transition-all `}
    >
      {type}
    </button>
  );
};

export default Button;
