const path = require('path');
const json5 = require('json5');

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