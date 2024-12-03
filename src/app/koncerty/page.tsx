import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import back from "../../../public/assets/images/conserts/back.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import Footer from "@/components/footer/Footer";
import consertsImage from "../../../public/assets/images/conserts/consertsImage.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koncerty - Wait",
  description: "Koncerts page by create next app",  
}

export default function ConsertsPage(){
    
  const concertData = [
    "24.11.2024, 20:00 – Pardubice, Ateliér Klose",
  ];

  const lineHeight = 150 + (concertData.length - 1) * 35;
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="koncerty"/>  

          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12">
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center"
              style={{ backgroundImage: `url(${back.src})`, width: "100%", height: "100%"}}
            ></div>    

            <div className="absolute w-full h-full bg-black bg-opacity-40"></div>
            
            <div className="absolute inset-0 bg-black/70 opacity-55 z-10"></div>
            <div className="absolute inset-0 bg-black/70 opacity-30 z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-30"></div>

            <div className="relative w-[700px] monitor:w-[780px] bg-white bg-opacity-20 z-40 mt-[75px] rounded-md p-6 transform translate-y-[-20px]">
              <h2 className="mt-[10px] text-[26px] text-white text-center font-bold font-montserrat opacity-100 uppercase">Plány koncertů</h2>
              <div className="flex h-[200px] w-full flex-col items-center mt-[25px]">
                <Image
                  src={consertsImage}
                  alt="Conserts Image"                                                
                  className="object-cover h-full pointer-events-none brightness-50 opacity-85 rounded-tr-2xl rounded-tl-2xl"
                />                  
                <h2 className="absolute flex text-[28px] monitor:text-[40px] md:text-[32px] lg:text-4xl text-center font-montserrat text-lightGray mt-[80px] ml-[50px] mr-[50px] uppercase z-10">Budeme se na vás těšit!</h2>    
                <h3 className="absolute text-[30px] text-left text-gray-400 left-7 z-20 mt-[162px]"><FaAngleDoubleDown/></h3>       
                <h3 className="absolute text-[30px] text-right text-gray-400 right-7 z-20 mt-[162px]"><FaAngleDoubleDown/></h3>
              
              </div>              
              <div className="flex flex-col items-center text-center space-y-[10px] pb-4">
                {concertData.map((text, index) => {
                  const [city, location] = text.split(" – ");
                  const formattedLocation = location.split(", ").map(part => part.toUpperCase()).join(", ");
                  return (
                    <p
                      key={index}
                      className={`text-lg lg:text-xl text-white ${index === 0 ? "mt-7" : ""}`}
                    >
                      {`${city} – ${formattedLocation}`}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="absolute left-[-20px] top-[195px] z-30 hidden xl:flex flex-col items-center">
              <h2 className="text-neonPink text-[25px] font-montserrat font-semibold italic transform -rotate-90 uppercase">
                Koncerty
              </h2>
            </div>
              
            <div 
              className="absolute left-[50px] top-[307px] z-30 bg-gray-300 animate-grow2 hidden xl:block"
              style={{width: "3px", height: `${lineHeight}px`}}
            >              
            </div>
          </section>   
                 
          <Footer />             
        </>
    );
}