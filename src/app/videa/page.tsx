"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import texture from "../../../public/assets/textures/texture.jpg";
import mouthSmile from "../../../public/assets/images/graffiti/mouthSmile.png";
import { useState, useRef, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import Footer from "@/components/footer/Footer";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import Link from "next/link";

const videos = [
  {
    id: "M_ugx3HzqME",
    title: " WAIT - Horoskop (Official Music Video)",
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
    id: "OUStNRHRgjE",
    title: "WAIT - Hate you (Official Music Video)",
  },
  {
    id: "Sk-D8LmeEgA",
    title: "WAIT - Single (feat. Kristýna Štromajerová - Official Music Video)",    
  },
  {
    id: "2dtwW_3dxGM",
    title: "WAIT - Perfect Liar (Official Music Video) ",
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
      <Navbar initialActiveLink="videa" />
      <CustomCookieConsent />
      <HeadingWithLine lineHeight="1050px" />
      <ScrollToTopButton />

      <section className="relative min-h-screen flex flex-col items-center justify-center py-24">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
        >
          <div className="fixed right-[-40px] transform -rotate-45 top-72 opacity-50 hidden xl:flex">
            <Image 
              src={mouthSmile}
              alt="Emoticon"                
              className="2xl:w-[330px] monitor:w-[450px]"                 
            />
          </div>
        </div>        

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
            className="h-[250px] w-[450px] md:h-[440px] md:w-[790px] px-1"       
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
                    <span className="text-white text-[20px] font-normal">Aktivní...</span> // Zobrazí text "Přehrává se"
                  ) : (
                    <FaPlayCircle className="text-white text-[30px] sm:text-[30px] md:text-[37px]" />
                  )}
                </div>
              </div>
              <p className="text-white sm:text-sm text-sm md:text-lg mt-2 w-full text-left left-0 break-words">{video.title}</p>
            </div>
          ))}
        </div>  

        <div className="flex justify-center mt-[30px] mb-[-20px] h-[50px]">
          <Link href="https://www.youtube.com/@waitbandofficial6520/videos" rel="noopener noreferrer" target='_blank' passHref>
            <button className="w-[300px] h-[50px] tracking-wide bg-transparent text-gray-200 border-[3px] rounded-lg font-bold border-blue-500 hover:border-blue-500 uppercase transition-all duration-500 ease-in-out transform hover:text-blue-500 hover:opacity-100">
              všechna videa
            </button>
          </Link>
        </div> 
      </section>

      <Footer />
    </>
  );
}