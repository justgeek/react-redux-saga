const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      MainContainers: path.resolve(__dirname, "./src/app/MainContainers"),
      CommonComponents: path.resolve(__dirname, "./src/app/CommonComponents")
    }
  },

  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },

  plugins: [htmlWebpackPlugin]
};
