import React from 'react'
import poster1 from "../../assets/landing_background.jpg";
import poster2 from "../../assets/easter.jpg";
import poster3 from "../../assets/thumb1.jpg";
import poster4 from "../../assets/thumb2.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function EventBanner() {
    return (
        <div className='swiper-container w-full pt-8 pb-16 lg:h-fit h-68 bg-ternary'>
            <Swiper
                className='px-12'
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
                // slidesPerView={2}
                navigation={true}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination]}
            >
                <SwiperSlide className="flex flex-col items-center">
                    <div id='welcome' className='relative lg:text-7xl sm:text-md p-auto rounded-lg flex items-center'>
                        <img className='rounded-lg' src={poster1} />
                        <p className="absolute h-full w-full flex items-center left-8">Welcome to RC Site</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center">
                    <div className=''>
                        <img className='rounded-lg' src={poster2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center">
                    <div className=''>
                        <img className='rounded-lg' src={poster3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center">
                <div className=''>
                        <img className='rounded-lg' src={poster4} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default EventBanner;