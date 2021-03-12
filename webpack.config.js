const path = require('path');
const json5 = require('json5');
const terserPlugin = require("terser-webpack-plugin");
const fileManagerPlugin = require('filemanager-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'simpleMemory.js',
        chunkFilename:'script/[name].[hash:8].js',
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
        }),
        new miniCssExtractPlugin({
            filename: 'style/[name].[hash:8].css',
        }),
    ],
    // devtool: 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new terserPlugin({
                extractComments: false,
            }),
            new cssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ],
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
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
            {
                test: require.resolve('./src/vendor/snapsvg/snap.svg-min.js'),
                use: 'imports-loader?this=>window,fix=>module.exports=0',
            },
        ],
    },
    resolve: {
        alias: {
            snapsvg: './src/vendor/snapsvg/snap.svg-min.js',
        },
    },
};