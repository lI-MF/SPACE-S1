<template>
  <!-- 归档 -->
  <div class="main-file">
    <div class="main_file-items">
      <!-- 总布局 -->
       <!-- 标题 -->
        <h1 class="file_title">归档</h1>
        <!-- 内容 -->
         <div class="file_content">
          <!--  -->
         </div>
    </div>
  </div>
</template>
<script>
//
export default {
  data() {
    return {
      //
    }
  },
}
</script>
<style lang="less" >
.main-file{
  position: relative;
  .main_file-items{
    // 
    position: absolute;
    width: 60%;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 10px 10px 10px 10px;
    background-color: #ffffff;
    box-shadow: 0 0 24px rgba(26, 25, 25, 0.2);
    // 标题
    .file_title{
      top: 10px;
    }
    .file_content{
      // 
    }
  }
}
</style>