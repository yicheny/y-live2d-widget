const path = require('path');
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

//配置
module.exports = {
    entry: './demo',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "raw-loader"
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:"./dist",
        host:'127.0.0.1',
        port:3033
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "y-live2d-widget",
            template: './demo/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
