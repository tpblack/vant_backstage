<template>
  <div class="app">
    <div class="Centered">
      <el-input class="input" placeholder="请输入要查找的内容" suffix-icon="el-icon-search" v-model="input"></el-input>
      <div class="main">
        <div class="cmdlist-text" v-for="(item,index) in typeList" :key="index">
          <div class="img">
            <img src="@/assets/img/avatar3.jpg" />
          </div>
          <div class="shopname">{{item.title}}</div>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="pagination.totalElements"
          :current-page="pagination.page"
          @current-change="pageChange"
          class="mypage"
        ></el-pagination>
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
      var id = this.$route.params.id;
      let page = this.pagination.totalPages || 1;
      this.$api.firstlevel.findByType({ page, row: 5, id }).then(res => {
        let { typeList, totalElements, totalPages } = res;
        console.log(totalElements);
        console.log(totalPages);
        this.typeList = res.content;
        console.log(res);

        this.pagination = {
          totalPages,
          totalElements
        };
      });
    },
    //页面改变的方法
    pageChange(index) {
      //当前页码
      // console.log(index);
      //页码改变 重新修改分页器
      this.pagination.totalPages = index;
      //重新查询
      this.details();
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
      .mypage {
        align-items: center;
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