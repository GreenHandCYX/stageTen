<template>
  <div class="temp">
      <div class="menu">
          <ul>
              <li>
                  <a v-if="isTrue" @click="getPhotoInfo()">全部</a>
              </li>
              <li v-for="(item,index) in photoCateData" :key='index'>
                  <a @click="getPhotoInfo(item.id)">{{item.title}}</a>
              </li>
          </ul>
      </div>
      <div class="image" v-for="(item,index) in  photoInfoData" :key="index">
          <router-link v-bind="{to:'/photodetail/'+item.id}">
            <img :src="item.img_url" alt="">
            <div class="zhaiyao">
                <p>{{item.zhaiyao}}</p>
            </div>
          </router-link>
      </div>
  </div>
</template>
<script>
import tool from '../tool/tool'
//引入loading..组件
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            photoCateData:[],
            photoInfoData:[],
            //默认不显示全部这两个字
            isTrue : false
        }
    },
    methods:{
        //获取图片所属分类信息
        getPhotoCate(){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimgcategory`
            this.$http.get(url).then(
                res=>{
                    this.photoCateData=res.body.message;
                    this.isTrue = true
                },
                res=>{
                    console.log('photolist页面请求图片分类失败')
                }
            )
        },
        //获取图片信息，默认为0指获取所有图片的信息
         getPhotoInfo(id=0){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimages/${id}`
            this.$http.get(url).then(
                res=>{
                    this.photoInfoData=res.body.message;
                    //关闭loading..
                   Indicator.close()
                },
                res=>{
                    console.log('photolist页面请求图片信息失败')
                      Indicator.close()
                }
            )
        },
    },
    created(){
        this.getPhotoCate();
        this.getPhotoInfo();
        //加载loading..
        Indicator.open('加载中...');
    }
}
</script>
<style>
.menu ul{
    list-style: none;
    display: flex;
    overflow-x: auto;
    padding: 2px;
}
.menu li{
    /* 超出不换行 */
    white-space: nowrap;
      padding: 0px;
        margin-right: 10px;
}
.image{
 position: relative;
}
.image img{
    width: 100%;
    height: auto;
}
.zhaiyao{
    position: absolute;
    bottom: 0;
    left: 0;
   
    background-color:rgba(0,0,0,0.3);
}
.zhaiyao p{
 color: #fff;
}

</style>


