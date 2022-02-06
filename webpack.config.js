const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  console.log("ENV", argv.mode)
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[name].[ext]'
              }
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.ts(x)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        dry: true
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/images' }
        ]
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "static",
      //   openAnalyzer: false,
      // }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  }
};

