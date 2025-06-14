"use client";

import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

interface HeadingWithLineProps {
  height?: number;
  offsetTop?: string;
  position?: "left" | "right";
  label?: string;
  delay?: number;
  duration?: number;
  ease?: string;
}

const HeadingWithLine = ({
  height = 300,
  offsetTop = "80px",
  position = "left",
  label = "",
  delay = 0.4,
  duration = 0.6,
  ease = "easeOut",
}: HeadingWithLineProps) => {
  return (
    <div
      className="absolute z-30 hidden xl:flex"
      style={{ top: offsetTop, left: position === "left" ? "13px" : "auto", right: position === "right" ? "13px" : "auto" }}>
      <div className="relative flex flex-col items-center">
        {/* Šipka */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay, duration, ease}}
          className="text-neonPink">
          <FaAngleDoubleDown className="text-[32px] drop-shadow-[0_0_6px_#ff4dcf] transition-transform duration-300 hover:scale-110" />
        </motion.div>

        {/* Čára */}
        <motion.div
          initial={{height: 0, transformOrigin: "top"}}
          animate={{height, transformOrigin: "top"}}
          transition={{delay, duration, ease}}
          className="w-[2px] mt-2 bg-gradient-to-b from-[#ff6a00] via-[#ee0979] to-[#ff6a00] animate-pulse"
        />

        {/* Kulička */}
        <motion.div
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{delay, duration, ease}}
          className="w-[14px] h-[14px] mt-1 rounded-full bg-pink-400 drop-shadow-[0_0_6px_#ff4dcf]" />

        {/* Popisek */}
        {label && (
          <motion.span
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{delay, duration, ease}}
            className="mt-2 text-xs font-semibold text-neonPink">
            {label}
          </motion.span>
        )}

      </div>
    </div>
  );
};

export default HeadingWithLine;