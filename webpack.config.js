const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./game.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["css-loader", "style-loader"] },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "static", to: "static" }],
        }),
        new HtmlWebpackplugin({
            template: "./index.html",
        }),
        new HtmlWebpackplugin({
            template: "./gaeme_screen.html",
        }),
    ],
};
