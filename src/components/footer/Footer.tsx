"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaApple,
  FaSpotify,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

import logo from "../../../public/assets/images/navbar/logo.jpg";

export default function FooterWithNewsletter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialLinks = () => (
    <div className="flex justify-center flex-wrap lg:flex-nowrap gap-4 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto">
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
            aspect-square flex items-center justify-center
            rounded-full
            ${bg}
            text-white text-[18px] sm:text-[20px] md:text-[26px] p-3
            shadow-md
            transition-all duration-300 ease-out
            hover:brightness-90
            hover:-translate-y-1
            sm:hover:scale-105
            will-change-transform transform-gpu
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/20
            max-w-[60px] max-h-[60px]
            sm:max-w-[70px] sm:max-h-[70px]
            md:max-w-[80px] md:max-h-[80px]
          `}
        >
          {icon}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="bg-white text-gray-900 relative z-40 select-none px-6 py-16 md:px-16 overflow-hidden">
      <div className="max-w-6xl monitor:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 items-start text-center md:text-left">
        {/* LOGO */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <Image src={logo} alt="WAIT logo" width={120} height={50} className="mb-2" />
          <p className="text-base sm:text-base md:text-base lg:text-lg font-medium tracking-wide text-cnxBlack monitor:text-black">
            WAIT – česká kapela s duší a energií. Sleduj nás online!
          </p>
        </div>

        {/* SOCIÁLNÍ SÍTĚ */}
        <div className="flex flex-col items-center">
          <span className="text-gray-900 font-semibold text-[20px] mb-4 tracking-wide">
            Sociální sítě
          </span>
          {renderSocialLinks()}
        </div>

        {/* POVINNÉ ÚDAJE */}
        <div className="flex flex-col items-center md:items-end text-base text-cnxBlack">
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-gray-900 font-semibold text-[20px] tracking-wide mb-1">
              Povinné údaje
            </span>
            <Link href="/osobni-udaje" target="_blank" className="footer-link text-nowrap">
              Soukromí & Používání Cookies
            </Link>
            <Link href="/podminky-a-pravidla" target="_blank" className="footer-link">
              Podmínky a pravidla
            </Link>
          </div>

          {/* SEKCE 2: Pro pořadatele */}
          <div className="flex flex-col items-center md:items-end mt-10 sm:mt-12 md:mt-6 gap-1">
            <span className="text-gray-900 font-semibold text-[20px] tracking-wide mb-1">
              Pro pořadatele
            </span>
            <Link href="/assets/files/waitRider.pdf" target="_blank" className="footer-link">
              Technický rider
            </Link>
          </div>

          {/* SEKCE 3: Copyright */}
          <p className="mt-10 sm:mt-12 md:mt-6 text-center md:text-right">
            &copy; 2026 WAIT – Všechna práva vyhrazena.
          </p>
        </div>

        {/* SCROLL TO TOP (mobile only) */}
        <div className="flex justify-center sm:hidden">
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