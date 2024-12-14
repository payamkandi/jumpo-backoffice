/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      neutral: {
        50: "#F9FAFA",
        100: "#F1F2F4",
        200: "#E6E8EA",
        300: "#D8DBDF",
        400: "#C7CCD1",
        500: "#B3BAC1",
        600: "#848F9A",
        700: "#6A7581",
        800: "#4E575F",
        900: "#2E3338",
        950: "#17191C",
      },
      accept: {
        50: "#F1FFEE",
        100: "#DBFFD7",
        200: "#BAFFB2",
        300: "#82FF76",
        400: "#43F533",
        500: "#1BDE09",
        600: "#10C900",
        700: "#0E9104",
        800: "#11710A",
        900: "#0E5D0A",
        950: "#023400",
      },
      error: {
        50: "#FFF0F0",
        100: "#FFDDDD",
        200: "#FFC1C1",
        300: "#FF9595",
        400: "#FF5959",
        500: "#FF2626",
        600: "#FC0606",
        700: "#E90000",
        800: "#AF0505",
        900: "#900C0C",
        950: "#500000",
      },
      warning: {
        50: "#FFFEEA",
        100: "#FFFAC5",
        200: "#FFF685",
        300: "#FFEB46",
        400: "#FFDC1B",
        500: "#F6B500",
        600: "#E29000",
        700: "#BB6602",
        800: "#984E08",
        900: "#7C400B",
        950: "#482100",
      },
      primary: {
        100: "#00E676",
        "shade-80": "#06BE64",
        "shade-60": "#0C9653",
        "shade-40": "#126E41",
        "shade-10": "#1B3227",
        "shade-05": "#000C06",
        "tint-80": "#33EB91",
        "tint-60": "#66F0AD",
        "tint-40": "#99F5C8",
        "tint-30": "#B3F8D6",
        "tint-20": "#CCFAE4",
        "tint-10": "#E6FCF1",
        "tint-03": "#F7FEFB",
        "tint-02": "#FAFEFC",
      },
      secondary: {
        100: "#7E3FF2",
        "shade-80": "#6532C1",
        "shade-60": "#4C2691",
        "shade-40": "#321961",
        "shade-10": "#0D0618",
        "tint-80": "#9865F5",
        "tint-60": "#B28CF7",
        "tint-40": "#CBB2FA",
        "tint-10": "#F2ECFE",
        "tint-05": "#F9F5FF",
        "tint-03": "#FBF9FF",
      },
    },
    extend: {
      fontFamily: {
        Yekan: ["Yekan", "sans-serif"],
      },
      boxShadow: {
        sidebar: "0px 4px 24px 0px rgba(126, 101, 198, 0.1)", // Converted #7E65C633 to rgba
      },
    },
  },
  plugins: [],
};
