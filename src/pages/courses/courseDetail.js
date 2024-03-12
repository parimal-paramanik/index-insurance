import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import imageP from '../../assets/images/client/01.jpg';
import c3 from '../../assets/images/course/c3.jpg';
import c8 from '../../assets/images/course/c8.jpg';
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import { courseListing } from '../../data/data';
import { courseDetail } from '../../data/dataTwo';

import {PiShoppingCart,PiBookOpenText, GoClock, GoLock, FaSignal,BiCube,BiBookReader, LiaClipboardListSolid} from '../../assets/icons/icons'
export default function CourseDetail() {

    const params = useParams();
    const id = params.id
    const data = courseListing.find((course) => course.id === parseInt (id));

    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/course/cta.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded w-fit mx-auto h-5">$11/Lesson</span>
                        <h3 className="mt-3 text-3xl leading-normal font-medium text-white">{data?.desc ? data?.desc : 'Become a Professional Graphic Designer'}</h3>
                        <div className="flex items-center mx-auto mt-3">
                            <img src={data?.image2 ? data?.image2 : imageP} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                            <Link className="font-semibold text-white block ms-3">{data?.name ?  data?.name : 'Calvin Carlo'}</Link>
                        </div>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-flex items-center mt-2 mx-3">
                            <GoClock className="text-white"/>
                            <span className="text-white/60 ms-1">10 Weeks</span>
                        </li>

                        <li className="inline-flex items-center mt-2 mx-3">
                            <FaSignal className="text-white"/>
                            <span className="text-white/60 ms-1">All Levels</span>
                        </li>

                        <li className="inline-flex items-center mt-2 mx-3">
                            <PiBookOpenText className="text-white"/>
                            <span className="text-white/60 ms-1">16 Lessons</span>
                        </li>

                        <li className="inline-flex items-center mt-2 mx-3">
                            <BiCube width={18} className="text-white"/>
                            <span className="text-white/60 ms-1">0 Quiz</span>
                        </li>

                        <li className="inline-flex items-center mt-2 mx-3">
                            <BiBookReader className="text-white"/>
                            <span className="text-white/60 ms-1">5 Students</span>
                        </li>

                        <li className="inline-flex items-center mt-2 mx-3">
                            <PiShoppingCart className="text-white me-1"/>
                            <Link to="#" className="text-white">Buy Now</Link>
                        </li>
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
            <section className="relative md:py-24 py-16 overflow-hidden">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <h5 className="text-2xl font-semibold mb-5">Overview</h5>

                        <p className="text-slate-400 mb-3">Ooh, name it after me! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Why would I want to know that? What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.</p>
                        <p className="text-slate-400 mb-3">It's a T. It goes “tuh”. You seem malnourished. Are you suffering from intestinal parasites? I suppose I could part with 'one' and still be feared… And I'd do it again! And perhaps a third time! But that would be it.</p>
                        <p className="text-slate-400 mb-3">I'm just glad my fat, ugly mama isn't alive to see this day. I can explain. It's very valuable. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him.</p>
                        <p className="text-slate-400 mb-3">Bender, we're trying our best. Kif might! You can crush me but you can't crush my spirit! Kif, I have mated with a woman. Inform the men. I'm Santa Claus!</p>
                        <p className="text-slate-400">What are you hacking off? Is it my torso?! 'It is!' My precious torso! You, a bobsleder!? That I'd like to see! And I'd do it again! And perhaps a third time! But that would be it. My fellow Earthicans, as I have explained in my book 'Earth in the Balance”, and the much more popular ”Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.</p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
                        <img src={c3} className="rounded-md shadow" alt="" />

                        <div className="relative">
                            <img src={c8} className="rounded-md shadow" alt="" />

                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="grid grid-cols-1 mt-8">
                        <h5 className="text-2xl font-semibold mb-5">Curriculum</h5>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]">

                        {
                            courseDetail.map((data, index) => {
                                return (

                                    <div key={index}>
                                        <h5 className="text-lg font-semibold mb-5">{data.heading}</h5>

                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                            <table className="w-full text-start">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-5 text-start">Lessons</th>
                                                        <th className="px-4 py-5 text-end">Time</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="p-4"><Link className=""><PiShoppingCart className="text-white me-1"/> {data.ls1}</Link></td>
                                                        <td className="p-4 text-end"><span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                                    </tr>

                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls2}</Link></td>
                                                        <td className="p-4 text-end"><GoLock className="inline"/></td>
                                                    </tr>

                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls3}</Link></td>
                                                        <td className="p-4 text-end"><GoLock className="inline"/></td>
                                                    </tr>

                                                    <tr className="border-t border-gray-100 dark:border-gray-700">
                                                        <td className="p-4"><Link className="flex items-center"><LiaClipboardListSolid className="me-1"/> {data.ls4}</Link></td>
                                                        <td className="p-4 text-end"><GoLock className="inline"/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="md:flex justify-center">
                        <div className="lg:w-2/3 text-center">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                            <div className="mt-8">
                                <div className="text-center subcribe-form">
                                    <form className="relative mx-auto max-w-xl">
                                        <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                        <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                    </form>
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
