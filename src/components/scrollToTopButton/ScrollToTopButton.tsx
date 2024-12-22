"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        }
        else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }        
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        }
    }, [showScroll]);


    return (
        <FaArrowUp
            onClick={scrollToTop}
            className={`fixed right-0 z-50 p-2 bg-black text-white text-[36px] cursor-pointer transition-all duration-700 ease-in-out transform border border-white opacity-75 border-md hover:opacity-100 rounded-tl-md rounded-bl-md ${
                showScroll ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            } bottom-14 lg:bottom-36`}
        />
    );
}