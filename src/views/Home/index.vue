<template>
  <div class="oop">
    <el-container class="container-s1">
      <el-header class="header-s1">
        <!-- <div class="opp-logo">
          <el-image
            style="width: 50px; height: 50px"
            :src="url"
            :fit="fit"
          ></el-image>
        </div> -->
        <!-- 顶部导航 -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#dc943b"
          text-color="#ffffff"
          active-text-color="#a95352">
          <!-- <el-menu-item index="/Home"></el-menu-item> -->
          <el-menu-item index="/Home">首页</el-menu-item>
          <el-menu-item index="/News">新闻</el-menu-item>
          <el-menu-item index="/WebCode">前端</el-menu-item>
          <el-menu-item index="/Photography">摄影日记</el-menu-item>
          <el-menu-item index="/About">关于</el-menu-item>
          <el-menu-item index="1"
            ><a href="https://juejin.cn" target="_parent">掘金</a></el-menu-item
          >
        </el-menu>
      </el-header>
      <div>SPACE-S1</div>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: this.$route.path,
      defaultHeight: {
        height: "",
      },
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$router.push(key)
    },
  },
}
</script>
<style lang="less">
@import "~@/../static/css/colorblocks.less";
.oop {
  .container-s1 {
    .header-s1 {
      height: 32px !important;
    }
    .el-header,
    .el-footer {
      background-color: #dc943b;
      color: #000;
      text-align: center;
      line-height: 32px;
    }
  }

  .el-card__body,
  .el-main {
    width: 100%;
    position: absolute;
    top: 32px;
    bottom: 0;
    padding: 0px !important;
    background-color: #ffffff;
    color: #000;
    text-align: center;
    line-height: 160px;
    background-color: #e1dbcd;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-menu--horizontal > .el-menu-item {
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #000;
    .is-active {
      color: #ffffff;
    }
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>
