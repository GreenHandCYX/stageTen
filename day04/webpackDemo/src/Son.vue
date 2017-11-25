<template>
    <div>
        Son.vue
        <button @click='hello'>给父组件app.vue传值,我是son组件</button>
    </div>
</template>
<script>
export default {
    props:['yy'],
    created:function(){
        console.log(this.yy)
    },
    data:function(){
        return {

        }
    },
    methods:{
        hello:function(){
            this.$emit('flag',{a:2,b:4})
        }
    }
}
</script>
<style>

</style>


