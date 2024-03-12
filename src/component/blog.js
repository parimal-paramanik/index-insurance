import React from 'react'
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa"
import { blogData } from '../data/data';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

export default function Blog(props) {

    return (
        <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 items-end">
                <h3 className="mb-4 md:text-5xl md:leading-normal text-2xl leading-normal font-bold"><span className="text-indigo-600">Our Research </span> <br /> and Protocols</h3>
                <p className="text-slate-400 max-w-xl">The cornerstone of DeFi, the Decentralized Exchanges (DEXes). Our team has experience in building a diverse style of DEXes and are equipped to make your next DEX launch an excellent one.</p>
            </div>
        </div>

        <div className="container-fluid relative mt-8">
            <div className="grid grid-cols-1 mt-8">

                
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
                        {blogData.map((item, index) => (

                            <div className="" key={index}>
                                <div className="mx-2">
                                    <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                        <Link to="/research">
                                            <img src={item.image} className="transition-all duration-500 group-hover:scale-105" alt="" 
                                             style={{height:"250px", width:"400px"}}
                                             />
                                            <div className="absolute inset-0 group-hover:bg-indigo-600 opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                                        </Link>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <Link to="/research" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out ">{item.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                
            </div>
        </div>
    </section>

    )
}
