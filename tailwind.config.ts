import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      experimental: {
        serverActions: true,
      },
      colors: {
        primary: {
          lighter: "#3333D1",
          DEFAULT: "#0000B7",
          darker: "#00009A",
        },
        secondary: {
          lighter: "#333333",
          DEFAULT: "#111111",
          darker: "#000000",
        },
        tertiary: {
          lighter: "#33E6D9",
          DEFAULT: "#00CCC6",
          darker: "#00B0A3",
        },
        quaternary: {
          lighter: "#B833FF",
          DEFAULT: "#A100FF",
          darker: "#8E00E6",
        },
        neutral: {
          lighter: "#E6ECF2",
          DEFAULT: "#DBE2E9",
          darker: "#C0C9D0",
        },
        banner: "rgba(0, 0, 183, 0.7)",
      },
      textColor: {
        primary: "#3333D1",
        secondary: "#111111",
        tertiary: "#00CCC6",
        quaternary: "#A100FF",
        neutral: "#DBE2E9",
      },
      width: {
        "128": "36.2rem",
        "120": "30rem",
        "45": "28.8rem",
        "130": "40rem",
      },
      height: {
        "150": "20rem",
        "140": "18rem",
      },
      screens: {
        android: "700px",
        tablet: "900px",
      },
    },
  },

  plugins: [],
};
export default config;
