"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";
import Slider from "react-slick";
import image1 from "../../../public/assets/images/slider/slides/image2.jpeg";
import image2 from "../../../public/assets/images/slider/slides/image3.jpg";
import image4 from "../../../public/assets/images/slider/slides/image1.jpeg";
import image5 from "../../../public/assets/images/slider/slides/image4.jpg";
import image8 from "../../../public/assets/images/slider/slides/image9.jpeg";
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
      {src: image4, alt: "Slide4", width: 2120, height: 1280},
      {src: image5, alt: "Slide5", width: 2120, height: 1280},        
      {src: image8, alt: "Slide6", width: 2120, height: 1280},
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
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
      <div className="w-screen max-w-full mx-auto relative z-40">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[680px] monitor:h-[825px]">
              <Image
                src={img.src}
                alt={img.alt}                            
                width={img.width}
                height={img.height}
                className="shadow-lg z-20 w-full h-full object-cover"            
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
              
            </div>
          ))}
        </Slider> 

        {/*
        <div className="slick-dots-container">
          <div className="slick-dots-wrapper">
            <div className="slick-dots">              
            </div>
          </div>
        </div>      */}  

        <style jsx global>{`
          .slick-dots {
            bottom: 20px !important;
            z-index: 20;
            display: flex !important; /* zajistí, že tečky budou v řadě */
            justify-content: flex-end !important; /* tečky na pravé straně */
            margin-Left: -12px;
          }

          @media (max-width: 768px) {
            div.slick-slider .slick-dots {
              bottom: 17px !important;
              margin-Left: -10px;  
            }          
          }

          /* Nový panel pro tečky */
          .slick-dots-container {
            position: absolute;
            bottom: 7px;
            right: 0; /* přesunuto na pravou stranu */
            height: 50px;
            width: 180px; /* nastavena šířka na 200px */
            background: rgba(0, 0, 0, 0.8); /* černé pozadí s 60% průhledností */
            display: flex;
            justify-content: flex-end; /* zarovnání teček na pravou stranu */
            align-items: center; /* vertikální vycentrování teček */
            border-top: 2px solid white;   
            border-left: 2px solid white;  
            border-top-left-radius: 7px;              
            z-index: 10;
          }

          .slick-dots-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .slick-dots li button:before {
            display: none;
          }

          .slick-dots li {
            width: 21px;
            height: 21px;
            margin: 0 5px;
          }

          @media (max-width: 768px) {
            .slick-dots li {
              width: 18px;
              height: 18px;
              margin: 0 4px;
            }

            .slick-dots-container {
              width: 150px;
              height: 40px;
            }
          }

          .slick-dots li button {
            width: 100%; 
            height: 100%; 
            border-radius: 100%; 
            background: white; 
            border: none;
            outline: none; 
            box-shadow: none; 
            cursor: pointer;   
            opacity: 0.5;
          }

          .slick-dots li.slick-active button {
            background: #00308F;
            border: 2px solid white; 
            opacity: 1;
          }

          .slick-dots li button:hover {  
            background: #00308F; 
            border: 2px solid white;
            opacity: 1;
          }
        `}</style>
      </div>
    );
}