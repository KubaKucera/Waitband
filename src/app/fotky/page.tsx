"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import { useState, useEffect } from "react";

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

import texture from "../../../public/assets/textures/texture.jpg";

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

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedIndex]);

  const handleShowMore = () => {
    setShowMore(true);
    setButtonDisabled(true);
  };

  const closeModal = () => setSelectedIndex(null);
  const goToNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );
  const goToPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  return (
    <>
      <CustomCookieConsent />
      <Navbar initialActiveLink="fotky" />
      <ScrollToTopButton />      

      <HeadingWithLine
        height={showMore ? 2630 : 1015} // zvětšení po kliknutí
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={0.6}
        ease="easeOut"
        label="Fotky"
      />

      <section
        className="relative h-auto py-10"
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${texture.src})`, width: "100%", height: "100%" }}
        ></div>
        <div className="container mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 pb-24 place-items-center">
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
                  className="transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-[-85px]">
          <button
            className={`w-full max-w-[950px] h-[50px] tracking-wide z-20 ml-14 mr-14 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 sm:ml-28 sm:mr-28 border-gray-400 border-[3px] text-gray-400 font-semibold text-lg transition-all duration-500 ease-in-out transform hover:border-white hover:text-white rounded-md ${
              buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleShowMore}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Všechny fotky zobrazeny" : "Zobrazit více fotek"}
          </button>
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-85"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              aria-label="Zavřít"
              onClick={closeModal}
              className="absolute top-5 right-5 p-1 rounded hover:bg-opacity-30 transition-colors z-40 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-9 h-9 text-gray-200"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                aria-label="Předchozí"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-40 p-2 text-gray-50 hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < images.length - 1 && (
              <button
                aria-label="Další"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-40 p-2 text-gray-50 hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image index */}
            <div className="absolute bottom-5 right-5 text-gray-50 text-sm sm:text-base px-3 py-1 rounded-md z-40">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Image */}
            <div
              className="relative w-[90vw] h-[90vw] lg:max-w-[600px] lg:max-h-[600px] xl:max-w-[600px] xl:max-h-[600px] monitor:max-w-[770px] monitor:max-h-[770px] z-30 rounded-lg border border-gray-300 p-2 bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt="Selected Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-[20px] mb-4 h-[50px]">
          <Link
            href="https://www.instagram.com/wait_band_official/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <button
              className="w-[300px] h-[50px] tracking-wide bg-transparent text-gray-100 rounded-lg font-semibold text-lg transition-all duration-500 ease-in-out transform hover:rounded-md hover:text-neonPink hover:opacity-100"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderImageSlice: 1,
                borderImageSource: "linear-gradient(to right, #ff6a00, #ee0979)",
              }}
            >
              Přejít na instagram
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}