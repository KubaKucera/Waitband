"use client";

import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import texture from "../../../public/assets/textures/texture.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

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
        height={300}
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
      frameBorder="0"
      allow="encrypted-media"
      className="rounded-md shadow-lg w-full"
      title={`Spotify - ${title}`}
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
        <section id="alb-section" className="relative h-auto flex flex-col items-center gap-8 pt-[115px]">          

          {/* Titulek */}
          <TitleWithLines title="Alba" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <p className="text-gray-400 mb-6 text-center text-lg max-w-3xl z-10 leading-6">
            Ukázky skladeb v níže uvedených albech jsou časově omezeny. Pro plný poslech se prosím přihlaste do svého účtu na Spotify.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-4 z-10 max-w-6xl w-full mx-auto justify-items-center">
              {albums.map((album, index) => (
                <AlbumCard key={index} {...album} />
              ))}
            </div>

            <div className="flex justify-center h-[50px] mb-4">
              <Link href="https://open.spotify.com/artist/37DvIv1TkBrTOz16Kk75YI" target="_blank">
                <button
                  className="relative w-[300px] h-[55px] uppercase tracking-[0.12em] rounded-full font-semibold text-[15px]
                  text-white transition-all duration-400 ease-out 
                  bg-transparent border-[2px] border-transparent
                  [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
                  hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]"
                >
                  Přejít na Spotify
                </button>
              </Link>
            </div>            
          </motion.div>          
        </section>
      </div>
    </>
  );
}