// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    entry: ["babel-polyfill", "./src/main.ts"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/turtlecoin-web-wallet-vue/",
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },

      {
        test: /\.exec\.js$/,
        use: ["script-loader"]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: "preload",
      as: "script"
    })
  ]
};
