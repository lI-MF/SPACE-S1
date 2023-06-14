<template>
  <div class="about">
    <div class="about-item">
      <div class="about-item-col" v-for="item in items" :key="item.id">
        <!-- 标题 -->
        <h1 class="about-title">{{ item.title }}</h1>
        <!-- 内容 -->
        <div class="about-text">
          {{ item.text }}
        </div>
      </div>

      <!-- 分割线 -->
      <div class="dividing-line"></div>
      <!-- 网页跳转按钮 -->

      <div>
        <div class="about-btn" >
          <div class="about-btn-item"  v-for="fit in fits"
            :key="fit.id">
            <el-button
            :type="fit.type"
            circle
            :icon="fit.icon"
            @click="open"
            ></el-button></div>
          
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: [
        {
          type:"primary",
          icon:"el-icon-orange"

        },
        {
          type:"success",
          icon:"el-icon-s-flag"
        },
        {
          type:"warning",
          icon:"el-icon-umbrella"
        },
        {
          type:"danger",
          icon:"el-icon-no-smoking"
        },
      ],
      items: [
        {
          id: 1,
          title: "关于",
          text: "他不仅这样对待猫，也这样对待朋友和自己。他从不保存自己的照片、资料、早期作品，因为不关心这些东西。如果他觉得你对他的软件没有帮助，他就要你走。DOOM 的其他三个创始人，有两个是卡马克自己赶走的。他这种冷漠无情的性格，很难跟别人相处。公司同事都觉得，有他在场，公司气氛都变得压抑了。但是，《DOOM 启世录》的作者认为，恰恰是这种性格，造就了卡马克。 正是因为他心无旁骛，无比关心程序的性能，才在并不强大的硬件上，第一个实现了 3D 效果。不提供价值的东西，就会被他剔除，才最终写出了简洁高效的代码。",
        },
      ],
    }
  },
  // computed: {
  // },  //我命由我，不由天。

  methods: {
    gernerateId: function (index) {
      return "left_" + index
    },

    // 弹框
    open() {
        this.$confirm('这是弹出框, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '弹出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消弹出框'
          });          
        });
      }
  },
}
// 今晚就到这里
</script>

<style lang="less" scoped>
// @import "~@/static/iconfont/iconfont.css";
.about {
  position: relative;
  .about-item {
    position: absolute;
    width: 60%;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 10px 10px 10px 10px;
    background-color: #ffffff;
    box-shadow: 0 0 24px rgba(26, 25, 25, 0.2);
    .about-item-col {
      .about-title {
        font-size: 20px;
        height: 32px;
        line-height: 32px;
        font-weight: bold;
      }
      .about-text {
        height: 10rem;
        text-indent: 2em;
        margin: 0 40px;
        text-align: justify;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
    // 分割线
    .dividing-line {
      margin-left: 20px;
      margin-right: 20px;
      width: 95%;
      height: 0.01rem;
      background-color: #a19a9a;
    }
    // 网页跳转按钮
    .about-btn {
      position: relative;
      // width: 80%;
      height: 75px;
      line-height: 20px;
      .about-btn-item {
        width: 40px;
        height: 40px;
        // background-color: #eadddd;
        border-radius: 50%;
        display: inline-block;
        margin: 18px 10px;
        // .about-btn-item:hover {
        //   outline: none;

        //   // background: #208fc1;

        //   /*执行动画*/

        //   -webkit-animation: showBtn 0.5s 1;

        //   animation: showBtn 0.5s 1;

        //   /*停止在最后一帧*/

        //   -webkit-animation-fill-mode: forwards;

        //   animation-fill-mode: forwards;
        // }
      }
    }
  }
}
</style>
