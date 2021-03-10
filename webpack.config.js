const path = require('path');
const json5 = require('json5');
const terserPlugin = require("terser-webpack-plugin");
const fileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'simpleMemory.js',
        chunkFilename:'handles/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new fileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './src/style/main.min.css', destination: './dist/simpleMemory.css' },
                    ],
                }
            }
        })
    ],
    // devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                extractComments: false,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
};