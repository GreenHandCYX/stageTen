<template>
  <div class="temp" id='myList'>
    <div class="container"  ref="container">
        
    </div>
    <div class="area">
        <label for="text">开始你的表演:</label><input  type="text" id="text" ref="text" @blur="postInfo">
    </div> 
   
  </div>
</template>
<script>
export default {
  methods:{
      render(val,spanClass){
             var span = document.createElement('span');
                 span.innerText = val;
                 span.className=spanClass;
                 var p = document.createElement('p');
                 p.appendChild(span);
                this.$refs.container.insertBefore(p,this.$refs.container.children[0]);
                 this.$refs.text.value = ''
      },
      postInfo(){
        

          this.render(this.$refs.text.value,'span1')
          var info = this.$refs.text.value;
          var url = 'http://www.tuling123.com/openapi/api'
          this.$http.post(url,{
             "key": "9ac0a5f68ed64015979fb06b27d4ef13",            
            "info":info,               
            "userid":"123456"
          },{emulateJSON:true}).then(
              res=>{
                //   console.log(res.body.text)
              
                  if(res.body.text-1 == this.$refs.text.value-0 || res.body.text==this.$refs.text.value){
                      return;
                  }
                 
                    this.render(res.body.text,'span2')
                
              },
              res=>{
                  alert('请求失败')
              }
          )
      }
  }
}
</script>
<style>
.area{
    position: fixed;
    bottom: 52px;
    height: 40px;
    line-height: 40px;
    width: 100%;
    box-sizing:border-box;
    background-color: skyblue;
    border-radius: 5px;
    padding: 5px;
    
    display: flex;
    justify-content: space-around
}
.area label{
    color:#fff;
    display: inline-block;
    height: 100%;
    margin-right: 3px;
    line-height: 36px;
}
.area input{
    flex:1;
    height: 100%;
}

.container{
    overflow: hidden;
}
.span1{
  
    background-color: skyblue;
   float: left;
   padding: 5px;
   box-sizing: border-box;
}
.span2{
   
  background-color: pink;
 float: right;
  padding: 5px;
   box-sizing: border-box;
}
.container{
      overflow: hidden;
       padding:0 5px;
}
.container p{
   width: 100%;
  
    margin: 5px 0;
    overflow: hidden;
}

</style>


