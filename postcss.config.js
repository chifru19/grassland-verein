module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: {
      flexbox: "no-2009",
      grid: "autoplace"
    },
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    },
    "postcss-import": {},
    "postcss-nested": {}
  }
};