
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCube, Pagination } from 'swiper/modules';



export const SliderCube = () => {
    return (
        <div className='w-full flex justify-center mt-5'>
            <div className='md:w-4/12 w-full'>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    loop={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper "
                >

                    <SwiperSlide>
                        <img src="/stripeslide.png" className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/mercaslide.png"  className=''/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

