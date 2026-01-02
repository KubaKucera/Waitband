"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import ivanImage from "../../../public/assets/images/band/ivan.jpeg";
import pavelImage from "../../../public/assets/images/band/pavel.jpeg";
import martinaImage from "../../../public/assets/images/band/martina.jpg";
import marekImage from "../../../public/assets/images/band/marek.jpeg";
import texture from "../../../public/assets/textures/texture.jpg";
import band from "../../../public/assets/images/photos/image11.jpg";
import band2 from "../../../public/assets/images/band/band.jpg";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section id="band-section" className="relative min-h-screen flex flex-col items-center gap-8 pt-[118px] px-6 sm:px-6 md:px-6 lg:px-0">
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
                  className="group relative w-full h-[470px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
                        className="block text-white font-medium text-sm sm:text-lg tracking-wide drop-shadow-lg"
                        style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.10rem)" }}
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
                    <Content />
                  </div>
                </div>
              </div>
            </div>

            {/* Druhý obrázek - dekor, responsivní velikost */}
            <div className="w-full sm:w-[90%] md:w-[88%] lg:w-[72%] monitor:w-[66%] mx-auto mt-4">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative no-fixed-bg w-full h-[36vh] sm:h-[36vh] md:h-[48vh] lg:h-[70vh] monitor:h-[63vh]"
                  style={{ backgroundImage: `url('${band2.src}')`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", }}
                ></div>
              </div>
            </div>

            <div className="flex justify-center mt-2 sm:mt-2 md:mt-4 mb-3">
              <Link href="/">
                <button
                  className="group relative w-[320px] h-[55px]
                    text-[15px] font-semibold tracking-[0.12em]
                    rounded-full text-white                    
                    transition-all duration-300 ease-out
                    bg-transparent border-[2px] border-transparent
                    [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                    hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]
                    focus-visible:outline-none
                    focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]"
                >
                  Zpět na úvod
                  <ArrowRight
                    size={22}
                    className="
                      absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out
                    "
                  />
                </button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}