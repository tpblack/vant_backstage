<template>
  <div class="orderInfo">
    <div class="top_orderInfo">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        @change="search"
        v-model="input2"
        clearable
      ></el-input>
    </div>
    <div class="botton_orderInfo">
      <div class="title_orderInfo_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
        >
          <el-table-column prop="buyerNick" label="买家昵称" width="120"></el-table-column>
          <el-table-column prop="phone" label="联系电话">
            <!-- <template slot-scope="scope"> -->
            <!-- scope.row当前表格对象 -->
            <!-- 过滤器 过滤职位列表 -->
            <!-- {{jobTypeUpdata(scope.row.job_type)}}
            </template>-->
          </el-table-column>
          <!-- <el-table-column prop="username" label="邮箱"></el-table-column>
          <el-table-column prop="latelyShopTime" label="订单创建时间"></el-table-column>
          <el-table-column prop="spendMoney" label="订单更新时间"></el-table-column>-->
          <el-table-column prop="consignTime" label="发货时间"></el-table-column>
          <el-table-column prop="paymentTime" label="付款时间"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <!-- <el-table-column prop="spendMoney" label="实付金额"></el-table-column>
          <el-table-column prop="spendMoney" label="付款时间"></el-table-column>
          <el-table-column prop="spendMoney" label="邮费"></el-table-column>-->
          <!-- <el-table-column prop="spendMoney" label="交易完成时间"></el-table-column>
          <el-table-column prop="spendMoney" label="交易关闭时间"></el-table-column>-->
          <el-table-column prop="shippingName" label="物流名称"></el-table-column>
          <el-table-column prop="shippingCode" label="物流单号"></el-table-column>
          <!-- <el-table-column prop="spendMoney" label="买家留言"></el-table-column>
          <el-table-column prop="spendMoney" label="买家是否已经评价"></el-table-column>-->
          <el-table-column label="操作">
            <template scope="slotScope">
              <span
                @click="orderDetails_Tp(slotScope.row.orderId)"
                style="cursor:pointer; color:#b4b4b4"
              >查看详情></span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pageInfo">
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
  </div>
</template>

<script>
import { orderPaymentStatus, orderTimeInterception } from "@/utils/order";
export default {
  data() {
    return {
      input2: "",
      tableData: [],
      // 表格加载状态
      isLoading: false,
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {}
    };
  },
  mounted() {
    this.findByOrderId();
  },
  methods: {
    search() {
      this.pagination.page = 1;
      this.findByOrderId();
    },
    findByOrderId() {
      // 文本框的值
      let inputText = this.input2;
      // 如果this.pagination.page有值就选他的值，如果没有就是1
      let page = this.pagination.page || 1;
      // 在发送请求之前  将表格设为加载状态
      this.isLoading = true;
      // 发送请求
      this.$api.orderInfo
        .findByUserName({ page, row: 10, seek: inputText })
        .then(res => {
          // 在发送请求之前  将表格加载状态取消
          this.isLoading = false;
          let { list, totalElements } = res;
          this.tableData = list.filter(item => {
            // 这是封装方法  判断状态
            item.status = orderPaymentStatus(item.status);
            // 这是封装方法  截取时间
            item.consignTime = orderTimeInterception(item.consignTime);
            item.paymentTime = orderTimeInterception(item.paymentTime);
            return item;
          });
          // console.log(this.tableData);

          this.pagination = { page, totalElements };
        });
    },
    // 页面改变的方法
    pageChange(index) {
      // 页码改变 重新修改分页器
      this.pagination.page = index;
      // 重新查询
      this.findByOrderId();
    },
    orderDetails_Tp(orderId) {
      this.$router.push({ name: "orderDetails", params: { orderId } });
    }
  }
};
</script>

<style lang="scss" scoped>
.orderInfo {
  background-color: #fff;
  // 设置阴影
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  .top_orderInfo {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .botton_orderInfo {
    margin-top: 50px;
    // padding-bottom: 30px;
    border-top: 1px solid rgb(237, 237, 237);
    .title_orderInfo_tp {
      padding: 20px;
      margin-top: 20px;
      .pageInfo{
        padding-top: 20px; 
        text-align: center;
      }
    }
  }
}
</style>