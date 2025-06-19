"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ivanImage from "../../../public/assets/images/band/ivan.jpg";
import pavelImage from "../../../public/assets/images/band/pavel.jpg";
import martinaImage from  "../../../public/assets/images/band/martina.jpg";
import marekImage from  "../../../public/assets/images/band/marek.jpg";
import texture from "../../../public/assets/textures/texture.jpg";
import emoticon from "../../../public/assets/images/graffiti/emoticon2.png";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

import { useEffect } from "react";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

export default function BandPage() {
  useEffect(() => {
    document.title = "Kapela - Wait";
  }, []);

  const members = [
    {
      name: "Martina Panchártková",
      role: "Zpěv",
      img: martinaImage,
    },
    {
      name: "Ivan Kučera",
      role: "Baskytara, zpěv, aranže, hudba a texty, kytara",
      img: ivanImage,
    },
    {
      name: "Marek Kopecký",
      role: "Bicí",
      img: marekImage,
    },
    {
      name: "Pavel Herynk",
      role: "Kytara, texty",
      img: pavelImage,
    },
  ];

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="kapela" />     
      <ScrollToTopButton /> 
      <HeadingWithLine
        height={475}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={0.6}
        ease="easeOut"    
        label="Kapela"
      />  

      {/* Pozadí s texturou */}
      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      >
        <section className="max-w-screen-xl mx-auto z-10 py-10 pt-20 pb-10 px-4 pr-10 pl-10 sm:pr-10 sm:pl-10 sm:px-6">
          {/* Title */}
          <div className="relative text-center z-20">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
              Členové kapely Wait
            </h2>
            <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 mt-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative w-full h-[440px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full h-[110px] backdrop-blur-md bg-black/40 border-t border-white/10 p-3 flex flex-col items-center justify-center text-center">
                  <span className="text-white font-semibold text-lg uppercase tracking-wide">
                    {member.name}
                  </span>
                  <span className="text-gray-300 text-sm mt-1">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}