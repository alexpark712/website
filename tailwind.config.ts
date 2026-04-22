import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#0F52BA",
        "green-mid": "#0d47a8",
        "green-tint": "#e8eef8",
        brand: "#111",
        muted: "#888",
        border: "#dedad2",
      },
    },
  },
  plugins: [],
};
export default config;
