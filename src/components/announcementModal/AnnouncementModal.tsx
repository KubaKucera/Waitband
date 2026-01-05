"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);
  const scrollYRef = useRef<number>(0);

  // Jednou za session
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

  // Lock scroll
  useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 sm:px-6 md:px-6 lg:px-0 monitor:scale-115"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 z-[10000] text-gray-300 hover:text-white transition"
          >
            <X size={32} />
          </button>

          {/* Modal */}
          <motion.div
            className="
              relative
              w-full
              max-w-lg
              sm:max-w-xl
              lg:max-w-2xl
              rounded-2xl
              bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200
              shadow-2xl
              overflow-hidden
              text-center              
            "
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="h-48 sm:h-56 lg:h-72 bg-[url('/assets/images/home/announcement.jpg')] bg-cover bg-center" />

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-montserrat text-black">
                Novinky od kapely 🎶
              </h2>

              <p className="mx-auto max-w-prose text-sm sm:text-base leading-relaxed text-black mb-4">
                Práce na singlu
                <br />
                (cover skladby <em>„Stayin’ Alive“</em> a <em>„The Fly“</em>),
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
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-rose-600
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  shadow-lg
                  transition-transform duration-300 ease-out will-change-transform transform-gpu
                  hover:scale-105
                  hover:shadow-xl
                  active:scale-95
                "
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