"use client";

import Link from "next/link";
import Image from "next/image";
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
import image24 from "../../../public/assets/images/photos/image24.jpg";
import image25 from "../../../public/assets/images/photos/image25.jpg";

import texture from "../../../public/assets/textures/texture.jpg";

const images = [
  image25, image24, image1, image2, image3, image4, image5, image6, image7,
  image8, image9, image10, image11, image12, image13,
  image14, image15, image16, image17, image18, image19,
  image20, image21, image22
];

function LoadingDots() {
  return (
    <span className="flex items-center justify-center space-x-2">
      <span className="animate-pulse">.</span>
      <span className="animate-pulse delay-200">.</span>
      <span className="animate-pulse delay-400">.</span>
    </span>
  );
}

export default function PhotosPage() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Fotky - Wait";
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
  }, [selectedIndex]);

  const handleShowMore = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowMore(true);
    setLoading(false);
  };

  const closeModal = () => setSelectedIndex(null);
  const goToNext = () =>
    setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
  const goToPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));

  return (
    <>
      <HeadingWithLine
        height={showMore ? 2615 : 1015}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={1}
        ease="easeOut"
        label="Fotky"
      />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      >
        <section className="relative h-auto py-10">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-[85px] pb-24 place-items-center">
              {images.slice(0, showMore ? images.length : 9).map((image, index) => (
                <div
                  key={index}
                  className="relative w-[340px] h-[340px] md:w-[300px] md:h-[300px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Photo ${index + 1}`}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {!showMore && (
            <div className="flex justify-center mt-[-85px]">
              <button
                disabled={loading}
                onClick={handleShowMore}
                className={`w-full uppercase max-w-[950px] h-[50px] tracking-wide z-20 ml-14 mr-14 md:ml-20 md:mr-20 lg:ml-0 lg:mr-0 sm:ml-28 sm:mr-28 border-gray-400 border-[2px] text-white font-semibold text-[14px] transition-all duration-500 ease-in-out transform hover:border-gray-100 hover:text-gray-100 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? <LoadingDots /> : "Zobrazit více fotek"}
              </button>
            </div>
          )}

          <div className={`flex justify-center h-[50px] ${showMore ? "mt-[-40px]" : "mt-[20px]"}`}>
            <Link href="https://www.instagram.com/wait_band_official/" target="_blank">
              <button
                className="w-[300px] h-[50px] uppercase tracking-wide bg-transparent text-gray-100 rounded-lg font-semibold text-[14px] transition-all duration-500 ease-in-out transform hover:rounded-md hover:text-neonPink hover:opacity-100"
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderImageSource: "linear-gradient(to right, #ff6a00, #ee0979)",
                }}
              >
                Přejít na Instagram
              </button>
            </Link>
          </div>

          {selectedIndex !== null && (
            <div
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black bg-opacity-85 px-4"
              onClick={closeModal}
            >
              <button
                aria-label="Zavřít"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
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

              <div
                className="relative w-[90vw] h-[90vw] lg:max-w-[600px] lg:max-h-[600px] md:max-w-[600px] md:max-h-[600px] sm:max-w-[500px] sm:max-h-[500px] xl:max-w-[600px] xl:max-h-[600px] monitor:max-w-[770px] monitor:max-h-[770px] z-30 rounded-lg border-2 border-white p-2 bg-gray-900"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[selectedIndex]}
                  alt="Selected Image"
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Desktop arrows */}
              {selectedIndex > 0 && (
                <button
                  aria-label="Předchozí"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors items-center justify-center shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-50"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedIndex < images.length - 1 && (
                <button
                  aria-label="Další"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors items-center justify-center shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-50"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Mobile arrows under modal */}
              <div className="sm:hidden flex w-full max-w-[600px] mx-auto mt-4 gap-4 px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  disabled={selectedIndex === 0}
                  className="flex-1 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-gray-200 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  disabled={selectedIndex === images.length - 1}
                  className="flex-1 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-gray-200 hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile index label */}
              <div className="sm:hidden w-full flex justify-center mt-4">
                <div className="text-gray-300 text-sm">{selectedIndex + 1} / {images.length}</div>
              </div>

              {/* Desktop index label */}
              <div className="hidden sm:block absolute bottom-5 right-5 text-gray-50 text-base lg:text-lg px-3 py-1 rounded-md z-40">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}