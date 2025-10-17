"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import ivanImage from "../../../public/assets/images/band/ivan.jpg";
import pavelImage from "../../../public/assets/images/band/pavel.jpg";
import martinaImage from "../../../public/assets/images/band/martina.jpg";
import marekImage from "../../../public/assets/images/band/marek.jpeg";
import texture from "../../../public/assets/textures/texture.jpg";
import band from "../../../public/assets/images/photos/image11.jpg";
import band2 from "../../../public/assets/images/band/band.jpg";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

const Content = () => (
  <div className="text-center max-w-4xl mx-auto text-white px-4">
    <motion.h3
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.45 }}
      className="text-orange-400 uppercase font-bold mb-3"
      style={{ fontSize: "clamp(1.05rem, 2.2vw, 2.25rem)" }}
    >
      O nás
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.45 }}
      className="mb-4 leading-relaxed"
      style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)", color: "rgba(255,255,255,0.95)" }}
    >
      WAIT vznikl v roce 2008 v Hradci Králové.<br />
      Současnou sestavu tvoří Ivan Kučera, Martina Panchártková, Marek Kopecký a Pavel Herynk.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 0.45 }}
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
        <strong className="text-orange-400">Pavel Herynk</strong> – kytary, texty<br />
        <span className="text-gray-200 text-sm">
          Předchozí skupiny: Beautiful Losers, Wild Palms, Anachronic
        </span>
      </div>
      <div>
        <strong className="text-orange-400">Marek Kopecký</strong> – bicí<br />
        <span className="text-gray-200 text-sm">
          Předchozí skupiny: Monantes
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
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section id="band-section" className="relative min-h-screen flex flex-col items-center gap-8 pt-[115px] px-4">
          {/* Titulek */}
          <TitleWithLines title="Členové kapely" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            {/* Členové kapely (responsive grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-7xl px-4">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="group relative w-full h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* name bar */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="w-full flex justify-center items-center bg-gradient-to-r from-black/18 via-black/8 to-black/18 backdrop-blur-md border-t border-black/10 shadow-lg h-20 sm:h-24 px-4 text-center transition-all duration-500 group-hover:scale-[1.01]">
                      <span
                        className="block text-white font-semibold text-sm sm:text-lg uppercase tracking-wide drop-shadow-lg"
                        style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)" }}
                      >
                        {member.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nadpis */}
            <div className="mt-7 mb-7 px-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] uppercase font-montserrat font-semibold text-center text-white">
                Jsme Wait
              </h2>
            </div>

            {/* Hlavní obrázek s textem přes něj (responzivní výška) */}
            <div className="relative w-full sm:w-[90%] md:w-[88%] lg:w-[72%] monitor:w-[66%] mx-auto">
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
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Content />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Druhý obrázek - dekor, responsivní velikost */}
            <div className="w-full sm:w-[90%] md:w-[88%] lg:w-[72%] monitor:w-[66%] mx-auto mt-4">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative no-fixed-bg w-full h-[50vh] sm:h-[36vh] md:h-[48vh] lg:h-[70vh] monitor:h-[55vh]"
                  style={{ backgroundImage: `url('${band2.src}')`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", }}
                >                  
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}