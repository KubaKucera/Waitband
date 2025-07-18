"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [showScroll]);

    return (
        <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className={`fixed hidden lg:flex bottom-3 right-3 sm:bottom-3 sm:right-3 md:bottom-10 md:right-10 z-50 p-3 rounded-full bg-gray-900 text-gray-50 shadow-lg transform transition-all duration-500 ease-in-out border border-gray-500 hover:bg-gray-800 hover:shadow-2xl ${
                showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
        >
            <FaArrowUp size={24} />
        </button>
    );
}