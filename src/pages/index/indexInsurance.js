import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import hero from '../../assets/images/insurance/hero.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog from '../../component/blog';
import CompanyLogo from '../../component/companyLogo';

import CountUp from 'react-countup';
import TinySlider from 'tiny-slider-react';
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import { accordionData } from '../../data/dataTwo';
import { insuranceTeam, insuranceservices,insuranceTab } from '../../data/dataFour';

import { FaArrowRight } from '../../assets/icons/icons'
import { startupAbout, startupServices } from '../../data/dataTwo';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UserFeedBack2 from '../../component/userFeedBack2';
import { TypeAnimation } from 'react-type-animation';
// import Tiny from '../../component/Contact/Tiny';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
  const responsive3 = {
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

export default function IndexInsurance() {
    let [isOpen, setOpen] = useState(false)
    let [activeIndex, setActiveIndex] = useState(0);
    let [isOpenTab, setisOpen] = useState(0);
    const [showSubtitle, setShowSubtitle] = useState(false);
    let handleTabClick = (index) => {
        setisOpen(index);
    };

    let toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index);
        }
    }
    return (
        <>
            <Navbar />
            <section className="relative table w-full md:py-44 py-36 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-6 gap-[30px]">

                        <div className="md:col-span-7">
                            <div className="md:me-6">

                            <div animateIn="fadeIn"style={{ height:"140px" }} >
                  <TypeAnimation
                    cursor={false}
                    sequence={[
                      "Unlock DeFi's Full Potential",
                      1000,
                      'Elevate Your DeFi Project',
                      1000,
                      'Step Into the Future of Finance',
                      1000,
                      () => setShowSubtitle(true)
                    ]}
                    // speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                    wrapper="h1"
                    style={{ fontSize: '50px' }}
                    repeat={Infinity}
                    speed={20}
                    deletionSpeed={50}
                  />
                  <div>
                  </div>
                </div>
                                <p className="text-slate-400 text-lg max-w-xl">"From entry to expansion, our comprehensive suite of services is designed to navigate, scale, and innovate your DeFi project.</p>

                                <div className="mt-6">
                                    <Link to="/contact" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={hero} className="rounded-lg shadow-md dark:shadow-gray-800" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id=""
                                        className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="" onClose={() => setOpen(false)} />

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 items-end">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-2xl leading-normal font-semibold"><span className="text-indigo-600">Highlighting Innovation:</span> <br /> Signature Research Endeavors in DeFi</h3>
                        <p className="text-slate-400 max-w-xl">Dive into our comprehensive studies and analyses that are pushing the boundaries of DeFi, offering fresh perspectives and groundbreaking solutions.</p>
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

            
                                {insuranceservices.map((item, index) => (

                                    <div className="" key={index}>
                                    {/* <div className="tiny-slide" key={index}> */}
                                        <div className="">
                                        {/* <div className="mx-2"> */}
                                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                                <Link title="">
                                                    <img src={item.image} className="transition-all duration-500 group-hover:scale-105" alt="" />
                                                    <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-70 transition-all duration-500 flex justify-center items-center">
                                    <p className="text-white text-center pl-4 pr-10 mt-16">{item.desc}</p>
                                </div>
                                                </Link>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <Link to="#" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 text-xl duration-500 ease-in-out">{item.title}</Link>
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            {/* </TinySlider> */}
                            {/* </div> */}

                        
                    </div>
                </div>
               
            </section> 
          {/* <Tiny/> */}
            <section className="py-36 w-full table relative bg-indigo-600">
                <div className="absolute inset-0 bg-[url('../../assets/images/insurance/cta.png')] bg-bottom bg-no-repeat bg-cover"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="order-2 lg:order-1 lg:mt-0 mt-8">
                            <div className="lg:me-6 text-center lg:text-start">
                                <h3 className="mb-4 md:text-4xl text-3xl lg:leading-normal leading-normal text-white font-semibold">DeFi by the Numbers: <br /> A Glimpse into the Future</h3>
                                 
                                <p className="text-white/80 max-w-xl mx-auto lg:ms-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                {/* <div className="mt-6">
                                    <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-slate-100 hover:bg-slate-200 border-slate-100 hover:border-slate-200 text-indigo-600 rounded-md me-2 mt-2">Get a custom plan</Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-[30px]">
                                <div className="counter-box text-center">
                                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={145} start={101} />M</h1>
                                    <h5 className="text-white text-xl font-medium">Insured Customers</h5>
                                </div>

                                <div className="counter-box text-center">
                                    <h1 className="lg:text-5xl text-4xl font-bold mb-2 text-white"><CountUp className="counter-value" end={99} start={2} />%</h1>
                                    <h5 className="text-white text-xl font-medium">Clients Satisfaction</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-6 border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                    <CompanyLogo/>
                </div>
            </section>


            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="relative">
                            <h3 className="mb-4 md:text-5xl md:leading-normal text-2xl leading-normal font-bold"><span className="text-indigo-600">Most</span> Asked<br /> Queries</h3>
                            <p className="text-slate-400 max-w-xl">At Prodigal Blockchain, our unwavering commitment is the cornerstone of every project we undertake. We believe in the power of dedication, ensuring that each endeavor reflects our pure commitment and passion for excellence.</p>

                            <div className="mt-6">
                                <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">Contact Us</Link>
                            </div>
                        </div>

                        <div className="lg:ms-8 md:mt-0 mt-8">
                            <div id="accordion-collapseone" data-accordion="collapse">
                                {accordionData.slice(0,3).map((item, index) => (
                                    <div key={index} className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" onClick={() => toggleAccordion(index)} className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === index ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''}`} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`${activeIndex === item.id ? "rotate-180" : "rotate-270" } w-4 h-4 shrink-01`}  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {activeIndex === index && (
                                            <div>
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="sticky top-20">
                                <ul className="flex-column text-center p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li role="presentation">
                                        <button className={`${ isOpenTab === 0 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true"
                                        onClick={() => handleTabClick(0)}
                                        >UI/UX Designing</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">UI Development</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Contract Development</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Life Insurance</button>
                                    </li>
                                    <li role="presentation">
                                        <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600' : ''} px-4 py-2 text-base font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Research and Consultancy</button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                {
                                    insuranceTab.map((item, index) => (
                                        <div className={`${isOpenTab === index  ? '': 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab" key={index}>
                                        <img src={item.image} className="shadow rounded-md" alt="" />
                                        <div className="mt-6">
                                            <h5 className="text-lg font-semibold mb-4">{item.title}</h5>
                                            <p className="text-slate-400 mb-2">{item.description}</p>
                                            <Link to="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <section className="relative md:py-10 py-8">
                <div className="container relative md:mt-8 mt-6">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 mt-4 md:text-4xl text-3xl md:leading-normal leading-normal font-bold text-center justify-center">Our Services</h3>

                        {/* <p className="text-slate-400 max-w-xl mx-auto">The cornerstone of DeFi, the Decentralized Exchanges (DEXes). Our team has 
          experience in building a diverse style of DEXes and are equipped to make your next 
          DEX launch an excellent one.</p> */}
                              </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
                        {startupServices.map((item,index)=>{
                            return(
                                <div key={index} className="lg:col-span-3 md:col-span-6">
                                    <div className="team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative " 
                                     style={{height:"360px"}}
                                    >
                                        <div className={`${item.background} rounded-md   absolute inset-0  -mt-[10px] -ms-[10px] h-[98%] w-[98%] -z-1`}></div>
                                        
                                      

                                        <div className="content mt-4">
                                            <Link to = "#" className="text-lg font-medium hover:text-indigo-600 block">{item.title}</Link>
                                            {/* <span className="text-slate-400 block">{item.title}</span> */}

                                            <p className="text-slate-400 mt-4">{item.desc}</p>

                                           
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

          
            </section>


            {/* <section className="py-20 w-full relative bg-[url('../../assets/images/insurance/bg.jpg')] bg-center bg-no-repeat bg-cover jarallax" data-jarallax data-speed="0.5">
                <div className="container relative">
                    <div className="md:flex">
                        <div className="lg:w-1/3 md:w-1/2 px-6 py-8 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <Carousel
          responsive={responsive2}
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

                               
                                    {insuranceTeam.map((item, index) => {
                                        return(
                                            <div className="" key={index}>
                                                <div className="text-center">
                                                    <p className="text-lg text-slate-400 italic"> {item.feedback} </p>
    
                                                    <div className="text-center mt-5">
                                                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        </ul>
    
                                                        <img src={item.image} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                        <span className="text-slate-400 text-sm">{item.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                               </Carousel>

                         
                        </div>
                    </div>
                </div>
            </section> */}
             <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        
                        {/* <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3> */}
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What We do Different from Others</h3>

                        {/* <p className="text-slate-500 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p> */}
                    </div>

                    <UserFeedBack2 />
                </div>
            <Blog className="container relative md:mt-24 mt-16 mb-16" id={""} />
            <Footer />
          
        </>
    )
}
