'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/components/footer/Footer";
import CustomCookieConsent from "@/components/cookie/CookieConsent";

export default function ContactPage(){
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: '',
    });
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        document.title = "Kontakt - Wait";
    }, []);

    const validateForm = () => {
        const errors = { name: '', email: '', message: '', recaptcha: '' };
        let isValid = true;

        if (!nameInput) {
            errors.name = 'Jméno je povinné.';
            isValid = false;
        }

        if (!emailInput) {
            errors.email = 'Email je povinný.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
            errors.email = 'Zadejte platný email.';
            isValid = false;
        }

        if (!messageInput) {
            errors.message = 'Zpráva je povinná.';
            isValid = false;
        }

        if (!recaptchaValue) {
            errors.recaptcha = 'Prosím potvrďte, že nejste robot.';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };
  
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
  
        if (!validateForm()) return;
  
        setLoading(true);
        const formData = {
            name: nameInput,
            email: emailInput,
            message: messageInput,
            recaptchaValue: recaptchaValue,
        };
  
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Chyba: ${errorData.message || "Nepodařilo se odeslat zprávu."}`);
                return;
            }

            alert("Vaše zpráva byla odeslána.");
            setNameInput('');
            setEmailInput('');
            setMessageInput('');
            recaptchaRef.current?.reset();
            setRecaptchaValue(null);
            formRef.current?.reset();
        } catch (error) {
            alert("Došlo k chybě při odesílání zprávy.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };  
    
    return(
        <>
            <CustomCookieConsent />
            <Navbar initialActiveLink="kontakt"/>            
            
            <div className="bg-gray-300 min-h-screen flex justify-center items-center p-16 lg:p-24 pt-24">
                <div className="w-[1500px] pt-8 pb-6 px-8 lg:px-16 text-center lg:ml-28 lg:mr-28 monitor:ml-52 monitor:mr-52 mb-2 border-2 rounded-xl bg-white border-gray-900 shadow-lg shadow-gray-400/50">
                    <h1 className="text-3xl font-semibold font-montserrat mb-7 text-gray-900 uppercase">Kontakt</h1>
                    
                    <p className="text-lg leading-relaxed max-w-6xl mx-auto text-gray-600 text-center mb-5 px-5">
                        Milí přátelé... chceme vám moc poděkovat za vaši podporu a přízeň. Velmi si toho vážíme! Zároveň bychom vás chtěli požádat o pochopení – není v našich možnostech vyhovět všem vašim přáním, a tak bychom vás chtěli informovat o pár věcech, které bohužel nejsme schopni zajistit:
                    </p>
                    
                    <ul className="list-disc list-inside text-lg max-w-6xl mx-auto text-left mb-5 px-5 font-normal text-gray-600">
                        <li><span className="font-bold text-gray-700">Video vzkazy a přání</span> pro vaše blízké k narozeninám nebo jiným příležitostem.</li>
                        <li><span className="font-bold text-gray-700">Podepsané fotografie a plakáty</span> – autogramiády však pořádáme na každém turné ve všech městech, kde máte možnost si podpis odnést.</li>
                        <li><span className="font-bold text-gray-700">Hraní na soukromých akcích</span>, jako jsou svatby, narozeninové oslavy, plesy nebo podobné události.</li>
                        <li><span className="font-bold text-gray-700">Prostor na našich koncertech</span> pro osobní momenty, jako je žádost o ruku apod.</li>
                    </ul>

                    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600 text-center mb-5 px-5">
                        Věříme, že to chápete. Abychom mohli dál připravovat koncerty a nové projekty, musíme se soustředit na to, co děláme nejlépe – naší hudbu.
                    </p>

                    <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center px-5 font-bold text-gray-700">
                        Děkujeme vám za pochopení a podporu a už teď se těšíme na další společná setkání! 
                    </p>

                    <Link href="/osobni-udaje" target="_blank">
                        <p className="text-lg max-w-4xl mx-auto text-center text-coralRed hover:underline cursor-pointer mb-7 font-bold brightness-110">
                            Prohlášení o zásadách ochrany osobních údajů.
                        </p>
                    </Link>                 

                    <form className="max-w-6xl mx-auto flex flex-col mb-10" onSubmit={handleFormSubmit}>
                        <div className="flex flex-col lg:flex-row mb-4">
                            <div className="lg:mr-6 w-full mb-4 lg:mb-0">
                                <label className="block text-left text-lg font-bold text-gray-700 mb-1">
                                    Jméno <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="border border-textGray rounded-md h-10 w-full px-2 py-2"
                                    placeholder="Zadejte své jméno."
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    required
                                />
                                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                            </div>
                            <div className="w-full">
                                <label className="block text-left text-lg text-gray-700 font-bold mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="border border-textGray rounded-md h-10 w-full px-2 py-2"
                                    placeholder="Zadejte svůj email."
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    required
                                />
                                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                            </div>
                        </div>
                        <div className="mb-4 text-left">
                            <label className="block text-lg font-bold text-gray-700 mb-1">
                                Zpráva <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                className="border border-textGray rounded-md h-40 w-full px-2"
                                placeholder="Napište svou zprávu."
                                rows={6}
                                style={{height: '132px'}}
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                required
                            />
                            {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                        </div>

                        <div className="mb-4">
                            <ReCAPTCHA
                                sitekey="6LenF4wqAAAAAPPCUeBknjgKqRFoFa5S6oFcLTEJ"
                                ref={recaptchaRef}
                                onChange={(value) => setRecaptchaValue(value)}
                            />
                            {formErrors.recaptcha && <p className="text-red-500 text-sm">{formErrors.recaptcha}</p>}
                        </div>

                        <p className="text-left font-bold text-lg text-gray-700 mb-2">Povinné položky, nutno vyplnit. <span className="text-red-500">*</span></p>

                        <div className="mb-1 text-left">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2"/>
                                Moje zpráva se nevztahuje na výše uvedené
                            </label>
                        </div>
                        <div className="mb-1 text-left">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2"/>
                                Souhlasím se zpracováním osobních údajů
                            </label>
                        </div>
                        <button type="submit" className="mt-6 bg-buttonBlue text-white font-semibold w-48 py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out uppercase" disabled={loading}>
                            {loading ? 'Odesílání...' : 'Odeslat'}
                        </button>
                    </form>                
                </div>
            </div>

            <Footer />
        </>
    );
}