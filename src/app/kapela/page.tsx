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
import { motion } from "framer-motion";

export default function BandPage(){
  useEffect(() => {
    document.title = "Kapela - Wait";
  }, []);  
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="kapela"/>  
          <HeadingWithLine lineHeight="725px" /> 

          <section className="relative min-h-screen flex items-center justify-center pt-28 pb-24 px-4 sm:px-8 lg:px-16">
            {/* Background */}
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
            >
              <div className="fixed right-[50px] top-72 rotate-25 hidden xl:flex pointer-events-none z-30 animate-pulse">
                <motion.div
                  animate={{
                    y: [0, 15, 0],  // pohyb z původní pozice dolů o 15px a zpět nahoru
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="drop-shadow-lg"
                >
                  <Image
                    src={emoticon}
                    alt="ExcMark"
                    width={310}
                    className="filter saturate-150 brightness-75"
                  />
                </motion.div>      
              </div>
            </div>                       

            {/* Content */}
            <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              {/* Martina */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[350px] h-[480px] overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={martinaImage}
                    alt="Martina"
                    objectFit="cover"
                    layout="fill"
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 w-full h-[105px] bg-blue-950 bg-opacity-70 flex flex-col justify-center items-center rounded-bl-md rounded-br-md">
                    <span className="text-white font-bold uppercase">Martina Panchártková</span>
                    <span className="text-lightGray text-sm text-center">Lead vocal</span>
                  </div>
                </div>                
              </div>

              {/* Ivan */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[350px] h-[480px] overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={ivanImage}
                    alt="Ivan"
                    objectFit="cover"
                    layout="fill"
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 w-full h-[105px] bg-blue-950 bg-opacity-80 flex flex-col justify-center items-center rounded-bl-md rounded-br-md">
                    <span className="text-white font-bold uppercase">Ivan Kučera</span>
                    <span className="text-lightGray text-sm text-center">Bassguitar, back vocals, arr., music & lyrics, <br/>guitar, acoustic guitar</span>
                  </div>
                </div>                
              </div>

              {/* Marek */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[350px] h-[480px] overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={marekImage}
                    alt="Marek"
                    objectFit="cover"
                    layout="fill"
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 w-full h-[105px] bg-blue-950 bg-opacity-80 flex flex-col justify-center items-center rounded-bl-md rounded-br-md">
                    <span className="text-white font-bold uppercase">Marek Kopecký</span>
                    <span className="text-lightGray text-sm text-center">Drums</span>
                  </div>
                </div>                
              </div>

              {/* Pavel */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[350px] h-[480px] overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={pavelImage}
                    alt="Pavel"
                    objectFit="cover"
                    layout="fill"
                    className="object-cover"
                  />

                  <div className="absolute bottom-0 w-full h-[105px] bg-blue-950 bg-opacity-75 flex flex-col justify-center items-center rounded-bl-md rounded-br-md">
                    <span className="text-white font-bold uppercase">Pavel Herynk</span>
                    <span className="text-lightGray text-sm text-center">Guitar, lyrics</span>
                  </div>
                </div>                
              </div>
            </div>           

          </section>
                    
          <Footer />                  
        </>
    );
}