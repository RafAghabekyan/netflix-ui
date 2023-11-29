/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "13/100": '13%',
        "8/100": '8%'
      },
      minWidth: {
        '150': '150px',
      },
      boxShadow: {
        'navBar': '0px 0px 140px 100px black',
      },
      backgroundImage: {
        'my_bg_image' : "url('/assets/FeaturedCoverImage.png')",
      }
      // margin: {
      //   '10%': '10%',
      //   '25%': '25%',
      // }
    },
  },
  plugins: [],
};
