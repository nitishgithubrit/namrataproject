// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Already existing
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        flipIn: {
          "0%": { opacity: "0", transform: "rotateY(90deg)" },
          "100%": { opacity: "1", transform: "rotateY(0)" },
        },

        // Newly added
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "60%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        // Already existing
        slideDown: "slideDown 0.8s ease-out forwards",
        slideLeft: "slideLeft 0.8s ease-out forwards",
        flipIn: "flipIn 0.8s ease-out forwards",

        // Newly added
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        bounceIn: "bounceIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
