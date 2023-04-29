import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/Products/useProducts';

const ProductDetails = () => {
    const [product,setProduct]=useState({})
    const params=useParams()
    const {fetchData,products,dataLoading}=useProducts();
    console.log(products)
    const url =`https://shopping-corner-server.vercel.app/products/${params._id}`
    useEffect(() => {
      fetchData(url)
      }, [params._id]);
      const { _id, name, category, seller, price, img, quantity } = products;
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;