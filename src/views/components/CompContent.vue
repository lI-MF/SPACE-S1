<template>
  <div class="content-main">
    <div class="content-issue">
      <slot name="toolscontent"></slot>
    </div>
    <div class="content-item" v-for="(item, index) in textBox" :key="index">
      <!-- 头像 -->
      <div class="user">
        <slot name="toolsbar"></slot>
        <!-- 标题 -->
        <div class="content-title" @click="contentTitle(item)">
          {{ item.title }}
        </div>
      </div>

      <!-- 发布时间 -->
      <div class="release-time">
        <div class="release">发布于</div>
        <div class="time">{{ item.date }}</div>
      </div>

      <!-- 内容 -->
      <div class="content-box" ref="texttype">
        <!-- 内容 -->
        <div
          :class="
            item.isShow === false ? 'room_intro showEllipsis' : 'room_intro'
          ">
          <div class="content_text">
            {{ item.content }}
          </div>
        </div>
      </div>
      <!-- 全文跳转 -->
      <div class="full-text">
        <el-link
          v-if="nomore"
          class="btnWrap"
          @click="readBtnTo(index, item.isShow)">
          <a class="more">
            <i
              :class="item.isShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
              >{{
                item.isShow === false && moretext ? "全文阅读" : "收起全文"
              }}</i
            >
          </a>
        </el-link>
        <p>{{ item.message }}</p>
        <!-- 扩展功能 修改、删除 -->
        <div class="full_extension">
          <el-tooltip placement="left">
            <div slot="content">
              <div>
                <i
                  class="iconfont icon-xiugai"
                  @click="editClickEvent(index)"></i>
                <i
                  class="iconfont icon-shanchu"
                  @click="deleteClickEvent(index, true)"></i>
              </div>
            </div>
            <span>
              <i class="iconfont icon-diandiandian"></i>
            </span>
          </el-tooltip>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import CompFunction from "../components/CompFunction.vue"
export default {
  // 注册
  components: {
    // CompImgage,
    // CompFunction,
  },
  // 子传父
  props: {
    textBox: {
      type: [Object, Array],
      default: () => {},
    },
    contentTitle: {
      type: Function,
    },
    editClickEvent: {
      type: Function,
    },
    deleteClickEvent: {
      type: Function,
    },
  },

  data() {
    return {
      moretext: "阅读全文",
      nomore: true,
      hidetext: false,
    }
  },

  mounted() {
    let hei = this.$refs.txttype
    if (hei > 20) {
      this.hidetext = true
      this.nomore = true
    } else if (hei === 20) {
      this.nomore = false
    }
  },

  methods: {
    readBtnTo(index, isShow) {
      this.hidetext = !this.hidetext
      this.$emit("listEvent", index, !isShow)
    },
  },
}
</script>
<style lang="less">
.el-tooltip__popper.is-dark {
  width: 80px;

  background: transparent !important;
  // display: flex;
  // justify-content: center;
  i {
    font-size: 20px;
    padding: 10px;
    color: #dc943b;
    &:hover {
      color: hsl(33, 78%, 33%);
      cursor: pointer;
    }
  }
}
.el-tooltip__popper[x-placement^="left"] .popper__arrow::after {
  right: 1px;
  bottom: -5px;
  margin-left: -5px;
  border-right-width: 0;
  border-left-color: #ffffff !important;
}
.el-tooltip__popper[x-placement^="left"] .popper__arrow {
  right: -6px;
  border-right-width: 0;
  border-left-color: #ffffff !important;
}
</style>
