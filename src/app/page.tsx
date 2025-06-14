"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/slider/ImageSlider";
import texture from "../../public/assets/textures/texture.jpg";
import Head from 'next/head';

import { useState } from "react";
import actualityImage1 from "../../public/assets/images/home/actuality4.jpg";
import actualityImage2 from "../../public/assets/images/albums/album4.jpg";
import actualityImage3 from "../../public/assets/images/music/february29th.jpg";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import VideoModal from "@/components/videoModal/VideoModal";
import ScrollToTopButton from '@/components/scrollToTopButton/ScrollToTopButton';
import { motion } from "framer-motion";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

const kaplickaVideos = [
  { src: "https://www.youtube.com/embed/94ErS0EZXl4" },
  { src: "https://www.youtube.com/embed/i3amiE1rJIU?si=plU_CW32grcp6n8p" },
  { src: "https://www.youtube.com/embed/Bi0pPz3jlk4?si=25w03c6L3VXjIDx2" },
  { src: "https://www.youtube.com/embed/Bz7f1Q4Xp8c?si=PqoV63hz7jOo2XIQ" },
];

const knorVideos = [
  { src: "https://www.youtube.com/embed/w4Xn_DzsC6o?si=hT1F35iYWkwi7uqt" },
  { src: "https://www.youtube.com/embed/jmPkHuh_qK8?si=nzlPS8zT90tmrKIf" },
  /*{ src: "https://www.youtube.com/embed/Opv4jn-G0FE?si=oaD2r-0gfSQ5sHtJ" },*/
  { src: "https://www.youtube.com/embed/x1lfnG7B9tc?si=Xk0UwA21mawc4D7t" },
  /*{ src: "https://www.youtube.com/embed/OXu5fyqOYZg?si=U9W1wlBrwdryj8jr" },*/
  /*{ src: "https://www.youtube.com/embed/Y6G2wKUorIQ?si=ldE_Wnh6iRigZGlj" },*/
  { src: "https://www.youtube.com/embed/Q-8a308aqLc?si=6aelfnvl4PjmIb3_" },
  /*{ src: "https://www.youtube.com/embed/K56O9wrh7nU?si=Cqwx9yKCB9OoT02E" },*/
];

const andelVideo = {
  src: "https://www.youtube.com/embed/x_XWIT7Hd0Q?si=AChedyZFClTKWaI6"
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
  };

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

      <div className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5" style={{ backgroundImage: `url(${texture.src})` }}>
        <HeadingWithLine
          height={2765}
          offsetTop="45px"
          position="left"
          delay={0.4}
          duration={0.6}
          ease="easeOut"    
          label="Úvod"
        />

        <section className="p-11 text-gray-50">
          {/* Nadpis */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white">
              Aktuality/Blog
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>

          {/* Grid s aktualitami */}
          <div
            className="
              grid grid-cols-1
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-12 sm:gap-12 lg:gap-40
              items-start justify-center place-items-center
              w-[85%] lg:w-[67%] monitor:w-[55%] mx-auto z-20
            "
          >
            {[{ title: "KONCERT", subtitle: "SUPER HOT SUMMER", image: actualityImage1, link: "/koncerty" },
              { title: "SONG", subtitle: "FEBRUARY 29TH", image: actualityImage3, link: "/hudba" },
              { title: "ALBUM", subtitle: "WAIT FOR ME", image: actualityImage2, link: "/alba" }].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`
                  group relative rounded-lg overflow-hidden shadow-md border border-gray-500 w-[350px]
                  transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out p-4 bg-gray-900
                  ${index === 2 ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto" : ""}
                `}
              >
                <h3 className="text-gray-400 font-semibold tracking-wider mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-50 text-2xl font-semibold mb-4">
                  {item.subtitle}
                </p>
                <div className="relative w-full h-72 rounded-md overflow-hidden">
                  <Image src={item.image} alt={item.title} fill objectFit="cover" className="transition-transform duration-500 transform group-hover:scale-105" />
                </div>
              </Link>
            ))}
          </div>

        </section>

        <section className="p-11 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white">Kaplička Fest 2024</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className='grid gap-7 mx-auto lg:w-[80%] monitor:w-[64%] grid-cols-1 sm:grid-cols-2 place-items-center'>
            {kaplickaVideos.map((video, index) => (
              <div key={index} className="relative">
                <iframe
                  src={video.src}
                  title={`Kaplicka video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className='w-[347px] h-[195px] sm:w-[347px] sm:h-[195px] md:w-[560px] md:h-[315px]'
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        <section id="showMiloseKnora" className="p-11 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white">Show Miloše Knora</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className='grid gap-7 mx-auto lg:w-[80%] monitor:w-[64%] grid-cols-1 sm:grid-cols-2 place-items-center'>
            {knorVideos.map((video, index) => (
              <div key={index} className="relative">
                <iframe
                  src={video.src}
                  title={`Knor video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className='w-[347px] h-[195px] sm:w-[347px] sm:h-[195px] md:w-[560px] md:h-[315px]'
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        <section className="p-11 pb-11 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white">Noc s Andělem</h2>
            <div className="mt-3 mx-auto w-24 h-1 bg-gradient-to-r from-[#ff6a00] to-[#ee0979] rounded-full"></div>
          </div>
          <div className='flex justify-center'>
            <iframe
              src={andelVideo.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className='w-[347px] h-[195px] sm:w-[347px] sm:h-[195px] md:w-[560px] md:h-[315px] lg:w-[800px] lg:h-[450px]'
            ></iframe>
          </div>
        </section>
      </div>

      <VideoModal showModal={showModal} videoUrl={videoUrl} onClose={handleClose} />
      <Footer />
    </>
  );
}