<template>
  <div class="card-container">
    <div class="card">
      <img src="" alt="" />
      <div class="title">粤剧博物馆</div>
      <div class="content">
        2012年，为保护和传承广东省唯一的世界非物质文化遗产——粤剧艺术，广州市政府决定于荔湾老城区建设粤剧艺术博物馆
        [2]
        。同年3月，广州市政府牵头成立了粤剧艺术博物馆筹建领导小组，下设办公室在荔湾区政府，正式启动粤剧艺术博物馆项目筹建工作。同年11月26日上午，广州市在恩宁路举行粤剧艺术博物馆奠基仪式。
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <img src="" alt="" />
        <div class="title">菌类</div>
        <div class="content">
          这是2022年在东莞松山湖森林公园里拍的，当时的这几天是下着小雨的，沿着松山湖边沿走了差不多一圈可以发现很多有趣的小物品，当时还是荔枝的旺季。我们走到荔枝树下偷偷的摘下几颗来吃，要是被人发现估计的抓起来赔钱，哈哈哈哈哈！拍了很多照片，这是唯一一张满意的出片度很高。
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="less">
* {
  font-family: sans-serif;
}
.card-container {
  width: 80vw;
  margin: 0 auto;
  contain: layout inline-size;
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    box-shadow: 0 0 24px rgb(0, 0, 0, 0.2);
    padding: 24px;
    margin: 10px 20px;
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      grid-row: 1 / 3;
    }
    .title {
      font-size: 24px;
      margin: 18px 0;
    }
    @container (max-weidth: 850px) {
      .card {
        grid-template-columns: 1fr;
      }
      img {
        grid-row: 1;
      }
    }
  }
}
</style>
