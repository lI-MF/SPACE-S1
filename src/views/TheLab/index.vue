<template>
  <div class="box">
    <div ref="txttype" class="TheLab" v-for="item in textBox" :key="item.id">
      <div :class="hidetext == true ? 'room_intro showEllipsis' : 'room_intro'">
        {{ item.content }}
      </div>
      <span class="btnWrap" v-if="nomore" @click="lookmore">
        <a class="more"
          >{{ moretext
          }}<i
            :class="
              hidetext == false ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
            "></i
        ></a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ellipsisText",
  props: {
    //父组件传过来的文本
    // content: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      moretext: "查看更多",
      nomore: true,
      hidetext: false,

      textBox: [
        {
          // title: "第一章 Web前端",
          // date: "2023/10/12",
          // btnText: "全文阅读",
          content:
            "我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。2我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。3我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。我也在用这个组件搭建博客，好处是博客可以一件打包备份的，包括文章和图片一起打包，对于后续的迁移非常的好。至于访问速度，就是带宽问题，我认为不是什么问题。能用就行了。等于有了一个云笔记本。",
        },
      ],
    }
  },
  mounted() {
    //通过ref获取对应dom节点的高度，注意20为单行时的高度
    let hei = this.$refs.txttype.clientHeight
    //当获取的高度大于20时，即当前文本为多行，设置添加收起文本的class，
    //当获取的高度等于20时，隐藏查看更多按钮
    if (hei > 20) {
      this.hidetext = true
      this.nomore = true
    } else if (hei == 20) {
      this.nomore = false
    }
  },
  methods: {
    //查看更多
    lookmore() {
      this.hidetext = !this.hidetext
      this.moretext = this.hidetext == true ? "查看更多" : "收起"
    },
  },
}
</script>
<style lang="less" scoped>
.TheLab {
  margin-top: 12px;
  position: relative;
  // .Flex();
  .room_intro {
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
  }
  .showEllipsis {
    // 文本溢出超出两行显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .btnWrap {
    align-self: flex-end;
    cursor: pointer;
  }
}
</style>
