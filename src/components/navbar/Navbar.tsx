"use client";

import { Variants, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect, useCallback } from "react";
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
  hidden: { opacity: 0, scale: 1.02 },
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
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeIndex = navLinks.findIndex((l) => l.href === pathname);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [underlineReady, setUnderlineReady] = useState(false);

  const isActive = (href: string) => pathname === href;

  const setItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      itemRefs.current[index] = el;
    },
    []
  );

  /* scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* lock body */
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
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          h-[85px]
          backdrop-blur-md
          transition-colors duration-500
          ${
            !scrolled && !menuOpen
              ? "bg-black/70"
              : scrolled && !menuOpen
              ? "bg-white/80"
              : "bg-black/85"
          }
        `}
      >
        {/* glass border */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 h-px
            transition-opacity duration-300
            ${!scrolled && !menuOpen ? "bg-white/20 opacity-100" : "opacity-0"}
          `}
        />

        <div className="relative flex h-full items-center justify-between px-5 lg:px-44 monitor:px-80">
          {/* LOGO */}
          <Link href="/" onClick={() => setMenuOpen(false)} className="z-50">
            <Image
              src={menuOpen || !scrolled ? title : blackTitle}
              alt="WAIT"
              className="w-[80px] md:w-[95px] h-auto transition-opacity duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-[23px] items-center text-[17px] relative font-poppins">
            {navLinks.map(({ name, href, key }, i) => {
              const active = isActive(href);

              return (
                <div
                  key={key}
                  ref={setItemRef(i)}
                  className="relative font-semibold uppercase"
                >
                  <Link href={href} className="group block">
                    <span
                      className={`
                        transition-colors duration-300
                        font-poppins uppercase
                        ${
                          active
                            ? "font-semibold"
                            : "font-medium text-shadow-nav"
                        }
                        ${
                          active
                            ? scrolled
                              ? "text-neonPinkDarker"
                              : "text-neonPink"
                            : scrolled
                            ? "text-navbarText group-hover:text-neonPinkDark"
                            : "text-navbarWhite group-hover:text-neonPink"
                        }
                      `}
                    >
                      {name}
                    </span>
                  </Link>
                </div>
              );
            })}

            {/* UNDERLINE */}
            {underlineReady && activeIndex !== -1 && (
              <motion.div
                className={`
                  absolute bottom-0 h-[2.2px] rounded-full
                  ${scrolled ? "bg-neonPinkDarker" : "bg-neonPink"}
                `}
                style={{ translateY: "0.5px" }}
                initial={false}
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
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className={`lg:hidden z-50 ${
              menuOpen
                ? "text-white"
                : scrolled
                ? "text-black"
                : "text-navbarWhite"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                {menuOpen ? <X size={31} weight="bold" /> : <List size={31} weight="bold" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[49] flex flex-col items-center justify-center space-y-6 bg-black/95"
          >
            {navLinks.map(({ name, href, key }) => (
              <motion.div key={key} variants={itemVariants}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    uppercase text-3xl font-poppins
                    transition-colors duration-300
                    ${
                      isActive(href)
                        ? "font-semibold text-neonPink"
                        : "font-normal text-navbarWhite hover:text-neonPinkDark"
                    }
                  `}
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