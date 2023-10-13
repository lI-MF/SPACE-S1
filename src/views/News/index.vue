<template>
  <div class="News">
    <div class="news-item">
      <div class="new-out">
        <about-view day="2023年4月1日" class="new-out-item"></about-view>
        <about-view day="2023年5月1日" class="new-out-item"></about-view>
        <about-view day="2023年6月1日" class="new-out-item"></about-view>
      </div>
    </div>
  </div>
</template>

<script>
import AboutView from "../components/CompAbout.vue"
export default {
  components: { AboutView },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
@import "~@/../static/css/colorblocks.less";
</style>
