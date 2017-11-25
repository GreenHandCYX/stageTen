<template>
  <div>
	  
      <!--1. 使用mui实现顶部导航 -->
    
  
<header id="header" class="mui-bar mui-bar-nav">
	<h1 class="mui-title">Home首页</h1>
	<button v-if="isShow" @click="goBack" class="mui-action-back mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
		<span class="mui-icon mui-icon-left-nav"></span>返回
	</button>
</header>


</mt-header>
      <!-- 2.主体内容区 -->
     <router-view></router-view>
	

      <!-- 3.使用mui框架实现底部导航条 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
                    <span id="badge" class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>



		


	
  </div>
</template>
<script>
import {bus} from './tool/bus'
//接收购物车组件传来的值
bus.$on('badgeCount',function(data){
	var badge = document.getElementById('badge');
	var badgeCount = badge.innerText-0;
	badgeCount += data;
	badge.innerText =badgeCount;
})
export default {
     data () {
        return {
          isShow:false
        }
	},
	watch:{
		//监听路由的新的跳转值,不是/home则都应该有返回上一页
		'$route':function(newVal,oldVal){
			// console.log(newVal)
			// console.log(oldVal)
			if(newVal.path != '/home'){
				this.isShow = true;
				// console.log(this.isShow)
			}else{
				this.isShow = false;
			}
		}
	},
	methods:{
		goBack(){
			//返回上一页
			this.$router.go(-1)
		}
	}
}
</script>

