"use client";

import { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

// Animace menu a položek
const menuVariants: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [titleScale, setTitleScale] = useState(1);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-500 font-[Geist] ${
        scrolled && !menuOpen
          ? "bg-white/90 border-gray-200 text-black"
          : !scrolled && !menuOpen
          ? "bg-black/80 border-gray-600 text-navbarWhite"
          : "bg-black text-white border-transparent"
      }`}
      style={{ height: "77px" }}
    >
      <div className="flex items-center justify-between px-6 lg:px-40 monitor:px-80 h-full">
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
              className="w-28 sm:w-28 md:w-36 h-auto transition-transform duration-500"
              style={{ transform: `scale(${titleScale})`, transformOrigin: "left center" }}
            />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-7 items-center text-[17px] relative">
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
                      ? "text-neonPink"
                      : scrolled
                      ? "text-gray-900 group-hover:text-neonPink"
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
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className={`cursor-pointer mt-1 transition-colors duration-300 ${
              menuOpen
                ? "text-white"
                : scrolled
                ? "text-black"
                : "text-navbarWhite"
            }`}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "x-icon" : "menu-icon"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {menuOpen ? (
                  <X size={36} strokeWidth={1.4} />
                ) : (
                  <Menu size={36} strokeWidth={1.4} />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center space-y-7 font-semibold z-40"
          >
            {navLinks.map(({ name, href, key }) => (
              <motion.div key={key} variants={itemVariants}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`uppercase font-semibold text-[27px] ${
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
    </nav>
  );
}