import React from 'react';

import Banner from '../Banner/Banner';
import Chef from '../Chef/chef';
import TopRatedFood from '../TopRatedFood/TopRatedFood';
import AboutUs from '../../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <TopRatedFood></TopRatedFood>
            <Chef></Chef>
        </div>
    );
};

export default Home;