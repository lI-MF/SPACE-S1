<template>
  <div class="comp_function">
    <!-- 功能卡片 -->
    <div class="comp_function-items">
      <!-- 具名插槽 -->
      <slot name="write-btn"> </slot>
    </div>
  </div>
</template>
<script>
//
</script>
<style lang="less">
.comp_function {
  .comp_function-items {
    width: 100%;
    height: 46px;
    margin: 0 10px;
    // background-color: #ffffff;
    border-radius: 6px;
    // box-shadow: 3px 5px 5px #656b79;
    position: static;
    .function_btn {
      margin: 2px 10px 2px 10px;
    }
  }
}
</style>
