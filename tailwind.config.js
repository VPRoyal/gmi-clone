// tailwind.config.js
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#5B46FF",
          "primary-light": "#F4F2FF",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
      screens: {
    }
    },
    plugins: [],
    "tailwindCSS.experimental.configFile": "app/globals.css",
  };
  