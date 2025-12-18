"use client";

import Link from "next/link";
import React, { useState } from "react";
import texture from "../../../public/assets/textures/texture.jpg";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState(""); // honeypot
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // honeypot kontrola
    if (answer) {
      setError("Bot detekován.");
      return;
    }

    if (!email.includes("@")) {
      setError("Zadejte platný email.");
      return;
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess("Email úspěšně odeslán!");
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.error || "Něco se nepodařilo, zkuste to znovu.");
      }
    } catch {
      setError("Chyba připojení, zkuste to znovu.");
    }
  };

  return (
    <div
      className="relative w-full bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
      }}
    >
      <div className="w-full px-6 md:px-10 mx-auto flex flex-col items-center text-white pb-20 pt-20 sm:pt-20 md:pt-24 overflow-hidden z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat text-[36px] sm:text-[44px] font-semibold mb-2">
            Zaregistrujte se
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-5">
            Přihlášení k odběru novinek
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto flex flex-col justify-center items-center space-y-4"
            noValidate
          >
            <input
              type="email"
              aria-label="Zadejte svůj email"
              placeholder="Zadejte svůj e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full max-w-[450px] px-4 py-3 rounded-md border border-gray-300 text-gray-900 focus:ring-1 focus:ring-blue-400 transition"
            />

            {/* Honeypot: Neviditelný select */}
            <select
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="hidden"
              tabIndex={-1}
              aria-hidden="true"
            >
              <option value="">Jak se máte?</option>
              <option value="dobře">Dobře</option>
              <option value="fajn">Fajn</option>
              <option value="super">Super</option>
              <option value="mohlo by to být lepší">Mohlo by to být lepší</option>
            </select>

            <p className="text-sm md:text-base text-gray-300 text-center mb-2 leading-relaxed">
              Přečetl(a) jsem si a rozumím&nbsp;
              <span className="underline hover:text-blue-500 font-semibold cursor-pointer">
                <Link href="/osobni-udaje" target="_blank" passHref>
                  zásadám soukromí a používání cookies
                </Link>
              </span>
              , a souhlasím se zpracováním svých údajů a používáním cookies v souladu s nimi.
            </p>

            {error && (
              <p
                className="text-red-500 text-sm"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </p>
            )}
            {success && (
              <p
                className="text-green-500 text-sm"
                role="status"
                aria-live="polite"
              >
                {success}
              </p>
            )}

            <div className="flex w-full justify-center items-center">
              <button
                type="submit"
                className="flex justify-center items-center w-full max-w-[300px] py-3 bg-rose-600 hover:bg-rose-700 hover:scale-105 text-white font-semibold rounded-xl transition-transform duration-300 ease-in-out"
              >
                Odebírat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}