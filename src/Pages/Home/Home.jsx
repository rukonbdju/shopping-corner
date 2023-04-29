import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import NewProducts from './NewProducts/NewProducts';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <NewProducts></NewProducts>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;