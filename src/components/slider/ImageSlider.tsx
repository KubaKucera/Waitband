"use client";

import Image from "next/image";
import Slider from "react-slick";

import image1 from "../../../public/assets/images/slider/slides/image2.jpeg";
import image2 from "../../../public/assets/images/slider/slides/image3.jpg";
import image3 from "../../../public/assets/images/slider/slides/image1.jpeg";
import image4 from "../../../public/assets/images/slider/slides/image10.jpg";
import image5 from "../../../public/assets/images/slider/slides/image9.jpeg";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute left-0 top-0 bottom-0 z-30 w-14 md:w-20 flex items-center justify-center
                 bg-black/30 hover:bg-black/50 transition duration-300 ease-in-out"
      onClick={onClick}
      aria-label="Předchozí"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 bottom-0 z-30 w-14 md:w-20 flex items-center justify-center
                 bg-black/30 hover:bg-black/50 transition duration-300 ease-in-out"
      onClick={onClick}
      aria-label="Další"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function ImageSlider() {
  const images = [
    { src: image3, alt: "Slide 1" },
    { src: image2, alt: "Slide 2" },
    { src: image1, alt: "Slide 3" },
    { src: image4, alt: "Slide 4" },
    { src: image5, alt: "Slide 5" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative z-40 overflow-x-hidden bg-black">
      <div className="relative w-screen h-[45vh] sm:h-[70vh] md:h-[80vh] lg:h-[110vh] monitor:h-[100vh] overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="relative mt-16 sm:mt-16 md:mt-0 w-screen h-[45vh] sm:h-[70vh] md:h-[80vh] lg:h-[110vh] monitor:h-[100vh]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-bottom sm:object-bottom md:object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}