"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/navbar/logo.jpg"

export default function Footer(){
    return(
        <div className="bg-white w-full min-h-[220px] pt-3 pb-3 flex flex-col justify-center items-center relative border-gray-600 border-[1px]">
            
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
                    <p className="text-gray-600 opacity-90"><span className="font-bold">Technické dotazy:</span> Ivan Kučera, tel. 724 644 082, e-mail: iv.kucera@email.cz</p>
                </div>
                <div className="mb-0">
                    <p className="text-gray-600 opacity-90"><span className="font-bold">Booking/Management:</span> Pavel Herynk, tel. 737 272 833, e-mail: p.herynk@me.com</p>
                </div>
            </div>

            <div className="absolute right-5 bottom-[-25px] transform -translate-y-1/2 hidden md:block">
                <Image src={logo} alt="Logo" width={90} height={90} />
            </div>

            {/* Obrázek přesunutý pod texty na mobilních obrazovkách */}
            <div className="mt-5 mb-0 md:hidden flex justify-center w-full">
                <div className="flex justify-center items-center">
                    <Image src={logo} alt="Logo" width={90} height={90} />
                </div>
            </div>
        </div>
    );
}