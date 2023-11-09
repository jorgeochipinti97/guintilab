
import React, { useMemo } from 'react'
import useRadialBackground from '../../hook/useRadialBackground'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Parallax, Pagination, Navigation } from 'swiper/modules';


export const SliderParallax = () => {
    const colors = ['#1556ac', '#a3e635', '#e38a20', '#f5f5f7'];

    const radialBackground = useMemo(() => {
        const circleCount = Math.floor(Math.random() * 2) + 5; // Número aleatorio de círculos entre 5 y 15
        const circles = Array.from({ length: circleCount }, () => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = `${Math.floor(Math.random() * (20 - 5 + 1) + 5)}%`;
            const positionX = `${Math.floor(Math.random() * 100)}%`;
            const positionY = `${Math.floor(Math.random() * 100)}%`;

            return `radial-gradient(circle at ${positionX} ${positionY}, ${color} 0, transparent ${size})`;
        });

        return circles.join(', ');
    }, []); // El array vacío asegura que el fondo se genere una sola vez por componente


    const slide = [
        {
            title: "Hosting",
            description: "We host your website to keep it active 24/7. Servers located in the USA."
        },
        {
            title: "24-hour Monitoring",
            description: "We monitor the website 24 hours a day to prevent potential downtimes."
        },
        {
            title: "Maintenance",
            description: "We update the site to maintain optimal performance."
        },
        {
            title: "Technical Support",
            description: "Should any technical issues arise, Guinti will resolve them."
        },
        {
            title: "Website Security",
            description: "Your website will be secured with an SSL certificate."
        }

    ]
    return (
        <div className=' flex justify-center mb-10'>
            <div className='md:w-6/12 w-full shadow ' style={{ borderRadius: '0.5rem', }}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff', background: radialBackground,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        slide && slide.map(e => (

                            <SwiperSlide key={e.title}>
                                <div className='flex flex-col items-center justify-center' style={{ height: '300px' }}>
                                    <div className="title text-center font-bold text-4xl" data-swiper-parallax="-300" >
                                        {e.title}
                                    </div>

                                    <div data-swiper-parallax="-100">
                                        <p className="text text-thin mx-2 mt-2 text-center ">
                                            {e.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}


