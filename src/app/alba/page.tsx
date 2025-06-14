"use client";

import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import texture from "../../../public/assets/textures/texture.jpg";
import x from "../../../public/assets/images/graffiti/x.png";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import { Metadata } from "next";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

import { motion } from "framer-motion";
import { useEffect } from "react";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

const SpotifyEmbed = ({ url }: { url: string }) => (
  <div className="relative w-full max-w-md mx-auto">
    <iframe
      src={url}
      width="100%"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
      className="rounded-md shadow-lg"
      title="Spotify Album"
      allowFullScreen  
    ></iframe>
  </div>
);

export default function AlbumsPage() {
    
  useEffect(() => {
    document.title = "Alba - Wait";
  }, []);

  /*
  const album1Tracks = [
    { title: "Wait For Me", url: "https://soundcloud.com/wait-band-official/wait-for-me" },
    { title: "Perfect Liar", url: "https://soundcloud.com/wait-band-official/perfect-liar" },
    { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
    { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },
    { title: "My Guide", url: "https://soundcloud.com/wait-band-official/my-guide" },
    { title: "Every Day Blue", url: "https://soundcloud.com/wait_cz/every-day-blue-album-wait-for-me-2014?auto_play=false" }, //TODO
    { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
    { title: "When You Sleep", url: "https://soundcloud.com/wait_cz/when-you-sleep-album-wait-for-me-2014?auto_play=false" } //TODO
  ];

  const album2Tracks = [
    { title: "Life Game", url: "https://soundcloud.com/wait-band-official/life-game" },
    { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
    { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },
    { title: "Maybe Not", url: "https://soundcloud.com/wait-band-official/maybe-not" },
    { title: "Probuzení", url: "https://soundcloud.com/wait-band-official/probuzeni-awakening" },
    { title: "Freaks", url: "https://soundcloud.com/wait-band-official/freaks" },
    { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
    { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },
    { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
    { title: "Not The Only One", url: "https://soundcloud.com/wait-band-official/not-the-only-one-v2-24" }
  ];

  const album3Tracks = [
    { title: "Scházíš", url: "https://soundcloud.com/wait-band-official/sch-z" },
    { title: "Nekonečnej Seriál", url: "https://soundcloud.com/wait-band-official/nekone-nej-seri-l" },
    { title: "Úplně Na Dně", url: "https://soundcloud.com/wait-band-official/pln-na-dn" },
    { title: "Ve Jménu Znamení", url: "https://soundcloud.com/wait-band-official/ve-jmenu-znameni" },
    { title: "Zkusíme Zastavit Svět", url: "https://soundcloud.com/wait-band-official/zkus-me-zastavit-sv-t" },
    { title: "Single", url: "https://soundcloud.com/wait-band-official/single" }
  ];
  */ 

  const spotifyAlbums = [
    "https://open.spotify.com/embed/album/36q0VGlGsqRDoe5TnwyP82?utm_source=generator",
    "https://open.spotify.com/embed/album/4avLi5xKlmwpkai2PUJsB1?utm_source=generator",
    "https://open.spotify.com/embed/album/6FYBYq1bd7HUIysnQ6BW1A?utm_source=generator",
  ];
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="alba"/>   
          <ScrollToTopButton /> 
          <HeadingWithLine
            height={895}
            offsetTop="110px"
            position="left"
            delay={0.4}
            duration={0.6}
            ease="easeOut"    
            label="Alba"
          />         

          <section className="relative min-h-screen flex flex-col items-center gap-8 pt-20 pb-16 py-10 bg-gray-900">
            
            <div className="relative text-center z-20">
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-white">
                Přehled alb
              </h2>
              <div className="mt-4 mx-auto w-28 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
            </div>
            <p className="text-gray-400 text-center text-lg max-w-3xl z-10 leading-6">
              Ukázky skladeb v níže uvedených albech jsou časově omezeny. 
              Pro plný poslech se prosím přihlaste do svého účtu na Spotify.
            </p>
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
            >
              {/*
              <div className="fixed right-[-50px] top-32 hidden xl:flex pointer-events-none z-30">
                <motion.div
                  animate={{
                    y: [0, 15, 0],  // pohyb z původní pozice dolů o 15px a zpět nahoru
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="drop-shadow-lg"
                >
                  <Image
                    src={x}
                    alt="ExcMark"
                    width={280}
                    className="filter saturate-150 brightness-75 drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                  />
                </motion.div>      
              </div> */}
            </div> 

            <div className="flex flex-wrap justify-center gap-8">
              {spotifyAlbums.map((url, index) => (
                <SpotifyEmbed key={index} url={url} />
              ))}
            </div>
          </section>           

          {/*
          <section className="relative min-h-screen flex items-center justify-center p-20 px-4 sm:px-8 lg:px-16">
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
            ></div>              

            <div className="relative z-20 flex flex-wrap justify-center items-start gap-8 mt-8 sm:mt-0">            
              <div className="flex flex-col items-center mt-[5px] sm:mt-[25px] md:mt-[40px] lg:mt-[75px]">
                <div className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[285px] md:h-[285px] relative">
                  <Image
                    src={album2}
                    alt="Album1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-md rounded-tl-md"
                  />
                </div>                
                
                <div className="w-[350px] h-[470px] sm:w-[350px] md:w-[285px] relative bg-white bg-opacity-10 rounded-br-md rounded-bl-md mt-0">
                  {album1Tracks.map((track, index) => (
                    <Link key={index} href={track.url} target="_blank">
                      <div className="text-center flex items-center justify-between w-full h-[45px] text-lg top-[20px] mb-[10px] text-white font-normal border-[1px] px-[15px] border-white hover:border-bg-blue-600 hover:border-[2px] hover:cursor-pointer group relative">
                        <span className="mx-2 text-white font-semibold">{track.title}</span>
                        <div className="absolute h-[41px] w-[40px] transform -skew-x-12 origin-top-left bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <div className="absolute h-[41px] w-[40px] transform bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <FaPlayCircle className="bg-transparent group-hover:text-white mr-[-2px] group-hover:scale-125 group-hover:mr-[-3px] z-20"/>
                      </div>
                    </Link>
                  ))}
                </div>                
              </div>

              <div className="flex flex-col items-center mt-[25px] xl:mt-[40px] lg:mt-[40px] md:mt-[40px]">
                <div className="w-[350px] h-[350px] xl:h-[350px] xl:w-[350px] md:h-[285px] md:w-[285px] sm:w-[350px] sm:h-[350px] relative">
                  <Image
                    src={album3}
                    alt="Album2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-md rounded-tl-md"
                  />
                </div>                

                <div className="w-[350px] h-[580px] xl:w-[350px] md:w-[285px] sm:w-[350px] bg-white bg-opacity-10 rounded-br-md rounded-bl-md mt-0">
                  {album2Tracks.map((track, index) => (
                    <Link key={index} href={track.url} target="_blank">
                      <div className="text-center flex items-center justify-between w-full h-[45px] text-lg top-[20px] mb-[10px] text-white font-normal border-[1px] px-[15px] border-white hover:border-bg-blue-600 hover:border-[2px] hover:cursor-pointer group relative">
                        <span className="mx-2 text-white font-semibold">{track.title}</span>
                        <div className="absolute h-[41px] w-[40px] transform -skew-x-12 origin-top-left bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <div className="absolute h-[41px] w-[40px] transform bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <FaPlayCircle className="bg-transparent group-hover:text-white mr-[-2px] group-hover:scale-125 group-hover:mr-[-3px] z-20"/>
                      </div>
                    </Link>
                  ))}
                </div>                
              </div>

              <div className="flex flex-col items-center mt-[25px] sm:mt-[25px] md:mt-[25px] lg:mt-[75px] xl:mt-[75px]">
                <div className="h-[350px] w-[350px] sm:w-[350px] sm:h-[350px] md:h-[350px] md:w-[350px] lg:h-[285px] lg:w-[285px] xl:h-[285px] xl:w-[285px] relative">
                  <Image
                    src={album1}
                    alt="Album3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-tr-md rounded-tl-md"
                  />
                </div>                

                <div className="w-[350px] md:w-[350px] sm:w-[350px] lg:w-[285px] xl:w-[285px] h-[360px] bg-white bg-opacity-10 mt-0">
                  {album3Tracks.map((track, index) => (
                    <Link key={index} href={track.url} target="_blank">
                      <div className="text-center flex items-center justify-between w-full h-[45px] text-lg top-[20px] mb-[10px] text-white font-normal border-[1px] px-[15px] border-white hover:border-bg-blue-600 hover:border-[2px] hover:cursor-pointer group relative">
                        <span className="mx-2 text-white font-semibold">{track.title}</span>
                        <div className="absolute h-[41px] w-[40px] transform -skew-x-12 origin-top-left bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <div className="absolute h-[41px] w-[40px] transform bg-transparent group-hover:bg-blue-600 right-0 z-10"></div>
                        <FaPlayCircle className="bg-transparent group-hover:text-white mr-[-2px] group-hover:scale-125 group-hover:mr-[-3px] z-20"/>
                      </div>
                    </Link>
                  ))}
                </div>                
              </div>
            </div>            
          </section>  */}

          <Footer />                       
        </>
    );
}
