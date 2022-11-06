var webpack = require('webpack');
var path = require('path');
//var WriteFilePlugin =require('write-file-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist/'),
        },
        compress: true,
        port: 9000,
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, {
                test: /\.s(a|c)ss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    },
                    ///{loader : 'postcss-loader'},
                    {
                        loader: 'sass-loader'
                    }
                ]

            }, {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    },
                    // if it does need to process some extra feature using this (notice that a
                    // config file is needed !) {loader : 'postcss-loader'}

                ]

            }
        ]
    }
}