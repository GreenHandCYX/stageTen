<template>
  <div class="temp">
 <Comment :articleId='commentId'></Comment>
  </div>
</template>
<script>
import Comment from './sub/Comment.vue'
export default {
    data(){
        return {
            commentId:this.$route.params.id
        }
    },
  components:{
      Comment
  }
}
</script>
<style>

</style>


