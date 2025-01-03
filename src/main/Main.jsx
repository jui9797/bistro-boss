import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Main = () => {
    const location =useLocation()

    const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           {
            noHeaderFooter || <Navbar></Navbar>
           }
           <div className=' min-h-[80vh]'>
                    <Outlet></Outlet>
                </div>
           {
            noHeaderFooter || <Footer></Footer>
           }
        </div>
    );
};

export default Main;