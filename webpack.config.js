'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./dist/main.js']
    },
    output: {
        path: path.resolve(__dirname, '../server_nest/service/scripts'),
        filename: 'spa.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.s[a|c]ss$/,
            use: [
                'sass-loader',
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
            use: 'url-loader?limit=100000'
        }, {
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [],
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080
    }
};