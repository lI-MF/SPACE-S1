<template>
  <div class="home">
    <div class="home-item-content">
      <div class="home-item-left">
        <!-- 内容区 -->
        <comp-content></comp-content>
      </div>
      <!-- 右边 -->
      <div class="home-item-right">
        <div class="home-date">
          <el-calendar v-model="value"> </el-calendar>
        </div>
        <!-- 分割线 -->
        <el-divider direction="horizontal"></el-divider>
        <div class="home-news">
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompContent from "../components/CompContent.vue"

export default {
  // 注册
  components: {
    CompContent,
  },

  data() {
    return {
      value: new Date(),
      // reverse: true,
      activities: [
        {
          content:
            "01卡号的卡就是的卡上的卡号的卡就是的卡上的,啥快递哈卡杀手空间的撒看见哈丢我有我iiuy打死u的啊卡仕达卡仕达。",
          timestamp: "2018-04-15",
        },
        {
          content: "02卡号的卡就是的卡上的",
          timestamp: "2018-04-13",
        },
        {
          content: "03卡号的卡就是的卡上的",
          timestamp: "2018-04-11",
        },
        {
          content: "04卡号的卡就是的卡上的",
          timestamp: "2018-04-11",
        },
      ],
    }
  },
  mounted() {},
  methods: {},
}

// import jssheep from "./sheep";

// export default jssheep;
</script>

<style lang="less">
@import "../../../public/static/less/base.less";
</style>
