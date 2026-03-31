import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: "#0a0b16", 
        navy2: "#121428",
        cyan: "#00F2FF",
        violetId: "#7B61FF",
        primary: { DEFAULT: "#00F2FF", foreground: "#0a0b16" },
        secondary: { DEFAULT: "#7B61FF", foreground: "#ffffff" },
        border: "hsl(var(--border))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "24px",
        md: "20px",
        sm: "16px"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space)", "sans-serif"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)", transform: "scale(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.5)", transform: "scale(1.05)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-slow": "orbit 40s linear infinite",
        "orbit-fast": "orbit 15s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        pulseGlow: "pulseGlow 2s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
