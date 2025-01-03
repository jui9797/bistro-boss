import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem';
import useMenu from '../../hooks/useMenu';


const PopularMenu = () => {
    const [menu] =useMenu()
    // console.log(menu)
    const popular =menu.filter(item=>item.category === 'popular')
    // console.log(popular)
    // const [menu, setMenu] =useState([])
    // useEffect(()=>{ 
    //     fetch('menu.json')
    //     .then(res =>res.json())
    //     .then(data=> {
    //         const popularMenu =data.filter(item => item.category === 'popular')
    //         setMenu(popularMenu)
    //     })
    // })
    return (
        <div className='my-10 lg:my-20'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
               {
                popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
               } 
            </div>
            <div className='flex justify-center items-center'>
            <button className="btn btn-outline border-0 border-b-4  mt-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;