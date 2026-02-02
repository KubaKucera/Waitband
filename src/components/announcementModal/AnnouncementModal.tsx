"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const scrollYRef = useRef<number>(0);

  // Zobrazit jen jednou za session
  useEffect(() => {
    const seen = sessionStorage.getItem("announcement_seen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("announcement_seen", "true");
    }
  }, []);

  // ESC zavření
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll lock (bez cuknutí)
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        scrollYRef.current = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollYRef.current}px`;
        document.body.style.width = "100%";
      });
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
  }, [open]);

  // Monitor breakpoint detection
  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="fixed top-[26px] right-5 sm:top-[26px] sm:right-5 md:top-6 md:right-6 z-[10000] text-gray-300 hover:text-white transition"
          >
            <X size={32} />
          </button>

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl rounded-2xl bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 shadow-2xl overflow-hidden text-center"
            initial={{ y: 40, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: isLargeScreen ? 1.2 : 1 }}
            exit={{ y: 20, opacity: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image (smooth fade-in) */}
            <div className="relative h-56 sm:h-56 lg:h-72 bg-gray-200 overflow-hidden">
              <Image
                src="/assets/images/home/announcement.jpg"
                alt="Announcement"
                fill
                priority
                className={`object-cover object-left transition-opacity duration-700 ease-out ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              )}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black">
                Novinky od kapely 🎶
              </h2>

              <p className="mx-auto max-w-prose text-sm sm:text-base leading-relaxed text-black mb-4">
                Práce na singlu
                <br />
                (cover skladby <em>„Stayin’ Alive“</em> a <em>„Flying“</em>),
                <br />
                ve{" "}
                <Link
                  href="https://www.facebook.com/whitechickenstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-blue-600 hover:underline"
                >
                  Whitechickenstudiu Daniela Škráška
                </Link>
                .
              </p>

              <p className="mb-6 text-xs text-gray-600 italic">
                autorská tvorba: IK / IK
              </p>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-colors transition-shadow duration-300 ease-out hover:shadow-xl hover:bg-rose-700"
              >
                Těšíme se! 🚀
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}