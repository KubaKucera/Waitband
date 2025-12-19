"use client";

import { Variants, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

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

export const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(4px)",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.9,
    },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const activeIndex = navLinks.findIndex(l => l.href === pathname);
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
      {/* PAGE DEPTH EFFECT */}
      <motion.div
        animate={{ scale: menuOpen ? 0.98 : 1, filter: menuOpen ? "blur(2px)" : "blur(0px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 font-geist ${
          scrolled && !menuOpen
            ? "bg-white/80 text-black"
            : !scrolled && !menuOpen
            ? "bg-black/70 text-navbarWhite"
            : "bg-black/85 text-white"
        }`}
        style={{ height: "85px" }}
      >
        <div className="relative flex items-center justify-between px-4 lg:px-44 monitor:px-80 h-full">
          {/* LOGO */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="z-50">
            <Image
              src={menuOpen || !scrolled ? title : blackTitle}
              alt="WAIT"
              className="w-[80px] md:w-[95px] h-auto transition-opacity duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <motion.div
            className="hidden lg:flex gap-7 items-center text-[17px] relative"
          >
            {navLinks.map(({ name, href, key }, i) => {
              const active = isActive(href);

              return (
                <div
                  key={key}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="relative"
                >
                  <Link href={href} className="uppercase font-bold group">
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
                </div>
              );
            })}

            {/* SINGLE UNDERLINE */}
            {underlineReady && activeIndex !== -1 && (
              <motion.div
                className={`absolute h-[2px] rounded-full bottom-0 ${
                  scrolled ? "bg-neonPinkDark" : "bg-neonPink"
                }`}
                initial={false}   // ⬅️ KRITICKÉ
                animate={{
                  x: itemRefs.current[activeIndex]?.offsetLeft ?? 0,
                  width: itemRefs.current[activeIndex]?.offsetWidth ?? 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }}
              />
            )}
          </motion.div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className={`lg:hidden z-50 flex items-center gap-2 mt-1 transition-colors ${
              menuOpen ? "text-white" : scrolled ? "text-black" : "text-navbarWhite"
            }`}
          >
            <span className="text-lg uppercase font-medium">Menu</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 h-[100dvh] flex flex-col items-center justify-center space-y-7 z-40"
              style={{
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 60%), rgba(0,0,0,1)",
              }}
            >
              {navLinks.map(({ name, href, key }, i) => (
                <motion.div key={key} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`uppercase text-[27px] font-semibold transition-colors ${
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
    </>
  );
}