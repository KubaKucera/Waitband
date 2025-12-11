"use client";

import { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import title from "../../../public/assets/images/navbar/waitTitle.png";
import blackTitle from "../../../public/assets/images/home/waitLogoBlack.png";

const navLinks = [
  { name: "Úvod", href: "/", key: "uvod" },
  { name: "Novinky", href: "/novinky", key: "novinky" },
  { name: "Koncerty", href: "/koncerty", key: "koncerty" },
  { name: "Hudba", href: "/hudba", key: "hudba" },
  { name: "Alba", href: "/alba", key: "alba" },
  { name: "Fotky", href: "/fotky", key: "fotky" },
  { name: "Videa", href: "/videa", key: "videa" },
  { name: "Kapela", href: "/kapela", key: "kapela" },
  { name: "Kontakt", href: "/kontakt", key: "kontakt" },
];

const menuVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: "-8%", 
    filter: "blur(4px)" 
  },
  visible: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      mass: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: "-8%",
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12, 
    scale: 0.97,
    filter: "blur(2px)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 font-geist ${
        scrolled && !menuOpen
          ? "bg-white/80 text-black"
          : !scrolled && !menuOpen
          ? "bg-black/70 text-navbarWhite"
          : "bg-black/80 text-white"
      }`}
      style={{ height: "77px" }}
    >
      <div className="relative flex items-center justify-between px-4 lg:px-44 monitor:px-80 h-full">
        {/* Logo */}
        <motion.div
          className="z-50 cursor-pointer"
          initial={{ opacity: 1 }}
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src={scrolled ? blackTitle : title}
              alt="WAIT"
              className="w-[80px] sm:w-[80px] md:w-[95px] h-auto hover:brightness-90 transition-transform duration-500"
              style={{ transformOrigin: "left center" }}
            />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-7 sm:gap-7 md:gap-[26px] items-center text-[17px] relative">
          {navLinks.map(({ name, href, key }) => {
            const active = isActive(href);
            return (
              <Link
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="relative uppercase font-bold cursor-pointer transition-colors duration-300 group"
              >
                <span
                  className={`transition-colors duration-300 ${
                    active
                      ? scrolled 
                          ? "text-neonPinkDark"
                          : "text-neonPink"
                      : scrolled
                      ? "text-gray-900 group-hover:text-neonPinkDark"
                      : "text-lightGray group-hover:text-neonPink"
                  }`}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Burger */}
        <div className="lg:hidden z-50 flex items-center">
          <button
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`flex items-center gap-2 cursor-pointer mt-1 transition-colors duration-300 ${
              menuOpen
                ? "text-white"
                : scrolled
                ? "text-black"
                : "text-navbarWhite"
            }`}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            <span className="text-lg uppercase font-medium">Menu</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "x-icon" : "menu-icon"}
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {menuOpen ? <FaTimes size={24} strokeWidth={1.4} /> : <FaBars size={24} strokeWidth={1.4} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Floating Shadow / Bottom Glow */}
      {!scrolled && !menuOpen && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] pointer-events-none overflow-hidden">
          <div className="w-full h-full rounded-t-xl bg-white/25 backdrop-blur-sm"></div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 w-screen h-[100dvh] bg-black flex flex-col items-center justify-center space-y-7 font-semibold z-60"
          >
            {navLinks.map(({ name, href, key }, index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.025, opacity: 0.9 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <Link
                  href={href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase font-semibold text-[27px] ${
                    isActive(href) ? "text-neonPink" : "text-lightGray hover:text-neonPink"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}