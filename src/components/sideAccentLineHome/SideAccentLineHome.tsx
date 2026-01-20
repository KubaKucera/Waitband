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
      {/* Šipka – nejdříve se objeví */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-neonPink"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>

      {/* Linka – začne po šipce s drobným delay */}
      <motion.div
        ref={lineRef}
        className="w-1 mt-2 rounded-full side-line bg-gradient-to-b from-[#ff6a00]/70 to-[#ee0979]/70"
        initial={{ height: 0, y: -20 }}
        animate={{ height: lineHeight, y: 0 }}
        transition={{
          height: { duration: lineHeight / 1000, ease: "easeOut", delay: 0.6 },
          y: { duration: lineHeight / 1000, ease: "easeOut", delay: 0.6 },
        }}
      ></motion.div>

      {/* CSS pro plynulý gradient */}
      <style jsx>{`
        .side-line {
          background-size: 100% 200%;
          animation: gradientMove 6s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
}