<template>
  <div class="customerInfo">
    <div class="top_customerInfo">
      <el-input
        placeholder="请输入用户名"
        prefix-icon="el-icon-search"
        @change="search"
        v-model="input2"
        clearable
      ></el-input>
    </div>
    <div class="botton_customerInfo">
      <div class="title_customerInfo_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
        >
          <el-table-column prop="username" label="用户名" width="280"></el-table-column>
          <el-table-column prop="phone" label="联系电话">
            <!-- <template slot-scope="scope"> -->
            <!-- scope.row当前表格对象 -->
            <!-- 过滤器 过滤职位列表 -->
            <!-- {{jobTypeUpdata(scope.row.job_type)}}
            </template>-->
          </el-table-column>
          <el-table-column prop="num" label="消费总单数"></el-table-column>
          <el-table-column prop="total" label="消费总金额"></el-table-column>
          <el-table-column prop="notEvaluated" label="未评价数量"></el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="pagination.totalElements"
          :current-page="pagination.page"
          @current-change="pageChange"
          class="mypage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      tableData: [],
      // 表格加载状态
      isLoading: false,

      // 分页器
      pagination: {}
    };
  },
  mounted() {
    this.customerQueryByUsername();
  },
  methods: {
    search() {
      this.pagination.page = 1;
      this.customerQueryByUsername();
    },
    // 根据用户账号查询
    customerQueryByUsername() {
      let inputText = this.input2;
      let page = this.pagination.page || 1;
      // 在发送请求之前  将表格设为加载状态
      this.isLoading = true;
      this.$api.customerInfo
        .consumptionFindByUserNameLike({ page, row: 10, userName: inputText })
        .then(res => {
          // 在发送请求之前  将表格加载状态取消
          this.isLoading = false;
          let { list, totalElements } = res;
          this.tableData = list;
          console.log(res);
          this.pagination = { page, totalElements };
        });
    },
    // 页面改变的方法
    pageChange(index) {
      // 页码改变 重新修改分页器
      console.log(this.pagination.page);
      this.pagination.page = index;
      // 重新查询
      this.customerQueryByUsername();
    }
  }
};
</script>

<style lang="scss" scoped>
.customerInfo {
  // 设置阴影
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  background-color: #fff;
  .top_customerInfo {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .botton_customerInfo {
    margin-top: 50px;
    // padding-bottom: 30px;
    border-top: 1px solid rgb(237, 237, 237);
    .title_customerInfo_tp {
      padding: 20px;
      margin-top: 20px;
    }
  }
}
</style>