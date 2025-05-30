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

export default function PhotosPage() {
  const [showMore, setShowMore] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Fotky - Wait";
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    setButtonDisabled(true);
  };

  const closeModal = () => setSelectedIndex(null);
  const goToNext = () => setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
  const goToPrev = () => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="fotky" />
      <HeadingWithLine lineHeight="800px" />
      <ScrollToTopButton />

      <section className="relative h-auto py-10">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${texture.src})` }}>
          <div className="fixed 2xl:right-[-10px] monitor:right-[30px] transform opacity-50 -rotate-45 top-60 hidden xl:flex">
            <Image src={arrows} alt="Emoticon" className="2xl:w-[250px] monitor:w-[325px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-24 pb-24 place-items-center">
            {images.slice(0, showMore ? images.length : 9).map((image, index) => (
              <div
                key={index}
                className="relative w-[340px] h-[340px] md:w-[300px] md:h-[300px] overflow-hidden cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-[-85px]">
          <button
            className={`w-full max-w-[950px] h-[50px] tracking-wide z-20 ml-14 mr-14 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 sm:ml-28 sm:mr-28 border-gray-400 border-[3px] text-gray-400 transition-all duration-500 ease-in-out transform hover:border-white hover:text-white font-bold uppercase rounded-lg ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleShowMore}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Všechny fotky zobrazeny" : "Zobrazit více fotek"}
          </button>
        </div>

        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85" onClick={closeModal}>
            <div className="relative w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] z-30" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedIndex]}
                alt="Selected Image"
                layout="fill"
                objectFit="cover"
                className="border-[2px] border-white rounded-md"
              />
              <div className="absolute top-2 right-2 w-8 h-8 bg-gray-600 bg-opacity-35 rounded-lg z-30">
                <Image
                  src={crossIcon}
                  alt="Close"
                  layout="fill"
                  objectFit="cover"
                  onClick={closeModal}
                  className="cursor-pointer opacity-70 hover:opacity-100"
                />
              </div>
              {selectedIndex > 0 && (
                <button className="absolute left-0 top-1/2 -translate-y-1/2 z-30 h-10 sm:h-14 w-7 sm:w-7 md:h-14 md:w-9 flex items-center justify-center bg-white/80 hover:bg-white backdrop-blur-md rounded-r-full shadow-lg text-gray-700 hover:text-black" onClick={goToPrev} aria-label="Předchozí">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedIndex < images.length - 1 && (
                <button className="absolute right-0 top-1/2 -translate-y-1/2 z-30 h-10 sm:h-14 w-7 sm:w-7 md:h-14 md:w-9 flex items-center justify-center bg-white/80 hover:bg-white backdrop-blur-md rounded-l-full shadow-lg text-gray-700 hover:text-black" onClick={goToNext} aria-label="Další">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
              <div className="absolute bottom-3 right-4 text-white text-sm sm:text-base bg-black bg-opacity-50 px-3 py-1 rounded-lg z-30">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-[20px] mb-[30px] h-[50px]">
          <Link href="https://www.instagram.com/wait_band_official/" rel="noopener noreferrer" target="_blank" passHref>
            <button className="w-[300px] h-[50px] tracking-wide bg-transparent text-gray-200 border-[3px] rounded-lg font-bold border-blue-500 hover:border-blue-500 uppercase transition-all duration-500 ease-in-out transform hover:text-blue-500 hover:opacity-100">
              Přejít na instagram
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}