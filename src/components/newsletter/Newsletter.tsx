"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import heart from "../../../public/assets/images/graffiti/heart.png";

export default function Newsletter(){
    const[email, setEmail] = useState("");
    const[answer, setAnswer] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.includes("@")) {
          setError("Zadejte platný email.");
        }

        if (!answer) {
            setError("Vyberte, jak se máte.")
            return;
        }

        setError("");
        setSuccess("");

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, answer }),
            });

            if (res.ok){
                setSuccess("Email úspěšně odeslán!");
                setEmail("");
                setAnswer("");                
            }else {
                const data = await res.json();
                setError(data.error || "Něco se nepodařilo, zkuste to znovu.");
            }
        } catch (error) {        
            setError("Chyba připojení, zkuste to znovu.");
        }
    };

    return (
      <div className="relative bg-gray-900 bg-center bg-fixed bg-cover bg-no-repeat pt-8 pb-11 px-10 md:px-10 w-full h-auto mx-auto shadow-md flex flex-col items-center text-white overflow-hidden z-20">
        
        <div className="relative w-full h-auto overflow-hidden z-20">
          <div className="fixed left-[5px] top-[450px] opacity-50 hidden xl:flex pointer-events-none z-20">
            <Image 
              src={heart}
              alt="Emoticon"                
              width={250}                
            />
          </div>
        </div>
        
        {/* Nadpis Newsletter */}
        <div className="flex flex-col items-center space-y-2 text-center mt-4">
          <h2 className="font-montserrat text-[40px] font-normal w-full">Pro naše fanoušky</h2>
          <p className="text-lightGray font-sans text-xl">Přihlášení k odběru novinek</p>
          <p className="text-[14px] md:text-[16px] font-sans text-gray-400 max-w-md">
            Přihlášením se k odběru novinek dáváte souhlas se zpracováním{" "}
            <Link href="/osobni-udaje" target="_blank">
              <span className="text-coralRed font-bold hover:underline cursor-pointer brightness-110">osobních údajů.</span>
            </Link>
          </p>
        </div>
    
        {/* Formulář */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full mt-8 space-y-4 mb-4"
        >
          <input
            type="email"
            placeholder="Zadejte svůj email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-[400px] px-4 py-2 border rounded-md text-black"
          />
    
          <select
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="w-full md:w-[400px] px-4 py-2 border rounded-md text-black cursor-pointer"
          >
            <option value="">Jak se máte?</option>
            <option value="dobře">Dobře</option>
            <option value="fajn">Fajn</option>
            <option value="super">Super</option>
            <option value="mohlo by to být lepší">Mohlo by to být lepší</option>
          </select>
    
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
    
          <button
            type="submit"
            className="bg-buttonBlue hover:bg-blue-700 text-white font-semibold w-full md:w-48 py-2 px-6 rounded-md transition-all duration-300 ease-in-out"
          >
            ODESLAT
          </button>
        </form>
      </div>
    );
    
}