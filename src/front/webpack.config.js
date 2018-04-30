const path = require('path');
const webpack = require('webpack');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

/* webpack */

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: path.resolve(__dirname, 'js') + '/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../assets/front'),
        filename: './js/[name].js',
        //publicPath: '/',
    },
    plugins: [
        new ExtractTextWebpackPlugin({ filename: "css/style.css", disable: false, allChunks: true }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(html|json)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            removeComments: false,
                            collapseWhitespace: false,
                            interpolate: true
                        }
                    }
                ]
            }, {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }, {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }],
                    publicPath: '/'
                })
            }, {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            }, {
                test: /\.json$/,
                type: 'javascript/auto',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/data/'
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['svgr/webpack'],
            }
        ]
    },
    devServer: {
        hot: true,
        stats: "errors-only",
        open: true
    }
};