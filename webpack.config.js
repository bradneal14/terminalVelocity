var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./game.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  }
};
