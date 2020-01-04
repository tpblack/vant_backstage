<template>
  <div class="UserOrder">
    <div class="UserOrder_head">
      <h1>用户</h1>
    </div>
    <div class="UserOrder_body">
      <div>
        <span class="spanName">买家昵称：</span>
        <span>{{order.buyerNick}}</span>
      </div>
      <div>
        <span class="spanName">联系电话：</span>
        <span>{{order.phone}}</span>
      </div>
      <div>
        <span class="spanName">邮箱：</span>
        <span>{{order.email}}</span>
      </div>

      <!-- <div>
        <span class="spanName">常用快递：</span>
        <span>菜鸟仓储</span>
      </div>-->
      <!-- <div>
        <span class="spanName">取货地址：</span>
        <span>浙江省杭州市西湖区万塘路18号</span>
      </div>-->
      <div>
        <span class="spanName">买家是否已经评价：</span>
        <span>{{order.buyerRate}}</span>
      </div>
      <div>
        <span class="spanName">备注：</span>
        <span>{{order.buyerMessage}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"]
};
</script>

<style lang="scss" scoped>
.UserOrder {
  .UserOrder_head {
    h1 {
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
    }
  }
  .UserOrder_body {
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