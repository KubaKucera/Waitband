"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import back from "../../../public/assets/images/conserts/back.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import Footer from "@/components/footer/Footer";
import consertsImage from "../../../public/assets/images/conserts/consertsImage.jpg";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

import { useEffect } from "react";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

const concertData = [
  "24.11.2024, 20:00 – Pardubice, Ateliér Klose",
  "17.1.2025, 20:30 – Praha, Rock Café",
  "29.3.2025, 00:00 – Pardubice, divadlo",
  "18.7.2025, 19:00 – Sečská Přehrada, Vyhlídková věž, 538 07 Seč",
];

export default function ConsertsPage() {
  useEffect(() => {
    document.title = "Koncerty - Wait";
  }, []);

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="koncerty" />
      <ScrollToTopButton />
      <HeadingWithLine
        height={860}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={0.6}
        ease="easeOut"
        label="Koncerty"
      />

      {/* Fixed background */}
      <div
        className="w-full h-[100vh] fixed inset-0 z-0 bg-center bg-no-repeat bg-cover animate-zoomSlow"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(34, 0, 64, 0.6), rgba(0, 0, 0, 0.85)), url('${back.src}')`,
        }}
      ></div>

      <div className="fixed inset-0 z-10 bg-black bg-opacity-40 backdrop-blur-sm pointer-events-none" />

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 py-10">
        
        <div className="relative text-center z-20">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
            Plány koncertů
          </h2>
          <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
        </div>

        {/* Main Concerts Container */}
        <div className="relative w-[700px] monitor:w-[780px] z-40 rounded-md pt-8 pr-8 pl-8 transform -translate-y-5">
          {/* Concert List */}
          <div className="flex flex-col items-center text-center space-y-8 pb-6 mt-10">
            {concertData.map((text, index) => {
              const [city, location] = text.split(" – ");
              const formattedLocation = location.split(", ").join(", ");

              return (
                <div
                  key={index}
                  className="w-full bg-[#ffffff2c] backdrop-blur-sm text-white px-8 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300 ease-in-out max-w-[650px] mx-auto"
                >
                  <p className="text-[22px] md:text-[24px] font-semibold">{city}</p>
                  <p className="text-[18px] md:text-[20px] text-gray-200 mt-2">{formattedLocation}</p>
                </div>
              );
            })}
          </div>

          {/* Image with overlay and text */}
          <div className="relative flex h-[190px] w-full flex-col items-center justify-center mt-6 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <Image
              src={consertsImage}
              alt="Conserts Image"
              className="object-cover h-full w-full pointer-events-none brightness-30"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <h2 className="absolute text-[30px] monitor:text-[40px] md:text-[32px] lg:text-4xl text-center font-montserrat font-semibold text-white z-10 px-4">
              Budeme se na vás těšit!
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}