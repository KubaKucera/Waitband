"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

import ivanImage from "../../../public/assets/images/band/ivan.jpg";
import pavelImage from "../../../public/assets/images/band/pavel.jpg";
import martinaImage from "../../../public/assets/images/band/martina.jpg";
import marekImage from "../../../public/assets/images/band/marek.jpg";
import texture from "../../../public/assets/textures/texture.jpg";
import band from "../../../public/assets/images/band/band.jpg";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

const Content = () => (
  <>
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-xl sm:text-2xl md:text-4xl font-bold text-orange-400 uppercase mb-3 sm:mb-6"
    >
      O nás
    </motion.h3>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-md sm:text-md monitor:text-xl text-white mb-4 sm:mb-10 max-w-4xl mx-auto leading-relaxed"
    >
      WAIT vznikl v roce 2008 v Hradci Králové.<br />
      Současnou sestavu tvoří Ivan Kučera, Martina Panchártková, Marek Kopecký a Pavel Herynk.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="text-md sm:text-md md:text-lg text-white space-y-3 sm:space-y-6 max-w-4xl mx-auto leading-relaxed"
    >
      <div>
        <strong className="text-orange-400">Martina Panchártková</strong> – zpěv
      </div>
      <div>
        <strong className="text-orange-400">Ivan Kučera</strong> – baskytara, kytary, aranže, texty, samply, zpěv<br />
        <span className="text-gray-300 text-sm sm:text-sm md:text-base">
          Předchozí skupiny: -123 min., Distorze, N.V.U., Survive, Claim, Beautiful Losers, Nová Bára, Sir Morfius
        </span>
      </div>
      <div>
        <strong className="text-orange-400">Pavel Herynk</strong> – kytary, texty<br />
        <span className="text-gray-300 text-sm sm:text-sm md:text-base">
          Předchozí skupiny: Beautiful Losers, Wild Palms, Anachronic
        </span>
      </div>
      <div>
        <strong className="text-orange-400">Marek Kopecký</strong> – bicí<br />
        <span className="text-gray-300 text-sm sm:text-sm md:text-base">
          Předchozí skupiny: Monantes
        </span>
      </div>
    </motion.div>
  </>
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
      <SideAccentLine targetId="band-section"/>

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section id="band-section" className="relative min-h-screen flex flex-col items-center gap-8 pt-[110px] px-4">
          {/* Titulek */}
          <TitleWithLines title="Členové kapely" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            {/* Členové kapely */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-7xl px-4">
              {members.map((member, index) => {
                // Rozdělení jména na dvě části (první slovo a zbytek)
                //const [firstName, ...lastNameParts] = member.name.split(" ");
                //const lastName = lastNameParts.join(" ");

                return (
                  <div
                    key={index}
                    className="group relative w-full h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Obrázek člena */}
                    <div className="relative w-full h-full">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Panel s jménem přes celou šířku dole */}
                      <div className="absolute bottom-0 left-0 right-0">
                        <div className="w-full flex justify-center items-center bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border-t border-white/20 shadow-lg h-24 px-4 text-center transition-all duration-500 group-hover:scale-[1.01]">
                          <span className="block text-white font-semibold text-lg sm:text-xl md:text-xl uppercase tracking-wide drop-shadow-lg">
                            {member.name}
                          </span>                          
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 mb-8">
              <h2 className="text-4xl sm:text-4xl lg:text-[44px] uppercase font-montserrat font-semibold text-center text-white"
              > Jsme Wait
              </h2>
            </div>

            <div className="w-full sm:w-[85%] md:w-[90%] lg:w-[67%] mx-auto flex flex-col">
              {/* Obrázek */}
              <div
                className="relative no-fixed-bg w-full h-[300px] sm:h-[300px] md:h-[600px] monitor:h-[100vh] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                style={{
                  backgroundImage: `url(${band.src})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }}
              />

              {/* Text vždy pod obrázkem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-4 bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-xl shadow-lg text-center"
              >
                <Content />
              </motion.div>              
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}