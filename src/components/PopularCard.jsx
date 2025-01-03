import React from 'react';

const PopularCard = ({item}) => {
    const {image, name, recipe, price} =item || {}
    return (
        <div className=' h-[400px] inter'>
            <div className=" bg-base-100 shadow-xl rounded-none relative">
                <div className="h-[200px]">
                    <img
                        src={image}
                        alt="Shoes"
                        className=" h-full w-full"/>
                </div>
                <p className='absolute p-2 rounded bg-black text-white top-2 right-0'>$ {price}</p>
                <div className="h-[200px] pt-4 flex flex-col items-center text-center bg-gray-200">
                    <div className='h-[100px]'>
                    <h2 className="text-xl fontbold mb-2">{name}</h2>
                    <p className='text-xs mb-1'>{recipe}</p>
                    </div>
                    
                    <button className=" mb-0 btn btn-outline border-0 border-b-4 text-orange-800 border-orange-800 mt-4">add to cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;