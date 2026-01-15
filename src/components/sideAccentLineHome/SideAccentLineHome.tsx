"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SideAccentLineProps {
  targetId: string;
}

export default function SideAccentLine({ targetId }: SideAccentLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const NAVBAR_HEIGHT = 370; // výška navbaru

    const updateHeight = () => {
      const height = targetEl.offsetHeight + NAVBAR_HEIGHT;
      setLineHeight(height > 0 ? height : 0);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(targetEl);

    return () => observer.disconnect();
  }, [targetId]);

  return (
    <div className="absolute xl:left-6 monitor:left-7 top-12 flex-col items-center hidden xl:flex z-30">
      {/* Šipka se 2 animacemi */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-neonPink"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ y: [0, 8, 0] }}
          transition={{
            delay: 1,
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>

      <motion.div
        ref={lineRef}
        className="w-1 mt-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ee0979] bg-[length:100%_200%] animate-pulse"
        style={{ backgroundPosition: "0% 0%" }}
        initial={{ height: 0, backgroundPosition: "0% 0%" }}
        animate={{
          height: `${lineHeight}px`,
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{
          height: { delay: 1.6, duration: 4, ease: [0.25, 1, 0.5, 1] },
          backgroundPosition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      ></motion.div>
    </div>
  );
}