'use strict';

const path = require('path');
const webpack = require('webpack');

const {
    HOST,
    PORT,
} = require('./config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('build/[name].css');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV !== 'production';
const baseDir = process.cwd();

module.exports = (options) => ({
    entry: Array.prototype.concat([
        './app/index',
    ], options.entry || []),

    output: {
        filename: 'build/[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract([
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: options.postcssOptions,
                    },
                ]),
                include: path.join(baseDir, 'app/'),
            },

            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file?name=[hash].[ext]',
                include: path.join(baseDir, 'app/'),
            },

            {
                test: /\.js$/,
                use: Array.prototype.concat(options.jsLoaders || [], [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'es2015',
                                'stage-0',
                                'react',
                            ],
                        },
                    },
                ]),
                include: [
                    path.join(baseDir, 'app/'),
                    path.join(baseDir, 'utils/'),
                ],
            },

            {
                test: /\.yaml$/,
                loader: 'json-loader!yaml-loader',
                include: path.join(baseDir, 'data/'),
            },
        ],
    },

    plugins: options.plugins.concat([
        new HtmlWebpackPlugin({
            template: path.join(baseDir, 'app/index.html'),
        }),
        new webpack.DefinePlugin({
            __DEV__: isDev,
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
        }),
        extractCSS,
    ]),

    resolve: {
        extensions: [
            '.js',
        ],
    },

    devServer: {
        host: HOST,
        port: PORT,
    },
});
