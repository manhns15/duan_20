import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";
const fadeImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png'
];
export default function Navbar() {
    return (
        // <div className="container"><br />
        //     <Swiper
        //         spaceBetween={100}
        //         slidesPerView={1}
        //         onSlideChange={() => console.log('slide change')}
        //         onSwiper={(swiper) => console.log(swiper)}
        //     >
        //         <SwiperSlide> <img src="images/1.png " width="1100" alt="" /></SwiperSlide>
        //         <SwiperSlide><img src="images/2.png" width="1100" /></SwiperSlide>

        //     </Swiper>


        // </div>
        <div>
            <div className="slide-container ">
                <Fade>
                    <div className="each-fade container">
                        <img src={fadeImages[0]} />
                    </div>
                    <div className="each-fade container">
                        <img src={fadeImages[1]} />
                    </div>
                    <div className="each-fade container">
                        <img src={fadeImages[2]} />
                    </div>
                    <div className="each-fade container">
                        <img src={fadeImages[3]} />
                    </div>
                </Fade>
            </div>
        </div>

    )
}

