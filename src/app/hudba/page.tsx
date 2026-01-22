"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import february from "../../../public/assets/images/music/february29th.jpg";
import losing from "../../../public/assets/images/music/losingSleep.jpg";
import careless from "../../../public/assets/images/music/carelessDreaming.jpg";
import subway from "../../../public/assets/images/music/subwayTrain.jpg";
import daydream from "../../../public/assets/images/music/daydream.jpg";
import follow from "../../../public/assets/images/music/followMeToHell.jpg";
import horoscop from "../../../public/assets/images/music/horoscop.jpg";
import hate from "../../../public/assets/images/music/hateYou.jpg";
import achiever from "../../../public/assets/images/music/achiever.jpg";
import texture from "../../../public/assets/textures/texture.jpg";

import appleMusic from "../../../public/assets/icons/appleMusic.svg";
import spotify from "../../../public/assets/icons/spotify.svg";
import soundcloud from "../../../public/assets/icons/soundcloud.svg";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { X } from "lucide-react";
import { PrimaryActionButton } from "@/components/primaryActionButton/PrimaryActionButton";

const images = [february, losing, careless, subway, daydream, follow, horoscop, hate, achiever];

const soundcloudSongs = [
  { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
  { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
  { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },
  { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },
  { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
  { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },
  { title: "Horoskop", url: "https://soundcloud.com/wait-band-official/horoskop-horoscope" },
  { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
  { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
];

const appleMusicSongs = [
  { title: "February 29th", url: "https://music.apple.com/gh/album/february-29th/1479578756?i=1479579086" },
  { title: "Losing Sleep", url: "https://music.apple.com/gh/album/losing-sleep/1479578756?i=1479578767" },
  { title: "Careless Dreaming", url: "https://music.apple.com/gh/album/careless-dreaming/1479578756?i=1479578960" },
  { title: "Subway Train", url: "https://music.apple.com/gh/album/subway-train/1479578756?i=1479578770" },
  { title: "Daydream", url: "https://music.apple.com/gh/album/daydream/1479578756?i=1479578955" },
  { title: "Follow Me To Hell", url: "https://music.apple.com/gh/album/follow-me-to-hell/1122535403?i=1122535560" },
  { title: "Horoskop", url: "" },
  { title: "Hate You", url: "https://music.apple.com/gh/album/hate-you/1122535403?i=1122535559" },
  { title: "Achiever", url: "https://music.apple.com/gh/album/achiever/1122535403?i=1122535815" },
];

const spotifyMusicSongs = [
  { title: "February 29th", url: "https://open.spotify.com/track/4hy5ZgeVleEN4LxzX4DVUi" },
  { title: "Losing Sleep", url: "https://open.spotify.com/track/56Cp5nf8gnYEGjQAigUciX" },
  { title: "Careless Dreaming", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" },
  { title: "Subway Train", url: "https://open.spotify.com/track/2Grjcg1SoCU7vWsqoCX9Qr" },
  { title: "Daydream", url: "https://open.spotify.com/track/3mQLGi3hzXECZ2CsocLDMt" },
  { title: "Follow Me To Hell", url: "https://open.spotify.com/track/6hEF1OxQBlMdwhDo8Q18CF" },
  { title: "Horoskop", url: "" },
  { title: "Hate You", url: "https://open.spotify.com/track/2rrTaT2f8xdzNWYgFyuJzf" },
  { title: "Achiever", url: "https://open.spotify.com/track/2P5boFog1gp3RZR5qZNpVT" },
];

export default function MusicPage() {
  useEffect(() => {
    document.title = "Hudba | Wait";
  }, []);

  const [modalData, setModalData] = useState<{
    image: any;
    title: string;
    index: number;
  } | null>(null);

  // Zakázání scrollu při otevřeném modalu
  useEffect(() => {
    if (modalData) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [modalData]);

  const openModal = (index: number) => {
    setModalData({
      image: images[index],
      title: soundcloudSongs[index].title,
      index,
    });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <SideAccentLine targetId="music-section" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(20,20,20,0.85)), url(${texture.src})`,
        }}
      >
        <section
          id="music-section"
          className="relative min-h-screen flex flex-col items-center px-6 sm:px-6 md:px-6 lg:px-0 gap-8 pt-[118px]"
        >
          <TitleWithLines title="Hudba" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-6 w-full"
          >
            {/* Grid skladeb */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 monitor:gap-10 w-full max-w-6xl monitor:max-w-7xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="relative group cursor-pointer w-full aspect-square overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:scale-105"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center rounded-xl"
                  >
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-white h-[100%] w-[100%] flex items-center justify-center font-semibold uppercase tracking-widest text-base"
                    >
                      Poslechnout
                    </motion.span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Tlačítko alba */}
            <div className="flex justify-center mt-4 mb-3">
              <PrimaryActionButton href="/alba">Přejít na Alba</PrimaryActionButton>
            </div>
          </motion.div>
        </section>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed inset-0 z-50 flex items-center justify-center
              px-6 sm:p-10
              bg-black/50 sm:bg-black/70
              backdrop-blur-lg
              monitor:scale-115
            "
            onClick={closeModal}
          >
            <motion.div
              key="modal-card"
              initial={{ y: 40, scale: 0.92, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: 30, scale: 0.95, opacity: 0, filter: "blur(4px)" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.8,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full max-w-md
                rounded-2xl
                bg-white/25
                backdrop-blur-xl
                text-white
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                p-6
                flex flex-col items-center
              "
            >
              {/* Close button */}
              <motion.button
                onClick={closeModal}
                aria-label="Zavřít modal"                
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  absolute top-3 right-3 sm:top-4 sm:right-4
                  z-30
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  bg-black/60
                  backdrop-blur
                  text-white
                  hover:bg-black/80                  
                "
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* HERO IMAGE */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 140 }}
                className="relative w-full flex justify-center"
              >
                <div className="relative w-[220px] sm:w-[300px] aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={modalData.image}
                    alt={modalData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* CONTENT */}
              <div className="flex-shrink-0 w-full">
                <div className="w-full p-4 space-y-2">
                  <h2 className="text-2xl font-bold text-center">
                    {modalData.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base text-center text-nowrap">
                    Vyber hudební službu pro přehrání skladby.
                  </p>
                </div>

                {/* BUTTONS */}
                <motion.div
                  className="w-full space-y-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {[
                    {
                      icon: appleMusic,
                      label: "Apple Music",
                      url: appleMusicSongs[modalData.index].url,
                    },
                    {
                      icon: spotify,
                      label: "Spotify",
                      url: spotifyMusicSongs[modalData.index].url,
                    },
                    {
                      icon: soundcloud,
                      label: "Soundcloud",
                      url: soundcloudSongs[modalData.index].url,
                    },
                  ].map(({ icon, label, url }, i) => {
                    const isDisabled = !url;

                    return (
                      <motion.a
                        key={i}
                        href={isDisabled ? undefined : url}
                        target={isDisabled ? undefined : "_blank"}
                        rel={isDisabled ? undefined : "noopener noreferrer"}
                        variants={{
                          hidden: { opacity: 0, y: 8 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 22,
                        }}
                        className={`
                          flex items-center justify-between
                          px-4 h-[55px]
                          rounded-xl
                          shadow-md

                          transition-colors transition-shadow
                          duration-200 ease-out

                          ${isDisabled
                            ? "bg-gray-300 opacity-40 cursor-not-allowed"
                            : "bg-gray-100 hover:bg-white hover:shadow-lg cursor-pointer"}
                        `}
                        onClick={(e) => {
                          if (isDisabled) e.preventDefault();
                        }}
                        aria-disabled={isDisabled}
                      >
                        <Image src={icon} alt={label} width={100} />
                        <span className="text-black font-medium">
                          {isDisabled ? "Nedostupné" : "Přehrát"}
                        </span>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}