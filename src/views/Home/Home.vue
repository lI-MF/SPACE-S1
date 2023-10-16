<template>
  <div class="home">
    <div class="home-item-content">
      <div class="home-item-left">
        <!-- 内容区 -->
        <comp-content :textBox="listText" @listEvent="showMsg"></comp-content>
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
    <!-- 详情页 -->
    <comp-details></comp-details>
  </div>
</template>

<script>
import CompContent from "../components/CompContent.vue"
// import CompDetails from "../components/CompDetails.vue"
import CompDetails from "../../components/CompDetails.vue"

export default {
  // 注册
  components: {
    CompContent,
    CompDetails,
  },

  data() {
    return {
      listText: [
        {
          title: "第一章 Web前端",
          date: "2023/10/12",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          title: "第二章 JAVA",
          date: "2023/10/13",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          title: "第三章 PHP",
          date: "2023/10/14",
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的",
        },
      ],
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
  methods: {
    // 全文阅读事件
    showMsg: function (textBox) {
      this.$router.push({ name: "Details" })
      console.log(textBox, "data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    },
  },
}

// import jssheep from "./sheep";

// export default jssheep;
</script>

<style lang="less">
@import "../../../public/static/less/base.less";
</style>
