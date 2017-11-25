var path = require('path');
//第三方插件需实例化
var HtmlWebpackPlugin = require('html-webpack-plugin');

//将修改的webpack的配置信息暴露出去
module.exports = {
  //设置入口文件
  entry: './src/bubble.js',
  //出口文件,必须是绝对路径,所以需引入path模块做处理
  output: {
    //出口文件路径
    path: path.join(__dirname + '/dist'),
    //打包后的文件名
    filename: 'hebing.js'
  },
  //添加加载器在文件导入之前对不识别的文件类型做预处理
  module: {
    rules: [
      // 配置解析.vue文件的加载器vue-loader
      //注意需要安装vue-template-compiler
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // 配置解析.css文件的加载器
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //配置解析图片或字体的加载器url-loader
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
        //url-loader的limit配置项用来规定打包前图片小于某个临界值时转为base64格式加载图片，
        //否则按图片本身加载,这个值的单位是bite,注8bite=1byte,1B = 1byte 



      },
      //file-loader


      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      //配置将es6转为es5供浏览器识别:
      //通过babel-loader实现转化
      // npm install babel-loader babel-core babel-preset-env webpack
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // include: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
     
    ]
  },


  //webpack中可以通过webpack-dev-server监听文件的变化以实现自动打包
  //需要在package.json中配置运行命令
  devtool: 'eval',
  devServer: {
    contentBase: __dirname + '/src', // 当前服务器监听的路径
    hot: true,  // 热更新
    port: 8080,  // 定义端口号
    host: 'localhost',
    open: true,    // 是否自动打开浏览器
    openPage: ''
  },

  //webpack中添加插件
  plugins: [
    //需要安装并引入
    //自动生成html文件和指明需要依赖的相关css和js文件
    new HtmlWebpackPlugin({
      //指定以哪个作为模板进行生成
      template: './src/index.html',
      htmlWebpackPlugin: {
        "files": {//指明需要依赖的相关css和js文件
          "css": [""],
          "js": ["hebing.js"]
        }
      },
       //webpack -p压缩代码
      // 压缩 情怀至上J
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}
