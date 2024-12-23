"use client";

import LoadingCircle from '@/components/loading/LoadingCircle';
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/slider/ImageSlider";
import waitBackImage from "../../public/assets/images/background/backNoTitle.jpg";
import fadeEffectTexture from "../../public/assets/textures/fadeEffect.png";
import texture from "../../public/assets/textures/texture.jpg";
import Head from 'next/head';

import { useState, useEffect, useRef } from "react";
import { FaArrowsAlt, FaSoundcloud, FaPlayCircle, FaAngleDoubleDown } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
import actualityImage1 from "../../public/assets/images/home/actuality1.jpg";
import actualityImage2 from "../../public/assets/images/albums/album4.jpg";
import actualityImage3 from "../../public/assets/images/music/february29th.jpg";
import waitLogoBlack from "../../public/assets/images/home/waitLogoBlack.png";
import frequency from "../../public/assets/images/home/frequency.png";
import whiteEffectTexture from "../../public/assets/textures/whiteEffect.png";
import excMark from "../../public/assets/images/graffiti/excMark.png";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import logoWhiteTitle from "../../public/assets/images/home/waitLogoWhiteTitle.png";
import VideoModal from "@/components/videoModal/VideoModal";
import { Metadata } from "next";
import HeadingWithLine from '@/components/headingWithLine/HeadingWithLine';
import ScrollToTopButton from '@/components/scrollToTopButton/ScrollToTopButton';
import Video from "next-video";

const kaplickaVideos = [
  { src: ""},
  { src: ""},
  { src: ""},
  { src: ""},
];

const knorVideos = [
  { src: ""},
  { src: ""},
  { src: ""},  
  { src: ""},
  { src: ""},
  { src: ""},
  { src: ""},
  { src: ""},   
];

const andelVideo = {
  src: "https://www.youtube.com/embed/x_XWIT7Hd0Q"
};

