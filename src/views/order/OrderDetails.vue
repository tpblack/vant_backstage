<template>
  <div class="orderDetails">
    <!-- <h1>fasdfk</h1> -->
    <div class="refund">
      <!-- 这是订单 -->
      <Order :order="orderDetailsList"></Order>
    </div>
    <div class="userOrder">
      <!-- 这是用户 -->
      <UserOrder :order="orderDetailsList"></UserOrder>
    </div>
    <div class="tableOrder">
      <!-- 这是表格 -->
      <TableOrder :order="orderDetailsList.tbOrderItems"></TableOrder>
    </div>
  </div>
</template>

<script>
import Order from "@/components/orderInfo/Order.vue";
import UserOrder from "@/components/orderInfo/UserOrder.vue";
import TableOrder from "@/components/orderInfo/TableOrder.vue";
import { orderPaymentStatus, orderTimeInterception,orderBuyerRate } from "@/utils/order";

export default {
  components: {
    Order,
    UserOrder,
    TableOrder
  },
  data() {
    return {
      orderDetailsList: {}
    };
  },
  created() {
    // 订单id
    let orderId = this.$route.params.orderId;
    console.log(orderId);
    this.orderFindById(orderId);
  },
  methods: {
    orderFindById(orderId) {
      this.$api.orderInfo.findById({ id: orderId }).then(res => {
        console.log(res);
        // 这是封装方法  判断状态
        res.status = orderPaymentStatus(res.status);
        // 这是封装方法  截取时间
        res.consignTime = orderTimeInterception(res.consignTime);
        res.paymentTime = orderTimeInterception(res.paymentTime);
        res.createTime = orderTimeInterception(res.createTime);
        res.updateTime = orderTimeInterception(res.updateTime);
        res.endTime = orderTimeInterception(res.endTime);
        res.closeTime = orderTimeInterception(res.closeTime);
        // 这是封装方法  判断买家是否评价
        res.buyerRate = orderBuyerRate(res.buyerRate);
        // 赋值
        this.orderDetailsList = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.orderDetails {
  background-color: #fff;
  // 设置阴影   x   y  半径  颜色
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  padding: 20px;
  .refund {
    padding-bottom: 34px;
    border-bottom: 1px #e8e8e8 solid;
  }
  .userOrder {
    padding-top: 20px;
    padding-bottom: 34px;
    border-bottom: 1px #e8e8e8 solid;
  }
  .tableOrder{
    margin-top: 30px;
  }
}
</style>