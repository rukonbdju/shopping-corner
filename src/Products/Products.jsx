import React, { useEffect, useState } from "react";
import Product from "./Product";
import Placeholder from "../Pages/Shared/Placeholder/Placeholder";
import useProducts from "../hooks/Products/useProducts";

const Products = () => {
  const categories = [
    "All",
    "Men's Sneaker",
    "Men's Pants",
    "Men's Boot",
    "Bag",
    "Cap",
    "Earphones",
    "Bottle",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const handleActiveButton = (category) => {
    setActiveCategory(category);
  };

  const {fetchData,products,dataLoading}=useProducts()
  let url=`https://shopping-corner-server.vercel.app/products/category/${activeCategory}`

  useEffect(() => {
    fetchData(url)
  }, [activeCategory]);
  return (
    <>
      <div>
        <div className="w-4/5 mx-auto my-10">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-blue-700 xl:text-5xl">All Collection For You</h1>
          <p className="text-md my-5">
            You can find product by select the category listed below
          </p>
          <div className="flex flex-row overflow-x-hidden gap-4 mt-5">
            {categories.map((category) => (
              <button
                className={`btn btn-sm font-thin text-sm lg:text-md rounded-full ${
                  !(activeCategory == category) && "btn-outline"
                }`}
                onClick={() => handleActiveButton(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="divider text-state-900"></div>
        </div>
      </div>
      <div className="grid my-12 w-4/5 mx-auto  grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
        {dataLoading &&categories.map(c=><Placeholder key={c}></Placeholder>)}
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
