import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Boss from './Boss';
import PopularMenu from './PopularMenu';
import Call from '../../components/Call';
import Recommand from './Recommand';
import Featured from './Featured';
import Testimonials from './Testmonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                        <title>Bistro Boss | Home</title>
                       </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Recommand></Recommand>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;