import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item || {}
    return (
        <div className='flex gap-4 my-6'>
            <div className='w-1/4'>
           <img className='rounded-r-full rounded-b-full' src={image} alt="" />
            </div>
            <div className='w-3/4'>
            <h1 className='cinzel text-xl mb-4 font-semibold'>{name}</h1>
            <div className='flex gap-8 inter text-xs'>
                <p>{recipe}</p>
                <p className='text-orange-600'>{price}</p>
            </div>
            
            </div>
        </div>
    );
};

export default MenuItem;