<template>
  <div class="ten-S">
    <div class="the-universe">
      Welcome to the universe!
      <el-button circle @click="$router.push('/Home')">
        <div class="change-icon">
          <i class="el-icon-switch-button"></i>
        </div>
      </el-button>
    </div>
  </div>
</template>

<script>
</script>


<style lang="less">
.ten-S {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
  .the-universe {
    position: absolute;
    z-index: 99999;
    width: 45%;
    height: 80px;
    line-height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin: -40px 0 0 -40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    letter-spacing: 2px;
    font-size: 3rem;
    text-decoration: none;
    font-family: cursive;
  }
  .el-button--warning {
    color: #fff;
    width: 80px;
    height: 80px;
  }
  .el-button.is-circle {
    border-radius: 20% 20% 20% 20%;
    height: 130px;
    padding: 20px;
  }
  .change-icon {
    font-size: 50px;
  }
}
</style>