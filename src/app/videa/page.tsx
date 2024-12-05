"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import back from "../../../public/assets/images/videos/back.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import texture from "../../../public/assets/textures/texture.jpg";
import { useState, useRef, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";
import Footer from "@/components/footer/Footer";
import { FaArrowUp } from "react-icons/fa";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

const videos = [
  {
    id: "WljMWwTDTGs",
    title: "WAIT - Horoskop",
  },
  {
    id: "OkWHNAsE0Zg",
    title: "WAIT - Nekonečnej Seriál (Live @ Erpet Prague)",
  },
  {
    id: "b7OIxB2HDGs",
    title: "WAIT - Modelka",    
  },
  {
    id: "hRsuXnckAsw",
    title: "WAIT - Hate you (Official Video)",
  },
  {
    id: "Ipo36dRE3Lg",
    title: "WAIT, feat. Kristýna Štromajerová - Single",    
  },
  {
    id: "_FEe173jIXc",
    title: "WAIT - Perfect Liar (Official Video)",
  },
  {
    id: "q2hts3qrHR4",
    title: "WAIT - My Guide - studio movie",
  },
  {
    id: "078wBfSFHVU",
    title: "WAIT - When you sleep (Lyrics video)",
  },
  {
    id: "Wg-iiHqOiB0",
    title: "WAIT, Nekonečnej Seriál, unplugged session ",
  },
]

export default function VideosPage(){
  
  const [isMaximized, setIsMaximized] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);
  const [selectedTitle, setSelectedTitle] = useState(videos[0].title);
  const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState<string>(videos[0].id); // Pro sledování právě přehrávaného videa
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    document.title = "Videa - Wait";
  }, []);

  const checkScrollTop = () => {
    if(!showScroll && window.scrollY > 400){
      setShowScroll(true);
    } else if(showScroll && window.scrollY <= 400){
      setShowScroll(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setIsMaximized(true);
    } else {
      setIsMaximized(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVideoClick = (id: string, title: string) => {
    if (id === currentPlayingVideoId) return; // Pokud video již hraje, neumožníme přehrát ho znovu

    setSelectedVideo(id);
    setSelectedTitle(title);
    setCurrentPlayingVideoId(id); // Nastav aktuálně přehrávané video

    // Přehrát video
    if (iframeRef.current) {
      iframeRef.current.src = "";
      setTimeout(() => {
        iframeRef.current!.src = `https://www.youtube.com/embed/${id}?autoplay=1`; 
      }, 100);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    window.addEventListener("resize", handleResize); 
    handleResize();
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
      window.removeEventListener("resize", handleResize);
    };    
  }, [showScroll]);  

  return (
    <>
      <Navbar initialActiveLink="videa" />
      <CustomCookieConsent />
      <HeadingWithLine lineHeight="825px" />

      <section className="relative min-h-screen flex flex-col items-center justify-center py-24">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
        ></div>        

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

        <FaArrowUp
          onClick={scrollToTop}
          className={`fixed right-0 z-50 p-2 bg-black text-white text-[36px] cursor-pointer transition-all duration-[700ms] ease-in-out transform border rounded-tl-md rounded-bl-md opacity-75 border-white border-md hover:opacity-100 ${
            showScroll ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"
          } bottom-14 lg:bottom-36`}
        />
      </section>

      <Footer />
    </>
  );
}