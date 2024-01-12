<template>
  <div class="TreeHoles">
    <div class="TreeHoles-item-content">
      <!-- 内容区 -->
      <comp-content :textBox="listText" @listEvent="changeList">
        <!-- 发布内容 -->
        <template v-slot:toolscontent>
          <el-form
            :model="bulletin"
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm">
            <el-form-item prop="content">
              <div class="form-conten">
                <el-input
                  type="textarea"
                  v-model="bulletin.content"
                  :rows="4"
                  placeholder="快来分享一下生边的琐事吧！"
                  maxlength="350"
                  @input="descInput">
                </el-input>
                <span style="color: #999" class="remaining"
                  >{{ remnant }}/350</span
                >
              </div>
            </el-form-item>
          </el-form>
          <el-row>
            <el-button type="primary"
              ><i class="iconfont icon-fabu"></i
            ></el-button>
          </el-row>
        </template>
        <!-- 具名插槽 头像 -->
        <template v-slot:toolsbar>
          <el-image :src="imgUrl"> </el-image>
        </template>
      </comp-content>
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
      // textarea: "",
      remnant: "",

      bulletin: {
        //表单
        content: null,
      },
      rules: {
        content: [
          { required: true, message: "请输入模板内容", trigger: "blur" },
          { max: 350, message: "长度在 350个字符", trigger: "blur" },
        ],
      },

      imgUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      listText: [
        {
          index: 1,
          title: "匿名用户",
          date: "2023/10/12",
          isShow: false,
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。1、我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。2、我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
        {
          index: 2,
          title: "匿名用户",
          date: "2023/11/12",
          isShow: false,
          content:
            "华为外包工作真心干不下去了，经常加班，周末双休基本不能保证，钱少活多。好想裸辞专心复习考研一个月，但是年底要见女朋友父母，总不能没工作去见吧，每月要给5000家里家用，总不能说断就断吧，好想遵从自己内心的想法去实现目标.",
        },
        {
          index: 3,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "兄弟们，老家西北，在杭州买房了付了首付（总价200w）。工资1.7，这样的生活满足吗。现在没存款了，还没买车，还要装修，还没结婚，有女朋友。",
        },
        {
          index: 4,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "jym，跟前任女朋友分开有半年了，因为一件小事算是冷暴力分手了，我两都有问题。这半年内一直感觉没走出来，心里一直有块石头，一直以来内心有个强烈的想法加好友见个面好好告个别，算是弥补下遗憾吧。没有别的想法，可以吗？",
        },
        {
          index: 5,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "兄弟们,公司拖欠工资到今天已经整整一月了,本该今天发的11月份的工资也不知道会不会发,项目又有点急,但是钱不到账,真不想干活,怎么调整这种心态啊[流泪]",
        },
        {
          index: 6,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "合租的一男生，每天洗澡一个多小时，每天都洗哦，晚上洗头，早上洗头，是不是有病啊，因为合租的地方不是很隔音，大家洗澡都是十几分钟，最多的也就半小时，洗一个多小时的是不是有毛病啊。",
        },
        {
          index: 7,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "有一个女性朋友，发小那种，从小一起长大的。昨天向我哭诉: 她和现男友在北京打拼，前男友来北京，提出要和她见面，她把这件事告诉了现男友，征求现男友的意见。现男友给她答复: 相信她能做出正确的决定，然后亲了一下她就去上班了，其实她是想着让现男友一起去的，听到现男友的答复很矛盾去还是不去，最终还是决定去见面。见面以后和前男友聊了一些这些年的经历，前男友表示后悔提出分手，想复合，发小拒绝了，后来带着前男友逛了北京几个景点。晚上一起喝了些酒，因为喝了洒怕现男友生气就让闺蜜来接她在闺蜜家过了夜，第二天早是还有点宿醉，但是还是坚持回到了家现男友看到她这个样子很是心疼，一问还没吃完饭，给她做了早饭，照顾她上床休息。但是等到下午发小醒过来的时候，现男友已经收拾好了自己的行李，并郑重提出分手，在发小还是一脸懵的情况下毅然离开他们共同的出租房，发小开始慌了，晚上的时候给现男友打电话，现男友说等待她的答复。她和前男友是大学时期的恋人，因为毕业后，两地分居，前男友找了新女朋友而分手，后来认识了现男友，恋爱两年，同居一个月，见了家长，准备结婚，现在两人正在攒钱在家长城市买房，之前感情特别好。同为男人我知道她男朋友是怎么想的，可是我也不知道怎么帮助她。",
        },
        {
          index: 8,
          title: "匿名用户",
          date: "2023/12/12",
          isShow: false,
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
      ],
    }
  },

  methods: {
    // 字数
    descInput() {
      var txtVal = this.bulletin.content.length
      this.remnant = 350 - txtVal
    },

    // 全文阅读事件
    changeList(index, isShow) {
      this.listText[index].isShow = isShow
    },
  },
}
</script>

<style lang="less">
@import "../../../public/static/less/base.less";
</style>
