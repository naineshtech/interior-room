/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Indian-Inspired Architecture Colors
        white: "#ffffff",
        cream: "#faf8f3",
        "warm-beige": "#f5f1e8",
        "soft-sand": "#ede7d9",
        "medium-brown": "#8b6f47",
        "dark-brown": "#5d4e37",
        charcoal: "#2c2520",
        terracotta: "#c65d07",
        "deep-gold": "#b8860b",
        sandalwood: "#d2b48c",
        "forest-green": "#228b22",
        "deep-red": "#a0522d",
        
        // Design system colors
        border: "rgba(139, 111, 71, 0.15)",
        input: "#ffffff",
        "input-background": "#f5f1e8",
        ring: "#c65d07",
        background: "#ffffff",
        foreground: "#2c2520",
        primary: {
          DEFAULT: "#2c2520",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f5f1e8",
          foreground: "#2c2520",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#faf8f3",
          foreground: "#8b6f47",
        },
        accent: {
          DEFAULT: "#c65d07",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2c2520",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2c2520",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "16px",
        sm: "10px",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(139, 111, 71, 0.15), 0 1px 2px 0 rgba(139, 111, 71, 0.1)',
        'soft': '0 4px 6px -1px rgba(139, 111, 71, 0.15), 0 2px 4px -1px rgba(139, 111, 71, 0.1)',
        'medium': '0 10px 15px -3px rgba(139, 111, 71, 0.15), 0 4px 6px -2px rgba(139, 111, 71, 0.1)',
        'large': '0 20px 25px -5px rgba(139, 111, 71, 0.15), 0 10px 10px -5px rgba(139, 111, 71, 0.1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
