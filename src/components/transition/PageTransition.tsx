"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 0.45,
          ease: [0.33, 1, 0.68, 1], // moderní smooth ease (cubic-bezier)
        }}
        className="min-h-screen"
        style={{ backgroundColor: "#0e0e0e" }} // trvalá barva, eliminuje záblesk
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}