import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar/navbar'
import Footer from '../component/Footer/footer';

import * as Icon from 'react-feather'
import {MdKeyboardArrowRight} from '../assets/icons/icons'

export default function Changelog() {
    return (
        <>
            <Navbar />

            <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-medium">Changelog</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link >Docs</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Changelog</li>
                    </ul>
                </div>
            </section>



            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>



            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="lg:w-3/4 rounded-md shadow dark:shadow-gray-800 h-fit bg-white dark:bg-slate-900">
                            <div className="p-6">
                                
                                <h5 className="text-xl font-bold">Version <span className="text-emerald-600">1.0.0</span> - 1st August 2023</h5>
                                <ul className="list-none mb-10">
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Initial Released</li>
                                </ul>

                                <h5 className="text-xl font-bold mt-8">Version <span className="text-emerald-600">2.0.0</span> - 19th September 2023</h5>
                                <ul className="list-none mb-10">
                                    <li className="items-center text-slate-400 my-3 ms-2 text-lg"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Landing:</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Remove: Removed all UNICONS icons and replaced or updated REACT Icons</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added new Ai (index-ai) demo</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added new Podcast (index-podcast) demo</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added new Travels (index-travel) demo</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added new Components (components) page</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic Blog detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic NFT detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic Job detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic Ecommerce Item detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic Real Estate detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Update: Updated the Dynamic Course detail page as per the ID</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added new Components (components.html) page</li>
                                    <li className="items-center text-slate-400 my-3 ms-2 text-lg"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Admin Dashboard:</li>
                                    <li className="items-center text-slate-400 my-3 ms-2"><Icon.ArrowRightCircle className="h-4 w-4 me-2 text-indigo-600 inline"></Icon.ArrowRightCircle>Add : Added Admin Panel</li>
                                </ul>


                                <div>
                                    <Link to="https://1.envato.market/techwind-react" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Download Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
         






        </>
    )
}
