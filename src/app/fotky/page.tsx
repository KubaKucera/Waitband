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
import image16 from "../../../public/assets/images/photos/image16.jpg";
import image17 from "../../../public/assets/images/photos/image18.jpg";
import image18 from "../../../public/assets/images/photos/image17.jpg";
import image19 from "../../../public/assets/images/photos/image19.jpeg";
import image20 from "../../../public/assets/images/photos/image20.jpeg";
import image21 from "../../../public/assets/images/photos/image21.jpeg";
import image22 from "../../../public/assets/images/photos/image22.jpeg";
import image23 from "../../../public/assets/images/photos/image23.jpeg";
import image24 from "../../../public/assets/images/photos/image24.jpg";
import crossIcon from "../../../public/assets/images/interface/crossIcon.png";
import texture from "../../../public/assets/textures/texture.jpg";
import whiteFadeTexture from "../../../public/assets/textures/whiteEffect.png";
import arrows from "../../../public/assets/images/graffiti/arrows.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import { useState, useEffect } from "react";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

const images = [
  image24, image1, image2, image3, image4, image5, image6, image7, 
  image8, image9, image10, image11, image12, image13, 
  image14, image15, image16, image17, image18, image19, 
  image20, image21, image22, image23
];

export default function PhotosPage(){
  const [showMore, setShowMore] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);    
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    document.title = "Fotky - Wait"
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    setButtonDisabled(true); // Tlačítko bude po kliknutí neaktivní
  };  
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="fotky"/>    
          <HeadingWithLine lineHeight="800px" />
          <ScrollToTopButton />

          <section className="relative h-auto py-10">

            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%"}}
            >
              <div className="fixed 2xl:right-[-10px] monitor:right-[30px] transform opacity-50 -rotate-45 top-60 hidden xl:flex">
                <Image 
                  src={arrows}
                  alt="Emoticon"                
                  className="2xl:w-[250px] monitor:w-[325px]"                
                />
              </div>
            </div>             

            <div className="container mx-auto px-4 flex justify-center">
              {/* Grid obrázků */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-24 pb-24 place-items-center">
                {images.slice(0, 9).map((image, index) => (
                  <div 
                    key={index} 
                    className="relative w-[340px] h-[340px] md:w-[300px] md:h-[300px] overflow-hidden cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image src={image} alt={`Photo ${index + 1}`} layout="fill" objectFit="cover" className="transition-all duration-300 ease-in-out transform hover:scale-110" />
                  </div>
                ))}

                {showMore && images.slice(9).map((image, index) => (
                  <div 
                    key={index + 9} 
                    className="relative w-[340px] h-[340px] md:w-[300px] md:h-[300px] overflow-hidden cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image src={image} alt={`Photo ${index + 10}`} layout="fill" objectFit="cover" className="transition-all duration-300 ease-in-out transform hover:scale-110" />
                  </div>
                ))}
              </div>                
            </div>
            
            <div className="flex justify-center mt-[-85px]">
              <button
                className={`w-full max-w-[950px] h-[50px] z-20 ml-14 mr-14 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 sm:ml-28 sm:mr-28 border-gray-400 border-[3px] text-gray-400 transition-all duration-500 ease-in-out transform hover:border-white hover:text-white font-bold uppercase rounded-lg ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleShowMore}
                disabled={buttonDisabled}
              >
                Zobrazit více fotek
              </button>
            </div>

            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black rounded-lg bg-opacity-85"
                onClick={closeModal}
              >
                <div
                  className="relative w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] z-30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src={selectedImage} alt="Selected Image" layout="fill" objectFit="cover" className="border-[2px] border-white rounded-md" />
                  <div className="absolute w-[35px] h-[35px] right-1 top-1 bg-black bg-opacity-50 rounded-lg z-30">
                    <Image 
                      src={crossIcon}
                      alt="Cross Icon"
                      objectFit="cover"
                      layout="fill"
                      onClick={closeModal}
                      className="opacity-80 cursor-pointer hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center mt-[20px] mb-[30px] h-[50px]">
              <Link href="https://www.instagram.com/wait_band_official/" rel="noopener noreferrer" target='_blank' passHref>
                <button className="px-14 py-[9px] bg-transparent text-gray-200 border-[3px] rounded-lg font-bold border-blue-500 hover:border-blue-500 uppercase transition-all duration-500 ease-in-out transform hover:text-blue-500 hover:opacity-100">
                  Přejít na instagram
                </button>
              </Link>
            </div>           
          </section>   
          
          <Footer/>
        </>
    );
}