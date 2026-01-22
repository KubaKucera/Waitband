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
import image1 from "../../public/assets/images/music/february29th.jpg";
import image2 from "../../public/assets/images/music/losingSleep.jpg";
import image3 from "../../public/assets/images/music/carelessDreaming.jpg";
import appleMusic from "../../public/assets/icons/appleMusic.svg";
import spotify from "../../public/assets/icons/spotify.svg";
import soundcloud from "../../public/assets/icons/soundcloud.svg";
import LiteYouTubeEmbed from "@/components/liteYtEmbed/LiteYouTubeEmbed";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { ArrowRight } from "lucide-react";
import { PrimaryActionButton } from "@/components/primaryActionButton/PrimaryActionButton";

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

  const [modalData, setModalData] = useState<{
    image: any;
    title: string;
    index: number;
  } | null>(null);

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

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);   
  
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

        <section id="uvod-section" className="relative flex flex-col items-center px-6 sm:px-6 md:px-6 pt-0 sm:pt-[30px] md:pt-[50px]">
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
                    className="relative group cursor-pointer rounded-xl bg-white/5 hover:bg-white/10 overflow-hidden shadow-md transition-all duration-300 flex flex-col aspect-[4/5]"
                  >
                    {/* IMAGE – větší část */}
                    <div className="relative w-full flex-[3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top
                        transition-transform duration-300 ease-out
                        group-hover:-translate-y-2 will-change-transform transform-gpu"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="p-4 sm:p-5 monitor:p-6 text-white flex flex-col flex-[2]">
                      <div className="space-y-1.5 monitor:space-y-2">
                        <span className="inline-block border-neonPink border-2 px-2 py-0.5 rounded-full text-xs font-medium mb-1">
                          {item.category}
                        </span>

                        <p className="text-xs text-gray-400">{item.date}</p>
                        {/* TITLE */}
                        <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                          {item.title}
                        </h3>

                        {/* EXCERPT */}
                        <p className="text-sm text-gray-300 line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* CTA */}
                      <div
                        className="
                          mt-auto pt-4
                          flex items-center gap-2
                          text-neonPink text-sm font-medium
                          opacity-60 group-hover:opacity-100
                          transition-all duration-300
                        "
                      >
                        <span>Přečíst více</span>
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
                <PrimaryActionButton href="/novinky">
                  Zobrazit vše
                </PrimaryActionButton>
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
                <PrimaryActionButton href="/hudba">
                  Poslechnout více
                </PrimaryActionButton>
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
                <PrimaryActionButton href="/videa">
                  Další videa
                </PrimaryActionButton>
              </div>
            </section>
          </motion.div>
        </section>        
      </div>

      {/* Modal news */}
      <AnimatePresence>
              {active && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="fixed inset-0 z-50 flex items-center justify-center px-6
                            bg-black/60 sm:bg-black/80 backdrop-blur-md sm:backdrop-blur-sm"
                  onClick={() => setActive(null)}
                >
                  {/* Close button – desktop */}
                  <button
                    className="absolute hidden md:flex right-[20px] top-[24px]
                              text-white hover:text-gray-300 transition z-20"
                    onClick={() => setActive(null)}
                  >
                    <X className="w-8 h-8" />
                  </button>
      
                  {/* Wrapper pro scale */}
                  <div className="transform monitor:scale-[1.15] transition-transform duration-300">
                    {/* MODAL CARD */}
                    <motion.div
                      key="modal"
                      initial={{ y: 40, scale: 0.96, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      exit={{ y: 30, scale: 0.97, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        mass: 0.9,
                      }}
                      className="relative bg-neutral-800 text-white
                                max-w-2xl w-full
                                rounded-2xl
                                shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* --- MOBILNÍ CLOSE BUTTON --- */}
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="absolute -top-10 right-0 md:hidden"
                      >
                        <button
                          onClick={() => setActive(null)}
                          className="flex items-center justify-center
                                    bg-neutral-800 px-6 py-2
                                    rounded-t-2xl shadow-md
                                    hover:bg-neutral-700 transition"
                        >
                          <X className="w-6 h-6 text-white" />
                        </button>
                      </motion.div>
      
                      {/* HERO */}
                      <motion.div
                        initial={{ scale: 1.03 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                        className="relative h-[260px] sm:h-[300px] md:h-[335px] monitor:h-96
                                  w-full overflow-hidden
                                  rounded-tl-2xl md:rounded-t-2xl"
                      >
                        <Image
                          src={active.image}
                          alt={active.title}
                          fill
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </motion.div>
      
                      {/* CONTENT */}
                      <div className="rounded-b-2xl overflow-hidden bg-neutral-800">
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="p-6 max-h-[270px] md:max-h-[295px]
                                    overflow-y-auto space-y-4 custom-scrollbar"
                        >
                          <span className="inline-block border-neonPink border-2
                                          text-white px-2 py-0.5 rounded-full text-xs font-medium">
                            {active.category}
                          </span>
      
                          <p className="text-sm text-gray-400">{active.date}</p>
                          <h2 className="text-2xl font-bold">{active.title}</h2>
                          <p className="text-gray-200 whitespace-pre-wrap">
                            {active.content}
                          </p>
      
                          {active.link && (
                            <a
                              href={active.link}
                              target="_blank"
                              className="inline-flex items-center gap-2
                                        text-sm mt-3 text-neonPink hover:underline"
                            >
                              Více zde <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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