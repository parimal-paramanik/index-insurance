import React from 'react'

// import TinySlider from 'tiny-slider-react';

import { feedback } from '../data/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function UserFeedBack2() {
   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
        <div>
            <div className="grid grid-rows-1 mt-8">

                    {/* <TinySlider settings={settings}> */}
         <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          infinite={true}
          ssr={true}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
                        {feedback.map((item, index) => (

                            <div className="tiny-slide text-center" key={index}>
                                <div className="cursor-e-resize">
                                    <div className="content relative shadow dark:shadow-gray-300 m-2 p-6 bg-white dark:bg-slate-300 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-300 before:border-b-white dark:before:border-b-slate-300 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-300 before:origin-top-left" style={{height:"100px"}}>
                                        {/* <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i> */}
                                        <p className="text-black font-bold font-5xl text-center">{item.description}</p>
                                        {/* <ul className="list-none mb-0 text-amber-400 mt-3 space-x-1">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul> */}
                                    </div>

                                    
                                </div>
                            </div>
                        ))}
                    {/* </TinySlider> */}
                    </Carousel>
            </div>
        </div>
    )
}
