import React, { useState } from 'react';

const useProducts = () => {
    const[products,setProducts]=useState([]);
    const [dataLoading,setDataLoading]=useState(false)
    const fetchData = async (url) => {
        try {
            setProducts([])
            setDataLoading(true)
            const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
                setDataLoading(false)
        } catch {
          //(err) => console.log(err);
        }
      };
    return {products,fetchData,dataLoading}
};

export default useProducts;