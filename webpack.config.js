const path = require('path');
const json5 = require('json5');

module.exports = {
    mode: 'development',
    entry: {
        simpleMemory: {
            import: './src/main.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
        // mainCss: './src/style/main.css',
    },
    output: {
        filename: (pathData) => {
            // let name = pathData.chunk.name;
            // let outName;
            //
            // switch (name) {
            //     case 'mainJs':
            //     case 'mainCss':
            //         outName = 'simpleMemory';
            //     default:
            //         outName = '[name]';
            // }
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