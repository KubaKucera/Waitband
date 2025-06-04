"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import back from "../../../public/assets/images/conserts/back.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import Footer from "@/components/footer/Footer";
import consertsImage from "../../../public/assets/images/conserts/consertsImage.jpg";
import emoticon from "../../../public/assets/images/graffiti/emoticon.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Metadata } from "next";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

import { motion } from "framer-motion";
import { useEffect } from "react";

const concertData = [
  "24.11.2024, 20:00 – Pardubice, Ateliér Klose",
  "17.1.2025, 20:30 – Praha, Rock Café",
  "29.3.2025, 00:00 – Pardubice, divadlo",
];

export default function ConsertsPage() {
  useEffect(() => {
    document.title = "Koncerty - Wait";
  }, []);
  
  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="koncerty" />
      <HeadingWithLine lineHeight="450px" />

      <section className="relative flex flex-col items-center justify-center overflow-hidden py-12">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${back.src})`, width: "100%", height: "100%" }}
        ></div>

        {/* Overlay */}
        <div className="absolute bg-black inset-0 z-10 opacity-70 bg-fixed bg-cover bg-center bg-no-repeat"></div>

        {/* Emoticon */}
        <div className="fixed right-[50px] top-72 rotate-15 hidden xl:flex pointer-events-none z-30 animate-pulse">
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

        {/* Main Concerts Container */}
        <div className="relative w-[700px] monitor:w-[780px] bg-white bg-opacity-20 z-40 mt-[75px] rounded-md p-6 transform translate-y-[-20px]">
          {/* Title */}
          <h2 className="mt-[10px] text-[26px] text-white text-center font-normal font-montserrat opacity-100">
            Plány koncertů
          </h2>

          {/* Image */}
          <div className="flex h-[200px] w-full flex-col items-center mt-[25px]">
            <Image
              src={consertsImage}
              alt="Conserts Image"
              className="object-cover h-full pointer-events-none brightness-50 opacity-85 rounded-tr-2xl rounded-tl-2xl"
            />
            <h2 className="absolute flex text-[28px] monitor:text-[40px] md:text-[32px] lg:text-4xl text-center font-montserrat font-semibold text-gray-300 mt-[80px] ml-[50px] mr-[50px] z-10">
              Budeme se na vás těšit!
            </h2>
          </div>

          {/* Concert List */}
          <div className="flex flex-col items-center text-center space-y-6 pb-4 mt-8">
            {concertData.map((text, index) => {
              const [city, location] = text.split(" – ");
              const formattedLocation = location.split(", ").join(", ");

              return (
                <div
                  key={index}
                  className="w-full bg-[#ffffff1a] backdrop-blur-sm text-white px-6 py-5 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-200 ease-in-out max-w-[650px] mx-auto"
                >
                  <p className="text-[18px] md:text-[20px] font-medium">{city}</p>
                  <p className="text-[16px] md:text-[18px] text-gray-200 mt-1">{formattedLocation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}