export default function Home() {  

  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");  

  const handleVideoClick = (url: string) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.querySelector("#showMilosKnora");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (    
        <>          
          <Head>
            <link rel="icon" href="/favicon.ico?v=4" />
            <link rel="shortcut icon" href="/favicon.ico?v=4" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <CustomCookieConsent />
          <Navbar initialActiveLink="uvod" />
          <ImageSlider />
          <ScrollToTopButton />

          <section className="relative w-full h-full z-30">            

            <div className='absolute w-full h-3 sm:h-3 md:h-5 bg-gray-100'></div>

            <div className="relative min-h-[550px] z-20 top-0">              
              
              <div
                className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
              >       
                <div className="relative w-full h-auto overflow-hidden z-20">
                  <div className="fixed right-[10px] top-72 rotate-3 opacity-50 hidden xl:flex pointer-events-none z-20">
                    <Image 
                      src={excMark}
                      alt="ExcMark"                
                      width={150}                
                    />
                  </div>
                </div>                
              </div> 

              <div
                className="absolute z-30 hidden xl:flex"
                style={{
                  top: "75px",
                  left: "13px",
                }}
              >
                <div
                  className="relative"
                  style={{          
                  transformOrigin: "top left",
                  }}
                >
                  {/* Nadpis */}
                  <h2
                    className="text-neonPink font-bold italic uppercase"          
                  >
                    <FaAngleDoubleDown className="text-left text-[32px] font-semibold text-neonPink"/>
                  </h2>
                  {/* Čára pod nadpisem */}
                  <div
                    className="bg-gray-300 animate-grow"
                    style={{
                      position: "absolute",
                      width: "3px",
                      height: "350px",
                      marginTop: "7px",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>              

              <div className="relative grid gap-10 items-center justify-center w-[85%] lg:w-[67%] monitor:w-[55%] mx-auto pt-14 pb-16 sm:pt-14 sm:pb-16 md:pt-14 md:pb-16 lg:pt-14 lg:pb-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-20">
                {[
                  {
                    title: "V STAND-UP COMEDY",
                    subtitle: "MILOŠE KNORA",
                    image: actualityImage1,
                    link: "#showMiloseKnora",
                    openInNewTab: false,
                  },
                  {
                    title: "ALBUM",
                    subtitle: "WAIT FOR ME",
                    image: actualityImage2,
                    link: "/alba",
                    openInNewTab: false,
                  },
                  {
                    title: "SONG",
                    subtitle: "FEBRUARY 29TH",
                    image: actualityImage3,
                    link: "/hudba",
                    openInNewTab: false,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center group ${
                      index === 2 ? "sm:col-span-full sm:justify-self-center lg:col-span-1" : ""
                    } ${index === 0 || index === 2 ? "xl:mt-9 mt-0" : ""}`}
                  >
                    <h3 className="text-lightGray text-lg font-montserrat mb-2">
                      {item.title}
                      <br />
                      <span className="text-white font-bold text-xl">
                        {item.subtitle}
                      </span>
                    </h3>
                    <div onClick={handleLinkClick} className="relative w-[300px] h-[300px] group-hover:brightness-100 brightness-75 transition-all overflow-hidden">
                      <Link
                        href={item.link}
                        rel="noopener noreferrer"
                        target={item.openInNewTab ? "_blank" : undefined}                        
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md border-[3px] border-white transition-all duration-300"
                        />
                      </Link>
                      
                      {/*
                      {index === 2 && (
                        <div className="absolute w-[47px] h-[47px] flex items-center justify-center border-[3px] bg-blue-600 border-none mt-[2.5px] mr-[3px] group-hover:brightness-100 group-hover:cursor-pointer rounded-bl-lg text-lg top-0 right-0">
                          <FaPlayCircle className="bg-transparent text-gray-200 mr-[-2px] transition-all duration-300 ease-in-out transform group-hover:scale-125 group-hover:mr-[-1px] z-20" />
                        </div>
                      )} */}
                    </div>
                    
                    {/*
                    <Link
                      href={item.link}
                      rel="noopener noreferrer"
                      target={item.openInNewTab ? "_blank" : undefined}
                    >
                      <button className="mt-3 px-10 py-[9px] bg-transparent text-white border-[3px] rounded-lg font-bold border-blue-500 uppercase transition-all duration-300 opacity-85 group-hover:opacity-100 group-hover:border-blue-500 group-hover:text-blue-500">
                        {index === 2 ? "Poslechnout" : "Prohlédnout"}
                      </button>
                    </Link> */}
                  </div>
                ))}
              </div>  
            </div>                       
          </section>

          {/* Video Section */}
          <section className="relative h-auto bg-gray-100 p-11 mt-0 z-30">            
            
            <div className="relative left-0 right-0 w-full mt-3 mb-7 z-10">
              <h2 className="text-black font-montserrat text-[22px] monitor:text-[24px] text-center font-bold uppercase">
                Kaplička Fest 2024
              </h2>
            </div>            

            <div className='relative grid gap-7 mx-auto w-[90%] sm:w-[85%] lg:w-[70%] grid-cols-1 sm:grid-cols-2 z-20'>
              {kaplickaVideos.map((video, index) => (
                <div key={index} className="relative">
                  <Video
                    src={video.src}
                    controls                    
                    className="w-full h-auto"
                  />                  
                </div>
              ))}
            </div>

            {/* Čára */}
            <div
                className="absolute z-30 hidden xl:flex"
                style={{
                  top: "75px",
                  left: "13px",
                }}
              >
                <div
                  className="relative"
                  style={{          
                  transformOrigin: "top left",
                  }}
                >
                  {/* Nadpis */}
                  <h2
                    className="text-neonPink font-bold italic uppercase"          
                  >
                    <FaAngleDoubleDown className="text-left text-[32px] font-semibold text-neonPink"/>
                  </h2>
                  {/* Čára pod nadpisem */}
                  <div
                    className="bg-gray-800 animate-grow"
                    style={{
                      position: "absolute",
                      width: "3px",
                      height: "490px",
                      marginTop: "7px",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>           
          </section>

          <section id="showMiloseKnora" className="relative h-auto bg-gray-100 p-11 mt-[-40px] z-30">            
            
            <div className="relative left-0 right-0 w-full mt-3 mb-7 z-10">
              <h2 className="text-black font-montserrat text-[22px] monitor:text-[24px] text-center font-bold uppercase">
                Show Miloše Knora
              </h2>
            </div>            

            <div className='relative grid gap-7 mx-auto w-[90%] sm:w-[85%] lg:w-[70%] grid-cols-1 sm:grid-cols-2 z-20'>
              {knorVideos.map((video, index) => (
                <div key={index} className="relative">
                  <Video
                    src={video.src}
                    controls                    
                    className="w-full h-auto"
                  />                  
                </div>
              ))}
            </div>

            {/* Čára */}
            <div
                className="absolute z-30 hidden xl:flex"
                style={{
                  top: "75px",
                  left: "13px",
                }}
              >
                <div
                  className="relative"
                  style={{          
                  transformOrigin: "top left",
                  }}
                >
                  {/* Nadpis */}
                  <h2
                    className="text-neonPink font-bold italic uppercase"          
                  >
                    <FaAngleDoubleDown className="text-left text-[32px] font-semibold text-neonPink"/>
                  </h2>
                  {/* Čára pod nadpisem */}
                  <div
                    className="bg-gray-800 animate-grow"
                    style={{
                      position: "absolute",
                      width: "3px",
                      height: "1000px",
                      marginTop: "7px",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>           
          </section>

          <section className="relative h-auto bg-gray-100 p-11 pb-11 sm:pb-0 md:pb-16 mt-[-40px] z-30">            
            
            <div className="relative left-0 right-0 w-full mt-3 mb-7 z-10">
              <h2 className="text-black font-montserrat text-[22px] monitor:text-[24px] text-center font-bold uppercase">
                Noc s Andělem
              </h2>
            </div>            

            <div className='relative flex justify-center mx-auto w-[100%] sm:w-[85%] lg:w-[70%] z-20'>
              <div className="relative w-full">
                <iframe 
                  width="100%"
                  height="550px" 
                  src={andelVideo.src}
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"                  
                  allowFullScreen
                  className='mx-auto'
                  ></iframe>                  
              </div>
            </div>

            {/* Čára */}
            <div
                className="absolute z-30 hidden xl:flex"
                style={{
                  top: "75px",
                  left: "13px",
                }}
              >
                <div
                  className="relative"
                  style={{          
                  transformOrigin: "top left",
                  }}
                >
                  {/* Nadpis */}
                  <h2
                    className="text-neonPink font-bold italic uppercase"          
                  >
                    <FaAngleDoubleDown className="text-left text-[32px] font-semibold text-neonPink"/>
                  </h2>
                  {/* Čára pod nadpisem */}
                  <div
                    className="bg-gray-800 animate-grow"
                    style={{
                      position: "absolute",
                      width: "3px",
                      height: "450px",
                      marginTop: "7px",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>
              </div>           
          </section>

          <VideoModal showModal={showModal} videoUrl={videoUrl} onClose={handleClose} />
          <Newsletter />
          <Footer />
        </>
  );
}
