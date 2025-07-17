"use client";

import Image from "next/image";
import texture from "../../../public/assets/textures/texture.jpg";
import { useState, useRef, useEffect } from "react";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import Link from "next/link";

function PlayIcon({ size = 32, color = '#fff', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      aria-label="Play"      
      className={className}>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z" ></path>
    </svg>
  )
}

const videos = [
  {
    id: "w4Xn_DzsC6o",
    title: "WAIT - Losing Sleep (Live - Show Miloše Knora)",
  },
  {
    id: "M_ugx3HzqME",
    title: "WAIT - Horoskop (Official Music Video)",
  },
  {
    id: "8Tupra8tJiY",
    title: "WAIT - Modelka (Official Music Video)",    
  },      
  {
    id: "OkWHNAsE0Zg",
    title: "WAIT - Nekonečnej Seriál (Live @ Erpet Prague)",
  }, 
  {
    id: "jmPkHuh_qK8",
    title: "WAIT - Achiever (Live - Show Miloše Knora) ",
  },
  {
    id: "OUStNRHRgjE",
    title: "WAIT - Hate you (Official Music Video)",
  },
  {
    id: "Sk-D8LmeEgA",
    title: "WAIT - Single (feat. Kristýna Štromajerová - Official Music Video)",    
  },
  {
    id: "2dtwW_3dxGM",
    title: "WAIT - Perfect Liar (Official Music Video)",
  },
  {
    id: "Q-8a308aqLc",
    title: "WAIT - Every Day Blue (Live - Show Miloše Knora)",
  },
  {
    id: "iuyv0jPlWZg",
    title: "WAIT - My Guide (Official Music Video)",
  },
  {
    id: "yCNaLnsRCR8",
    title: "WAIT - When You Sleep (Official Lyric Video) ",
  },
  {
    id: "TXSluBOjNoU",
    title: "WAIT - Live to Party (Showcase Video)",
  },
]

export default function VideosPage(){  
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);
  const [selectedTitle, setSelectedTitle] = useState(videos[0].title);
  const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState<string>(videos[0].id);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    document.title = "Videa - Wait";
  }, []);  

  const handleVideoClick = (id: string, title: string) => {
    if (id === currentPlayingVideoId) return;

    setSelectedVideo(id);
    setSelectedTitle(title);
    setCurrentPlayingVideoId(id);
    
    if (iframeRef.current) {
      iframeRef.current.src = "";
      setTimeout(() => {
        iframeRef.current!.src = `https://www.youtube.com/embed/${id}?autoplay=1`; 
      }, 100);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };   

  return (
    <>      
      <HeadingWithLine
        height={1615}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={1.6}
        ease="easeOut"    
        label="Videa"
      />  

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      > 
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 py-10">          
          {/* Hlavní video - zvětšení výšky */}
          <div className="w-full max-w-[820px] h-auto mb-8 z-30 flex flex-col items-center px-4">
            <iframe
              ref={iframeRef}
              id="mainVideo"
              key={selectedVideo}
              width="100%"
              height="450px"
              src={`https://www.youtube.com/embed/${selectedVideo}`}  // Initially blank to prevent autoplay
              title={selectedTitle}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen     
              className="h-[210px] w-[410px] sm:h-[250px] sm:w-[450px] md:h-[440px] md:w-[790px] px-1"       
          ></iframe>
            <h2 className="text-white text-2xl sm:text-2xl md:text-4xl font-normal mt-4 text-left w-full px-2">{selectedTitle}</h2>
          </div>

          {/* Grid s videi */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-[820px] z-30 mb-5 px-4">
            {videos.map((video) => (
              <div key={video.id} className="relative flex flex-col items-center group"> {/* Přidání group na každý prvek */}
                <div className="relative flex items-center justify-center">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    width={300}
                    height={180}                  
                    className={`cursor-pointer h-[150px] w-[220px] sm:h-[150px] sm:w-[220px] md:h-[180px] md:w-[300px] transition-colors duration-300 border-transparent ${
                      video.id === currentPlayingVideoId ? "opacity-50 cursor-not-allowed" : "" // Změníme vzhled a znepřístupníme kliknutí, pokud se video přehrává
                    }`}
                    onClick={() => handleVideoClick(video.id, video.title)}
                  />
                  <div
                    className="absolute flex items-center justify-center w-full h-full cursor-pointer"
                    onClick={() => handleVideoClick(video.id, video.title)}
                  >
                    {video.id === currentPlayingVideoId ? (
                      <span className="text-white text-[20px] font-normal">Spuštěno...</span> // Zobrazí text "Přehrává se"
                    ) : (
                      <PlayIcon size={32} color="#fff" />
                    )}
                  </div>
                </div>
                <p className="text-white sm:text-sm text-sm md:text-lg mt-2 w-full text-left left-0 break-words">{video.title}</p>
              </div>
            ))}
          </div>  

          <div className="flex justify-center mt-[20px] h-[50px]">
            <Link href="https://www.youtube.com/@waitbandofficial6520/videos" target='_blank'>
              <button
                className="w-[300px] h-[50px] tracking-wide bg-transparent text-gray-100 rounded-lg font-semibold text-lg transition-all duration-500 ease-in-out transform hover:rounded-md hover:text-neonPink hover:opacity-100"
                style={{
                  borderWidth: "3px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(to right, #ff6a00, #ee0979)",
                }}
              >
                Všechna videa
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}