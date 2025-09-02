"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("announcement_seen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("announcement_seen", "true");
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
            {/* ❌ Zavírací tlačítko – v pravém horním rohu celé obrazovky */}
            <button
                onClick={() => setOpen(false)}
                className="fixed top-5 right-5 text-gray-300 hover:text-white transition z-[10000]"
            >
                <X size={32} />
            </button>

            <motion.div
                className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-white rounded-3xl shadow-2xl max-w-lg monitor:max-w-2xl w-full mx-8 overflow-hidden"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Obrázek nahoře */}
                <div className="relative h-48 md:h-56 monitor:h-80 bg-[url('/assets/images/home/announcement.jpg')] bg-cover">                 
                </div>

                {/* Obsah */}
                <div className="p-6 text-center">
                    <h2 className="text-3xl font-extrabold font-montserrat mb-3 text-black bg-clip-text">
                        Novinky od kapely 🎶
                    </h2>

                    <p className="text-black text-base leading-relaxed mb-4 w-full monitor:pl-24 monitor:pr-24">
                        Práce na singlu
                        (skladby <em>„Závidím“</em> a <em>„The Fly“</em>), ve{" "}
                        <Link 
                            href="https://www.facebook.com/whitechickenstudio" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:text-blue-600 hover:underline"
                        >
                            <span className="font-semibold">Whitechickenstudiu Daniela Škráška</span>.
                        </Link>                      
                    </p>

                    <p className="text-xs text-gray-700 mb-6">
                        (autorská tvorba: IK/IK)
                    </p>

                    <button
                        onClick={() => setOpen(false)}
                        className="mt-2 px-8 py-3 rounded-full bg-rose-600 
                                    text-white font-bold uppercase tracking-wide shadow-lg 
                                    hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
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