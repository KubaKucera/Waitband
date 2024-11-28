import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import image1 from "../../../public/assets/images/music/image1.jpg";
import image2 from "../../../public/assets/images/music/image2.jpg";
import image3 from "../../../public/assets/images/music/image3.jpg";
import image4 from "../../../public/assets/images/music/image4.jpg";
import image5 from "../../../public/assets/images/music/image5.jpg";
import image6 from "../../../public/assets/images/music/image6.jpg";
import image7 from "../../../public/assets/images/music/image7.jpg";
import image8 from "../../../public/assets/images/music/image8.jpg";
import image9 from "../../../public/assets/images/music/image9.jpg";
import whiteFadeTexture from "../../../public/assets/textures/whiteEffect.png";
import { FaPlayCircle, FaSoundcloud } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import CustomCookieConsent from "@/components/cookie/CookieConsent";

export const metadata: Metadata = {
  title: "Hudba - Wait",
  description: "Music page by create next app",  
}

const songs = [
  { title: "February 29th", url: "https://soundcloud.com/wait-band-official/february-29th" },
  { title: "Achiever", url: "https://soundcloud.com/wait-band-official/achiever" },
  { title: "Losing Sleep", url: "https://soundcloud.com/wait-band-official/losing-sleep" },
  { title: "Daydream", url: "https://soundcloud.com/wait-band-official/daydream" },
  { title: "Careless Dreaming", url: "https://soundcloud.com/wait-band-official/careless-dreaming" },
  { title: "Horoskop", url: "https://soundcloud.com/wait-band-official/horoskop-horoscope" },
  { title: "Hate You", url: "https://soundcloud.com/wait-band-official/hate-you" },
  { title: "Subway Train", url: "https://soundcloud.com/wait-band-official/subway-train" },
  { title: "Follow Me To Hell", url: "https://soundcloud.com/wait-band-official/follow-me-to-hell" },  
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

          <section className="w-full relative min-h-[1275px] bg-musicPink py-10 px-4 sm:px-6 bg-opacity-10">            
            <div
              className="absolute inset-0 opacity-50 bg-fixed bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${whiteFadeTexture.src})`, width: "100%", height: "100%" }}
            ></div>

            {/* Title */}
            <div className="absolute top-[120px] left-0 right-0 w-full z-10">
              <h2 className="text-gray-800 italic font-montserrat text-xl monitor:text-[22px] text-center font-bold uppercase">
                Top songy ze <span className="text-soundcloudOrange font-bold">Soundcloud</span>
              </h2>
            </div>

            {/* Image Grid */}
            <div className="container mx-auto pt-36 pb-24 flex items-center justify-center relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols gap-6">
                {[image1, image2, image3, image4, image5, image6, image7, image8, image9].map((image, index) => (
                  <Link
                    key={index}
                    href={songs[index].url}
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
                        className="group-hover:cursor-pointer transition-all duration-300 ease-in-out transform"
                      />
                      <p className="absolute bg-black bg-opacity-75 bottom-0 text-lg md:text-lg p-2 md:p-3 w-full text-white transition-all duration-200 ease-in-out transform group-hover:bg-soundcloudOrange group-hover:bg-opacity-75 font-semibold text-center">
                        {songs[index].title}
                      </p>
                      <div className="absolute w-[47px] h-[47px] flex items-center justify-center bg-soundcloudOrange bg-opacity-75 rounded-bl-lg text-lg top-0 right-0">
                        <FaPlayCircle className="bg-transparent text-white transition-transform duration-300 ease-out group-hover:scale-125" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Side Title */}
            <div className="absolute left-[-63px] top-[245px] z-30 hidden xl:flex flex-col items-center">
              <h2 className="text-black text-[25px] font-montserrat font-semibold italic transform -rotate-90 uppercase">
                Hudba - Best Of
              </h2>
            </div>

            {/* Vertical line */}
            <div className="absolute left-[50px] top-[400px] z-30 w-[4px] h-[595px] bg-gray-900 animate-grow2 hidden xl:block"></div>
          </section>

          <Footer />
        </>
    );
}
