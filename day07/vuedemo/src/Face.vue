<template>
  <div></div>
</template>
<script>
export default {
  mounted(){
      var url='https://api-cn.faceplusplus.com/facepp/v3/compare';
      this.$http.post(url,{
          api_key: '7Tg8yfNFVcimNx2-teAkRXJpVuqnURVI',
          api_secret: '0FE7JaP1Nq6XwGls2KjTurACZ3MnD9ff',
          image_url1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511025850637&di=1ef9761d3e8bd58e7eae65f02c69c18e&imgtype=0&src=http%3A%2F%2Fimg3.iyiou.com%2FPicture%2F2017-03-08%2F58bf72b6cc970.jpg',
          image_url2:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511025850637&di=1ef9761d3e8bd58e7eae65f02c69c18e&imgtype=0&src=http%3A%2F%2Fimg3.iyiou.com%2FPicture%2F2017-03-08%2F58bf72b6cc970.jpg'
      },{emulateJSON:true}).then(
          res=>{
              console.log(res.body.confidence)
          },
          res=>{
              console.log(123)
          }
      )
  }
}
</script>

