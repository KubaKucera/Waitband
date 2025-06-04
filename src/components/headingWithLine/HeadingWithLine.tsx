'use client';

import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

interface HeadingWithLineProps {
  lineHeight?: string;
  label?: string;
}

const HeadingWithLine = ({ lineHeight = "100px", label = "" }: HeadingWithLineProps) => {
  return (
    <div
      className="absolute z-30 hidden xl:flex"
      style={{
        top: "125px",
        left: "13px",
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Nadpis s ikonou */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="text-neonPink"
        >
          <FaAngleDoubleDown
            className="text-[32px] text-neonPink drop-shadow-[0_0_6px_#ff4dcf] transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        {/* Čára */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: lineHeight }}
          transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
          className="w-[2px] mt-2 bg-gradient-to-b from-pink-400 via-pink-300 to-pink-500 animate-pulse"
        />

        {/* (Volitelný) Text */}
        {label && (
          <span className="mt-2 text-xs font-semibold text-neonPink">{label}</span>
        )}
      </div>
    </div>
  );
};

export default HeadingWithLine;
