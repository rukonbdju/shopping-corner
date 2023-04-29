import React from 'react';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';
import Products from '../Products/Products';
import { Outlet } from 'react-router-dom';

const ProductsLayout = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default ProductsLayout;