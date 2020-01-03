<template>
  <div class="app">
    <div class="Centered">
      <el-input class="input" placeholder="请输入要查找的内容" suffix-icon="el-icon-search" v-model="input"></el-input>
      <div class="main">
        <div
          class="cmdlist-text"
          v-for="(item,index) in typeList"
          :key="index"
          @click="shopinfo(item.id)"
        >
          <div class="img">
            <img src="@/assets/img/avatar3.jpg" />
          </div>
          <div class="shopname">{{item.name}}</div>
        </div>
        <!-- <el-pagination
          background
          layout="prev, pager, next"
          :total="pagination.total"
          :current-page="pagination.page"
          @current-change="pageChange"
          class="mypage"
        />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop",
  data() {
    return {
      input: "",
      // 分页器
      pagination: {},
      typeList: []
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.details();
  },
  methods: {
    details() {
      var id = this.$route.params.id;
      this.$api.firstlevel.findByAssistant({ id }).then(res => {
        this.typeList = res;
        console.log(res);
      });
    },
    shopinfo(id) {
      this.$router.push({ name: "commodityInfo", params: { id: id } });
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
  // 设置阴影
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  background-color: #fff;
  font-size: 14px;
}
.main {
  display: flex;
  flex-wrap: wrap;

  .cmdlist-text {
    margin-left: 60px;
    margin-top: 60px;
    width: 200px;
    .img {
      display: flex;
      justify-content: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .shopname {
      padding: 20px;
      color: rgb(133, 133, 134);
      text-align: center;
    }
  }
}
</style>