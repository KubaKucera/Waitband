"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import title from "../../../public/assets/images/navbar/waitTitle.png";

interface NavbarProps {
  initialActiveLink: string;
}

const navLinks = [
  { name: "Úvod", href: "/", key: "uvod" },
  { name: "Koncerty", href: "/koncerty", key: "koncerty" },
  { name: "Hudba", href: "/hudba", key: "hudba" },
  { name: "Alba", href: "/alba", key: "alba" },
  { name: "Fotky", href: "/fotky", key: "fotky" },
  { name: "Videa", href: "/videa", key: "videa" },
  { name: "Kapela", href: "/kapela", key: "kapela" },
  { name: "Rider", href: "/assets/files/waitRider.pdf", external: true, key: "rider" },
  { name: "Kontakt", href: "/kontakt", key: "kontakt" },
];

export default function Navbar({ initialActiveLink }: NavbarProps) {
  const [activeLink, setActiveLink] = useState(initialActiveLink);
  const [navbarHeight, setNavbarHeight] = useState(70);
  const [titleScale, setTitleScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (key: string) => {
    setActiveLink(key);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    setActiveLink("uvod");
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavbarHeight(scrollY > 50 ? 63 : 70);
      setTitleScale(scrollY > 50 ? 0.85 : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-700 transition-all duration-300 text-white font-nav`}
      style={{ height: `77px` }}
    >
      <div className="flex items-center justify-between sm:justify-between md:justify-evenly px-6 lg:px-12 h-full">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="z-50">
          <Image
            src={title}
            alt="Title"            
            className="w-32 h-auto sm:w-32 sm:h-auto md:w-44 md:h-auto transition-transform duration-500"
            style={{ transform: `scale(${titleScale})` }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center text-[15px]">
          {navLinks.map(({ name, href, key, external }) => (
            <Link
              key={key}
              href={href}
              target={external ? "_blank" : undefined}
              onClick={() => handleLinkClick(key)}
              className={`uppercase font-bold transition-colors ${
                activeLink === key ? "text-neonPink" : "text-lightGray"
              } hover:text-neonPink`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transform transition-all duration-300 z-40 ${
          menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {navLinks.map(({ name, href, key, external }) => (
          <Link
            key={key}
            href={href}
            target={external ? "_blank" : undefined}
            onClick={() => handleLinkClick(key)}
            className={`uppercase ${
              activeLink === key ? "text-neonPink" : "text-lightGray"
            } hover:text-neonPink transition-colors`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}