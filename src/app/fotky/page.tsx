"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import image1 from "../../../public/assets/images/photos/image1.jpg";
import image2 from "../../../public/assets/images/photos/image2.jpg";
import image3 from "../../../public/assets/images/photos/image7.jpg";
import image4 from "../../../public/assets/images/photos/image5.jpg";
import image5 from "../../../public/assets/images/photos/image6.jpg";
import image6 from "../../../public/assets/images/photos/image3.jpg";
import image7 from "../../../public/assets/images/photos/image9.jpg";
import image8 from "../../../public/assets/images/photos/image8.jpg";
import image9 from "../../../public/assets/images/photos/image4.jpg";
import image10 from "../../../public/assets/images/photos/image15.jpg";
import image11 from "../../../public/assets/images/photos/image11.jpg";
import image12 from "../../../public/assets/images/photos/image13.jpg";
import image13 from "../../../public/assets/images/photos/image12.jpg";
import image14 from "../../../public/assets/images/photos/image14.jpg";
import image15 from "../../../public/assets/images/photos/image10.jpg";
import image16 from "../../../public/assets/images/photos/image16.jpg";
import image17 from "../../../public/assets/images/photos/image18.jpg";
import image18 from "../../../public/assets/images/photos/image17.jpg";
import image19 from "../../../public/assets/images/photos/image19.jpeg";
import image20 from "../../../public/assets/images/photos/image20.jpeg";
import image21 from "../../../public/assets/images/photos/image21.jpeg";
import image24 from "../../../public/assets/images/photos/image24.jpg";
import image25 from "../../../public/assets/images/photos/image25.jpg";
import image26 from "../../../public/assets/images/photos/image26.jpg";

import texture from "../../../public/assets/textures/texture.jpg";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { motion, AnimatePresence } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

import {
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { PrimaryActionButton } from "@/components/primaryActionButton/PrimaryActionButton";

const images = [
  image26, image25, image24, image1, image2, image3, image4, image5, image6, image7,
  image8, image9, image10, image11, image12, image13,
  image14, image15, image16, image17, image18, image19,
  image20, image21
];

function LoadingDots() {
  return (
    <span className="flex items-center justify-center space-x-2">
      <span className="animate-pulse">.</span>
      <span className="animate-pulse delay-200">.</span>
      <span className="animate-pulse delay-400">.</span>
    </span>
  );
}

export default function PhotosPage() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);  
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.title = "Fotky | Wait";
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
  }, [selectedIndex]);

  // posloucháme změnu fullscreen režimu (např. klávesa ESC)
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const handleShowMore = () => setShowMore(true);

  const closeModal = () => {
    setSelectedIndex(null);
    setZoom(1);
    setIsFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const goToNext = () =>
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
  const goToPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  const toggleFullscreen = () => {
    const el = document.getElementById("photo-modal");
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleShare = async () => {
    if (navigator.share && selectedIndex !== null) {
      try {
        await navigator.share({
          title: "Fotka z galerie Wait",
          url: images[selectedIndex].src,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(images[selectedIndex!].src);
      alert("Odkaz ke stažení byl zkopírován!");
    }
  };

  return (
    <>      
      <SideAccentLine targetId="photo-section"/>

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section id="photo-section" className="relative min-h-screen flex flex-col items-center px-6 sm:px-6 md:px-6 lg:px-0 gap-8 pt-[118px]">
          {/* Titulek */}
          <TitleWithLines title="Fotogalerie" delay={0.3} />      
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-6 w-full"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 monitor:gap-9 w-full max-w-6xl monitor:max-w-7xl">
                {images.slice(0, showMore ? images.length : 9).map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer w-full aspect-square overflow-hidden rounded-xl shadow-md"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`Photo ${index + 1}`}
                      fill
                      objectFit="cover"
                      className="object-cover transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:scale-105"
                    />

                    {/* Motion overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute h-full inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                    >
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-white h-[100%] w-[100%] flex items-center justify-center font-semibold uppercase tracking-widest text-md"
                      >
                        Zobrazit galerii
                      </motion.span>
                    </motion.div>
                  </div>                  
                ))}
              </div>
            </div>

            {!showMore && (
              <div className="relative flex justify-center w-full mt-1">
                <button
                  disabled={loading}
                  onClick={handleShowMore}
                  
                  className={`"group relative w-[340px] sm:w-[75vw] md:w-[40vw] h-[55px]
                    text-[15px] font-semibold tracking-[0.12em]
                    rounded-full text-white                    
                    transition-transform duration-300 ease-out will-change-transform transform-gpu
                    bg-transparent border-[2px] border-gray-300                    
                    hover:scale-105
                    hover:[background:linear-gradient(#121212,#121212)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                    focus-visible:outline-none                    
                    focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]"
                    active:scale-[0.98] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}                  
                >
                  {loading ? <LoadingDots /> : "Zobrazit více fotek"}
                </button>
              </div>
            )}

            <div className={`flex justify-center h-[50px] mb-3 ${showMore ? "mt-[15px]" : "mt-0"}`}>              
              <PrimaryActionButton href="https://www.instagram.com/wait_band_official/" target="_blank">
                Přejít na Instagram
              </PrimaryActionButton>
            </div>

            <AnimatePresence>
              {selectedIndex !== null && (
                <motion.div
                  id="photo-modal"
                  className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90"                  
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Controls */}
                  <div className="absolute top-4 right-4 flex gap-3 z-50">                    
                    <button
                      onClick={() => setZoom((z) => (z === 1 ? 2 : 1))}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                      {zoom === 1 ? (
                        <ZoomIn className="text-white w-6 h-6" />
                      ) : (
                        <ZoomOut className="text-white w-6 h-6" />
                      )}
                    </button>
                    <button onClick={toggleFullscreen} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      {isFullscreen ? (
                        <Minimize2 className="text-white w-6 h-6" />
                      ) : (
                        <Maximize2 className="text-white w-6 h-6" />
                      )}
                    </button>
                    <button onClick={handleShare} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <Share2 className="text-white w-6 h-6" />
                    </button>
                    <button onClick={closeModal} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                      <X className="text-white w-6 h-6" />
                    </button>
                  </div>

                  {/* Image */}
                  <motion.div
                    key={selectedIndex}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative w-[90vw] h-[90vh] flex items-center justify-center"
                    style={{ overflow: "hidden" }}
                  >
                    <Image
                      src={images[selectedIndex]}
                      alt="Selected"
                      fill
                      style={{
                        objectFit: "contain",
                        transform: `scale(${zoom})`,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </motion.div>

                  {/* Navigation arrows */}
                  {selectedIndex > 0 && (
                    <button
                      onClick={goToPrev}
                      className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
                    >
                      <ChevronLeft className="w-8 h-8 text-white" />
                    </button>
                  )}
                  {selectedIndex < images.length - 1 && (
                    <button
                      onClick={goToNext}
                      className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-50"
                    >
                      <ChevronRight className="w-8 h-8 text-white" />
                    </button>
                  )}

                  {/* Index */}
                  <div className="absolute text-gray-300 text-lg bottom-6 right-6">
                    {selectedIndex + 1} / {images.length}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>              
        </section>
      </div>
    </>
  );
}