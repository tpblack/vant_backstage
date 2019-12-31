<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="isLoading"
      :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
    >
      <el-table-column prop="spendMoney" label="商品"></el-table-column>
      <el-table-column prop="spendMoney" label="购买数量"></el-table-column>
      <el-table-column prop="spendMoney" label="邮费"></el-table-column>
      <el-table-column prop="spendMoney" label="实付金额"></el-table-column>
      <el-table-column prop="spendMoney" label="付款时间"></el-table-column>
      <el-table-column prop="spendMoney" label="物流名称"></el-table-column>
      <el-table-column prop="spendMoney" label="物流单号"></el-table-column>

      <el-table-column label="操作">
        <template>
          <router-link to="/orderDetails" style="cursor:pointer; color:#b4b4b4 ">查看详情></router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pagination.total"
      :current-page="pagination.page"
      class="mypage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      // 表格加载状态
      isLoading: false,
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {}
    };
  }
};
</script>

<style lang="scss" scoped>
</style>