const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ( env, argv ) => ({
  mode: "development",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'out')
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
});