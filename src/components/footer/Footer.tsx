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

export default function FooterWithNewsletter() {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Zadejte platný email.");
      return;
    }

    if (!answer) {
      setError("Vyberte, jak se máte.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answer }),
      });

      if (res.ok) {
        setSuccess("Email úspěšně odeslán!");
        setEmail("");
        setAnswer("");
      } else {
        const data = await res.json();
        setError(data.error || "Něco se nepodařilo, zkuste to znovu.");
      }
    } catch {
      setError("Chyba připojení, zkuste to znovu.");
    }
  };

  const renderSocialLinks = () => (
    <div className="flex justify-center flex-wrap lg:flex-nowrap gap-4 lg:gap-6 w-full max-w-2xl mx-auto">
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
          href: "https://www.youtube.com/@waitbandofficial6520",
          label: "YouTube",
          bg: "bg-youtubeRed",
        },
        {
          icon: <FaSoundcloud />,
          href: "https://soundcloud.com/wait-band-official",
          label: "SoundCloud",
          bg: "bg-soundcloudOrange",
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
      ].map(({ icon, href, label, bg }, i) => (
        <Link
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${bg} text-white text-[22px] md:text-[26px] p-3 rounded-full hover:scale-110 transition shadow-md`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );

  return (
    <footer className="bg-white text-gray-800 relative z-40 select-none px-6 py-12 md:px-16">
      {/* Newsletter */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-montserrat text-4xl md:text-5xl font-normal mb-2">
          Pro naše fanoušky
        </h2>
        <p className="text-gray-700 text-lg mb-2">
          Přihlášení k odběru novinek
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-1">
          Přihlášením se k odběru novinek dáváte souhlas
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          se zpracováním{" "}
          <Link
            href="/osobni-udaje"
            target="_blank"
            className="text-blue-600 hover:underline font-semibold"
          >
            osobních údajů.
          </Link>
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto flex flex-col space-y-4"
          noValidate
        >
          <input
            type="email"
            placeholder="Zadejte svůj email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />

          <select
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          >
            <option value="">Jak se máte?</option>
            <option value="dobře">Dobře</option>
            <option value="fajn">Fajn</option>
            <option value="super">Super</option>
            <option value="mohlo by to být lepší">Mohlo by to být lepší</option>
          </select>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-transform duration-300 hover:scale-105 ease-in-out"
          >
            Odeslat
          </button>
        </form>
      </div>

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
        <div className="h-full flex items-center justify-center lg:mt-[-35px]">
          {renderSocialLinks()}
        </div>

        {/* Odkazy & copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-sm text-gray-600">
          <Link href="/osobni-udaje" target="_blank" className="hover:text-blue-600 hover:underline">
            Zásady ochrany osobních údajů
          </Link>
          <Link href="/podminky-a-pravidla" target="_blank" className="hover:text-blue-600 hover:underline">
            Podmínky a pravidla
          </Link>
          <p className="mt-4">&copy; 2024 WAIT – Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}