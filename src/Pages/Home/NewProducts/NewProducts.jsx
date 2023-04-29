import React, { useEffect } from 'react';
import useProducts from '../../../hooks/Products/useProducts';
import Product from '../../../Products/Product';
import Button from '../../Shared/Button/Button';
import { Link } from 'react-router-dom';

const NewProducts = () => {
    let url=`https://shopping-corner-server.vercel.app/products/?limit=12`
    const {products,dataLoading,fetchData}=useProducts()
    useEffect(()=>{
        fetchData(url)
    },[url])
    return (
        <div className='w-4/5 mx-auto my-24'>
            <h1 className="text-3xl mt-5 mb-2 py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-violet-700">Our New Arrival Products</h1>
            <div className='divider'></div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='mt-4 mb-10 text-right'>
                <Link to={'/products'}><Button type={'button'} value={'Explore more'}></Button></Link>
            </div>
        </div>
    );
};

export default NewProducts;