import React from 'react';
import Banner from '../../Components/Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
    );
};

export default Home;