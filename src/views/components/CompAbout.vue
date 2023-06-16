


<template>
    <div class="test">
        <h3 @click="fn">{{ day }}新闻标题</h3>
        <p>{{ day }}新闻内容</p>
    </div>
</template>

<script>
    export default{
        props:['day'],
        data(){
            return{
                title:"今天的新闻"
            }
        },

        methods:{
            fn(){
                alert(this.title)
            }
        }
    }
</script>
<style lang="less">
    .test{
        height: 200px;
    }

</style>