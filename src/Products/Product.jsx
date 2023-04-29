import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, category, seller, price, img } = product;
  return (
    <div className="border-2 group p-2 hover:shadow-2xl cursor-pointer shadow-gray-300 hover:shadow-gray-500 rounded">
      <div className="relative">
        <div
          data-tip="Add to cart"
          className="absolute tooltip top-2 right-2 hidden group-hover:block"
        >
          <div className="btn rounded-full btn-outline btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
        <img className="rounded mb-5" src={img} alt="s" />
      </div>
        <h1 className="text-sm ">
          {category}
          <small className="badge inline-block mx-1 badge-outline">{seller}</small>
        </h1>
        <h1 className="text-xl font-bold">{name.slice(0,18)}</h1>
        <div className="flex flex-row justify-between mt-4">
          <h1 className="text-md btn btn-outline btn-sm font-bold">${price}</h1>
          <Link to={_id} className="text-md btn btn-outline btn-sm font-bold">
            View details
          </Link>
        </div>
    </div>
  );
};

export default Product;
