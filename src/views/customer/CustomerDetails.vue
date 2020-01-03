<template>
  <div class="orderDetails">
    <!-- <h1>fasdfk</h1> -->
    <div class="refund">
      <!-- 这是订单 -->
      <Order></Order>
    </div>
    <div class="userOrder">
      <!-- 这是用户 -->
      <UserOrder></UserOrder>
    </div>
    <div>
      <!-- 这是表格 -->
      <TableOrder></TableOrder>
    </div>
  </div>
</template>

<script>
import Order from "@/components/orderInfo/Order.vue";
import UserOrder from "@/components/orderInfo/UserOrder.vue";
import TableOrder from "@/components/orderInfo/TableOrder.vue";
export default {
  components: {
    Order,
    UserOrder,
    TableOrder
  }
};
</script>

<style lang="scss" scoped>
.orderDetails {
  // 设置阴影
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  background-color: #fff;
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
}
</style>