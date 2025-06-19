'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";
import texture from "../../../public/assets/textures/texture.jpg";
import rightArrow from "../../../public/assets/images/graffiti/arrowRight.png";
import leftArrow from "../../../public/assets/images/graffiti/arrowLeft.png";
import { motion } from "framer-motion";
import HeadingWithLine from "@/components/headingWithLine/HeadingWithLine";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

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
    document.title = "Kontakt - Wait";
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
      <CustomCookieConsent />
      <Navbar initialActiveLink="kontakt" />
      <ScrollToTopButton />
      <HeadingWithLine
        height={600}
        offsetTop="110px"
        position="left"
        delay={0.4}
        duration={0.6}
        ease="easeOut"    
        label="Kontakt"
      /> 


      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat pb-5"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7), rgba(20, 20, 20, 0.8)), url(${texture.src})`,
        }}
      > 
        <div className="flex justify-center items-center py-24 pb-10 px-8 bg-fixed bg-cover bg-center bg-no-repeat h-auto">
          {/*<Image src={rightArrow} alt="Arrow Right" className="hidden xl:block absolute left-[-150px] top-[160px] rotate-15 opacity-50 w-[265px] monitor:w-[330px]" />
          <Image src={leftArrow} alt="Arrow Left" className="hidden xl:block absolute right-[-150px] top-[425px] opacity-50 w-[265px] monitor:w-[330px]" /> */}

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-4xl p-8 bg-white/90 backdrop-blur-md border border-gray-300 rounded-xl shadow-lg"
          >
            <h1 className="text-3xl font-bold text-gray-800 uppercase text-center mb-6">Kontakt</h1>
            <p className="text-lg text-gray-700 text-center mb-4">V případě zájmu nás kontaktujte pomocí vyplnění a odeslání formuláře.</p>
            <p className="text-sm text-center mb-6">
              <Link href="/osobni-udaje" target="_blank" className="text-blue-600 hover:underline font-semibold">
                Zásady ochrany osobních údajů
              </Link>
            </p>

            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Jméno *</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required />
                  {formErrors.name && <p className="text-sm text-red-600">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                  {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Zpráva *</label>
                <textarea className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500" rows={5} value={messageInput} onChange={(e) => setMessageInput(e.target.value)} required />
                {formErrors.message && <p className="text-sm text-red-600">{formErrors.message}</p>}
              </div>

              <div>
                <ReCAPTCHA sitekey="6LenF4wqAAAAAPPCUeBknjgKqRFoFa5S6oFcLTEJ" ref={recaptchaRef} onChange={(value) => setRecaptchaValue(value)} />
                {formErrors.recaptcha && <p className="text-sm text-red-600">{formErrors.recaptcha}</p>}
              </div>

              <div className="flex flex-col space-y-2 text-sm text-gray-700">
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Moje zpráva se nevztahuje na výše uvedené</label>
                <label className="flex items-center"><input type="checkbox" className="mr-2" /> Souhlasím se zpracováním osobních údajů</label>
              </div>

              <button type="submit" disabled={loading} className="mt-4 w-full md:w-48 mx-auto bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105">
                {loading ? "Odesílání..." : "Odeslat"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>     

      <Footer />
    </>
  );
}