"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaApple,
  FaSpotify,
} from "react-icons/fa";

import logo from "../../../public/assets/images/navbar/logo.jpg";
import { FaArrowUp } from "react-icons/fa6";

export default function FooterWithNewsletter() { 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialLinks = () => (
    <div className="flex justify-center flex-wrap lg:flex-nowrap gap-3.5 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto">
      {[
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/wait_band_official/",
          label: "Instagram",
          bg: "bg-instagramPink",
        },
        {
          icon: <FaFacebookF />,
          href: "https://www.facebook.com/waitbandcz/?locale=cs_CZ",
          label: "Facebook",
          bg: "bg-facebookBlue",
        },
        {
          icon: <FaYoutube />,
          href: "https://www.youtube.com/@waitbandofficial",
          label: "YouTube",
          bg: "bg-youtubeRed",
        },
        {
          icon: <FaSpotify />,
          href: "https://open.spotify.com/artist/37DvIv1TkBrTOz16Kk75YI",
          label: "Spotify",
          bg: "bg-spotifyGreen",
        },
        {
          icon: <FaApple />,
          href: "https://music.apple.com/gh/artist/wait/1479576915",
          label: "Apple Music",
          bg: "bg-appleMusicSalmon",
        },
        {
          icon: <FaSoundcloud />,
          href: "https://soundcloud.com/wait-band-official",
          label: "SoundCloud",
          bg: "bg-soundcloudOrange",
        },
      ].map(({ icon, href, label, bg }, i) => (
        <Link
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`
            ${bg}
            aspect-square flex items-center justify-center
            text-white text-[20px] md:text-[26px]
            p-3
            rounded-xl
            shadow-md            
            hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-out will-change-transform transform-gpu
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20
            max-w-[60px] max-h-[60px] sm:max-w-[70px] sm:max-h-[70px] md:max-w-[80px] md:max-h-[80px]
          `}
        >
          {icon}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="bg-white text-gray-800 relative z-40 select-none px-6 py-12 md:px-16 overflow-hidden">
      {/* Footer content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        {/* Logo & text */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Image src={logo} alt="WAIT logo" width={120} height={50} />
          <p className="text-sm text-gray-600">
            WAIT – česká kapela s duší a energií. Sleduj nás online!
          </p>
        </div>

        {/* Sociální ikony – centrované */}
        <div className="h-full flex items-center justify-center lg:translate-y-[-20px]">
          {renderSocialLinks()}
        </div>

        {/* Odkazy & copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-sm text-gray-600">
          <Link
            href="/osobni-udaje"
            target="_blank"
            className="footer-link"
          >
            Soukromí & Používání Cookies
          </Link>
          <Link
            href="/podminky-a-pravidla"
            target="_blank"
            className="footer-link"
          >
            Podmínky a pravidla
          </Link>
          <Link
            href="/assets/files/waitRider.pdf"
            target="_blank"
            className="footer-link"
          >
            Technický rider
          </Link>
          <p className="mt-4 text-center md:text-right">
            &copy; 2025 WAIT – Všechna práva vyhrazena.
          </p>
        </div>

        {/* Tlačítko nahoru - viditelné jen na sm a menších */}
        <div className="mt-0 flex justify-center sm:hidden">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 bg-neonPink text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            Nahoru <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}