<template>
  <div class="web-code">
    <!-- <div class="webcode-itemleft">左侧</div>
    <div class="webcode-itemright">右侧</div> -->
    前端
    <div class="border-text">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.web-code {
  position: relative;
  width: 100%;
  // height: 500px;
  background: rgba(#000000, 0);
  // .webcode-itemleft {
  //   width: 20%;
  //   height: 500px;
  //   background-color: #ffffff;
  // }

  .border-text {
    position: absolute;
    width: 50%;
    height: 400px;
    left: 50%;
    top: -50%;
    transform: translate(-50%, 50%);
    border: 1px solid #000000;
  }
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 40%;
  /* margin: ; */
}
</style>
