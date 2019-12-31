<template>
  <div class="Order">
    <div class="Order_head">
      <h1>订单</h1>
    </div>
    <div class="Order_body">
      <div>
        <span class="spanName">取货单号：</span>
        <span>1000000000</span>
      </div>
      <div>
        <span class="spanName">状态：</span>
        <span>已取货</span>
      </div>
      <div>
        <span class="spanName">付款状态：</span>
        <span>菜鸟仓储</span>
      </div>
      <div>
        <span class="spanName">销售单号：</span>
        <span>1234123421</span>
      </div>
      <div>
        <span class="spanName">订单创建时间：</span>
        <span>2019-12-30</span>
      </div>
      <div>
        <span class="spanName">订单更新时间：</span>
        <span>2019-12-31</span>
      </div>
      <div>
        <span class="spanName">交易完成时间：</span>
        <span>2019-12-31</span>
      </div>

      <!-- <div>
        <span class="spanName">子订单：</span>
        <span>3214321432</span>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Order {
  .Order_head {
    h1 {
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  .Order_body {
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 10px 0;
      min-width: 33%;
      span {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 1.5;
      }
      .spanName {
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
}
</style>