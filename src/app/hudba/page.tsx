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
import whiteFadeTexture from "../../../public/assets/textures/whiteEffect.png";
import dollar from "../../../public/assets/images/graffiti/dollar.png";
import { FaPlayCircle, FaSoundcloud } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

export const metadata: Metadata = {
  title: "Hudba - Wait",
  description: "Music page by create next app",  
}

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
  { title: "Achiever", url: "" }, //Todo
  { title: "Losing Sleep", url: "https://music.apple.com/gh/album/losing-sleep/1479578756?i=1479578767" },
  { title: "Daydream", url: "https://music.apple.com/gh/album/daydream/1479578756?i=1479578955" },
  { title: "Follow Me To Hell", url: "" },  //Todo
  { title: "Careless Dreaming", url: "https://music.apple.com/gh/album/careless-dreaming/1479578756?i=1479578960" },  
  { title: "Hate You", url: "" }, //Todo
  { title: "Horoskop", url: "" }, //Todo
  { title: "Subway Train", url: "https://music.apple.com/gh/album/subway-train/1479578756?i=1479578770" },  
];

const spotifyMusic = [
  { title: "February 29th", url: "https://open.spotify.com/track/4hy5ZgeVleEN4LxzX4DVUi" },
  { title: "Achiever", url: "https://open.spotify.com/track/2P5boFog1gp3RZR5qZNpVT" },
  { title: "Losing Sleep", url: "https://open.spotify.com/track/56Cp5nf8gnYEGjQAigUciX" },
  { title: "Daydream", url: "https://open.spotify.com/track/3mQLGi3hzXECZ2CsocLDMt" },
  { title: "Follow Me To Hell", url: "https://open.spotify.com/track/6hEF1OxQBlMdwhDo8Q18CF" },
  { title: "Careless Dreaming", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" },  
  { title: "Hate You", url: "https://open.spotify.com/track/2rrTaT2f8xdzNWYgFyuJzf" },
  { title: "Horoskop", url: "https://open.spotify.com/track/6TuqwEvhvUhmbyfYX96cIL" }, //Todo
  { title: "Subway Train", url: "https://open.spotify.com/track/2Grjcg1SoCU7vWsqoCX9Qr" },  
];

export default function MusicPage() {
  /*
  const [showMore, setShowMore] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);  
  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleShowMore = () => {
    setShowMore(true);
    setButtonDisabled(true);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    window.addEventListener("resize", handleResize); 
    handleResize();
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
      window.removeEventListener("resize", handleResize);
    };    
  }, [showScroll]);*/

  return (
        <>          
          <CustomCookieConsent />
          <Navbar initialActiveLink="hudba"/>  
          <HeadingWithLine lineHeight="750px" />

          <section className="w-full relative min-h-screen py-10 pt-20 pb-14 px-4 sm:px-6">            
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
            >
              <div className="fixed right-[10px] top-56 opacity-50 hidden lg:flex">
                <Image 
                  src={dollar}
                  alt="Emoticon"                
                  width={200}                
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
                {[image1, image2, image3, image4, image5, image6, image7, image8, image9].map((image, index) => (
                  <Link
                    key={index}
                    href={soundcloudSongs[index].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                  >
                    <div className="relative w-[310px] h-[310px] mx-auto overflow-hidden rounded-md shadow-lg">
                      <Image
                        src={image}
                        alt={`Photo ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
                      />
                      {/*
                      <p className="absolute bg-black bg-opacity-75 bottom-0 text-lg md:text-lg p-3 md:p-3 w-full text-white transition-all duration-200 ease-in-out transform group-hover:bg-blue-600 group-hover:bg-opacity-75 font-semibold text-center">
                        {songs[index].title}
                      </p> */}
                      {/*<div className="absolute w-[47px] h-[47px] flex items-center justify-center bg-blue-600 rounded-bl-lg text-lg top-0 right-0">
                        <FaPlayCircle className="bg-transparent text-white transition-transform duration-300 ease-out group-hover:scale-125" />
                      </div> */}
                    </div>
                  </Link>
                ))}
              </div>
            </div>            
          </section>

          <Footer />
        </>
    );
}
