import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Category/Categories';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Stats></Stats>
        </div>
    );
};

export default Home;