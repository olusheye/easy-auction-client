const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = (config, options) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve("@", "src/app/"),
  });
  config.plugins.push(
    new webpack.DefinePlugin({
      config: JSON.stringify({
        apiUrl: "https://easy-auction-server.herokuapp.com",
      }),
    })
  );

  return config;
};
//apiUrl: "https://easy-auction-server.herokuapp.com/",
