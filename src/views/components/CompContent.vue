<template>
  <div class="content-main">
    <div class="content-item" v-for="item in textBox" :key="item.id">
      <!-- 标题 -->
      <div class="content-title">{{ item.title }}</div>
      <!-- 发布时间 -->
      <div class="release-time">
        <div class="release">发布于</div>
        <div class="time">{{ item.date }}</div>
      </div>
      <!-- 内容 -->
      <div class="content-box">
        {{ item.content }}
      </div>
      <!-- 全文跳转 -->
      <div class="full-text">
        <!-- <el-link type="primary">主要链接</el-link> -->
        <el-link><i class="el-icon-view el-icon--right"></i> 全文阅读</el-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //
      textBox: [
        {
          title: "第一章 Web前端",
          date: "2023/10/12",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          title: "第二章 JAVA",
          date: "2023/10/13",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
      ],
    }
  },
}
</script>
<style lang="less"></style>
