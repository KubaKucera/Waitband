"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface TitleWithLinesProps {
  title: string;
  delay?: number;
  fromColor?: string; // start gradient
  toColor?: string;   // end gradient
}

const TitleWithLines: FC<TitleWithLinesProps> = ({
  title,
  delay = 0,
  fromColor = "#ff6a00",
  toColor = "#ee0979",
}) => {
  const leftLineGradient = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
  };

  const rightLineGradient = {
    backgroundImage: `linear-gradient(to left, ${fromColor}, ${toColor})`,
  };

  return (
    <motion.div
      className="flex flex-col items-center z-20 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* ==== MOBIL ==== */}
      <motion.div
        className="block sm:hidden w-[100vw] h-1 rounded-full mb-2"
        style={{ ...leftLineGradient, transformOrigin: "right" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.6, duration: 0.6, ease: "easeOut" }}
      />

      <motion.h2
        className="text-3xl uppercase font-montserrat font-extrabold text-transparent bg-clip-text text-center block sm:hidden animate-gradient-liquid"
        initial={{ opacity: 0 }}          // odstraněno y posunutí
        animate={{ opacity: 1 }}          // jen fade
        transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="block sm:hidden w-[100vw] h-1 rounded-full mt-2"
        style={{ ...rightLineGradient, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.6, duration: 0.6, ease: "easeOut" }}
      />

      {/* ==== DESKTOP ==== */}
      <div className="hidden sm:flex items-center justify-center w-full">
        {/* Levá čára */}
        <motion.div
          className="w-32 h-1 rounded-full mr-4"
          style={{ ...leftLineGradient, transformOrigin: "right" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.9, duration: 0.6, ease: "easeOut" }}
        />

        {/* Nadpis */}
        <motion.h2
          className="text-5xl uppercase font-montserrat font-extrabold text-transparent bg-clip-text text-center animate-gradient-liquid"
          initial={{ opacity: 0 }}          // odstraněno y posunutí
          animate={{ opacity: 1 }}          // jen fade
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h2>


        {/* Pravá čára */}
        <motion.div
          className="w-32 h-1 rounded-full ml-4"
          style={{ ...rightLineGradient, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.9, duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default TitleWithLines;