/**
 * @file PostCSS configuration file, used for defining how our CSS files are compiled.
 * @see https://github.com/postcss/postcss
 * @see https://github.com/postcss/postcss-cli
 */
const autoprefixer = require("autoprefixer");
const sass = require("@csstools/postcss-sass");

const sassOptions = {
  includePaths: ["./styles", "./node_modules/uswds/dist/scss"],
  sourceMap: true
};
const sourceMapOptions = { annotation: true, inline: false };

module.exports = context => {
  // const isDevelopment = context.env === "development";

  return {
    map: sourceMapOptions,
    parser: "postcss-scss",
    plugins: [sass(sassOptions), autoprefixer]
  };
};
