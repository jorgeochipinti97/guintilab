import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

export const SliderCoverflow = ({ type }) => {
    const [cards, setCards] = useState([])

    const projects = [
        {
            "href": "https://dublingroup.vercel.app/",
            "title": "Dublin Group",
            "imgSrc": "/assets/images/home/dublin.png"
        },
        {
            "href": "https://www.lazaro.tech/",
            "title": "Lazaro Tech",
            "imgSrc": "/assets/images/home/lazaro.png"
        },
        {
            "href": "https://royer.store/",
            "title": "Royer Store",
            "imgSrc": "/assets/images/home/royer.png"
        },
        {
            "href": "https://www.guintitravels.vercel.app/",
            "title": "Guinti Travels",
            "imgSrc": "/assets/images/home/travels.png"
        }
    ]

    const templates = [
        {
            "href": "https://nebulix.unfolding.io/shop",
            "title": "E-commerce Nebulix",
            "imgSrc": "/assets/images/home/nublix.webp"
        },
        {
            "href": "https://demos.creative-tim.com/astro-ecommerce/landing/",
            "title": "E-commerce Astro",
            "imgSrc": "/assets/images/home/standar.png"
        },
        {
            "href": "https://astroship.web3templates.com/",
            "title": "Landing Page Astro",
            "imgSrc": "/assets/images/home/landing1.png"
        },
        {
            "href": "https://tailcastsite.netlify.app/",
            "title": "Landing Page Tailcast",
            "imgSrc": "/assets/images/home/tailcast.png"
        },
        {
            "href": "https://astro-multiverse.vercel.app/",
            "title": "Fotografía & Art",
            "imgSrc": "/assets/images/home/art.png"
        },
        {
            "href": "https://astrofy-template.netlify.app/",
            "title": "Portfolio Personal",
            "imgSrc": "/assets/images/home/portfolio.png"
        },
        {
            "href": "https://astro-moon-landing.netlify.app/",
            "title": "Landing Astro Ship",
            "imgSrc": "/assets/images/home/astrolanding.png"
        },
        {
            "href": "https://astro-theme-stone.vercel.app/",
            "title": "Landing Stone",
            "imgSrc": "/assets/images/home/stone.png"
        }
    ]

    useEffect(() => {
        type && type == 'templates' ? setCards(templates) : setCards(projects)
    }, [type])
    return (
        <>
            <div className=''>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.5}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        cards.map(e => (

                            <SwiperSlide key={e.href} className='md:w-6/12 w-full'>

                                <a class="" href={e.href}>
                                    <div class="" style={{ backgroundImage: `url(${e.imgSrc})`, height: '20.4rem', backgroundSize: "cover", backgroundPosition: 'top' }}>
                                    </div>
                                    <div class="">

                                        <h3 class="feature-card__title">{e.title}</h3>
                                    </div>
                                </a>
                            </SwiperSlide>


                        ))
                    }


                </Swiper>
            </div>
        </>
    )
}
