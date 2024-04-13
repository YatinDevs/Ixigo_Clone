import React from "react";

const Button = ({ type, className, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} uppercase transition-all `}
    >
      {type}
    </button>
  );
};

export default Button;
