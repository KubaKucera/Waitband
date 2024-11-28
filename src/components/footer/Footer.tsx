"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/navbar/logo.jpg"
import { FaFacebookF, FaInstagram, FaSoundcloud, FaYoutube, FaApple, FaSpotify, FaTwitter } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-white w-full min-h-[220px] pt-9 pb-9 flex flex-col justify-center items-center relative border-gray-600 border-t-[1px]">
                 
            {/* Text na střed - Copyright */}
            <div className="text-center">
                <p className="text-xl text-gray-600">&copy; 2024 WAIT - All rights reserved.</p>
            </div>           

            {/* Odkazy a kontaktní informace */}
            <div className="mt-2 text-center">
                <div className="mb-0">
                    <Link href="/osobni-udaje" target="_blank">
                        <p className="text-gray-600 opacity-90 hover:text-coralRed hover:opacity-100 hover:underline cursor-pointer brightness-110">Zásady ochrany osobních údajů</p>
                    </Link>
                </div>
                <div className="mb-3">
                    <Link href="/podminky-a-pravidla" target="_blank">
                        <p className="text-gray-600 opacity-90 hover:text-coralRed hover:opacity-100  hover:underline cursor-pointer brightness-110">Podmínky a pravidla</p>
                    </Link>
                </div>
                <div className="mb-0">
                    <p className="text-gray-600 opacity-90"><span className="font-bold">Technické dotazy:</span> Ivan Kučera, tel. 724 644 082, e-mail: <Link href="mailto:iv.kucera@email.cz" className="text-blue-500 hover:underline">iv.kucera@email.cz</Link></p>
                </div>
                <div className="mb-0">
                    <p className="text-gray-600 opacity-90"><span className="font-bold">Rezervace:</span> Pavel Herynk, tel. 737 272 833, e-mail: <Link href="mailto:p.herynk@me.com" className="text-blue-500 hover:underline">p.herynk@me.com</Link></p>
                </div>
                <div className="mb-0">
                    <p className="text-gray-600 opacity-90"><span className="font-bold">Zvuk:</span> František Novák, e-mail: <span className="block sm:inline"><Link href="mailto:novak.frantisek@atlas.cz" className="text-blue-500 hover:underline">novak.frantisek@atlas.cz</Link></span></p>
                </div>
            </div>

            <div className='flex items-center mt-5 text-white space-x-[9px]'>
                {renderSocialLinks()}
            </div>

            <div className="absolute right-5 bottom-[-25px] transform -translate-y-1/2 hidden md:block">
                <Image src={logo} alt="Logo" width={90} height={90} />
            </div>

            {/* Obrázek přesunutý pod texty na mobilních obrazovkách */}
            <div className="mt-7 mb-0 md:hidden flex justify-center w-full">
                <div className="flex justify-center items-center">
                    <Image src={logo} alt="Logo" width={90} height={90} />
                </div>
            </div>            
        </div>
    );
}

const renderSocialLinks = () => {
    return (
        <>    
            <Link href='https://x.com/i/flow/login?redirect_after_login=%2Fwaitband' target='_blank' rel="noopener noreferrer">
                <FaTwitter className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-twitterBlue rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://www.instagram.com/wait_band_official/" target='_blank' rel="noopener noreferrer">
                <FaInstagram className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-instagramPink rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://www.facebook.com/waitbandcz/?locale=cs_CZ" target='_blank' rel="noopener noreferrer">
                <FaFacebookF className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-facebookBlue rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://www.youtube.com/@waitbandofficial6520" target='_blank' rel="noopener noreferrer">
                <FaYoutube className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-youtubeRed rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://soundcloud.com/wait-band-official" target='_blank' rel="noopener noreferrer">
                <FaSoundcloud className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-soundcloudOrange rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://open.spotify.com/artist/37DvIv1TkBrTOz16Kk75YI" target='_blank' rel="noopener noreferrer">
                <FaSpotify className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-spotifyGreen rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
            <Link href="https://music.apple.com/gh/artist/wait/1479576915" target='_blank' rel="noopener noreferrer">
                <FaApple className='text-[35px] scale-95 opacity-95 hover:scale-110 hover-opacity-100 transition-transform duration-300 bg-appleMusicSalmon rounded-md pl-2 pb-2 pr-2 pt-2' />
            </Link>
        </> 
    );  
};