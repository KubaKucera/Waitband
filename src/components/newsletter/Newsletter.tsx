"use client";

import Link from "next/link";
import { useState } from "react";

export default function Newsletter(){
    const[email, setEmail] = useState("");
    const[answer, setAnswer] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if(!answer){
            setError("Vyberte, jak se máte.")
            return;
        }

        try{
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if(res.ok){
                setSuccess("Email úspěšně odeslán!");
                setEmail("");
                setAnswer("");
                setError("");
            } else{
                setError("Něco se nepodařilo, zkuste to znovu.");
            }
        }catch (error)
        {
            setError("Něco se nepodařilo, zkuste to znovu.");
        }
    };

    return (
        <div className="relative bg-gray-900 py-5 px-5 md:px-10 w-full h-auto mx-auto shadow-md flex flex-col justify-between text-white z-40">
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left z-40">
            {/* Nadpis Newsletter */}
            <div className="flex flex-col items-center h-auto md:items-start mt-[20px] md:mt-[20px]">
              <h2 className="font-montserrat text-[43px] md:text-[43px] font-normal md:ml-[80px]">Newsletter</h2>
              <p className="md:ml-[80px] text-lightGray font-sans text-lg">Přihlášení k odběru novinek</p>
              <p className="text-[14px] md:text-[16px] font-sans text-gray-400 md:ml-[80px] mt-4 mb-4">
                Přihlášením se k odběru novinek dáváte souhlas
                se zpracováním <Link href="/osobni-udaje" target="_blank"><span className="text-coralRed font-bold hover:underline cursor-pointer brightness-110">osobních údajů.</span></Link>
              </p>
            </div>
    
            {/* Inputy napravo */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full md:items-end md:mr-[80px] md:mt-[35px]">
              <input
                type="email"
                placeholder="Zadejte svůj email."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full md:w-[400px] px-4 py-2 mb-[20px] border rounded-md text-black"
              />
    
              <select
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                className="w-full md:w-[400px] px-4 py-2 mb-[20px] border rounded-md text-black cursor-pointer"
              >
                <option value="">Jak se máte?</option>
                <option value="dobře">Dobře</option>
                <option value="fajn">Fajn</option>
                <option value="super">Super</option>
                <option value="mohlo by to být lepší">Mohlo by to být lepší</option>
              </select>
    
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}
    
              <button
                type="submit"
                className="bg-buttonBlue hover:bg-blue-700 text-white font-semibold w-full md:w-48 py-2 px-6 rounded-md mb-[35px] transition-all duration-300 ease-in-out"
              >
                ODESLAT
              </button>
            </form>
          </div>        
        </div>
    );
}