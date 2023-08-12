/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#426eac',
      'secondary': '#6cc4ce',
      'ternary': '#00162B',
      'primary-soft': '#8AC5FF',
      'secondary-soft': '#6CB6FF',
    },
    extend: {
      height: {
        '90': '23.2rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}