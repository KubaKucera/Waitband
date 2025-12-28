"use client";

import { useEffect, useState } from "react";
import ImageSlider from "@/components/slider/ImageSlider";
import texture from "../../public/assets/textures/texture.jpg";
import { AnimatePresence, motion } from "framer-motion";
import AnnouncementModal from "@/components/announcementModal/AnnouncementModal";
import SideAccentLineHome from "@/components/sideAccentLineHome/SideAccentLineHome";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { newsData, NewsItem } from "../data/newsData";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import image1 from "../../public/assets/images/music/february29th.jpg";
import image2 from "../../public/assets/images/music/losingSleep.jpg";
import image3 from "../../public/assets/images/music/carelessDreaming.jpg";
import appleMusic from "../../public/assets/icons/appleMusic.svg";
import spotify from "../../public/assets/icons/spotify.svg";
import soundcloud from "../../public/assets/icons/soundcloud.svg";
import LiteYouTubeEmbed from "@/components/liteYtEmbed/LiteYouTubeEmbed";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { ArrowRight } from "lucide-react";

const images = [image1, image2, image3];

const soundcloudSongs = [
  { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
  { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
  { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },
  { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
  { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },  
  { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },
  { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
  { title: "Horoskop", url: "https://soundcloud.com/wait-band-official/horoskop-horoscope" },  
  { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
];

const appleMusicSongs = [
  { title: "February 29th", url: "https://music.apple.com/gh/album/february-29th/1479578756?i=1479579086" },
  { title: "Losing Sleep", url: "https://music.apple.com/gh/album/losing-sleep/1479578756?i=1479578767" },
  { title: "Careless Dreaming", url: "https://music.apple.com/gh/album/careless-dreaming/1479578756?i=1479578960" },
  { title: "Daydream", url: "https://music.apple.com/gh/album/daydream/1479578756?i=1479578955" },
  { title: "Follow Me To Hell", url: "https://music.apple.com/gh/album/follow-me-to-hell/1122535403?i=1122535560" },
  { title: "Subway Train", url: "https://music.apple.com/gh/album/subway-train/1479578756?i=1479578770" },
  { title: "Hate You", url: "https://music.apple.com/gh/album/hate-you/1122535403?i=1122535559" },
  { title: "Horoskop", url: "" },
  { title: "Achiever", url: "https://music.apple.com/gh/album/achiever/1122535403?i=1122535815" },
];

const spotifyMusicSongs = [
  { title: "February 29th", url: "https://open.spotify.com/track/4hy5ZgeVleEN4LxzX4DVUi" },
  { title: "Losing Sleep", url: "https://open.spotify.com/track/56Cp5nf8gnYEGjQAigUciX" },
  { title: "Careless Dreaming", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" },   
  { title: "Daydream", url: "https://open.spotify.com/track/3mQLGi3hzXECZ2CsocLDMt" },
  { title: "Follow Me To Hell", url: "https://open.spotify.com/track/6hEF1OxQBlMdwhDo8Q18CF" },
  { title: "Subway Train", url: "https://open.spotify.com/track/2Grjcg1SoCU7vWsqoCX9Qr" },
  { title: "Hate You", url: "https://open.spotify.com/track/2rrTaT2f8xdzNWYgFyuJzf" },
  { title: "Horoskop", url: "" },  
  { title: "Achiever", url: "https://open.spotify.com/track/2P5boFog1gp3RZR5qZNpVT" },
];

export default function Home() {
  const [active, setActive] = useState<NewsItem | null>(null);  
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
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

  useEffect(() => {
    if (active) {
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
  }, [active]);

  return (
    <>  
      <AnnouncementModal />

      {/* Hero se sliderem */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 w-full"
      >
        <ImageSlider />
      </motion.div>

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <SideAccentLineHome targetId="uvod-section" />

        <section id="uvod-section" className="relative flex flex-col items-center px-4 sm:px-4 md:px-0 pt-0 sm:pt-[30px] md:pt-[50px]">
          <div className="relative w-full justify-center items-center mt-9 sm:mt-9 md:mt-0">
            <TitleWithLines title="Kapela WAIT" />
          </div>          

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Novinky */}
            <section
              id="novinky-section"
              className="relative flex flex-col items-center w-full max-w-6xl monitor:max-w-7xl mt-16"
            >
              <SectionTitle title="Novinky" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 monitor:gap-10 mt-11 w-full">
                {newsData.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setActive(item)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="
                      relative group cursor-pointer rounded-xl
                      bg-white/5 hover:bg-white/10
                      overflow-hidden shadow-lg transition
                      flex flex-col aspect-[4/5]
                    "
                  >
                    {/* IMAGE – větší část */}
                    <div className="relative w-full flex-[3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover monitor:object-top transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform transform-gpu"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="p-4 sm:p-5 monitor:p-6 text-white flex flex-col flex-[2]">
                      <div className="space-y-1.5 monitor:space-y-2">
                        <span className="inline-block border-neonPink border-2 px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                          {item.category}
                        </span>

                        <p className="text-xs text-gray-400">{item.date}</p>
                        <h3 className="text-lg sm:text-xl font-semibold mt-1">{item.title}</h3>
                        <p className="text-sm text-gray-300 mt-1 sm:mt-2 line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto flex items-center justify-start gap-1 sm:gap-2 text-neonPink text-sm font-semibold opacity-70 group-hover:opacity-100 transition-all duration-300">
                        <span className="tracking-wide">Přečíst více</span>
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="flex justify-center mt-11">
                <Link href="/novinky">
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
                    Zobrazit vše

                    <ArrowRight
                      size={22}
                      className="
                        absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out
                      "
                    />
                  </button>
                </Link>
              </div>
            </section>

            {/* Hudba */}
            <section id="hudba-section" className="relative flex flex-col items-center w-full max-w-6xl monitor:max-w-7xl mt-16">
              <SectionTitle title="Hudba" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 monitor:gap-10 mt-11 w-full">
                {[image1, image2, image3].map((img, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(index)}
                    className="relative group cursor-pointer w-full aspect-square overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`Photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:scale-105"
                    />
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
                        className="text-white h-[100%] w-[100%] flex items-center justify-center font-semibold uppercase tracking-widest text-md"
                      >
                        Poslechnout
                      </motion.span>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-11">
                <Link href="/hudba">
                  <button className="group relative w-[320px] h-[55px]
                    text-[15px] font-semibold tracking-[0.12em]
                    rounded-full text-white                    
                    transition-all duration-300 ease-out
                    bg-transparent border-[2px] border-transparent
                    [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                    hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]
                    focus-visible:outline-none
                    focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]">
                      
                    Poslechnout více
                    <ArrowRight
                      size={22}
                      className="
                        absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out
                      "
                    />
                  </button>
                </Link>
              </div>
            </section>

            {/* Videa */}
            <section id="videa-section" className="relative flex flex-col items-center w-full max-w-6xl monitor:max-w-7xl mt-16">
              <SectionTitle title="Videa" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 monitor:gap-10 mt-11 w-full">
                <LiteYouTubeEmbed videoId="w4Xn_DzsC6o" title="WAIT - Losing Sleep (Live)" />
                <LiteYouTubeEmbed videoId="M_ugx3HzqME" title="WAIT - Horoskop (Official Music Video)" />
                <LiteYouTubeEmbed videoId="8Tupra8tJiY" title="WAIT - Modelka (Official Music Video)" />
              </div>

              <div className="flex justify-center mt-11 mb-3">
                <Link href="/videa">
                  <button className="group relative w-[320px] h-[55px]
                    text-[15px] font-semibold tracking-[0.12em]
                    rounded-full text-white                    
                    transition-all duration-300 ease-out
                    bg-transparent border-[2px] border-transparent
                    [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                    hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]
                    focus-visible:outline-none
                    focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]">
                    
                    Další videa
                    <ArrowRight
                      size={22}
                      className="
                        absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out
                      "
                    />
                  </button>
                </Link>
              </div>
            </section>
          </motion.div>
        </section>        
      </div>

      {/* Modal news */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            {/* --- Close button (desktop) --- */}
            <button
              className="absolute hidden lg:flex right-5 top-5 text-white hover:text-gray-300 transition z-20"
              onClick={() => setActive(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* --- Modal content --- */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: isLargeScreen ? 1.15 : 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-neutral-900 text-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HERO image section */}
              <div className="relative h-[300px] sm:h-[300px] md:h-80 monitor:h-96 w-full">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover object-top"
                />
                {/* Mobile close button */}
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-2 right-2 lg:hidden flex items-center justify-center px-2 py-2 rounded-full bg-black/70 text-white hover:text-gray-300 transition shadow-md z-20"
                  aria-label="Zavřít článek"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* CONTENT section */}
              <div className="bg-neutral-800 p-6 max-h-[270px] overflow-y-auto space-y-4">
                <span className="inline-block border-neonPink border-2 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                  {active.category}
                </span>
                <p className="text-sm text-gray-400">{active.date}</p>
                <h2 className="text-2xl font-bold">{active.title}</h2>
                <p className="text-gray-200 whitespace-pre-wrap">{active.content}</p>
                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm mt-3 text-neonPink hover:underline"
                  >
                    Více zde <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL hudba */}
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