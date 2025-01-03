import React from 'react';
import cheif from '../../assets/assets/home/chef-service.jpg'

const Boss = () => {
    return (
        <div className='p-4 lg:p-16 my-10 lg:my-20'
        style={{
            backgroundImage: `url(${cheif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        >
            <div className='bg-white flex flex-col p-4 lg:p-12 w-1/2 text-center mx-auto'>
                <h2 className='cinzel text-2xl lg:text-4xl font-semibold mb-4'>Bistro Boss</h2>
                <p className='inter text-xs'>Delightful and enticing, this card showcases a tempting dish with a vibrant image and all the details to make your mouth water. Perfectly tailored for foodies, the card includes the name of the dish, its key ingredients, a short yet appetizing description.</p>
            </div>
        </div>
    );
};

export default Boss;