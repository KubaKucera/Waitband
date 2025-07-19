"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import title from "../../../public/assets/images/navbar/waitTitle.png";

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

export default function Navbar() {
  const pathname = usePathname();
  const [navbarHeight, setNavbarHeight] = useState(70);
  const [titleScale, setTitleScale] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

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
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-700 transition-all duration-300 text-navbarWhite font-nav`}
      style={{ height: `77px` }}
    >
      <div className="flex items-center justify-between sm:justify-between md:justify-between lg:justify-evenly px-6 lg:px-0 h-full">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="z-50 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src={title}
            alt="Title"
            className="w-32 h-auto sm:w-32 sm:h-auto md:w-44 md:h-auto transition-transform duration-500"
            style={{
              transform: `scale(${titleScale})`,
              transformOrigin: "left center",
            }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-7 items-center text-[15px]">
          {navLinks.map(({ name, href, key, external }) => (
            <Link
              key={key}
              href={href}
              target={external ? "_blank" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`uppercase font-bold cursor-pointer transition-colors ${
                isActive(href) ? "text-neonPink" : "text-lightGray"
              } hover:text-neonPink`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="cursor-pointer transition-colors"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-black shadow-md flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transition-all duration-300 z-40 ${
          menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {navLinks.map(({ name, href, key, external }) => (
          <Link
            key={key}
            href={href}
            target={external ? "_blank" : undefined}
            onClick={() => setMenuOpen(false)}
            className={`uppercase cursor-pointer transition-colors ${
              isActive(href) ? "text-neonPink" : "text-lightGray"
            } hover:text-neonPink`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}