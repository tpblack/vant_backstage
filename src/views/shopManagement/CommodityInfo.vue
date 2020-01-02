<template>
  <div class="app">
    <div class="Centered">
      <el-input class="input" placeholder="请输入要查找的内容" suffix-icon="el-icon-search" v-model="input"></el-input>
      <div class="main">
        <div class="cmdlist-text" v-for="(item,index) in typeList" :key="index">
          <div class="img">
            <img src="@/assets/img/avatar3.jpg" />
          </div>
          <div class="shopname"></div>
        </div>
        <div class="mypage">
          <el-pagination
            layout="prev, pager, next"
            :total="pagination.total"
            :current-page="pagination.pages"
            @current-change="pageChange"
          ></el-pagination>
        </div>
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
    //得到商品信息
    details() {
      // 默认传递页码
      let params = {
        page: this.pagination.page || 1
      };
      this.$api.firstlevel.findByType(params).then(res => {
        this.typeList = res;
        console.log(res);
        this.pagination = {
          page,
          total
        };
      });
    },
    //页面改变的方法
    pageChange(index) {
      //当前页码
      // console.log(index);
      //页码改变 重新修改分页器
      this.pagination.page = index;
      //重新查询
      this.details();
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
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
      .mypage {
        text-align: center;
        margin-top: 20px;
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