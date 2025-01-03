import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerimg1 from '../../assets/assets/home/01.jpg'
import bannerimg2 from '../../assets/assets/home/02.jpg'
import bannerimg3 from '../../assets/assets/home/03.png'
import bannerimg4 from '../../assets/assets/home/04.jpg'
import bannerimg5 from '../../assets/assets/home/05.png'
import bannerimg6 from '../../assets/assets/home/06.png'

const Banner = () => {
    return (
        <div className=''>
          <Carousel>
                <div>
                    <img src={bannerimg1} />
                    
                </div>
                <div>
                    <img src={bannerimg2} />
                    
                </div>
                <div>
                    <img src={bannerimg3} />
                    
                </div>
                <div>
                    <img src={bannerimg4} />
                    
                </div>
                <div>
                    <img src={bannerimg5} />
                    
                </div>
                <div>
                    <img src={bannerimg6} />
                    
                </div>
            </Carousel>  
        </div>
    );
};

export default Banner;
