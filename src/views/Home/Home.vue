<template>
  <!-- 首页 -->
  <div class="home">
    <div class="home-item-content">
      <div class="home-item-left">
        <!-- 内容区 -->
        <comp-content
          :textBox="listText"
          v-model="listText"
          @listEvent="changeList"
          :contentTitle="titleClickEvent"></comp-content>
      </div>
      <!-- 右边 -->
      <div class="home-right">
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
                  v-for="(activity, index) in listText"
                  :key="index">
                  <div class="content-title">
                    {{ activity.title }}
                  </div>
                  <div class="content-date">
                    {{ activity.date }}
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 详情页 -->
    <!-- <comp-details></comp-details> -->
  </div>
</template>

<script>
import CompContent from "../components/CompContent.vue"
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
          index: 1,
          title: "第一章 Web前端",
          date: "2023/10/12",
          isShow: false,
          contentSrc:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。2我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。3我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。4我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          index: 2,
          title: "第二章 JAVA",
          date: "2023/10/13",
          isShow: false,
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          index: 3,
          title: "第三章 PHP",
          date: "2023/10/14",
          isShow: false,
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的",
        },
        {
          index: 4,
          title:
            "第四章 vue 基于elementUI的选择组件el-select中@change事件返回对象方法",
          date: "2023/10/14",
          isShow: false,
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图",
        },
        {
          index: 5,
          title: "第五章 PHP",
          date: "2023/10/14",
          isShow: false,
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的",
        },
        {
          index: 6,
          title:
            "第六章 uniapp/小程序，@input @change @blur 等事件，需要传额外参数的办法。",
          date: "2023/10/14",
          isShow: false,
          content:
            "经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图：，经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图",
        },
        {
          index: 7,
          title: "第七章 PHP",
          date: "2024/10/29",
          isShow: false,
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的",
        },
      ],
      value: new Date(),
      // reverse: true,
      // 右边标题卡
      // activity: "",
      // activities: [
      //   // {
      //   //   content: "",
      //   //   timestamp: "",
      //   // },
      //   {
      //     content: "02卡号的卡就是的卡上的",
      //     timestamp: "2018-04-13",
      //   },
      //   {
      //     content: "03卡号的卡就是的卡上的",
      //     timestamp: "2018-04-11",
      //   },
      //   {
      //     content: "04卡号的卡就是的卡上的",
      //     timestamp: "2018-04-11",
      //   },
      // ],
    }
  },
  mounted() {},
  methods: {
    // 全文阅读事件
    changeList(index, isShow) {
      this.listText[index].isShow = isShow
    },
    //标题点击跳转事件
    titleClickEvent(value) {
      //
      console.log(value, "value===============================>")
    },
  },
}
</script>

<style lang="less">
@import "../../../public/static/less/base.less";
</style>
