<template>
 <div class="mui-numbox">
  <!-- "-"按钮，点击可减小当前数值 -->
  <button class="mui-btn mui-numbox-btn-minus" @click="sub" type="button">-</button>
  <input class="mui-numbox-input" type="number" v-model="num"/>
  <!-- "+"按钮，点击可增大当前数值 -->
  <button class="mui-btn mui-numbox-btn-plus" @click="add" type="button">+</button>
</div>
</template>
<style>
    .mui-numbox{
        height:30px
    }
</style>
<script>
export default {
  props:['kucun','buy','id','price'],
  data(){
     return {
         num:1
     }
  },
  created(){
      this.num=this.buy || this.num;
  },
  mounted(){
      this.send()
  },
    updated(){
        //改变因将值发给父组件
       this.send()
    },
  methods:{
      sub(){
          if(this.num>1){
            this.num--;
          } 
      },
      add(){
        //    console.log(this.kucun)
        
         if(this.kucun && this.num < this.kucun){
           return this.num++;
          }
          this.num++;
          

      }
      ,send(){
        if(this.id){
        return this.$emit('toFather',[this.id,this.num*this.price])
        }
        this.$emit('toFather',this.num)
      }
  }
}
</script>


