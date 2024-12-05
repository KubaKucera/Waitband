import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],              
      },
      dropShadow: {
        'custom': '23px 3px 6px rgba(0, 0, 0, 0.33)',        
      },
      screens: {
        monitor: '1920px',
        'custom-md-lg': { min: '768px', max: '1023px' },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amberYellow: "#FFBF00",
        azure: "#89c4ff",
        lightGray: "#D3D3D3",
        neonPink: "#FF2478",
        coralRed: "#dd3333",
        textGray: "#666666",
        buttonBlue: "#2a52be",
        buttonBlue2: "#0E3386",
        bottomFadePurple: "#7E2059",
        cyan: "#8AFFFF",
        purpleNew: "#330026",
        youtubeRed: "#FF0000",
        twitterBlue: "#1DA1F2",
        facebookBlue: "#4267B2",
        soundcloudOrange: "#ff5500",
        spotifyGreen: "#1DB954",
        appleMusicSalmon: "#fc3c44",
        instagramPink: "#C13584",
        photosBlue: "#00CCFF",      
        musicPink: "#9900FF", 
        magenta: "#ff00ff",
        brewersBlue: "#00040efc",
      },
    },
  },
  plugins: [],
};
export default config;
