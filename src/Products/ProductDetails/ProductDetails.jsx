import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product,setProduct]=useState({})
    const params=useParams()
    console.log(params)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `http://localhost:5000/products/${params._id}`
            );
            const data = await response.json();
            setProduct(data);
          } catch {
            (err) => console.log(err);
          }
        };
        fetchData()
    
      }, [params._id]);
    return (
        <div>
            {product?.name}
        </div>
    );
};

export default ProductDetails;