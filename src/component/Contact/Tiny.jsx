import React from 'react'
import TinySlider from 'tiny-slider-react';
import { insuranceservices } from '../../data/dataFour';
import { Link } from 'react-router-dom';
const Tiny = () => {

    const settings2 = {
        container: '.tiny-six-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },
    
            992: {
                items: 4
            },
    
            767: {
                items: 3
            },
    
            320: {
                items: 1
            },
        },
    }
  return (

    <section className="relative md:py-24 py-16">
    <div className="container relative">
        <div className="grid grid-cols-1 pb-8 items-end">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Get the right protection</span> <br /> and move forward</h3>
            <p className="text-slate-400 max-w-xl">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
        </div>
    </div>

    <div className="container-fluid relative mt-8">
        <div className="grid grid-cols-1 mt-8">

            <div className="tiny-six-item">
                <TinySlider settings={settings2}>
                    {insuranceservices.map((item, index) => (

                        <div className="tiny-slide" key={index}>
                            <div className="mx-2">
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                <Link title="">
                                                    <img src={item.image} className="transition-all duration-500 group-hover:scale-105" alt="" />
                                                    <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-70 transition-all duration-500 flex justify-center items-center">
                                    <p className="text-white text-center pl-4 pr-10">{item.desc}</p>
                                </div>
                                </Link>
                                </div>
                                <div className="p-4 pb-0">
                                    <Link to="#" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </TinySlider>

            </div>
        </div>
    </div>
</section>
  )
}

export default Tiny
