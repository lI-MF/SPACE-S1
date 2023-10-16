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
        <el-link @click="readBtnTo"
          ><i class="el-icon-view el-icon--right"></i> 全文阅读</el-link
        >
        <p>{{ item.message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["textBox"],
  // 子传父
  props: {
    textBox: {
      type: [Object, Array],
      default: () => {},
    },
  },

  data() {
    return {}
  },
  methods: {
    readBtnTo: function () {
      this.$emit("listEvent", "this message is from child")
    },
  },
}
</script>
<style lang="less"></style>
