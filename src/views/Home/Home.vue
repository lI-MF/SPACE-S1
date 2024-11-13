<template>
  <!-- 首页 -->
  <div class="home">
    <div class="home-item-content">
      <div class="home-item-top">
        <!-- Top 栏 -->

        <div class="item-top">
          <!-- 搜索框 -->
          <el-input
            placeholder="请输入内容"
            v-model="searchInput"
            class="input-with-select"
            prefix-icon="el-icon-search">
          </el-input>
          <!--新增按钮 -->
          <comp-function>
            <template v-slot:write-btn>
              <el-button type="warning" class="function_btn" @click="addClick"
                ><i class="iconfont icon-xiugai"></i
              ></el-button>
            </template>
          </comp-function>
        </div>
      </div>
      <div class="home-item-left">
        <!-- 内容区 -->
        <comp-content
          :textBox="listText"
          v-model="listText"
          @listEvent="changeList"
          :editClickEvent="editEvent"
          :deleteClickEvent="deleteEvent"
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
      <!-- 右下 功能区 -->
      <div class="area-functional">
        <!--  -->
      </div>
    </div>

    <!-- 详情页 -->

    <!-- 弹框 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="open"
      width="40%"
      class="dialogLand">
      <div class="dialog-text">
        <div class="">
          {{ textVlaue }}
        </div>
      </div>
    </el-dialog>
    <!-- 新增、修改弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="60%"
      @close="closeDialog('addForm')">
      <el-form label-width="90px">
        <el-form-item label="标题">
          <el-input v-model="input.title"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <div class="block">
            <el-date-picker
              v-model="input.date"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              @change="getCreateTime"
              disabled
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="内容">
          <!-- <el-input
            type="textarea"
            resize="none"
            :rows="10"
            v-model="input.content"></el-input> -->
          <mavon-editor
            v-model="input.content"
            :ishljs="true"
            @change="updateDoc"></mavon-editor>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="warning" @click="branchSubmit(dialogInput)"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CompContent from "../components/CompContent.vue"
import CompDetails from "../../components/CompDetails.vue"
import CompFunction from "../components/CompFunction.vue"

