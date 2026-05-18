/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans:    ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
        mono:    ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        "irca-green": {
          DEFAULT: "#6FB03F",
          600: "#5E9B33",
          700: "#4E8228",
          50:  "#EEF7E5",
          100: "#DCEFCB",
        },
        "irca-blue": {
          DEFAULT: "#0080C0",
          600: "#006FA6",
          700: "#005A87",
          50:  "#E5F2F9",
          100: "#C7E2F0",
        },
        ink: {
          1000: "#0B1118",
          900:  "#14202C",
          700:  "#334759",
          500:  "#5C7186",
          400:  "#7A8FA3",
          300:  "#A8B6C5",
          200:  "#D2DAE3",
          100:  "#E5EAF0",
          50:   "#F1F4F7",
          25:   "#F8FAFB",
        },
        paper: "#FFFFFF",
        "bg-deep": "#0B2034",
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
