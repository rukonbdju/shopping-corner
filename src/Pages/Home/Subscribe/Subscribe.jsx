import React from "react";
import subscribe from "../../../assets/images/subscribe.png";
import bgPoint from "../../../assets/images/bg-points.svg";
import Button from "../../Shared/Button/Button";

const Subscribe = () => {
  return (
    <div className=" relative w-4/5 mx-auto p-5 my-24 rounded-xl justify-items-center items-center shadow-xl grid grid-col-1 lg:grid-cols-2 gap-5 bg-emerald-300">
      <div className="absolute top-0 left-0 z-20">
        <img src={bgPoint} alt="" />
      </div>
      <div className="-mt-24 z-30">
        <img src={subscribe} alt="" />
      </div>
      <div className="z-30">
        <h1 className="text-xl lg:text-3xl mb-5">Don't miss our special offer!!!</h1>
        <div>
          <input
            type="text"
            placeholder="email"
            className="input-sm lg:input-md input-bordered rounded-full mr-2 mb-2 max-w-lg"
          />
            <Button type={"button"} value={"Subscribe"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
