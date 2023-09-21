<template>
  <div class="home">
    <div class="home-item-left">左边滚动</div>
    <!-- 分割线 -->
    <!-- <el-divider direction="vertical"></el-divider> -->
    <div class="home-item-right">
      <div class="home-date"><el-calendar v-model="value"> </el-calendar></div>
      <div class="home-news">
        <div class="block">
          <!-- <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
              <el-radio :label="true">倒序</el-radio>
              <el-radio :label="false">正序</el-radio>
            </el-radio-group>
          </div> -->

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
      // reverse: true,
      activities: [
        {
          content: "01卡号的卡就是的卡上的卡号的卡就是的卡上的",
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
.home {
  position: relative;
  top: 5%;
  // 左边
  .home-item-left {
    position: absolute;
    width: 60%;
    height: 1500px;
    left: 10%;
    top: 10%;
    background-color: rgb(66, 60, 60);
    box-shadow: 3px 5px 5px #656b79;
  }
  // 右边
  .home-item-right {
    position: absolute;
    width: 20%;
    height: 31rem;
    right: 10%;
    top: 10%;
    margin: 0 -10px;
    background-color: #ffffff;
    box-shadow: 3px 5px 5px #656b79;
    // 日历
    .home-date {
      position: absolute;
      top: 0;
      left: 0;
      height: 400px;
      .el-calendar {
        .el-calendar__header {
          display: flex;
          justify-content: space-between;
          padding: 12px 4px;
          border-bottom: 1px solid #ebeef5;
        }
        .el-calendar__body {
          padding: 12px 2px 12px;
          .el-calendar-table {
            td.is-selected {
              background-color: #ffffff;
            }
            td.is-today {
              color: #dc943b;
            }
            .el-calendar-day {
              box-sizing: border-box;
              padding: 8px;
              height: 36px;
            }
          }
        }
      }
    }
    // 时间线
    .home-news {
      width: 100%;
      height: 10rem;
      position: absolute;
      bottom: 0;
      left: 0;
      .block {
        height: 9rem;
        .el-timeline {
          height: 10rem;
          // margin: 8px;
          list-style: none;
          overflow-y: auto;
          padding: 0 10px;
          .el-timeline-item {
            position: relative;
            padding-bottom: 8px;
            .el-timeline-item__wrapper {
              position: relative;
              padding-left: 20px;
              top: -3px;
            }
          }
        }
      }
    }
  }
}
</style>
