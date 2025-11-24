"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="flex items-center w-full max-w-5xl mx-auto px-6"
    >
        <h2 className="text-white text-3xl sm:text-3xl md:text-4xl font-bold font-montserrat tracking-wide uppercase whitespace-nowrap">
            {title}
        </h2>

        <motion.div
            className="flex-1 h-[2px] ml-6 rounded-tr rounded-br bg-gradient-to-r from-white/40 via-white/80 to-white/40 origin-left"
            initial={{ scaleX: 0 }}
            animate={controls}
            variants={{
                visible: { scaleX: 1, transition: { duration: 0.7, ease: "easeOut" } },
            }}
        ></motion.div>
    </div>
  );
};

export default SectionTitle;