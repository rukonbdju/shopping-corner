import React from 'react';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;