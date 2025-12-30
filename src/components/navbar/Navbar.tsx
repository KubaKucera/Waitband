"use client";

import { Variants, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { List, X } from "phosphor-react";
import { usePathname } from "next/navigation";

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
    scale: 1.02,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeIndex = navLinks.findIndex((l) => l.href === pathname);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [underlineReady, setUnderlineReady] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  useLayoutEffect(() => {
    if (activeIndex !== -1 && itemRefs.current[activeIndex]) {
      setUnderlineReady(true);
    }
  }, [activeIndex, pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-md transition-all duration-500 z-50 font-geist ${scrolled && !menuOpen
            ? "bg-white/80 text-black"
            : !scrolled && !menuOpen
              ? "bg-black/70 text-navbarWhite"
              : "bg-black/85 text-white"}`}
        style={{ height: "85px" }}
      >
        <div className="relative flex items-center justify-between px-5 sm:px-5 lg:px-44 monitor:px-80 h-full">
          {/* LOGO */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="z-50">
            <Image
              src={menuOpen || !scrolled ? title : blackTitle}
              alt="WAIT"
              className="w-[80px] md:w-[95px] h-auto transition-opacity duration-300" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6 items-center text-[17px] relative">
            {navLinks.map(({ name, href, key }, i) => {
              const active = isActive(href);

              return (
                <div
                  key={key}
                  ref={(el: HTMLDivElement | null) => {
                    itemRefs.current[i] = el;
                  } }
                  className="relative"
                >
                  <Link href={href} className="uppercase font-bold group">
                    <span
                      className={`transition-colors duration-300 ${active
                          ? scrolled
                            ? "text-neonPinkDark"
                            : "text-neonPink"
                          : scrolled
                            ? "text-gray-900 group-hover:text-neonPinkDark"
                            : "text-lightGray group-hover:text-neonPink"}`}
                    >
                      {name}
                    </span>
                  </Link>
                </div>
              );
            })}

            {underlineReady && activeIndex !== -1 && (
              <motion.div
                className={`absolute h-[2px] rounded-full bottom-0 ${scrolled ? "bg-neonPinkDark" : "bg-neonPink"}`}
                initial={false}
                animate={{
                  x: itemRefs.current[activeIndex]?.offsetLeft ?? 0,
                  width: itemRefs.current[activeIndex]?.offsetWidth ?? 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }} />
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className={`lg:hidden z-50 flex items-center gap-2 mt-1 transition-colors ${menuOpen ? "text-white" : scrolled ? "text-black" : "text-navbarWhite"}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                {menuOpen ? (
                  <X size={32} weight="bold" />
                ) : (
                  <List size={32} weight="bold" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      
      {/* MOBILE MENU – MUSÍ BÝT MIMO NAV */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[49] flex flex-col items-center justify-center space-y-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.96)",
            }}
          >
            {navLinks.map(({ name, href, key }) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase text-3xl font-semibold transition-colors ${
                    isActive(href)
                      ? "text-neonPink"
                      : "text-lightGray hover:text-neonPink"
                  }`}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}