export default {
  // 注册
  components: {
    CompContent,
    CompDetails,
    CompFunction,
  },

  data() {
    return {
      // =================================================
      // 新增弹窗
      input: {
        id: "",
        title: "",
        date: new Date(),
        content: "",
      },
      dialogInput: -1,
      dialogVisible: false,

      // =================================================
      // 当前日期
      //  input.date: ,
      // 搜索框
      searchInput: "",
      // 是否隐藏
      flag: false,
      // 标题
      dialogTitle: "",
      // 内容
      textVlaue: "",
      // 遮罩层
      loading: true,
      // 是否显示弹出层
      open: false,
      // 内容数据源
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
            "经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图：，经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label。经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图：，经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label！经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图：，经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label。经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label,如下图：，经常在做表单的时候，会有多个相同的form-section(也就是需要提交的是一个格式相同的对象组成的数组).这个时候无论是input还是swtich或者picker,都会碰到一个问题，如何知道我当前的编辑的input是属于数组中的第几个对象，然后去修改对应对象的值（因为表单是遍历出来的是，所以绑定的函数肯定是同一个）。额外提供一个不好的示例挺简单的，百度一搜就有了。但是之前一直使用的是给form-item的外层标签，加一个点击事件，然后全局维护一个activeRowIdx，来保存当前操作的下标，然后在input等事件中利用下标去修改制定对象的属性。但是这样有明显的缺点,对于switch这样的组件，会有延迟（也就是子组件的change事件触发了，但是外层元素的点击事件还没冒泡到。。。所以这个时候activeRowIdx是空的）#亲测，要解决只能把逻辑代码写在settimeout里面等事件冒泡，这真是辣鸡做法#。检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的.说是有个值班表单，里面要进行值班人员下拉，下拉就下拉吧，他还得再下拉选择以后要把这个人的电话号码也查出来,这一句就够了，数组对象生成，下拉也没问题，接下来就是通过@change事件进行电话号码回填功能，也很简单，如下,很直观，现成官方@Change的事件，返回item对象，没问题，如第一张图所示。以为一切都能结束了，往往事与愿违，因为正常的表单，都有编辑功能，好了点开维护好的值班表单，懵逼了，所有的人员下拉都是value值，不能正确显示label！",
        },
        {
          index: 7,
          title: "第七章 PHP",
          date: "2024/10/29",
          isShow: false,
          content:
            "检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的检查组件名称的对象属性是否已经存在于 componentsFile 对象中。如果存在，脚本将记录一条错误消息，并使用非零退出代码退出进程。如果组件不存在于 ComponentsFile 中，脚本将在对象上设置一个新属性，其中包含组件的名称和到达组件主入口点的路径的值(./package/${ Component entname }/index.js).最后，脚本使用文件保存库将修改后的 ComponentsFile 对象写入 Components.json 文件，该文件采用缩进格式，并在文件末尾使用换行符。其他文件的",
        },
        {
          index: 8,
          title: "第八章 4点起床不一定行，但早睡早起很可以",
          date: "2024/10/30",
          isShow: false,
          content:
            "整体上给它打 3 颗星，可读可不读那种。而这本书是我买其他书时，凑单顺手买的，目前已经挂在多抓鱼上卖掉了。那为什么还是给大家分享呢？主要是它提供了一种生活方式。几年前听说过日本留行过一阵“朝忙族”，指的是那些，选择早上早起工作，而不是晚上加班的人群。查看这本书的出版时间，正好是那个时候，可以确定这本书与这阵风潮有一定关系。如今这股潮流已经过去，但这也说明了一些问题。毕竟对于大多数人来说，凌晨四点起床确实非常艰难。不过，书中提倡的早睡早起理念，我还是很推荐的。在这里分享几点对我触动较大的内容。很多上班族有一个习惯：晚上加班才能完成任务。然而，作者更提倡早起干活，因为这是由人类的生理规律决定的。事实上，研究表明大脑在下班后会逐渐进入休息状态，而早起则能够充分利用身体中荷尔蒙的激活，从而完成这些事情更轻松。写作也是如此。虽然一些创作者可能认为灵感是他们工作的关键，但许多欧美作家已经开始提倡将写作日常化，使用具体方法来进行写作，而不是仅仅依靠灵感。中国也有不少作家开始模仿这一做法，例如已完成多部畅销小说的马伯庸先生，他每年完成几部小说，其著作量远超同行。我个人观点认为，晚上工作的人往往需要一个没人打扰的环境，而早上同样可以实现这一目标。我曾经问过一些早睡早起的朋友，他们都说有过一种平静的喜悦，这种感觉很难用言语描述，也许是来自于长期规律生活的多巴胺。我个人也是如此，在一段早睡早起的时间后，感到一种特殊的满足感。如果你也想尝试这种感觉，我建议你至少持续一个月（甚至更久）的早睡早起。早起之后可以进行哪些活动？享用一顿营养均衡的早餐是必不可少的，这有助于确保一整天的精神饱满。如果你是有家庭的人，与家人共度一段早餐时光，还能够增进家庭成员之间的情感联系。书中还提到很多建议都围绕着输入和输出的。例如，多读书、多写作等。虽然直接开始大量输出对许多人来说可能有些困难，但其实每天记录一些日志会更加可行。这里所说的“日志”并非传统的个人日记，而是指一种记录日常活动的笔记形式。通过撰写日志，您可以总结前一天所做的事情，并为当天制定详细的计划清单。明确哪些任务是重要的，哪些是非做不可的。这样做有助于您更好地管理自己的时间与工作安排，确保每一天都有条不紊地进行，有利于你告别无意义感和瞎忙的状态。此外，这样的习惯还有助于推进那些重要但并非紧急的任务，避免它们被忽视或延误。早起后，是否应该获取信息？自人类进入现代文明以来，报纸、收音机、电视和互联网的出现使得人们进入了信息过载的时代。如果我们仍然像以前一样被动地接收信息，最终只会接收到大量无用的信息。中提出的一个观点我认为颇有参考价值，即批判性阅读新闻。例如，在阅读股市财经类新闻时，应当质疑股价与该新闻的相关性。当然，这种做法对个人的要求似乎较高，需要每次都能动用自己的大脑进行思考。我个人的做法更为彻底，我删除了所有的新闻应用程序，甚至包括抖音在内的所有字节系应用。这些应用的推送机制非常奇怪，故意模糊了时间点，导致你看到的可能是几年前的旧闻。后来，许多应用都采用了类似的推送方式。因此，我干脆屏蔽了所有的新闻客户端。有人可能会问，那你的新闻资讯从哪里获取呢？实际上，在日常生活中，自然会有同事，在茶歇或饭间，讨论重要的新闻事件，所以根本不用担心自己会错过重要信息。书中关于应对熬夜的方法，我个人觉得非常有参考价值。我们都知道，作为程序员或白领，偶尔熬夜在所难免，而一次熬夜可能会导致接下来两到三天内精神状态不佳，感觉昏昏沉沉。书中提供了一个很好的方法：如果知道自己要熬夜，可以先睡3个小时，然后再起来继续熬夜。这种方法能在一定程度上缓解因熬夜带来的负面影响。这本书相关的内容就讲这么多。剩下的大部分都是讲职场的作者个人分享，不适合我，我感受也不深。所以就分享到这里。",
        },
      ],
      value: new Date(),
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
      //console.log(value, "value===============================>")
    },
    // 日期选择
    getCreateTime(val) {
      this.input.date = val
    },
    /**
     * 新增
     */
    addClick(dialogInput) {
      //
      this.dialogInput = -1
      console.log((dialogInput = -1), "asdasd")
      this.dialogVisible = true
      this.input.date = new Date()
    },
    //弹窗关闭回调行数
    closeDialog() {
      this.input.id = ""
      this.input.title = ""
      this.input.date = ""
      this.input.content = ""
    },
    // 提交
    branchSubmit(dialogInput) {
      this.dialogVisible = false
      // console.log("asdasdasdasdasdasd")

      if (dialogInput === -1) {
        console.log(dialogInput, "editInput========>")
        this.listText.push({
          index: this.listText.length + 1,
          title: this.input.title,
          date: this.input.date,
          isShow: false,
          content: this.input.content,
        })
      } else {
        //
        this.listText[dialogInput].id = this.input.id
        this.listText[dialogInput].title = this.input.title
        this.listText[dialogInput].date = this.input.date
        this.listText[dialogInput].content = this.input.content
      }

      this.input.id = ""
      this.input.title = ""
      this.input.date = ""
      this.input.content = ""
    },
    /**
     * 修改点击事件
     */
    editEvent(editIndex) {
      //
      // this.disabled = true
      this.dialogVisible = true
      this.dialogInput = editIndex

      this.input.id = this.listText[editIndex].id
      this.input.title = this.listText[editIndex].title
      this.input.date = this.listText[editIndex].date
      this.input.content = this.listText[editIndex].content
    },
    /**
     * 删除点击事件
     */
    deleteEvent(delIndex) {
      //
      console.log(delIndex, "delIndex==============================>")
      this.listText.splice(delIndex, 1)
    },
    // 富文本
    updateDoc(value, render) {
      // render 为 markdown 解析后的结果
      this.input.content = render
    },
  },
}
</script>

<style lang="less">
@import "../../../public/static/less/base.less";
</style>
