"use client";

import Image from "next/image";
import Link from "next/link";
import {FaFacebookF, FaTwitter, FaInstagram, FaSoundcloud, FaYoutube, FaTimes, FaBars} from 'react-icons/fa';
import logo from "../../../public/assets/images/navbar/logo.jpg";
import title from "../../../public/assets/images/navbar/waitTitle.png";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

interface NavbarProps{
    initialActiveLink: string;
}

export default function Navbar({ initialActiveLink }: NavbarProps) {    
    const [activeLink, setActiveLink] = useState(initialActiveLink);
    const [navbarHeight, setNavbarHeight] = useState(77);
    const [titleScale, setTitleScale] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        closeMenu(); // Zavře mobilní menu po kliknutí
    };

    const handleLogoClick = () => {
        setActiveLink("uvod");
        setMenuOpen(false); // Zavře mobilní menu po kliknutí na logo
    };

    const openMenu = () => {
        setMenuVisible(true);
        setTimeout(() => setMenuOpen(true), 10); // Krátká prodleva pro aktivaci animace
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setTimeout(() => setMenuVisible(false), 500); // Čeká na dokončení animace
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;        
        if (scrollY > 50) {
            setNavbarHeight(63);
            setTitleScale(0.85);        
        } else {
            setNavbarHeight(70);
            setTitleScale(1);
        }
        };

        window.addEventListener("scroll", handleScroll);

        //handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav 
            className={`bg-black text-white flex items-center justify-between px-10 xl:px-60 monitor:px-60 monitor:justify-evenly font-sans border-b-[1px] border-white fixed top-0 left-0 right-0 z-50 text-[15px] transition-height duration-300 ease-in-out`}
            style={{ height: `${navbarHeight}px` }}
        >
            <div className='flex items-center justify-center'>
                <Link href="/" onClick={handleLogoClick}>
                    <Image
                        src={title}
                        className="h-11 w-[100%] flex scale-100 items-center justify-start transition-scale duration-300 ease-in-out"
                        style={{ scale: `${titleScale}` }}
                        alt="Title"
                        width={185}
                        height={185}
                        priority={false}
                    />
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-7">
                {renderLinks(handleLinkClick, activeLink)}
            </div>

            {/* Mobile Burger Menu */}
            <div className="lg:hidden flex items-center">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-white focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-8 lg:hidden">
                    {renderLinks(handleLinkClick, activeLink)}                    
                </div>
            )}
        </nav>
    );
}

const renderLinks = (handleClick: (link: string) => void, activeLink: string) => {    
    return (
        <>
            <Link href="/" onClick={() => handleClick('uvod')}>
                <span className={`uppercase font-bold ${activeLink === 'uvod' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Úvod
                </span>
            </Link>
            <Link href="/koncerty" onClick={() => handleClick('koncerty')}>
                <span className={`uppercase font-bold ${activeLink === 'koncerty' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Koncerty
                </span>
            </Link>
            <Link href="/hudba" onClick={() => handleClick('hudba')}>
                <span className={`uppercase font-bold ${activeLink === 'hudba' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Hudba
                </span>
            </Link>
            <Link href="/alba" onClick={() => handleClick('alba')}>
                <span className={`uppercase font-bold ${activeLink === 'alba' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Alba
                </span>
            </Link>
            <Link href="/fotky" onClick={() => handleClick('fotky')}>
                <span className={`uppercase font-bold ${activeLink === 'fotky' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Fotky
                </span>
            </Link>
            <Link href="/videa" onClick={() => handleClick('videa')}>
                <span className={`uppercase font-bold ${activeLink === 'videa' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Videa
                </span>
            </Link>
            <Link href="/kapela" onClick={() => handleClick('kapela')}>
                <span className={`uppercase font-bold ${activeLink === 'kapela' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Kapela
                </span>
            </Link>
            <Link href="/assets/files/waitRider.pdf" target="_blank">
                <span className={`flex items-center uppercase font-bold ${activeLink === 'rider' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Rider
                    <FaFilePdf className="ml-1 mt-[-1px]" />
                </span>
            </Link>
            <Link href="/kontakt" onClick={() => handleClick('kontakt')}>
                <span className={`uppercase font-bold ${activeLink === 'kontakt' ? 'text-neonPink' : 'text-lightGray'} hover:text-neonPink`}>
                    Kontakt
                </span>
            </Link>
        </>
    );        
};