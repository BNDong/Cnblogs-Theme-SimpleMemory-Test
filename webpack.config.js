const path = require('path');
const json5 = require('json5');
const terserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        simpleMemory: './src/main.js',
    },
    output: {
        filename: (pathData) => {
            // let name = pathData.chunk.name;
            return  '[name].js';
        },
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                extractComments: false,
            }),
        ],
        splitChunks: {
            chunks: 'all',
            name: false,
        },
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