/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "product-image": "url('/public/images/img-1.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
  },
};
