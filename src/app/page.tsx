"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/slider/ImageSlider";
import texture from "../../public/assets/textures/texture.jpg";
import actualityImage1 from "../../public/assets/images/home/actuality4.jpg";
import actualityImage2 from "../../public/assets/images/albums/album4.jpg";
import actualityImage3 from "../../public/assets/images/music/february29th.jpg";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import VideoModal from "@/components/videoModal/VideoModal";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import LiteYouTubeEmbed from "@/components/liteYtEmbed/LiteYouTubeEmbed";

const kaplickaVideos = [
  { src: "94ErS0EZXl4" },
  { src: "i3amiE1rJIU" },
  { src: "Bi0pPz3jlk4" },
  { src: "Bz7f1Q4Xp8c" },
];

const knorVideos = [  
  { src: "jmPkHuh_qK8" },
  { src: "x1lfnG7B9tc" },
  { src: "Q-8a308aqLc" },
  { src: "K56O9wrh7nU" },
];

const andelVideo = { src: "x_XWIT7Hd0Q" };

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

  const renderYouTubeLite = (videoId: string) => (
    <LiteYouTubeEmbed
      key={videoId}
      videoId={videoId}
      className="w-[347px] h-[195px] sm:w-[347px] sm:h-[195px] md:w-[560px] md:h-[315px]"
      title="Ukázka z koncertu"
    />
  );

  return (
    <>
      <Head>
        <title>Hudební projekt – Úvod</title>
        <meta name="description" content="Oficiální stránka hudebního projektu. Sledujte koncerty, videa a novinky." />
        <meta property="og:title" content="Hudební projekt" />
        <meta property="og:description" content="Koncerty, hudba a videa. Sledujte nás!" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://tvujweb.cz" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico?v=4" />
      </Head>

      <CustomCookieConsent />
      <Navbar initialActiveLink="uvod" />
      <ImageSlider />
      <ScrollToTopButton />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      >   
        <HeadingWithLine
          height={2640}
          offsetTop="45px"
          position="left"
          delay={0.4}
          duration={0.6}
          ease="easeOut"
          label="Úvod"
        />

        <section id="uvod" className="p-11 text-white relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">Aktuality/Blog</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-40 items-start justify-center place-items-center w-[85%] lg:w-[67%] monitor:w-[55%] mx-auto z-20">
            {[
              { title: "KONCERT", subtitle: "SUPER HOT SUMMER", image: actualityImage1, link: "/koncerty", alt: "Plakát koncertu" },
              { title: "SONG", subtitle: "FEBRUARY 29TH", image: actualityImage3, link: "/hudba", alt: "Obal písně February 29th" },
              { title: "ALBUM", subtitle: "WAIT FOR ME", image: actualityImage2, link: "/alba", alt: "Obal alba Wait For Me" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`group relative rounded-lg overflow-hidden shadow-md border border-gray-600 w-[350px] transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out p-4 bg-gray-800
                  ${
                    index === 2
                      ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto"
                      : ""
                  }
                `}
              >
                <h3 className="text-gray-300 font-semibold tracking-wider mb-1">{item.title}</h3>
                <p className="text-gray-100 text-2xl font-semibold mb-4">{item.subtitle}</p>
                <div className="relative w-full h-72 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="p-11 text-white relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">Kaplička Fest 2024</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className="grid gap-7 mx-auto lg:w-[80%] monitor:w-[64%] grid-cols-1 sm:grid-cols-2 place-items-center">
            {kaplickaVideos.map((v, i) => (
              <div key={i} className="w-full max-w-[560px]">
                {renderYouTubeLite(v.src)}
              </div>
            ))}
          </div>
        </section>

        <section id="showMilosKnora" className="p-11 text-white relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">Show Miloše Knora</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className="grid gap-7 mx-auto lg:w-[80%] monitor:w-[64%] grid-cols-1 sm:grid-cols-2 place-items-center">
            {knorVideos.map((v, i) => (
              <div key={i} className="w-full max-w-[560px]">
                {renderYouTubeLite(v.src)}
              </div>
            ))}
          </div>
        </section>

        <section className="p-11 pb-11 text-white relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold">Noc s Andělem</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[560px]">
              {renderYouTubeLite(andelVideo.src)}
            </div>
          </div>
        </section>
      </div>

      <VideoModal showModal={showModal} videoUrl={videoUrl} onClose={handleClose} />
      <Footer />

      {/* Lite YouTube Script */}
      <script src="https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.2.0/src/lite-yt-embed.js" async></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.2.0/src/lite-yt-embed.css" />
    </>
  );
}
