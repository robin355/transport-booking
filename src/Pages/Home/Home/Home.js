import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CetagorieDescrip from '../Cetagories/CetagorieDescrip';
import Contract from '../Contract/Contract';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CetagorieDescrip></CetagorieDescrip>
            <About></About>
            <Contract></Contract>
        </div>
    );
};

export default Home;