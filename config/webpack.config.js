'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('./paths');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        paths.indexJs,
    ],
    output: {
        path: paths.build,
        pathinfo: true,
        filename: 'static/js/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.js$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/,
                    /\.eot$/,
                    /\.woff$/,
                    /\.ttf$/,
                ],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx|mjs)$/,
                include: paths.src,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
            },
            {
                test: /\.js$/,
                include: paths.src,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: 'json-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.indexHtml,
        }),
    ],
};
