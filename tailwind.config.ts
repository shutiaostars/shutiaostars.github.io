import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmos:        "#010914",
        void:          "#050D1A",
        deep:          "#091424",
        surface:       "#0C182C",
        star:          "#7B93A8",
        "star-bright": "#A3B8CC",
        "star-dim":    "#3A5068",
        nebula:        "#0E1D36",
        "nebula-blue": "#101E38",
        "text-body":   "#D6DEE6",
        "text-dim":    "#7A8694",
        "text-faint":  "#3D4A58",
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Noto Serif SC"', "serif"],
        serif:   ['"Noto Serif SC"', "serif"],
        body:    ['"Noto Sans SC"', "sans-serif"],
        mono:    ['"Space Mono"', "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16,1,0.3,1)",
        smooth:     "cubic-bezier(0.25,0.1,0.15,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
