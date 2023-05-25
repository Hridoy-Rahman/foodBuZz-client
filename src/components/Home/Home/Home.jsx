import React from 'react';

import Banner from '../Banner/Banner';
import Chef from '../Chef/chef';
import TopRatedFood from '../TopRatedFood/TopRatedFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopRatedFood></TopRatedFood>
            <Chef></Chef>
        </div>
    );
};

export default Home;