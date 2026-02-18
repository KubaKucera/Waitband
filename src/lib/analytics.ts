export const GA_ID = "G-XXXXXXXXXX";

export function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if ((window as any).gaLoaded) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(inlineScript);

  (window as any).gaLoaded = true;
}

export function disableGoogleAnalytics() {
  (window as any)['ga-disable-' + GA_ID] = true;
}
