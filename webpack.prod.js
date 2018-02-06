const common            = require('./webpack.common.js');
const merge             = require('webpack-merge');
const path              = require('path');
const UglifyPlugin      = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({ filename: '[name].[contenthash].css' });

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'prod')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({ 
                    use: [
                        { loader: 'css-loader'   },
                        { loader: 'sass-loader'  }
                    ],
                    fallback: { loader: 'style-loader' }
                })
            },
        ]
    },

    plugins: [
        new UglifyPlugin(),
        extractSass
    ]
});