'use strict'

const NODE_ENV = process.env.NODE_ENV;
const __DEV__ = (NODE_ENV !== 'production');
console.log('Dev mode is', (__DEV__ ? 'on' : 'off'));

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractHTML = new ExtractTextPlugin('index.html');
const extractCSS = new ExtractTextPlugin('build/style.css');

const HOST = 'localhost';
const PORT = 8080;

let config = {};

/**
 * Dev Tool
 *
 * @member {string} devtool
 */
config.devtool = __DEV__ ? 'eval' : false;

/**
 * Watch
 *
 * @member {boolean} watch
 */
config.watch = __DEV__;

/**
 * Entry
 *
 * @member {object} entry
 */
config.entry = (() => {
    let result = {
        'index.html': './app/resources/views/layout.html',
        'build/script.js': './app/app.jsx'
    };

    if (__DEV__) {
        result.wds = `webpack-dev-server/client?http://${HOST}:${PORT}`;
        result.w = 'webpack/hot/only-dev-server';
    }

    return result;
}());

/**
 * Output
 *
 * @member {object} output
 */
config.output = {
    filename: '[name]',
    path: __dirname,
    publicPath: '/'
};

/**
 * Module
 *
 * @member {object} module
 */
config.module = {
    loaders: [
        {
            test: /\.css$/,
            loader: extractCSS.extract('css!postcss')
        },
        {
            test: /\.html$/,
            loader: extractHTML.extract('raw!html-minify')
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'file?name=[hash].[ext]'
        },
        {
            test: /\.(js|jsx)$/,
            loaders: (() => {
                let result = [];

                if (__DEV__) {
                    result.push('react-hot');
                }
                result.push('babel');

                return result;
            }()),
            include: [
                path.join(__dirname, 'app/')
            ]
        },
        {
            test: /\.yaml$/,
            loader: 'json!yaml'
        }
    ]
};

/**
 * Plugins
 *
 * @member {array} plugins
 */
config.plugins = (() => {
    let result = [
        new webpack.DefinePlugin({
            __DEV__: __DEV__
        }),
        extractHTML,
        extractCSS
    ];

    if (__DEV__) {
        result = [].concat(result, [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]);
    } else {
        result = [].concat(result, [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                acorn: true
            })
        ]);
    }

    return result;
}());

/**
 * PostCSS
 *
 * @member {array} postcss
 */
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const atImport = require('postcss-import');
const url = require('postcss-url');

config.postcss = (() => {
    let result = [
        atImport({
            path: [
                path.join(__dirname, 'app/resources/views/blocks/'),
                path.join(__dirname, 'app/resources/views/pages/')
            ]
        }),
        url({
            basePath: path.join(__dirname, 'app/resources/views/'),
            url: 'inline'
        }),
        autoprefixer({
            browsers: [
                'last 2 versions'
            ]
        })
    ];

    if (!__DEV__) {
        result.push(csso({
            debug: 3,
            restructure: true
        }));
    }

    return result;
}());

/**
 * Resolve
 *
 * @member {object} resolve
 */
config.resolve = {
    extensions: [
        '',
        '.js',
        '.jsx'
    ]
};

/**
 * Dev Server
 *
 * @member {object} devServer
 */
config.devServer = (__DEV__ ? {
    host: HOST,
    port: PORT
} : null);

module.exports = config;
