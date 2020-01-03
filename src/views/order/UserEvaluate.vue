<template>
  <div class="userEvaluate">
    <div class="top_userEvaluate">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" clearable></el-input>
    </div>
    <div class="botton_userEvaluate">
      <div class="title_userEvaluate_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
        >
          <el-table-column prop="username" label="用户名" width="120"></el-table-column>
          <el-table-column prop="phone" label="联系电话"></el-table-column>

          <el-table-column prop="spendMoney" label="商品类型"></el-table-column>
          <el-table-column prop="spendMoney" label="购买数量"></el-table-column>
          <el-table-column prop="spendMoney" label="付款状态"></el-table-column>
          <el-table-column prop="spendMoney" label="物流名称"></el-table-column>
          <el-table-column prop="spendMoney" label="物流单号"></el-table-column>
          <el-table-column label="操作">
            <template>
              <router-link to="/orderDetails" style="cursor:pointer; color:#b4b4b4 ">查看详情></router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- <el-pagination
          background
          layout="prev, pager, next"
          :total="pagination.total"
          :current-page="pagination.page"
          class="mypage"
        />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      tableData: []
    };
  }
};
</script>

<style lang="scss" scoped>
.userEvaluate {
  background-color: #fff;
  .top_userEvaluate {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .botton_userEvaluate {
    margin-top: 50px;
    // padding-bottom: 30px;
    border-top: 1px solid rgb(237, 237, 237);
    .title_userEvaluate_tp {
      padding: 20px;
      margin-top: 20px;
    }
  }
}
</style>