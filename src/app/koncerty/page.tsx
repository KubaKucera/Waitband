import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import back from "../../../public/assets/images/conserts/back.png";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import Footer from "@/components/footer/Footer";
import consertsImage from "../../../public/assets/images/conserts/consertsImage.jpg";
import emoticon from "../../../public/assets/images/graffiti/emoticon.png";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Metadata } from "next";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";

export const metadata: Metadata = {
  title: "Koncerty - Wait",
  description: "Koncerts page by create next app",  
}

const concertData = [
  "24.11.2024, 20:00 – Pardubice, Ateliér Klose",
  "17.1.2025, 20:30 – Praha, Rock Café",
  "29.3.2025, 00:00 – Pardubice, divadlo",   
];

export default function ConsertsPage(){
   
  /*
  const lineHeight = 150 + (concertData.length - 1) * 50;
  const lineHeightString = `${lineHeight}px`;*/
  
  return (
        <>
          <CustomCookieConsent />
          <Navbar initialActiveLink="koncerty"/>  
          <HeadingWithLine lineHeight="400px" />

          <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12">
                  
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${back.src})`, width: "100%", height: "100%"}}
            ></div> 

            <div
              className="absolute bg-black inset-0 z-10 opacity-70 bg-fixed bg-cover bg-center bg-no-repeat"              
            ></div> 

            <div className="fixed right-[25px] 2xl:top-64 monitor:top-80 rotate-15 opacity-50 z-20 hidden xl:flex">
              <Image 
                src={emoticon}
                alt="Emoticon"                
                className="2xl:w-[330px] monitor:w-[400px]"            
              />
            </div>    

            <div className="relative w-[700px] monitor:w-[780px] bg-white bg-opacity-20 z-40 mt-[75px] rounded-md p-6 transform translate-y-[-20px]">
              <h2 className="mt-[10px] text-[26px] text-white text-center font-normal font-montserrat opacity-100 uppercase">Plány koncertů</h2>
              <div className="flex h-[200px] w-full flex-col items-center mt-[25px]">
                <Image
                  src={consertsImage}
                  alt="Conserts Image"                                                
                  className="object-cover h-full pointer-events-none brightness-50 opacity-85 rounded-tr-2xl rounded-tl-2xl"
                />                  
                <h2 className="absolute flex text-[28px] monitor:text-[40px] md:text-[32px] lg:text-4xl text-center font-montserrat font-semibold text-gray-300 mt-[80px] ml-[50px] mr-[50px] z-10">Budeme se na vás těšit!</h2> 
              </div>              
              <div className="flex flex-col items-center text-center space-y-[10px] pb-4">
                {concertData.map((text, index) => {
                  const [city, location] = text.split(" – ");
                  const formattedLocation = location.split(", ").map(part => part.toUpperCase()).join(", ");
                  return (
                    <p
                      key={index}
                      className={`text-lg lg:text-[20px] text-white ${index === 0 ? "mt-7" : ""}`}
                    >
                      {`${city} – ${formattedLocation}`}
                    </p>
                  );
                })}
              </div>
            </div>            
          </section>   
                 
          <Footer />             
        </>
    );
}