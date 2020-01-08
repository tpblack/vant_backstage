<template>
  <div class="app">
    <div class="Centered">
      <div class="main">
        <div class="cmdlist-text" v-for="(item,index) in typeList" :key="index">
          <div>
            <div class="img">
              <img src="@/assets/img/avatar3.jpg" />
            </div>
            <div class="shopname">{{item.title}}</div>
          </div>
        </div>
        <div class="pageinfo">
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
  </div>
</template>

<script>
export default {
  name: "shop",
  data() {
    return {
      // 分页器
      pagination: {},
      typeList: [],
      //input值
      input: "",
      dialogVisible: false
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
      // 如果文本框有值
      if (this.query) {
        params.title = this.query;
      }
      this.$api.firstlevel.findByType({ page, row: 10, id }).then(res => {
        let { image, totalElements, page } = res;
        this.typeList = res.content;
/*          console.log(res);
 */
        this.pagination = {
          page,
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
    },
    queryList(value) {
      this.query = value;
      // 每次进行查询page归1
      this.pagination.totalPages = 1;
      this.details();
    },
    //点击修改 把当前分类名字存入修改input框
    modfiyTwoGoods(item) {
      this.input = item.title;
      this.dialogVisible = true;
    },
    //点击确认保存修改的名字
    keepmodify(item) {
      this.$api.firstlevel.save({title:this.input}).then(res => {
        console.log(res);
      });
      this.dialogVisible = true;
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
.Centered {
  align-items: center;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .cmdlist-text {
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.pageinfo {
  width: 100%;
  text-align: center;
}
</style>