import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import PopularCard from '../../components/popularCard';

const Recommand = () => {
    const [menu, setMenu] =useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            const popularMenu =data.filter(item => item.category === 'offered')
            setMenu(popularMenu)
        })
    },[])
    return (
        <div className='my-10 lg:my-20'>
            <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    menu.map(item => <PopularCard key={item._id} item={item}></PopularCard>)
                }
            </div>
        </div>
    );
};

export default Recommand;