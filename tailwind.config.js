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
        recommended_bg_img: "url('/images/recommended.jpg')",
        popular_bg_img: "url('/images/popular.jpg')",
        "now-playing_bg_img": "url('/images/now-playing.jpg')",
        "top-rated_bg_img": "url('/images/top-rated.jpg')",
        upcoming_bg_img: "url('/images/upcoming.jpg')",
      },
    },
  },
  plugins: [],
};
