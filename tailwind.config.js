/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        doctortheme:{
          primary:'#6C63FF',
          secondary:'#F03667',
          accent: "#ff6584",
          neutral: "#2f2e41",
          "base-100": "#FFFFFF",

        }
      }
    ]
  },
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
