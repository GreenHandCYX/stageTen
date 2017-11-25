//导入路径模块
var path =require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')

module.exports = {
    //第一部分 入口和出口的设置
    // entry:'./src/main.js',
    entry:{
        app:'./src/main.js',
        //用来处理公用的js文件
        vendor:['vue']
    },
    output:{
        path:path.join(__dirname+'/dist'),
        filename:'bundle.js'
    },
    //第二部分,加载器的添加
    module:{
        rules:[
            //第一个加载器,解析.vue文件的vue-loader
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            //第二个加载器,解析css的css-loader
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            //解析图片及字体
            {
                test:/\.(jpg|png|jpeg|gif|ttf|woff|woff2|eot|svg)$/,
                use:'url-loader'
            }
        ]
    },
    //配置开发服务器，用来监听src源文件的变化，如果源文件有变化，自动进行打包处理，显示结果
    //文件放在内存中
    devtool:'eval',
    devServer:{
        //告诉当前服务器监听的区域
        contentBase:__dirname + '/src',
        hot:true, //是否提供热更新功能
        open:true,//是否自动打开浏览器
        port:8080,//端口号的配置
        host:'localhost',
        openPage:""
    },

    //第三部分 插件
    plugins:[
         //需要安装并引入
    //自动生成html文件和指明需要依赖的相关css和js文件
    new HtmlWebpackPlugin({
        //指定以哪个作为模板进行生成
        template: './src/index.html',
        htmlWebpackPlugin: {
          "files": {//指明需要依赖的相关css和js文件
            "css": ["app.css"],
            "js": ["bundle.js",'vendor.js']
          }
        },
         //webpack -p压缩代码
        // 压缩 情怀至上J
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
    }),

    //将css从合并后的bundle.js文件中拆分出来
    new ExtractTextPlugin('app.css'),

    //提取公共js代码
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename:'vendor.js'}),
    ]
}