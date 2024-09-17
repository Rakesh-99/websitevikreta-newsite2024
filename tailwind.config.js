
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",

     // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   screens: { md: { max: "1050px" }, sm: { max: "550px" } },
   extend: {
     colors: {
       black: { 600: "#656d76", 900: "#000000" },
       blue_gray: {
         50: "#f1f1f1",
         "100_11": "#d9d9d911",
         "100_19": "#d9d9d919",
       },
       dark_3: "#222222",
       gray: {
         50: "#fafafa",
         200: "#eeeeee",
         "50_e5": "#fafafae5",
         "800_01": "#484848",
         "900_99": "#22222299",
       },
       white: { a700_cc: "#ffffffcc", A700_01: "#ffffff" },
       yellow: { a700_33: "#ffd60033", a700_e5: "#ffd600e5" },
       gray_shadow: "#00000029",
       colors: "#ffff",
       colors1: "#ffd600",
       colors2: "#3333",
     },
     boxShadow: { xs: "-2px 0 1px 0 #FFD600", sm: "0 0 13px 5px #00000029" },
     fontFamily: { roboto: "Roboto, sans-serif" },
     textShadow: { ts: "0px 2px 1px #FFD600" },
   },
 },
 plugins: [require("@tailwindcss/forms")],
}