const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge').merge;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'dist')

    },
    plugins: [new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), 
    new HtmlWebpackPlugin({ template: './js/index.html' ,
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
                removeComments:true
            }})],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    }

}) 