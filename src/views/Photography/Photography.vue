<template>
  <div class="Photogs">
    <!-- <div class="home-code-item"></div> -->

    <comp-card />
  </div>
</template>
  
  <script>
import CompCard from "../components/CompCard.vue";

export default {
  // 注册
  components: {
    CompCard,
  },

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
// import jssheep from "./sheep";

// export default jssheep;
</script>
  
  
  
  <style lang="less">
// @import '';
.Photogs {
  // position: relative;
  // // margin-top: 20px;
  // // display: flex;
  // // justify-content: center;
  // .home-code-item {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, 50%);
  //   width: 60%;
  //   height: 300px;
  //   background-color: bisque;
  // }
}
</style>