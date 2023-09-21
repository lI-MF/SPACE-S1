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
.oop {
  background-color: #dc943b;

  .container-s1 {
    .title-logo {
      position: absolute;
      width: 100px;
      height: 22px;
      top: 0;
      right: 50px;
      background-image: linear-gradient(
        to right,
        hsl(0, 0%, 73%),
        hsl(210, 11%, 96%)
      );
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;
      line-height: 32px;
    }
    .header-s1 {
      width: 50%;
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
    // line-height: 160px;
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
