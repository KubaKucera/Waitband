import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        nav: ['"Poppins"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],              
      },
      dropShadow: {
        'custom': '23px 3px 6px rgba(0, 0, 0, 0.33)',        
      },
      screens: {
        monitor: '1920px',
        xs: '320px',
        'custom-md-lg': { min: '768px', max: '1023px' },
      },
      scale: {
        '115': '1.15',
      },
      rotate: {
        '15': '15deg',
        '-15': '-15deg',
        '25': '25deg',
        '-25': '-25deg',
        '60': '60deg',
        '-60': '-60deg',
        '135': '135deg',
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
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
export default config;
