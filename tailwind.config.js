/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        animation: {
          bounce: "bounce 2s ease-in-out infinite",
        },
        keyframes: {
          bounce: {
            "0%, 100%": { transform: "translateY(-10px)" },
            "50%": { transform: "translateY(10px)" },
          },
        },
      },
    },
  },
  plugins: [],
};
