"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import ivanImage from "../../../public/assets/images/band/ivan.jpg";
import pavelImage from "../../../public/assets/images/band/pavel.jpeg";
import martinaImage from "../../../public/assets/images/band/martina.jpg";
import marekImage from "../../../public/assets/images/band/marek.jpeg";
import texture from "../../../public/assets/textures/texture.jpg";
import band from "../../../public/assets/images/photos/image11.jpg";
import band2 from "../../../public/assets/images/band/band.jpg";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { PrimaryActionButton } from "@/components/primaryActionButton/PrimaryActionButton";

const Content = () => (
  <div className="text-center max-w-4xl mx-auto text-white px-4">
    <motion.h3      
      className="text-orange-400 uppercase font-bold mb-3"
      style={{ fontSize: "clamp(1.05rem, 2.2vw, 2.25rem)" }}
    >
      O nás
    </motion.h3>

    <motion.p      
      className="mb-4 leading-relaxed"
      style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)", color: "rgba(255,255,255,0.95)" }}
    >
      WAIT vznikl v roce 2008 v Hradci Králové.<br />
      Současnou sestavu tvoří Ivan Kučera, Martina Panchártková, Marek Kopecký a Pavel Herynk.
    </motion.p>

    <motion.div      
      className="space-y-3 leading-relaxed"
      style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", color: "rgba(235,235,235,0.95)" }}
    >
      <div>
        <strong className="text-orange-400">Martina Panchártková</strong> – zpěv
      </div>
      <div>
        <strong className="text-orange-400">Ivan Kučera</strong> – baskytara, kytary, aranže, texty, samply, zpěv<br />
        <span className="text-gray-200 text-sm">
          Předchozí skupiny: -123 min., Distorze, N.V.U., Survive, Claim, Beautiful Losers, Nová Bára, Sir Morfius
        </span>
      </div>
      <div>
        <strong className="text-orange-400">Marek Kopecký</strong> – bicí<br />
        <span className="text-gray-200 text-sm">
          Předchozí skupiny: Monantes
        </span>
      </div>
      <div>
        <strong className="text-orange-400">Pavel Herynk</strong> – kytary, texty<br />
        <span className="text-gray-200 text-sm">
          Předchozí skupiny: Beautiful Losers, Wild Palms, Anachronic
        </span>
      </div>      
    </motion.div>
  </div>
);

export default function BandPage() {
  useEffect(() => {
    document.title = "Kapela | Wait";
  }, []);

  const members = [
    { name: "Martina Panchártková", role: "Zpěv", img: martinaImage },
    { name: "Ivan Kučera", role: "Baskytara, zpěv, aranže, hudba a texty, kytara", img: ivanImage },
    { name: "Marek Kopecký", role: "Bicí", img: marekImage },
    { name: "Pavel Herynk", role: "Kytara, texty", img: pavelImage },
  ];

  return (
    <>
      <SideAccentLine targetId="band-section" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.60), rgba(20, 20, 20, 0.65)), url(${texture.src})`,
        }}
      >
        <section id="band-section" className="relative min-h-screen flex flex-col items-center gap-8 pt-[120px] pb-20 md:pb-24 px-6 sm:px-6 md:px-6 lg:px-0">
          {/* Titulek */}
          <TitleWithLines title="Členové kapely" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-6 w-full"
          >
            {/* Členové kapely (responsive grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 monitor:gap-10 w-full max-w-7xl">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="group relative w-full h-[470px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 ease-out will-change-transform transform-gpu"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform transform-gpu"
                  />

                  <div className="absolute bottom-0 left-0 right-0 h-24 flex justify-center items-center overflow-hidden">
                    {/* Pozadí panelu */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black from-50% via-black/90 to-transparent" />
                    
                    {/* Text */}
                    <div className="relative z-10 px-4 text-center transition-all duration-500 group-hover:scale-[1.01]">
                      <span
                        className="block text-white font-semibold text-sm md:text-sm tracking-wide drop-shadow-lg mt-4 uppercase"                        
                      >
                        {member.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hlavní obrázek s textem přes něj (responzivní výška) */}
            <div className="relative w-full sm:w-[90%] md:w-[88%] lg:w-[72%] monitor:w-[66%] mx-auto mt-3 mb-3 sm:mt-3 sm:mb-3 md:mt-7 md:mb-7">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Use <Image> fill for best responsiveness */}
                <div className="relative w-full h-[70vh] sm:h-[56vh] md:h-[64vh] lg:h-[70vh] monitor:h-[55vh]">
                  <Image
                    src={band}
                    alt="Band"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* dark overlay for contrast */}
                  <div className="absolute inset-0 bg-black/80 xl:bg-black/80 monitor:bg-black/85 backdrop-blur-sm" />

                  {/* Content centered inside image */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                    <Content />
                  </div>
                </div>
              </div>
            </div>

            {/* Nadpis */}
            <div className="px-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] uppercase font-montserrat font-semibold text-center text-white">
                Jsme Wait
              </h2>
            </div>            

            {/* Druhý obrázek - dekor, responsivní velikost */}
            <div className="relative w-full sm:w-[90%] md:w-[88%] lg:w-[72%] monitor:w-[66%] mx-auto mt-3 sm:mt-3 md:mt-7 rounded-xl overflow-hidden shadow-lg">
              <div className="w-full h-[36vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] monitor:h-[63vh] band2-bg"
                  style={{ backgroundImage: `url('${band2.src}')` }} />
            </div>

            <div className="flex justify-center mt-4">
              <PrimaryActionButton href="/">
                Zpět na úvod
              </PrimaryActionButton>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}