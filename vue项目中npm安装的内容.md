# vue项目中npm安装的内容

> 项目初始化  
>
> npm  init  -y   
>
>  vue  :     vue我们要学习的框架
>
>  webpack :   因为我们要利用webpack进行打包  混淆  压缩 (webpack使用的时候需要全局安装-g)
>
> vue-loader :  安装他是因为webpack无法识别.vue的文件   我们需要一个加载器来解析这样的文件

> css-loader:   解析css文件或者是内容  要解析css文件其实需要两个加载器(css-loader  style-loader)
>
> style-loader:    解析css文件或者是内容 
>
> url-loader:  解析字体或者是图片(file-loader  有可能会让你装1)
>
> webpack-dev-server:  可以安装这个来配置一个辅助的服务器(本地的),  帮助我们监听运行src内容

```javascript
    // 配置开发服务器,用来监听src源文件的变化,
    // 如果源文件有变化,自动进行打包处理,显示结果
    devtool:'eval',
    devServer:{
        // 告诉当前的服务器,监听的区域
        contentBase: __dirname + '/src',
        hot: true , // 是否提供热更新功能
        open: true, // 是否自动打开浏览器
        port: 8080,  // 端口号的配置
        host:'localhost',
        openPage:''
    },

```

```json
"server": "./node_modules/.bin/webpack-dev-server --hot --open --content-base src",
```

> html-webpack-plugin: 这个插件可以帮助我们来生成一个html文件

```javascript
         // 自动生成html文件
              new HtmlWebpackPlugin({
                template: './src/index.html',
                htmlWebpackPlugin: {
                    "files": {
                        "css":["app.css"],
                        "js": ["bundle.js","vendor.js"]
                    }
                },
                // 压缩 情怀至上
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                }
            }),
```

> 压缩插件 ;  -p  

```json
    "dev": "webpack -p",
```

> extract-text-webpack-plugin:  从生成的bundle.js中提取 css 部分

```javascript
   const ExtractTextPlugin = require("extract-text-webpack-plugin");  


// 从bundle.js中提取css的插件
   new ExtractTextPlugin("app.css"),
```

> CommonsChunkPlugin:  这个插件不需要安装,是webpack自带的插件,直接实例化一下就可以

```javascript
    entry:{
        app: './src/main.js',
        // 把js部分需要分离的文件名,写入到这里,利用插件进行分割
        vendor:['vue']
    },    

// 提供公共代码
new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }), 
// 默认会把所有入口节点的公共代码提取出来,生成一个common.js
```



> mint-ui:  这个是一个组件库,帮助我们生成界面 

```javascript
// 当前项目引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

```



> vue-router:  帮助我们设置路由   路由的改变会引起页面的变化



> vue-resource:  相当于axios,可以进行数据的请求





















































