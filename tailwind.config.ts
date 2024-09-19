import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lama: "#F35C7A", // Custom color
      },
      backgroundColor: {
        primary: "#000000", // Adding primary color for background
        secondary: "#1E293B", // You can add more colors here
        accent: "#FFD700", // Example of another custom background color
      },
    },
  },
  plugins: [],
};

export default config;
