
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cleanWebpackPlugin=require('clean-webpack-plugin');

module.exports={
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist/assets'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //可以指定路径
            template: 'src/index.html'
        }),
        new cleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                // options: {
                //     presets: ['react','env'],
                //     //这个可以放到babelrc文件里面,注意看用双引号
                //     plugins: ['transform-object-rest-spread']
                // }
            }],
            exclude: [path.resolve(__dirname,'node_modules')]
            },{
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[path]-[hash:base64:6]'
                        }
                    },
                    'less-loader'
                ],
                exclude: [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]
            },{
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader'],
                include: [
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common')
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    devServer: {
        open: true,
        port: 9090 //端口
    }
};