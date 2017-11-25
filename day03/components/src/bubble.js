
//引入创建vue实例的依赖
import Vue from 'vue'
// import Vue from 'vue';
//如果有node_modules文件夹则直接引入所需
//引入所需组件
import App from './App.vue'


new Vue({
    el:'#app',
    //render方法可用于渲染组件
    // render:function(createElement){
    //     createElement(App);
    // }
    render:createElement=>createElement(App)
})


