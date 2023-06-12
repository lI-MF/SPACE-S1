<template>
  <div class="card-code">
    <div class="card-container">
      <!-- Left 卡片展示区 -->
      <div class="card" v-for="item in arr1" :key="item.id">
        <el-image :src="item.imgUrl"
          ><div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div></el-image
        >
        <div class="title">{{ item.title }}</div>
        <div class="content">
          <div class="conten-item">
            {{ item.text }}
          </div>

          <div class="btn-card">
            <el-button type="warning" icon="el-icon-view" circle></el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <!-- <el-divider direction="vertical"></el-divider> -->
    <!-- Right 分类导航  -->
    <!-- <div class="card-menu"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: [
        {
          id: 1,
          title: "广东粤剧博物馆",
          imgUrl: require("@/./assets/imgage/IMG_20220610_185733.jpg"),
          text: " 2012年，为保护和传承广东省唯一的世界非物质文化遗产——粤剧艺术，广州市政府决定于荔湾老城区建设粤剧艺术博物馆[2]。同年3月，广州市政府牵头成立了粤剧艺术博物馆筹建领导小组，下设办公室在荔湾区政府，正式启动粤剧艺术博物馆项目筹建工作。同年11月26日上午，广州市在恩宁路举行粤剧艺术博物馆奠基仪式。2012年，为保护和传承广东省唯一的世界非物质文化遗产——粤剧艺术，广州市政府决定于荔湾老城区建设粤剧艺术博物馆[2]。同年3月，广州市政府牵头成立了粤剧艺术博物馆筹建领导小组，下设办公室在荔湾区政府，正式启动粤剧艺术博物馆项目筹建工作。同年11月26日上午，广州市在恩宁路举行粤剧艺术博物馆奠基仪式。",
        },
        {
          id: 2,
          title: "菌类",
          imgUrl: require("@/./assets/imgage/IMG_20220611_181906.jpg"),
          text: " 这是2022年在东莞松山湖森林公园里拍的，当时的这几天是下着小雨的，沿着松山湖边沿走了差不多一圈可以发现很多有趣的小物品，当时还是荔枝的旺季。我们走到荔枝树下偷偷的摘下几颗来吃，要是被人发现估计的抓起来赔钱，哈哈哈哈哈！拍了很多照片，这是唯一一张满意的出片度很高。",
        },
        {
          id: 3,
          title: "早晨的日出",
          imgUrl: require("@/./assets/imgage/the_sky.jpg"),
          text: "这是2022年10月02日，在老爸工作的船尾上拍的，那时候在老爸工作的船上过了一夜，早早就起床看日出随手就拍下了这张图片，这张图片显得多安静，拍的时候海里的渔民早早的开着小船出来捕鱼工作了，站在船尾上闭上眼睛静静的感受海风吹到脸上是多舒服。",
        },
        {
          id: 4,
          title: "广州海心沙晚霞",
          imgUrl: require("@/./assets/imgage/gz_hcs.jpg"),
          text: "这是在广州海心沙刚建不久的人行桥上拍的，当时站在桥上拍下的这一幕晚霞，这日落虽然没有想象的这么美，但是也算是很温馨的色调，所以记录一下当下的一幕，不过这拍照的技术有待提升，想维持好现在唯一的爱好，走过每一个地方就记录每一个地方最美的一瞬间，这岂不美哉？因为一生中被我们忽略掉美好的东西实在再多了。",
        },
        {
          id: 5,
          title: "广州文化馆",
          imgUrl: require("@/./assets/imgage/gzwhg.jpg"),
          text: "广州市文化馆（原广州市群众艺术馆）成立于1956年，是国家设立的公益性文化事业单位，隶属于广州市文化广电旅游局。新馆项目选址于广州新中轴南段、海珠湖东北侧地块，北邻新滘中路、东靠新光快速路、西南与海珠湖相望。",
        },{
          id: 6,
          title: "深圳人才公园",
          imgUrl: require("@/./assets/imgage/sz.jpg"),
          text: "人才公园地处深圳市南山区后海片区，毗邻深圳湾超级总部基地，与深圳湾滨海休闲带相连，占地面积77万平方米，其中湖体面积30万平方米。",
        },
      ],
    };
  },
};
</script>

<style lang="less">
* {
  font-family: sans-serif;
}
.card-container {
  width: 60vw;
  margin: 0 auto;
  contain: layout inline-size;
  .card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    box-shadow: 0 0 24px rgba(26, 25, 25, 0.2);
    padding: 24px;
    margin: 15px 20px;
    background-color: #fff;
    border-radius: 10px 10px 10px 10px;
    .el-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      grid-row: 1 / 3;
      // border-radius:10px 10px 10px 10px;
    }
    .title {
      font-size: 24px;
      margin: 18px 0;
      line-height: 10px;
    }
    .content {
      position: relative;
      .conten-item {
        position: absolute;
        bottom: 45px;
        left: 0;
        height: 146px;
        line-height: 30px;
        text-indent: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
    .btn-card {
      position: absolute;
      right: 15px;
      top: 2px;
      .el-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: aliceblue;
        // margin-left: 20px;
      }
      .change-icon {
        font-size: 20px;
      }
    }
    @container (max-weidth: 850px) {
      .card {
        grid-template-columns: 1fr;
      }
      .el-image {
        grid-row: 1;
      }
    }
  }
}
</style>