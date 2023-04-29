import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import NewProducts from './NewProducts/NewProducts';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <NewProducts></NewProducts>
        </>
    );
};

export default Home;