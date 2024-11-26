"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import image1 from "../../../public/assets/images/photos/image1.jpg";
import image2 from "../../../public/assets/images/photos/image2.jpg";
import image3 from "../../../public/assets/images/photos/image7.jpg";
import image4 from "../../../public/assets/images/photos/image5.jpg";
import image5 from "../../../public/assets/images/photos/image6.jpg";
import image6 from "../../../public/assets/images/photos/image3.jpg";
import image7 from "../../../public/assets/images/photos/image9.jpg";
import image8 from "../../../public/assets/images/photos/image8.jpg";
import image9 from "../../../public/assets/images/photos/image4.jpg";
import image10 from "../../../public/assets/images/photos/image15.jpg";
import image11 from "../../../public/assets/images/photos/image11.jpg";
import image12 from "../../../public/assets/images/photos/image13.jpg";
import image13 from "../../../public/assets/images/photos/image12.jpg";
import image14 from "../../../public/assets/images/photos/image14.jpg";
import image15 from "../../../public/assets/images/photos/image10.jpg";
import whiteFadeTexture from "../../../public/assets/textures/whiteEffect.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const images = [
  image1, image2, image3, image4, image5, image6, image7, 
  image8, image9, image10, image11, image12, image13, 
  image14, image15
];

export default function PhotosPage(){
  const [showMore, setShowMore] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);  
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    document.title = "Fotky - Wait"
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    setButtonDisabled(true); // Tlačítko bude po kliknutí neaktivní
  };

  const checkScrollTop = () => {
    if(!showScroll && window.scrollY > 400){
      setShowScroll(true);
    } else if(showScroll && window.scrollY <= 400){
      setShowScroll(false);
    }
  };
  
  const handleResize = () => {
    if (window.innerWidth > 1200) {  // Podmínka pro "maximalizovaný" stav
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
  }, [showScroll]);
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="fotky"/>    

          <section className="relative h-auto bg-buttonBlue bg-opacity-15 py-10">

            <div
              className="absolute inset-0 opacity-50 bg-fixed bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${whiteFadeTexture.src})`, width: "100%", height: "100%"}}
            ></div> 

            <div className="container mx-auto px-4 flex justify-center">
              {/* Grid obrázků */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-24 pb-24">
                {images.slice(0, 9).map((image, index) => (
                  <div key={index} className="relative w-[340px] h-[340px]">
                    <Image src={image} alt={`Photo ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
                  </div>
                ))}

                {showMore && images.slice(9).map((image, index) => (
                  <div key={index + 9} className="relative w-[340px] h-[340px]">
                    <Image src={image} alt={`Photo ${index + 10}`} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </div>                
            </div>
            
            <div className="flex justify-center mt-[-85px]">
              <button
                className={`w-full max-w-[1075px] h-[50px] z-20 ml-14 mr-14 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 sm:ml-28 sm:mr-28 bg-buttonBlue text-white font-bold uppercase rounded-lg ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleShowMore}
                disabled={buttonDisabled}
              >
                Zobrazit více fotek
              </button>
            </div>

            <div className="flex justify-center mt-[20px] mb-[30px] h-[50px]">
              <Link href="https://www.instagram.com/wait_band_official/" rel="noopener noreferrer" target='_blank' passHref>
                <button className="px-14 py-[9px] bg-transparent text-black border-[3px] rounded-lg font-bold border-buttonBlue uppercase transition-all duration-500 ease-in-out transform hover:text-buttonBlue hover:opacity-100">
                  Přejít na instagram
                </button>
              </Link>
            </div>
            <div className="absolute left-[10px] top-[180px] z-30 hidden xl:flex flex-col items-center">
              <h2 className="text-black text-[25px] font-montserrat font-semibold italic transform -rotate-90 uppercase">
                Fotky
              </h2>
            </div>

            <div className="absolute left-[50px] top-[260px] z-30 w-[4px] h-[810px] bg-gray-900 animate-grow hidden xl:block"></div>

            <FaArrowUp
              onClick={scrollToTop}
              className={`fixed right-0 z-50 p-2 bg-black text-white text-[36px] cursor-pointer transition-all duration-[700ms] ease-in-out transform border rounded-tl-md rounded-bl-md opacity-75 border-white border-md hover:opacity-100 ${
                showScroll ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"
              } bottom-14 lg:bottom-36`}
            />
          </section>   
          
          <Footer/>
        </>
    );
}