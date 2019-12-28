<template>
  <div class="customerInfo">
    <div class="top_customerInfo">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" clearable></el-input>
    </div>
    <div class="botton_customerInfo">
      <div class="title_customerInfo_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
        >
          <el-table-column prop="username" label="姓名" width="280"></el-table-column>
          <el-table-column prop="phone" label="联系电话">
            <!-- <template slot-scope="scope"> -->
            <!-- scope.row当前表格对象 -->
            <!-- 过滤器 过滤职位列表 -->
            <!-- {{jobTypeUpdata(scope.row.job_type)}}
            </template>-->
          </el-table-column>
          <el-table-column prop="latelyShopTime" label="最近购买时间"></el-table-column>
          <el-table-column prop="spendMoney" label="消费总金额"></el-table-column>

          <el-table-column label="操作">
            <template>
              <span style="cursor:pointer; color:#b4b4b4 ">查看详情></span>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      tableData: [
        {
          latelyShopTime: "2016-05-02",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "1231511312",
          spendMoney: "4564"
        },
        {
          latelyShopTime: "2016-05-04",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "1231511312",
          spendMoney: "13216"
        },
        {
          latelyShopTime: "2016-05-01",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "1231511312",
          spendMoney: "794"
        },
        {
          latelyShopTime: "2016-05-03",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "165413216552",
          spendMoney: "65132"
        }
      ],
      // 表格加载状态
      isLoading: false,
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {},
    };
  }
};
</script>

<style lang="scss" scoped>
.customerInfo {
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