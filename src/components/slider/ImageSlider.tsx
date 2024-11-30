"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";
import Slider from "react-slick";
import image1 from "../../../public/assets/images/slider/slides/image2.jpeg";
import image2 from "../../../public/assets/images/slider/slides/image3.jpg";
import image3 from "../../../public/assets/images/slider/slides/image7.jpeg";
import image4 from "../../../public/assets/images/slider/slides/image1.jpeg";
import image5 from "../../../public/assets/images/slider/slides/image4.jpg";
import image6 from "../../../public/assets/images/slider/slides/image6.jpg";
import prevArrow from "../../../public/assets/images/slider/icons/leftArrow.svg";
import nextArrow from "../../../public/assets/images/slider/icons/rightArrow.svg"

function PrevArrow({ onClick }: {onClick?: () => void }){
  return(
    <button
      type="button"
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 border-[1px] border-solid border-white bg-white text-white rounded-full opacity-75 hover:opacity-100"
      onClick={onClick}
    >
      <Image
        src={prevArrow}
        alt="Previous"
        width={32}
        height={32}
        priority
      />
    </button>
  );
}

function NextArow({ onClick }: {onClick?: () => void}){
  return(
    <button
      type="button"
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 border-[1px] border-solid border-white bg-white text-white rounded-full opacity-75 hover:opacity-100"
      onClick={onClick}
    >
      <Image
        src={nextArrow}
        alt="Next"
        width={32}
        height={32}
        priority
      />
    </button>
  );
}

export default function ImageSlider() {
    const images = [
        {src: image1, alt: "Slide1", width: 2120, height: 1280},
        {src: image2, alt: "Slide2", width: 2120, height: 1280},
        {src: image3, alt: "Slide3", width: 2120, height: 1280},
        {src: image4, alt: "Slide4", width: 2120, height: 1280},
        {src: image5, alt: "Slide5", width: 2120, height: 1280},
        {src: image6, alt: "Slide6", width: 2120, height: 1280},
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,        
        prevArrow: <PrevArrow />,
        nextArrow: <NextArow />,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return(
      <div className="w-screen max-w-full mx-auto relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[680px] monitor:h-[900px]">
              <Image
                src={img.src}
                alt={img.alt}                            
                width={img.width}
                height={img.height}
                className="rounded-lg shadow-lg z-20 w-full h-full object-cover"            
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              {(index === 0 || index === 2) && (
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-b from-[rgba(126,32,89,0)] via-[rgba(126,32,89,0.2)] to-[rgba(50,7,26,0.55)]"></div>
              )}
            </div>
          ))}
        </Slider>
        <style jsx global>{`
          .slick-dots {
            bottom: 30px !important;
          }

          @media (max-width: 768px) {
            div.slick-slider .slick-dots {
              bottom: 20px !important;
            }
          }
        `}</style>  
      </div>
    );
}