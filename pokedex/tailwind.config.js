
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
