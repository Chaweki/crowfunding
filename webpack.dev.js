const path = require('path');
const common = require('./webpack.common');
const merge= require('webpack-merge').merge;
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')

    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            }, {
                test: /\.jsx?$/,
                use: ['babel-loader', 'astroturf/loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './js/index.html' })],
})