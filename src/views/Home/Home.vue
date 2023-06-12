<template>
  <div class="home">
    <div class="home-item-left">左边滚动</div>
    <!-- 分割线 -->
    <!-- <el-divider direction="vertical"></el-divider> -->
    <div class="home-item-right">右边滚动</div>
  </div>
</template>

<script>
// import CompCard from "../components/CompCard.vue";

export default {
  // 注册
  components: {
    // CompCard,
  },

  data() {
    return {
      value: new Date(),
    };
  },
  mounted() {},
  methods: {},
};

// import jssheep from "./sheep";

// export default jssheep;
</script>



<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
// @import "./sheep.less";
.home {
  position: relative;
  top: 5%;
  .home-item-left {
    position: absolute;
    width: 60%;
    height: 1500px;
    left: 10%;
    top: 10%;
    background-color: rgb(66, 60, 60);
  }
  .home-item-right {
    position: absolute;
    width: 20%;
    height: 500px;
    right: 10%;
    top: 10%;
    margin:0 -10px;
    background-color: rgb(134, 125, 125);
    // .calendar-home {
    //   position: absolute;
    //   height: 100px;
    // }
  }
}
</style>