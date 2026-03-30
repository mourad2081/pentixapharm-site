import type { Config } from "tailwindcss";
const config: Config = {
  darkMode:["class"],
  content:["./src/**/*.{ts,tsx}"],
  theme:{extend:{
    colors:{
      background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",
      navy:"#071429",navy2:"#0B1D3A",navy3:"#1E3250",
      emerald:"#00B894",emeraldDark:"#00997A",cyan:"#00CEC9",gold:"#FDCB6E",
      card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"},
      popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},
      primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},
      secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},
      muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},
      accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},
      destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},
      border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",
    },
    borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},
    fontFamily:{sans:["var(--font-inter)","sans-serif"],heading:["var(--font-space)","sans-serif"]},
    keyframes:{
      marquee:{"0%":{transform:"translateX(0)"},"100%":{transform:"translateX(-50%)"}},
      float:{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-14px)"}},
      pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:"0.5"}},
      "gradient-x":{"0%,100%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"100% 50%"}},
      "fade-up":{"0%":{opacity:"0",transform:"translateY(24px)"},"100%":{opacity:"1",transform:"translateY(0)"}},
      "spin-slow":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},
    },
    animation:{
      marquee:"marquee 50s linear infinite",float:"float 7s ease-in-out infinite",
      "gradient-x":"gradient-x 8s ease infinite","fade-up":"fade-up 0.5s ease forwards",
      "spin-slow":"spin-slow 25s linear infinite",
    },
  }},
  plugins:[require("tailwindcss-animate")],
};
export default config;
