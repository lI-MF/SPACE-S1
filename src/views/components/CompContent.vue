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

          <!-- 图片 -->
          <!-- <div class="content_block">
            <el-image :src="item.contentSrc">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div> -->
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 注册
  components: {
    // CompImgage,
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
<style lang="less"></style>
