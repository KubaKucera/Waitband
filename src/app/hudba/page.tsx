"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import image1 from "../../../public/assets/images/music/february29th.jpg";
import image2 from "../../../public/assets/images/music/carelessDreaming.jpg";
import image3 from "../../../public/assets/images/music/losingSleep.jpg";
import image4 from "../../../public/assets/images/music/daydream.jpg";
import image5 from "../../../public/assets/images/music/followMeToHell.jpg";
import image6 from "../../../public/assets/images/music/subwayTrain.jpg";
import image7 from "../../../public/assets/images/music/hateYou.jpg";
import image8 from "../../../public/assets/images/music/horoscop.jpg";
import image9 from "../../../public/assets/images/music/achiever.jpg";
import texture from "../../../public/assets/textures/texture.jpg";
import appleMusic from "../../../public/assets/icons/appleMusic.svg";
import spotify from "../../../public/assets/icons/spotify.svg";
import soundcloud from "../../../public/assets/icons/soundcloud.svg";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const soundcloudSongs = [
  { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
  { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },
  { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
  { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
  { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },  
  { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },
  { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
  { title: "Horoskop", url: "https://soundcloud.com/wait-band-official/horoskop-horoscope" },  
  { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
];

const appleMusicSongs = [
  { title: "February 29th", url: "https://music.apple.com/gh/album/february-29th/1479578756?i=1479579086" },
  { title: "Careless Dreaming", url: "https://music.apple.com/gh/album/careless-dreaming/1479578756?i=1479578960" },
  { title: "Losing Sleep", url: "https://music.apple.com/gh/album/losing-sleep/1479578756?i=1479578767" },
  { title: "Daydream", url: "https://music.apple.com/gh/album/daydream/1479578756?i=1479578955" },
  { title: "Follow Me To Hell", url: "https://music.apple.com/gh/album/follow-me-to-hell/1122535403?i=1122535560" },
  { title: "Subway Train", url: "https://music.apple.com/gh/album/subway-train/1479578756?i=1479578770" },
  { title: "Hate You", url: "https://music.apple.com/gh/album/hate-you/1122535403?i=1122535559" },
  { title: "Horoskop", url: "" },
  { title: "Achiever", url: "https://music.apple.com/gh/album/achiever/1122535403?i=1122535815" },
];

const spotifyMusicSongs = [
  { title: "February 29th", url: "https://open.spotify.com/track/4hy5ZgeVleEN4LxzX4DVUi" },
  { title: "Careless Dreaming", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" },  
  { title: "Losing Sleep", url: "https://open.spotify.com/track/56Cp5nf8gnYEGjQAigUciX" },
  { title: "Daydream", url: "https://open.spotify.com/track/3mQLGi3hzXECZ2CsocLDMt" },
  { title: "Follow Me To Hell", url: "https://open.spotify.com/track/6hEF1OxQBlMdwhDo8Q18CF" },
  { title: "Subway Train", url: "https://open.spotify.com/track/2Grjcg1SoCU7vWsqoCX9Qr" },
  { title: "Hate You", url: "https://open.spotify.com/track/2rrTaT2f8xdzNWYgFyuJzf" },
  { title: "Horoskop", url: "" },  
  { title: "Achiever", url: "https://open.spotify.com/track/2P5boFog1gp3RZR5qZNpVT" },
];

export default function MusicPage() {
  useEffect(() => {
    document.title = "Hudba | Wait";
  }, []);

  const [modalData, setModalData] = useState<{ image: any; title: string; index: number } | null>(null);

  const openModal = (index: number) => {
    setModalData({
      image: images[index],
      title: soundcloudSongs[index].title,
      index,
    });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = "";
  };

  return (
    <>   
      <SideAccentLine targetId="music-section"/>

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >        
        <section id="music-section" className="relative min-h-screen flex flex-col items-center px-4 gap-8 pt-[115px]">
          
          <TitleWithLines title="Hudba" delay={0.3} />  

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            {/* Grid skladeb */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-2">
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
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Motion overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute h-full inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.span
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-white h-[100%] w-[100%] flex items-center justify-center text-xl text-center font-semibold uppercase tracking-wide"
                    >
                      Poslechnout
                    </motion.span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Tlačítko alba */}
            <div className="flex justify-center mt-5 mb-4">
              <Link href="/alba">
                <button
                  className="relative w-[300px] h-[55px] uppercase tracking-[0.12em] rounded-full font-semibold text-[15px]
                  text-white transition-all duration-400 ease-out 
                  bg-transparent border-[2px] border-transparent
                  [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                  hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]"
                >
                  Přejít na Alba
                </button>
              </Link>
            </div>
          </motion.div>          
        </section>
      </div>

      {/* MODAL */}
      {modalData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-black/50 backdrop-blur-sm monitor:scale-125"
          onClick={closeModal}
        >
          <motion.div
            initial={{ y: 30, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 flex flex-col items-center"
          >
            {/* Zavřít */}
            <button
              aria-label="Zavřít"
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-700 hover:text-black"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Obrázek */}
            <div className="relative w-[80%] max-w-[250px] sm:max-w-[300px] aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
              <Image src={modalData.image} alt={modalData.title} fill className="object-cover" />
            </div>

            {/* Titulek */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="text-center mb-6"
            >
              <h2 className="text-black text-2xl font-bold">{modalData.title}</h2>
              <p className="text-gray-500">Vyber hudební službu</p>
            </motion.div>

            {/* Ovládací tlačítka */}
            <div className="w-full space-y-3">
              {[
                { icon: appleMusic, label: "Apple Music", url: appleMusicSongs[modalData.index].url },
                { icon: spotify, label: "Spotify", url: spotifyMusicSongs[modalData.index].url },
                { icon: soundcloud, label: "Soundcloud", url: soundcloudSongs[modalData.index].url },
              ].map(({ icon, label, url }, i) =>
                url ? (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.05, duration: 0.25 }}
                    className="flex items-center justify-between bg-gray-100 px-4 h-[55px] rounded-lg shadow hover:bg-gray-200 transition-all"
                  >
                    <Image src={icon} alt={label} width={100} />
                    <span className="text-black font-medium">Přehrát</span>
                  </motion.a>
                ) : null
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}