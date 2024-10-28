<template>
  <div class="card-code">
    <div class="card-container">
      <!-- Left 卡片展示区 -->
      <div class="card" v-for="item in arrImgText" :key="item.id">
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

          <!-- 按钮 -->
          <div class="btn-card">
            <el-button
              type="warning"
              icon="el-icon-view"
              @click="openClick(item)"
              circle></el-button>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <!-- <div class="block">
        <el-pagination
          hide-on-single-page
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-sizes="[5, 10, 30, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div> -->
    </div>

    <!-- 分割线 -->
    <!-- <el-divider direction="vertical"></el-divider> -->
    <!-- Right 分类导航  -->
    <!-- <div class="card-menu"></div> -->
  </div>
</template>

<script>
export default {
  // 子组件传值
  props: {
    arrImgText: {
      type: [Number, String, Array],
      default: "create",
    },
    openClick: {
      type: Function,
    },
  },
  data() {
    return {
      landList: [],
      landId: null,
    }
  },
  methods: {},
}
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
      bottom: 0;
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
