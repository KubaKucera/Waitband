"use client";

import Image from "next/image";
import Slider from "react-slick";
import image1 from "../../../public/assets/images/slider/slides/image2.jpeg";
import image2 from "../../../public/assets/images/slider/slides/image3.jpg";
import image4 from "../../../public/assets/images/slider/slides/image1.jpeg";
import image5 from "../../../public/assets/images/slider/slides/image4.jpg";
import image8 from "../../../public/assets/images/slider/slides/image9.jpeg";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute left-0 top-0 bottom-[7px] z-30
                 w-14 md:w-20
                 flex items-center justify-center
                 bg-black/30 hover:bg-black/50
                 transition duration-300 ease-in-out"
      onClick={onClick}
      aria-label="Předchozí"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 bottom-[7px] z-30
                 w-14 md:w-20
                 flex items-center justify-center
                 bg-black/30 hover:bg-black/50
                 transition duration-300 ease-in-out"
      onClick={onClick}
      aria-label="Další"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function ImageSlider() {
  const images = [
    { src: image4, alt: "Slide1", width: 2120, height: 1280 },
    { src: image2, alt: "Slide2", width: 2120, height: 1280 },
    { src: image1, alt: "Slide4", width: 2120, height: 1280 },
    { src: image5, alt: "Slide5", width: 2120, height: 1280 },
    { src: image8, alt: "Slide6", width: 2120, height: 1280 },
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
    <>
      <div className="w-screen max-w-full mx-auto relative z-40 bg-black">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-screen h-[360px] sm:h-[360px] md:h-[500px] lg:h-[705px] xl:h-[705px] monitor:h-[825px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="shadow-lg z-20 w-full h-full object-cover"
                style={{ objectFit: "cover" }}
                priority={index === 0} />
            </div>
          ))}
        </Slider>
      </div>
      <hr className="w-screen max-w-full h-1 mt-[-4px] relative z-40 bg-gray-200"></hr>
    </>
  );
}