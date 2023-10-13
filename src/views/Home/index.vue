<template>
  <div class="oop">
    <el-container class="container-s1">
      <el-header class="header-s1">
        <!-- 顶部导航 -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#dc943b"
          text-color="#ffffff"
          active-text-color="#a95352">
          <el-menu-item
            v-for="(item, index) in toTitle"
            :key="index"
            :id="item.id"
            :index="item.index"
            >{{ item.name }}</el-menu-item
          >
          <el-menu-item index="7"
            ><a href="https://juejin.cn" target="_parent">掘金</a></el-menu-item
          >
        </el-menu>
      </el-header>
      <div class="title-logo">SPACE-S1</div>
      <el-main><router-view /></el-main>
    </el-container>

    <nav class="nav">
      <input type="checkbox" class="nav__cb" id="menu-cb" />
      <div class="nav__content">
        <ul class="nav__items">
          <li class="nav__item">
            <span class="nav__item-text"> Home </span>
          </li>
          <li class="nav__item">
            <span class="nav__item-text"> Works </span>
          </li>
          <li class="nav__item">
            <span class="nav__item-text"> About </span>
          </li>
          <li class="nav__item">
            <span class="nav__item-text"> Contact </span>
          </li>
        </ul>
      </div>
      <label class="nav__btn" for="menu-cb"></label>
    </nav>
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
      toTitle: [
        {
          id: 1,
          index: "/Home",
          name: "首页",
        },
        {
          id: 2,
          index: "/News",
          name: "新闻",
        },

        {
          id: 3,
          index: "/WebCode",
          name: "前端",
        },

        {
          id: 4,
          index: "/BackEnd",
          name: "后端",
        },

        {
          id: 5,
          index: "/Photography",
          name: "摄影日记",
        },

        {
          id: 6,
          index: "/About",
          name: "关于",
        },
        // {
        //   id: 7,
        //   Url: "https://juejin.cn",
        //   target: "_parent",
        //   name: "掘金",
        // },
        //
      ],
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
</style>
