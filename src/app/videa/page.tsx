"use client";

import Image from "next/image";
import texture from "../../../public/assets/textures/texture.jpg";
import { useState, useRef, useEffect } from "react";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { PrimaryActionButton } from "@/components/primaryActionButton/PrimaryActionButton";

function PlayIcon({ size = 32, color = "#fff", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      aria-label="Play"
      className={className}
    >
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z" />
    </svg>
  );
}

const videos = [
  { id: "w4Xn_DzsC6o", title: "WAIT - Losing Sleep (Live - Show Miloše Knora)" },
  { id: "M_ugx3HzqME", title: "WAIT - Horoskop (Official Music Video)" },
  { id: "8Tupra8tJiY", title: "WAIT - Modelka (Official Music Video)" },
  { id: "OkWHNAsE0Zg", title: "WAIT - Nekonečnej Seriál (Live @ Erpet Prague)" },
  { id: "jmPkHuh_qK8", title: "WAIT - Achiever (Live - Show Miloše Knora)" },
  { id: "OUStNRHRgjE", title: "WAIT - Hate you (Official Music Video)" },
  {
    id: "Sk-D8LmeEgA",
    title: "WAIT - Single (feat. Kristýna Štromajerová)",
  },
  { id: "2dtwW_3dxGM", title: "WAIT - Perfect Liar" },
  { id: "Q-8a308aqLc", title: "WAIT - Every Day Blue (Live)" },
  { id: "iuyv0jPlWZg", title: "WAIT - My Guide" },
  { id: "yCNaLnsRCR8", title: "WAIT - When You Sleep (Lyric Video)" },
  { id: "TXSluBOjNoU", title: "WAIT - Live to Party" },
];

export default function VideosPage() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    document.title = "Videa | Wait";
  }, []);

  const handleVideoClick = (video: typeof videos[number]) => {
    if (video.id === currentVideo.id) return;

    setCurrentVideo(video);

    if (iframeRef.current) {
      iframeRef.current.src = "";
      setTimeout(() => {
        iframeRef.current!.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
      }, 100);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SideAccentLine targetId="video-section" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(20,20,20,0.85)), url(${texture.src})`,
        }}
      >
        <section
          id="video-section"
          className="min-h-screen flex flex-col items-center gap-8 pt-[118px]"
        >
          <TitleWithLines title="Videa YT" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full flex flex-col items-center px-6 lg:px-0 mt-6"
          >
            {/* HLAVNÍ VIDEO */}
            <div className="w-full max-w-[820px] z-30 mb-9 md:mb-14">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${currentVideo.id}`}
                  title={currentVideo.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <h2 className="text-white text-xl sm:text-2xl md:text-4xl mt-4 px-2">
                {currentVideo.title}
              </h2>
            </div>

            {/* GRID VIDEÍ */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[820px] mb-7">
              {videos.map((video) => {
                const isActive = video.id === currentVideo.id;

                return (
                  <div key={video.id} className="group">
                    <div
                      className={`relative aspect-video overflow-hidden rounded-md transition
                        ${isActive ? "cursor-not-allowed" : "cursor-pointer"}
                      `}
                      onClick={() => !isActive && handleVideoClick(video)}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className={`object-cover transition-opacity duration-300
                          ${isActive ? "opacity-50" : "group-hover:opacity-80"}
                        `}
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        {isActive ? (
                          <span className="text-white text-sm md:text-base">
                            Spuštěno…
                          </span>
                        ) : (
                          <PlayIcon />
                        )}
                      </div>
                    </div>

                    <p className="text-white text-sm md:text-base mt-2">
                      {video.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* BUTTON */}
            <div className="mt-4 mb-3 flex justify-center">
              <PrimaryActionButton
                href="https://www.youtube.com/@waitbandofficial/videos"
                target="_blank"
              >
                Všechna videa
              </PrimaryActionButton>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}