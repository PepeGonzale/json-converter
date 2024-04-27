/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008dff",
          secondary: "#00ff58",
          accent: "#cd0000",
          neutral: "#2b2b2b",
          "base-100": "#282f31",
          info: "#00a5cc",
          success: "#00ffa6",
          warning: "#e59700",
          error: "#ff97a4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
