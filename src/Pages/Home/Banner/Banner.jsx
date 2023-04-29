import React from "react";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  return (
    <div className="bg-emerald-300 relative">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 justify-around items-center w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h4 className="text-md mb-2 font-bold text-violet-600">
                Get Your Collection
              </h4>
              <h1 className="text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">
                Exclusive Collection For Everyone
              </h1>
              <div className="mt-12">
                <Button type={"button"} value={"Explore Now"}></Button>
              </div>
            </div>
            <img src={banner1} className="w-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 justify-around items-center  w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h4 className="text-md mb-2 font-bold text-violet-600">
                Get Your Collection
              </h4>
              <h1 className="text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">
                Exclusive Collection For Everyone
              </h1>
              <div className="mt-12">
                <Button type={"button"} value={"Explore Now"}></Button>
              </div>
            </div>
            <img src={banner2} className="w-full" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="grid grid-cols-1 justify-around items-center w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h4 className="text-md mb-2 font-bold text-violet-600">
                Get Your Collection
              </h4>
              <h1 className="text-5xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">
                Exclusive Collection For Everyone
              </h1>
              <div className="mt-12">
                <Button type={"button"} value={"Explore Now"}></Button>
              </div>
            </div>
            <img src={banner3} className="w-full lg:translate-y-20" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
