<template>
  <div class="loing-stars">
    <div class="stars">
      <div
        v-for="(item, index) in starsCount"
        :key="index"
        ref="star"
        class="star"></div>
    </div>
    <comp-then-stars />
  </div>
</template>

<script>
import CompThenStars from "../components/CompTheStars.vue"
export default {
  components: {
    CompThenStars,
  },
  data() {
    return {
      starsCount: 1000, //星星的数量
      distance: 700, //间距
    }
  },
  mounted() {
    let _this = this
    let starArr = _this.$refs.star
    console.log(starArr)
    starArr.forEach((item) => {
      var speed = 0.2 + Math.random() * 1
      var thisDistance = _this.distance + Math.random() * 300
      item.style.transformOrigin = `0 0 ${thisDistance}px`
      item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${
        Math.random() * 360
      }deg) rotateX(${Math.random() * -50}deg) scale(${speed}, ${speed})`
    })
  },
}
</script>
<style lang="less" scoped>
@import "../../../public/static/less/base.less";
</style>
