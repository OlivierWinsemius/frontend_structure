const webpack = require('webpack');
var common    = require('./webpack.common.js');
var merge     = require('webpack-merge');
var path      = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist', 'dev')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'   },
                    { loader: 'sass-loader'  }
                ]
            },
        ]
    },
    
    devtool: 'eval-source-map',

    devServer: {
        contentBase:      path.resolve(__dirname, 'dist', 'dev'),
        hot:              true,
        watchContentBase: true
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

if(module.hot) {
    module.hot.accept();
}