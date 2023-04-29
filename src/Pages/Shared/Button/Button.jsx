import React from "react";

const Button = ({ type, value }) => {
  return (
    <button
      className=" border-2 px-5 py-2 sm:px-3 sm:py-1 md:px-5 md:py-2 lg:px-5 lg:py-2 rounded-full font-bold btn bg-slate-950 text-white 
                hover:shadow-md hover:shadow-slate-500 hover:bg-slate-950"
      type={type}
    >
      {value}
    </button>
  );
};

export default Button;
