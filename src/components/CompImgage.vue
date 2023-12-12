<template>
  <div class="user-heads">
    <div>
      <el-image :src="imgUrl"> </el-image>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // imgUrl: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      imgUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    }
  },
  methods: {
    // url() {
    //   this.$emit("imgUrl")
    // },
  },
}
</script>
