"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import image1 from "../../../public/assets/images/music/february29th.jpg";
import image2 from "../../../public/assets/images/music/achiever.jpg";
import image3 from "../../../public/assets/images/music/losingSleep.jpg";
import image4 from "../../../public/assets/images/music/daydream.jpg";
import image5 from "../../../public/assets/images/music/followMeToHell.jpg";
import image6 from "../../../public/assets/images/music/carelessDreaming.jpg";
import image7 from "../../../public/assets/images/music/hateYou.jpg";
import image8 from "../../../public/assets/images/music/horoscop.jpeg";
import image9 from "../../../public/assets/images/music/subwayTrain.jpg";
import texture from "../../../public/assets/textures/texture.jpg";
import appleMusic from "../../../public/assets/icons/appleMusic.svg";
import spotify from "../../../public/assets/icons/spotify.svg";
import soundcloud from "../../../public/assets/icons/soundcloud.svg";
import { useEffect, useState } from "react";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

/*
export const metadata: Metadata = {
  title: "Hudba - Wait",
  description: "Music page by create next app",  
}*/

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const soundcloudSongs = [
  { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
  { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
  { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
  { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
  { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },
  { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },    
  { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
  { title: "Horoskop", url: "https://soundcloud.com/wait-band-official/horoskop-horoscope" },
  { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },   
];

const appleMusicSongs = [
  { title: "February 29th", url: "https://music.apple.com/gh/album/february-29th/1479578756?i=1479579086" },
  { title: "Achiever", url: "https://music.apple.com/gh/album/achiever/1122535403?i=1122535815" }, //Todo
  { title: "Losing Sleep", url: "https://music.apple.com/gh/album/losing-sleep/1479578756?i=1479578767" },
  { title: "Daydream", url: "https://music.apple.com/gh/album/daydream/1479578756?i=1479578955" },
  { title: "Follow Me To Hell", url: "https://music.apple.com/gh/album/follow-me-to-hell/1122535403?i=1122535560" },  //Todo
  { title: "Careless Dreaming", url: "https://music.apple.com/gh/album/careless-dreaming/1479578756?i=1479578960" },  
  { title: "Hate You", url: "https://music.apple.com/gh/album/hate-you/1122535403?i=1122535559" }, //Todo
  { title: "Horoskop", url: "" }, //Todo
  { title: "Subway Train", url: "https://music.apple.com/gh/album/subway-train/1479578756?i=1479578770" },  
];

const spotifyMusicSongs = [
  { title: "February 29th", url: "https://open.spotify.com/track/4hy5ZgeVleEN4LxzX4DVUi" },
  { title: "Achiever", url: "https://open.spotify.com/track/2P5boFog1gp3RZR5qZNpVT" },
  { title: "Losing Sleep", url: "https://open.spotify.com/track/56Cp5nf8gnYEGjQAigUciX" },
  { title: "Daydream", url: "https://open.spotify.com/track/3mQLGi3hzXECZ2CsocLDMt" },
  { title: "Follow Me To Hell", url: "https://open.spotify.com/track/6hEF1OxQBlMdwhDo8Q18CF" },
  { title: "Careless Dreaming", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" },  
  { title: "Hate You", url: "https://open.spotify.com/track/2rrTaT2f8xdzNWYgFyuJzf" },
  { title: "Horoskop", url: "" }, //Todo
  { title: "Subway Train", url: "https://open.spotify.com/track/2Grjcg1SoCU7vWsqoCX9Qr" },  
];

export default function MusicPage() {
  useEffect(() => {
    document.title = "Hudba - Wait"
  }, []);

  const [modalData, setModalData] = useState<{ image: any; title: string; index: number } | null>(null);

  const openModal = (index: number) => {
    setModalData({
      image: images[index],
      title: soundcloudSongs[index].title,
      index,
    });
    document.body.style.overflow = 'hidden'; // zakáže scroll
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = ''; // povolí scroll zpět
  };

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="hudba" /> 
      <ScrollToTopButton />  
      <HeadingWithLine
        height={1090}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={0.6}
        ease="easeOut"    
        label="Hudba"
      />   

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      > 
        <section className="relative z-10 py-10 pt-20 pb-10 px-4 sm:px-6">          

          {/* Title */}
          <div className="relative text-center z-20">
            <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
              Naše top songy
            </h2>
            <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>

          {/* Image Grid */}
          <div className="container mx-auto mt-10 mb-10 flex items-center justify-center relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="relative group cursor-pointer"
                >
                  <div className="relative w-[310px] h-[310px] mx-auto overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`Photo ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-[20px] h-[50px]">
            <Link href="/alba">
              <button
                className="w-[300px] h-[50px] tracking-wide bg-transparent text-gray-100 rounded-lg font-semibold text-lg transition-all duration-500 ease-in-out transform hover:rounded-md hover:text-neonPink hover:opacity-100"
                style={{
                  borderWidth: "3px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(to right, #ff6a00, #ee0979)",
                }}
              >
                Přejít na alba
              </button>
            </Link>
          </div>
        </section>
      </div>      

      {modalData && (
        <div 
          onClick={(e) => {
            e.preventDefault(); 
            e.stopPropagation(); 
            closeModal();
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"        
        >
          {/* Background cover image behind blur */}
          <div
            className="fixed inset-0 z-[-1] bg-cover bg-center"
            style={{
              backgroundImage: `url(${modalData.image.src})`,
              opacity: 1, // nebo zkus i nižší hodnotu
              filter: "blur(4px)",
            }}
          />

          {/* Blur + white overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-xl pointer-events-none z-0" />

          {/* Close Button */}
          <button
            aria-label="Zavřít"
            onClick={closeModal}
            className="absolute top-5 right-5 p-1 rounded hover:bg-opacity-30 transition-colors z-40 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-9 h-9 text-gray-700 hover:text-black"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="relative w-72 h-72 mb-3 mx-auto">
            <Image
              src={modalData.image}
              alt={modalData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div className="space-y-[-3px] mb-[30px] z-10">
            <h2 className="text-black text-xl font-bold text-center">{modalData.title}</h2>
            <p className="text-center text-gray-700">Vyber hudební službu</p>
          </div>          

          {/* Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-[475px]"          
          >
            {/* Buttons */}
            <div className=" space-y-4">
              <Link
                href={appleMusicSongs[modalData.index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-100 px-4 h-[65px] rounded-md shadow hover:bg-gray-200"
              >                
                <Image 
                  src={appleMusic}
                  alt="AppleMusic"
                  width={125}                  
                />
                <span className="text-black font-medium">Přehrát</span>
              </Link>
              <Link
                href={spotifyMusicSongs[modalData.index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-100 px-4 h-[65px] rounded-md shadow hover:bg-gray-200"
              >
                <Image 
                  src={spotify}
                  alt="Spotify"
                  width={125}                  
                />
                <span className="text-black font-medium">Přehrát</span>
              </Link>
              <Link
                href={soundcloudSongs[modalData.index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-100 px-4 h-[65px] rounded-md shadow hover:bg-gray-200"
              >
                <Image 
                  src={soundcloud}
                  alt="Soundcloud"
                  width={150}                  
                />
                <span className="text-black font-medium">Přehrát</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
