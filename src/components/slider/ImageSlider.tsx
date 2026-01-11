"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../public/assets/images/slider/slides/image11.jpeg";
import image2 from "../../../public/assets/images/slider/slides/image10.jpg";
import image3 from "../../../public/assets/images/slider/slides/image3.jpg";
import image4 from "../../../public/assets/images/slider/slides/image9.jpeg";
import image5 from "../../../public/assets/images/slider/slides/image1.jpeg";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label="Předchozí"
      onClick={onClick}
      className="
        absolute left-0 top-0 h-full
        w-12 sm:w-12 md:w-16
        bg-black/40 sm:bg-black/50
        flex items-center justify-center
        z-30 hover:bg-black/70 transition
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      aria-label="Další"
      onClick={onClick}
      className="
        absolute right-0 top-0 h-full
        w-12 sm:w-12 md:w-16
        bg-black/40 sm:bg-black/50
        flex items-center justify-center
        z-30 hover:bg-black/70 transition
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function ImageSlider() {
  const images = [image1, image2, image3, image4, image5];

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    touchMove: true,
    swipe: true,
    swipeToSlide: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section
      className="
        relative w-full overflow-hidden bg-black
        pt-[64px] sm:pt-[72px] md:pt-[85px]
        h-[35vh] sm:h-[50vh] md:h-[75vh] lg:h-screen 
      "
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="outline-none">            
            <div className="relative w-full h-[35vh] sm:h-[50vh] md:h-[75vh] lg:h-screen">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}