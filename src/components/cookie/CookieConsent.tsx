"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // nastavení kategorií
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (settings: { analytics: boolean; marketing: boolean }) => {
    Cookies.set("cookieConsent", JSON.stringify(settings), { expires: 365 });
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    saveConsent({ analytics: false, marketing: false });
  };

  const handleSaveSettings = () => {
    saveConsent({ analytics, marketing });
  };

  return (
    <>
      {/* --- Banner dole --- */}
      {showBanner && !showModal && (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 md:p-5 z-[9999] shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              Tento web používá cookies, aby vám zajistil nejlepší zážitek 🍪.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDeclineAll}
                className="px-4 py-2 rounded-lg border border-red-500 text-red-400 hover:bg-red-600/20 transition"
              >
                Odmítnout vše
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 rounded-lg border border-gray-400 text-gray-200 hover:bg-gray-700 transition"
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

      {/* --- Modal s nastavením --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999]">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-3">🍪 Nastavení cookies</h2>
            <p className="text-sm text-gray-600 mb-4">
              Některé cookies jsou nezbytné pro správné fungování webu, jiné
              nám pomáhají zlepšovat služby.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Nezbytné cookies</span>
                <span className="text-xs text-gray-500">Vždy povoleno</span>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={() => setAnalytics(!analytics)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  <span>Analytické cookies</span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={() => setMarketing(!marketing)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  <span>Marketingové cookies</span>
                </label>
              </div>
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