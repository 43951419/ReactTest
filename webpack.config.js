let webpack = require('webpack');
let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    devServer:{
        // colors: true,
        inline:true,
        contentBase:path.join(__dirname,"build"),
        compress:false,
        port:2000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Allison",
            filename: "index.html",
            template: "./src/index.html",
            inject:"body"
        })
    ],
    optimization: {
        minimize: false
    }
}