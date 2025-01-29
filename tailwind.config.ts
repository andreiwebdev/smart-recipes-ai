import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFE6D4",
        card: "#FFFAF9",
        foreground: "#01404E",
        accent: "#68cece"
      },
    },
  },
  plugins: [],
} satisfies Config;
