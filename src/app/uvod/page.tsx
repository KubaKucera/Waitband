"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ImageSlider from "@/components/slider/ImageSlider";
import waitBackImage from "../../../public/assets/images/background/backNoTitle.jpg";
import fadeEffectTexture from "../../../public/assets/textures/fadeEffect.png";
import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowsAlt, FaSoundcloud, FaPlayCircle } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";
import actualityImage1 from "../../../public/assets/images/home/actuality1.jpg";
import actualityImage2 from "../../../public/assets/images/albums/album1.jpg";
import actualityImage3 from "../../../public/assets/images/home/actuality3.jpg";
import back2 from "../../../public/assets/images/background/back2.png";
import whiteEffectTexture from "../../../public/assets/textures/whiteEffect.png";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import logoWhiteTitle from "../../../public/assets/images/home/waitLogoWhiteTitle.png";
import VideoModal from "@/components/videoModal/VideoModal";
import { Metadata } from "next";

export default function HomePage() {
  const [showScroll, setShowScroll] = useState(false);  
  const [isMaximized, setIsMaximized] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const checkScrollTop = () => {
    if(!showScroll && window.scrollY > 400){
      setShowScroll(true);
    } else if(showScroll && window.scrollY <= 400){
      setShowScroll(false);
    }
  };
  
  const handleResize = () => {
    setIsMaximized(window.innerWidth > 1200);
  };  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVideoClick = (url: string) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem('hasAnimated') !== 'true') {
      sessionStorage.setItem('hasAnimated', 'true');
    } else {
      setHasAnimated(true);
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

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
          <CustomCookieConsent />
          <Navbar initialActiveLink="uvod" />
          <ImageSlider />

          <section className="relative min-h-screen">
            <div
              className="absolute inset-0 bg-fixed opacity-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${waitBackImage.src})` }}
            ></div>

            <div className="absolute top-0 left-0 w-full h-[110px] bg-[#001348] bg-opacity-[0.85] opacity-[0.97] z-10"></div>
            <div className="absolute top-0 left-0 w-full h-[110px] bg-gradient-to-t from-[rgba(0,19,72,0)] to-[rgba(0,4,14,76)] opacity-[0.75] z-20 flex items-center justify-center">
              <h2 className="text-white font-montserrat text-[28px] sm:text-[28px] md:text-[33px] uppercase z-25 font-normal italic">
                Vítejte na naší stránce!
              </h2>
            </div>

            {/*}
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
               style={{ backgroundImage: `url(${fadeEffectTexture.src})`, width: "100%", height: "100%"}}
            ></div>  */}

            <div className="relative flex flex-col items-center justify-center h-[320px]">                            
              <h2 className="absolute font-montserrat text-[120px] md:text-[146px] text-blue-950 mt-28 font-semibold uppercase z-30">
                Wait
              </h2>              
            </div>

            <div className="relative bg-[rgba(0,19,72,0.85)] min-h-[600px] top-0 z-10">
              <div className="absolute top-0 left-0 w-full h-full monitor:h-[1050px] bg-gradient-to-b from-[rgba(0,19,72,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,4,14,0.99)] z-10"></div>
              <div className="relative grid gap-10 items-center justify-center w-[85%] lg:w-[67%] monitor:w-[55%] mx-auto pt-11 pb-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-20">
                {[
                  {
                    title: "V STAND-UP COMEDY",
                    subtitle: "MILOŠE KNORA",
                    image: actualityImage1,
                    link: "https://www.milosknor.cz/",
                    openInNewTab: true,
                  },
                  {
                    title: "ALBUM",
                    subtitle: "JENOM VEDLE SEBE",
                    image: actualityImage2,
                    link: "/alba",
                    openInNewTab: false,
                  },
                  {
                    title: "SONG",
                    subtitle: "CARELESS DREAMING",
                    image: actualityImage3,
                    link: "https://soundcloud.com/wait-band-official/careless-dreaming",
                    openInNewTab: true,
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
                      <span className="text-cyan font-bold text-xl">
                        {item.subtitle}
                      </span>
                    </h3>
                    <div className="relative w-[300px] h-[300px] group-hover:brightness-100 brightness-75 transition-all">
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
                          className="rounded-md border-[4px] border-white transition-all duration-300 group-hover:border-cyan"
                        />
                      </Link>
                      
                      {index === 2 && (
                        <div className="absolute w-[47px] h-[47px] flex items-center justify-center border-[3px] bg-soundcloudOrange bg-opacity-75 border-none mt-[4px] mr-[4px] group-hover:brightness-100 rounded-bl-lg text-lg top-0 right-0">
                          <FaPlayCircle className="bg-transparent text-white mr-[-2px] transition-all duration-300 ease-in-out transform group-hover:scale-125 group-hover:mr-[-1px] z-20" />
                        </div>
                      )}
                    </div>
                    <Link
                      href={item.link}
                      rel="noopener noreferrer"
                      target={item.openInNewTab ? "_blank" : undefined}
                    >
                      <button className="mt-3 px-10 py-[9px] bg-transparent text-white border-2 rounded-lg font-bold border-white uppercase transition-all duration-300 opacity-85 group-hover:opacity-100 group-hover:border-cyan group-hover:text-cyan">
                        {index === 2 ? "Poslechnout" : "Prohlédnout"}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="absolute left-[14px] top-[100px] z-30 hidden xl:flex flex-col items-center">
                <h2 className="text-white text-[25px] font-montserrat font-semibold italic transform -rotate-90 uppercase">
                  Úvod
                </h2>
              </div>

              <div                
                className="absolute left-[50px] top-[180px] z-50 w-[4px] h-[325px] hidden xl:block bg-lightGray animate-grow2"
              ></div>
            </div>

            <FaArrowUp
              onClick={scrollToTop}
              className={`fixed right-0 z-50 p-2 bg-black text-white text-[36px] cursor-pointer transition-all duration-700 ease-in-out transform border border-white opacity-75 border-md hover:opacity-100 rounded-tl-md rounded-bl-md ${
                showScroll ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              } bottom-14 lg:bottom-36`}
            />            
          </section>

          {/* Video Section */}
          <section className="relative py-14">            
            <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
              <div
                className="absolute inset-0 bg-fixed bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${whiteEffectTexture.src})` }}
              ></div>
              {[
                "https://www.facebook.com/plugins/video.php?height=258&href=https%3A%2F%2Fwww.facebook.com%2Fwaitbandcz%2Fvideos%2F3391306204501202%2F&show_text=false&width=560&t=0",
                "https://www.facebook.com/plugins/video.php?height=258&href=https%3A%2F%2Fwww.facebook.com%2Fwaitbandcz%2Fvideos%2F500761749081282%2F&show_text=false&width=560&t=0",                
              ].map((url, index) => (
                <div
                  key={index}
                  className="relative w-full sm:w-[47%] h-[210px] sm:h-[200px] md:h-[160px] lg:h-[320px] xl:h-[320px] 2xl:h-[320px] bg-white"
                >
                  <iframe
                    src={url}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => handleVideoClick(url)}
                    className="absolute top-2 right-2 bg-blue-500 text-white opacity-85 hover:opacity-100 p-2 rounded-md hidden lg:flex"
                  >
                    <FaArrowsAlt />
                  </button>
                </div>
              ))}

              <div className="relative w-full lg:w-[60%] h-[200px] sm:h-[200px] md:h-[400px] lg:h-[400px] bg-white shadow-md flex justify-center mt-0 sm:mt-0 md:mt-[26px] mb-1">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=253&href=https%3A%2F%2Fwww.facebook.com%2Fwaitbandcz%2Fvideos%2F512694201213644%2F&show_text=false&width=560&t=0"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
                  <button
                    onClick={() => handleVideoClick("https://www.facebook.com/plugins/video.php?height=253&href=https%3A%2F%2Fwww.facebook.com%2Fwaitbandcz%2Fvideos%2F512694201213644%2F&show_text=false&width=560&t=0")}
                    className="absolute top-2 right-2 bg-blue-500 text-white opacity-85 hover:opacity-100 p-2 rounded-md hidden lg:flex"
                  >
                    <FaArrowsAlt />
                  </button>
              </div>
            </div>
          </section>

          <VideoModal showModal={showModal} videoUrl={videoUrl} onClose={handleClose} />
          <Newsletter />
          <Footer />
        </>
    );
}