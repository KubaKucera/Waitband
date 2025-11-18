'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import texture from "../../../public/assets/textures/texture.jpg";
import { motion } from "framer-motion";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";

export default function ContactPage() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '', recaptcha: '' });
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    document.title = "Kontakt | Wait";
  }, []);

  const validateForm = () => {
    const errors = { name: '', email: '', message: '', recaptcha: '' };
    let isValid = true;

    if (!nameInput) { errors.name = 'Jméno je povinné.'; isValid = false; }
    if (!emailInput) {
      errors.email = 'Email je povinný.'; isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
      errors.email = 'Zadejte platný email.'; isValid = false;
    }
    if (!messageInput) { errors.message = 'Zpráva je povinná.'; isValid = false; }
    if (!recaptchaValue) { errors.recaptcha = 'Prosím potvrďte, že nejste robot.'; isValid = false; }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput, email: emailInput, message: messageInput, recaptchaValue }),
      });
      if (!response.ok) throw new Error('Odeslání selhalo.');
      alert("Vaše zpráva byla odeslána.");
      setNameInput(''); setEmailInput(''); setMessageInput('');
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
      formRef.current?.reset();
    } catch (error) {
      alert("Došlo k chybě při odesílání zprávy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>    
      <SideAccentLine targetId="contact-section"/>
      
      <div
        className="relative w-full h-auto bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      > 
        <div id="contact-section" className="h-auto flex justify-center items-center pt-[130px] px-8 bg-fixed bg-cover bg-center bg-no-repeat">
          {/*<Image src={rightArrow} alt="Arrow Right" className="hidden xl:block absolute left-[-150px] top-[160px] rotate-15 opacity-50 w-[265px] monitor:w-[330px]" />
          <Image src={leftArrow} alt="Arrow Left" className="hidden xl:block absolute right-[-150px] top-[425px] opacity-50 w-[265px] monitor:w-[330px]" /> */}

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="w-full max-w-4xl p-8 backdrop-blur-md border-2 border-gray-300 text-white rounded-xl shadow-lg"
          >
            <h1 className="text-3xl font-bold text-white uppercase text-center mb-6">Kontakt</h1>
            <p className="text-lg text-gray-400 text-center mb-4">V případě zájmu nás kontaktujte pomocí vyplnění a odeslání formuláře.</p>
            <p className="text-sm text-center mb-6">
              <Link href="/osobni-udaje" target="_blank" className="text-blue-400 hover:underline font-semibold">
                Zásady ochrany soukromí
              </Link>
            </p>

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Jméno *</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-2 border-gray-500/90 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Vaše jméno"
                    required
                  />
                  {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border-2 border-gray-500/90 bg-transparent px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Váš email"
                    required
                  />
                  {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Zpráva *</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border-2 border-gray-500/90 bg-transparent px-4 py-2 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Vaše zpráva"
                  required
                />
                {formErrors.message && <p className="text-sm text-red-500 mt-1">{formErrors.message}</p>}
              </div>

              <div>
                <ReCAPTCHA
                  sitekey="6LenF4wqAAAAAPPCUeBknjgKqRFoFa5S6oFcLTEJ"
                  ref={recaptchaRef}
                  onChange={(value) => setRecaptchaValue(value)}
                />
                {formErrors.recaptcha && <p className="text-sm text-red-500 mt-1">{formErrors.recaptcha}</p>}
              </div>

              <div className="flex flex-col space-y-2 text-sm text-gray-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-500/90 bg-transparent focus:ring-blue-400" />
                  Beru na vědomí, že tento formulář slouží k seriózním a relevantním dotazům.
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-500/90 bg-transparent focus:ring-blue-400" />
                  Souhlasím se zpracováním osobních údajů
                </label>
              </div>

              {/* Kontaktní osoby */}
              <div className="space-y-2 text-sm text-gray-300 pt-4">
                <p><span className="font-bold">Technické dotazy:</span> Ivan Kučera, tel. 724 644 082, e-mail: <Link href="mailto:iv.kucera@email.cz" className="text-blue-400 hover:underline">iv.kucera@email.cz</Link></p>
                <p><span className="font-bold">Rezervace:</span> Pavel Herynk, tel. 737 272 833, e-mail: <Link href="mailto:p.herynk@me.com" className="text-blue-400 hover:underline">p.herynk@me.com</Link></p>
                <p><span className="font-bold">Zvuk:</span> František Novák, e-mail: <Link href="mailto:novak.frantisek@atlas.cz" className="text-blue-400 hover:underline">novak.frantisek@atlas.cz</Link></p>
              </div>

              <button type="submit" disabled={loading} className="mt-4 w-full md:w-48 mx-auto bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-out">
                {loading ? "Odesílání..." : "Odeslat"}
              </button>
            </form>
          </motion.div>          
        </div>
      </div>
    </>
  );
}