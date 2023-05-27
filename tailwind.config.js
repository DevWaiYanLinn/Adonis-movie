/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{edge,js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7367F0",
        "success": "#4cc9f0",
        "success-1": "#57cc99",
        "admin-bg": "rgb(248,247,250)"
      },
    },
    container: {
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

