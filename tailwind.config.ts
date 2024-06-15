import {nextui} from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem", // => 24px
      },
      transitionDuration: 300, // => 0.3s
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // require('daisyui'),
    nextui(),
  ],
};
