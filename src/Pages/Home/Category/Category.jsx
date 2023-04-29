import React from "react";
import Button from "../../Shared/Button/Button";
import sneaker from "../../../assets/images/sneaker.svg";
import earphone from "../../../assets/images/earphone.svg";
import accessories from "../../../assets/images/accessories.svg";

const Category = () => {
  return (
    <div data-theme="light" className="w-4/5 mx-auto my-10 bg-opacity-0">
      <div className="grid grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        <div className="p-4 shadow-xl rounded flex flex-row items-center gap-5 bg-gradient-to-r from-sky-300 to-sky-200">
          <div>
            <p className="text-md  text-orange-600">Exclusive</p>
            <h2 className="text-2xl">Sneaker Collection</h2>
            <div className="mt-4">
              <Button type={"button"} value={"Explore"}></Button>
            </div>
          </div>
          <div>
            <img src={sneaker} alt="" />
          </div>
        </div>
        <div className=" p-4 shadow-xl rounded flex flex-row items-center gap-5 bg-gradient-to-r from-orange-300 to-orange-100">
          <div>
            <p className="text-md text-orange-600">Exclusive</p>
            <h2 className="text-2xl">Earphone Collection</h2>
            <div className="mt-4">
              <Button type={"button"} value={"Explore"}></Button>
            </div>
          </div>
          <div>
            <img src={earphone} alt="" />
          </div>
        </div>
        <div className=" p-4 shadow-xl rounded flex flex-row items-center gap-5 bg-gradient-to-r from-violet-400 to-violet-300">
          <div>
            <p className="text-md  text-orange-600">Exclusive</p>
            <h2 className="text-2xl">Accessories Collection</h2>
            <div className="mt-4">
              <Button type={"button"} value={"Explore"}></Button>
            </div>
          </div>
          <div>
            <img src={accessories} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
