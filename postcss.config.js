/*
 * @Author: Tan Dinbo
 * @Date: 2020-08-13 17:14:08
 */
module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "coustom-properties": false,
        },
      },
    ],
  ],
};
