import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#920b1f",
        "light-primary": "#da5f6b",
      },
    },
  },
  plugins: [],
});
