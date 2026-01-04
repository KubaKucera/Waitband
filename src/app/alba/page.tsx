"use client";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import texture from "../../../public/assets/textures/texture.jpg";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import { useEffect } from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { ArrowRight } from "lucide-react";

const AlbumCard = ({
  title,
  year,
  url,
  cover,
  links,
}: {
  title: string;
  year: string;
  url: string;
  cover: any;
  links?: { spotify?: string; apple?: string; youtube?: string };
}) => (
  <div className="flex flex-col items-center gap-4 w-full max-w-[380px] sm:max-w-[420px]">
    {cover && (
      <Image
        src={cover}
        alt={title}
        width={400}
        height={400}
        className="rounded-md shadow-lg"
      />
    )}
    <h3 className="text-white text-lg font-montserrat font-semibold text-center uppercase">
      {title} ({year})
    </h3>
    <iframe
      src={url}
      width="100%"
      height="400"
      className="rounded-md shadow-lg w-full h-[400px] monitor:h-[500px]"
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
    ></iframe>
    {links && (
      <div className="flex gap-4 mt-2 text-white text-2xl">
        {links.spotify && (
          <a href={links.spotify} target="_blank" rel="noopener noreferrer">
            <FaSpotify />
          </a>
        )}
        {links.apple && (
          <a href={links.apple} target="_blank" rel="noopener noreferrer">
            <FaApple />
          </a>
        )}
        {links.youtube && (
          <a href={links.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        )}
      </div>
    )}
  </div>
);

export default function AlbumsPage() {
  useEffect(() => {
    document.title = "Alba | Wait";
  }, []);

  const albums = [
    {
      title: "Wait for Me",
      year: "2016",
      url: "https://open.spotify.com/embed/album/36q0VGlGsqRDoe5TnwyP82?utm_source=generator",
      cover: null,      
    },
    {
      title: "No Sleep Till Woodstock",
      year: "2019",
      url: "https://open.spotify.com/embed/album/4avLi5xKlmwpkai2PUJsB1?utm_source=generator",
      cover: null,      
    },
    {
      title: "Jenom vedle sebe",
      year: "2020",
      url: "https://open.spotify.com/embed/album/6FYBYq1bd7HUIysnQ6BW1A?utm_source=generator",
      cover: null,      
    }
  ];

  return (
    <>  
      <SideAccentLine targetId="alb-section"/>

      <div
        className="relative w-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >  
        <section id="alb-section" className="relative h-auto flex flex-col items-center gap-8 px-6 sm:px-6 md:px-6 lg:px-0 pt-[118px]">          

          {/* Titulek */}
          <TitleWithLines title="Alba" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-4 w-full"
          >
            <p className="text-gray-400 mb-4 text-lg max-w-3xl z-10 flex items-start justify-center gap-2 text-center px-4 sm:px-4 md:px-0">
              <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-[3px] md:flex hidden" />

              <span className="text-center leading-7">
                Ukázky skladeb v níže uvedených albech jsou časově omezeny. Pro plný poslech se
                prosím přihlaste do svého účtu na Spotify.
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-10 md:gap-8 monitor:gap-9 mb-4 z-10 max-w-6xl monitor:max-w-7xl w-full mx-auto justify-items-center">
              {albums.map((album, index) => (
                <AlbumCard key={index} {...album} />
              ))}
            </div>

            <div className="flex justify-center h-[50px] mb-3">
              <Link
                href="https://open.spotify.com/artist/37DvIv1TkBrTOz16Kk75YI"
                target="_blank"
                className="group relative inline-flex items-center justify-center
                  w-[320px] h-[55px]
                  text-[15px] font-semibold tracking-[0.12em]
                  rounded-full text-white
                  transition-transform duration-300 ease-out will-change-transform transform-gpu
                  bg-transparent border-[2px] border-transparent
                  [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                  hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]
                  focus-visible:outline-none
                  focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]
                  active:scale-[0.98]"
              >
                Přejít na Spotify

                <ArrowRight
                  size={22}
                  className="
                    absolute right-5 top-1/2 -translate-y-1/2
                    opacity-0 group-hover:opacity-100
                    group-hover:translate-x-1
                    transition-all duration-300 ease-out
                  "
                />
              </Link>
            </div>            
          </motion.div>          
        </section>
      </div>
    </>
  );
}