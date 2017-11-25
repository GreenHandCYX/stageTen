import Vue from 'vue'
import App from './App.vue'
//引入mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入mui框架的依赖
import './assets/css/mui.min.css'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from './components/Home.vue'


var router = new VueRouter({
    routes:[
        {name:'home',path:'/',component:home}
    ]
})
new Vue({
    el:'#app',
    router,
    render:createElement => createElement(App)
})