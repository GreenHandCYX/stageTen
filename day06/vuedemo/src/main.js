import Vue from 'vue'
import App from './App.vue'
//引入mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入mui框架的依赖
import './assets/css/mui.min.css'

//引入vue-router控制路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入公共样式
import './roots.css'

//引入vue-resource处理请求
//引入一次所有子组件就都可以用了
import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入其他页面组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import NewsLists from './components/NewsLists.vue'
import Search from './components/Search.vue'
import ShopCar from './components/ShopCar.vue'
import NewsDetail from './components/NewsDetail.vue'
import PhotoList from './components/PhotoList.vue'
import PhotoDetail from './components/PhotoDetail.vue'
//引入时间处理插件
import moment from 'moment';

//图片预览
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)
import imgPre from './imgPre.vue'



var router = new VueRouter({
    //设置跳转到每个路由的样式
    linkActiveClass:'mui-active',
    routes:[
        //根路径下默认重定向主页
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/newslists',component:NewsLists},
        {path:'/search',component:Search},
        {path:'/shopcar',component:ShopCar},
        {path:'/newsdetail/:id',component:NewsDetail},
        {path:'/photolist',component:PhotoList},
        {path:'/photodetail/:id',component:PhotoDetail},
        //测试图片预览
        {path:'/pre',component:imgPre}
    ]
})

//处理时间
Vue.filter('momentFilter',function(val,formatStr){
    return moment(val).format(formatStr)
    
  })
new Vue({
    el:'#app',
    router,
    render:createElement => createElement(App)
})


