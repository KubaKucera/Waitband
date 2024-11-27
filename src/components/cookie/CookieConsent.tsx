"use client";

import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function CustomCookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  
  /*
  useEffect(() => {
    Cookies.remove("myWebsiteCookieConsent");  // Smaže cookie při načtení stránky
    setShowConsent(true);
  }, []);*/

  useEffect(() => {
    const consent = Cookies.get("myWebsiteCookieConsent");
    if (!consent) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, []);

  const handleDecline = () => {
    Cookies.remove("myWebsiteCookieConsent");
    setShowConsent(false);
  };

  const handleAccept = () => {
    Cookies.set("myWebsiteCookieConsent", "true", { expires: 365 });
    setShowConsent(false);
  };

  return (
    <>
      <h1>Welcome to my website</h1>
      
      {showConsent && (
        <CookieConsent          
          cookieName="myWebsiteCookieConsent"
          style={{ 
            background: "rgba(0, 0, 0, 0.90)", 
            borderTop: "1px solid white", 
            color: "#fff", 
            textAlign: "center",
          }}    
          buttonStyle={{
            display: "none",
          }}
          declineButtonStyle={{
            display: "none",
          }}      
          //expires={0}  // Expirace na 0 znamená, že cookie nebude trvalá (365)
          enableDeclineButton                   
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-2 max-w-4xl mx-auto text-sm">
            <p className="text-white text-center md:text-center">
              Tento web používá cookies, aby vám zajistil nejlepší zážitek 🍪.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleDecline}
                style={{ 
                  background: "transparent", 
                  border: "2px solid #ff0000", 
                  color: "#fff", 
                  fontSize: "13px", 
                  height: "43px",
                  width: "120px",
                  borderRadius: "4px",
                }}
              >
                Nesouhlasím
              </button>
              {/* Custom Accept Button */}
              <button
                onClick={handleAccept}
                style={{ 
                  background: "transparent", 
                  border: "2px solid #0096FF", 
                  color: "#FFFFFF", 
                  fontSize: "13px",
                  height: "43px",
                  width: "120px",
                  borderRadius: "4px",
                  marginRight: "22px",
                }}
              >
                Souhlasím
              </button>             
            </div>            
          </div>
        </CookieConsent>
      )}
    </>
  );
}
