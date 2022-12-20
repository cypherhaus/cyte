module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Beyond"],
      },
      colors: {
        main: "#243c5a",
        offMain: "#3C5553",
        lsd: "#AF340E",
        green: "#30524F",
        cypherhaus: "#2c4745",
      },

      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
