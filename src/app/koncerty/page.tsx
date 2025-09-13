"use client";

import Image from "next/image";
import texture from "../../../public/assets/textures/texture.jpg";
import consertsImage from "../../../public/assets/images/conserts/consertsImage.jpg";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

const concertData = [
  "17.1.2025, 20:30 – Praha, Rock Café",
  "29.3.2025, 00:00 – Pardubice, Divadlo",
  "18.7.2025, 20:00 – Autokemp Sečská přehrada",
  "6.9.2025, 20:00 – Hrad Pecka"
];

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center w-full max-w-3xl mx-auto px-6">
    <h2 className="text-white text-3xl sm:text-3xl md:text-4xl font-bold font-montserrat tracking-wide whitespace-nowrap uppercase">
      {title}
    </h2>
    <div className="flex-1 h-[2px] bg-white ml-6 w-full rounded-tr rounded-br"></div>
  </div>
);

export default function ConsertsPage() {
  useEffect(() => {
    document.title = "Koncerty | Wait";
  }, []);

  return (
    <>
      <SideAccentLine targetId="concert-section"/>
      
      <div
        className="relative w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section id="concert-section" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gap-8 pt-[110px]">
          {/* Titulek */}
          <TitleWithLines title="Koncerty" delay={0.3} />          

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <SectionTitle title="2025" />
            {/* Seznam koncertů */}
            <div className="w-full max-w-3xl z-10 flex flex-col gap-10 px-4 sm:px-6 md:px-0">
              {concertData.map((text, index) => {
                const [dateTime, locationRaw] = text.split(" – ");
                const [city, place] = locationRaw.split(", ");

                return (
                  <div
                    key={index} // ✅ pridali sme key
                    className="flex flex-col items-center w-full mx-auto bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl px-8 py-10 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                  >
                    {/* Datum a čas */}
                    <div className="text-center mb-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">{dateTime}</span>
                    </div>

                    {/* Místo konání */}
                    <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl text-white/80">
                      <FaMapMarkerAlt className="text-orange-400 text-2xl" />
                      <span className="text-orange-400">{place ? `${city}, ${place}` : city}</span>
                    </div>

                    {/* Dekorativní gradient linka */}
                    <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-gradient-to-r bg-white/90 group-hover:w-32 transition-all duration-300"></div>
                  </div>
                );
              })}
              
              <div className="relative w-full flex justify-center mt-6 px-4 sm:px-6 md:px-0">
                <div className="relative flex h-[235px] w-full max-w-3xl flex-col items-center justify-center rounded-3xl overflow-hidden">
                  <Image
                    src={consertsImage}
                    alt="Conserts Image"
                    className="object-cover h-full w-full pointer-events-none animate-pulse"
                    priority
                  />
                  {/* Overlay + backdrop blur */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                  <h2 className="absolute text-[30px] sm:text-[40px] text-center font-montserrat text-white z-10 px-4">
                    Těšíme se na vás!
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>          
        </section>
      </div>
    </>
  );
}