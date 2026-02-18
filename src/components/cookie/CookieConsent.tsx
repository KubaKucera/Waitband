"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { loadGoogleAnalytics, disableGoogleAnalytics } from "@/lib/analytics";

type ConsentSettings = {
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Listener pro tlačítko v patičce
  useEffect(() => {
    const openModal = () => setShowModal(true);

    window.addEventListener("open-cookie-settings", openModal);

    return () => {
      window.removeEventListener("open-cookie-settings", openModal);
    };
  }, []);

  // Načtení cookie při startu
  useEffect(() => {
    const consent = Cookies.get("cookieConsent");

    if (!consent) {
      setShowBanner(true);
      return;
    }

    try {
      const parsed: ConsentSettings = JSON.parse(consent);
      setAnalytics(!!parsed.analytics);
      setMarketing(!!parsed.marketing);

      // Aktivace GA, pokud uživatel souhlasil
      if (parsed.analytics) {
        loadGoogleAnalytics();
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (settings: ConsentSettings) => {
    Cookies.set("cookieConsent", JSON.stringify(settings), { expires: 365 });

    setAnalytics(settings.analytics);
    setMarketing(settings.marketing);

    setShowBanner(false);
    setShowModal(false);

    if (settings.analytics) {
      loadGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
  };

  const handleAcceptAll = () =>
    saveConsent({ analytics: true, marketing: true });

  const handleDeclineAll = () =>
    saveConsent({ analytics: false, marketing: false });

  const handleSaveSettings = () =>
    saveConsent({ analytics, marketing });

  return (
    <>
      {/* BANNER */}
      {showBanner && !showModal && (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-6 z-[9999] shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>Tento web používá cookies 🍪</p>
            <div className="flex gap-3">
              <button
                onClick={handleDeclineAll}
                className="px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-600/20 transition"
              >
                Odmítnout vše
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 rounded-lg border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
              >
                Nastavení
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] xl:scale-115 monitor:scale-125 px-6">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8">
            <h2 className="text-xl font-semibold mb-4">Nastavení cookies</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Nezbytné cookies</span>
                <span className="text-gray-500">Vždy povoleno</span>
              </div>

              <label className="flex justify-between items-center">
                <span>Analytické cookies</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={() => setAnalytics(!analytics)}
                />
              </label>

              <label className="flex justify-between items-center">
                <span>Marketingové cookies</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={() => setMarketing(!marketing)}
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleDeclineAll}
                className="w-full sm:w-1/3 py-2 rounded-xl border border-red-500 text-red-600 hover:bg-red-50 transition"
              >
                Odmítnout vše
              </button>
              <button
                onClick={handleSaveSettings}
                className="w-full sm:w-1/3 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Uložit výběr
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-1/3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}