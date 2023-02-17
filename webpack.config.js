
const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [new HTMLWebpackPlugin({
        template: './public/index.html'
    })],
};