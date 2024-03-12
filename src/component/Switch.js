import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUp } from '../assets/icons/icons';

export default function Switcher() {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Set the theme to dark
        document.documentElement.className = 'dark';

        // Clean-up function to remove event listener
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    let [scrollToTops, setScrollToTops] = useState(false);

    // Define scrollHandler function outside of the useEffect hook
    function scrollHandler() {
        setScrollToTops(window.scrollY >= 500);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        // Clean-up function to remove event listener
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    let scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <>
            <Link
                to="#"
                onClick={scrollToTop}
                id="back-to-top"
                className={`${
                    !scrollToTops ? 'hidden' : ''
                } back-to-top fixed text-lg rounded-full z-10 bottom-5 end-2 h-9 w-9 text-center bg-indigo-600 text-white leading-9 flex items-center justify-center`}
            >
                <FiArrowUp width={18} />
            </Link>
        </>
    );
}