import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import img
import slide1 from '../../assets/assets/home/slide1.jpg'
import slide2 from '../../assets/assets/home/slide2.jpg'
import slide3 from '../../assets/assets/home/slide3.jpg'
import slide4 from '../../assets/assets/home/slide4.jpg'
import slide5 from '../../assets/assets/home/slide5.jpg'
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
    return (
    <section className=" my-10 lg:my-20">
        <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></SectionTitle>
    <Swiper
                slidesPerView={4}
                spaceBetween={30}
                initialSlide={2}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='text-4xl text-center -mt-24 text-white'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <p className='text-4xl text-center -mt-16 text-white'>Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <p className='text-4xl text-center -mt-16 text-white'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <p className='text-4xl text-center -mt-16 text-white'>Cakes</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <p className='text-4xl text-center -mt-16 text-white'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='text-4xl text-center -mt-16 text-white'>Salads</p>
        </SwiperSlide>
        
      </Swiper>
    </section>
    );
};

export default Category;