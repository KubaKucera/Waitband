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
import whiteFadeTexture from "../../../public/assets/textures/whiteEffect.png";
import dollar from "../../../public/assets/images/graffiti/dollar.png";
import crossIcon from "../../../public/assets/images/interface/crossIcon.png";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

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
  };

  const closeModal = () => setModalData(null);

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="hudba" />
      <HeadingWithLine lineHeight="750px" />

      <section className="relative min-h-screen py-10 pt-20 pb-14 px-4 sm:px-6">
        {/* Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%" }}
        >
          <div className="fixed 2xl:right-[20px] 2xl:top-64 monitor:right-[85px] monitor:top-72 opacity-50 hidden xl:flex">
            <Image 
              src={dollar} 
              alt="Emoticon" 
              className="2xl:w-[210px] monitor:w-[270px]"           
            />
          </div>
        </div>

        {/* Title */}
        <div className="absolute pt-3 left-0 right-0 w-full z-10">
          <h2 className="text-gray-100 font-montserrat text-[22px] monitor:text-[24px] text-center font-bold uppercase">
            Výběr top songů
          </h2>
        </div>

        {/* Image Grid */}
        <div className="container mx-auto mt-20 mb-16 flex items-center justify-center relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative group cursor-pointer"
              >
                <div className="relative w-[310px] h-[310px] mx-auto overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalData && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-xl z-50 flex flex-col items-center justify-center"        
        >
          {/* Close Button */}
          <div          
            onClick={closeModal}
            className="absolute w-[35px] h-[35px] bg-gray-600 bg-opacity-35 right-3 top-3 rounded-lg z-30"          
          >
            <Image 
              src={crossIcon}
              alt="Cross Icon"
              objectFit="cover"
              layout="fill"              
              className="opacity-80 cursor-pointer hover:opacity-100"
            />
          </div>

          <div className="relative w-72 h-72 mb-3 mx-auto">
            <Image
              src={modalData.image}
              alt={modalData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          <div className="space-y-[-3px] mb-3">
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
