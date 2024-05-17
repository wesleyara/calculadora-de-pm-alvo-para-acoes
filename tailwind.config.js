/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        haveblue: {
          50: "#f2f3fc",
          100: "#e1e5f8",
          200: "#c9d0f4",
          300: "#a4b2ec",
          400: "#798be1",
          500: "#5a67d8",
          600: "#454acb",
          700: "#3d3bba",
          800: "#393598",
          900: "#302f79",
        },
        mountgreen: {
          50: "#f0fdfa",
          100: "#cdfaf0",
          200: "#9bf4e3",
          300: "#62e6d2",
          400: "#31d0bd",
          500: "#16a394",
          600: "#119085",
          700: "#12736c",
          800: "#135c57",
          900: "#154c49",
        },
        fiord: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d6dae1",
          300: "#b1bac8",
          400: "#8795a9",
          500: "#68788f",
          600: "#536076",
          700: "#4a5568",
          800: "#3b4351",
          900: "#343a46",
          950: "#23272e",
        },
        spangrey: "#4a5568",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};