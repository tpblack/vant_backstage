<template>
  <div class="Order">
    <div class="Order_head">
      <h1>订单</h1>
    </div>
    <div class="Order_body">
      <div>
        <span class="spanName">取货单号：</span>
        <span>{{order.shippingCode}}</span>
      </div>
      <div>
        <span class="spanName">状态：</span>
        <span>{{order.status}}</span>
      </div>
      <div>
        <span class="spanName">订单创建时间：</span>
        <span>{{order.createTime}}</span>
      </div>
      <div>
        <span class="spanName">订单更新时间：</span>
        <span>{{order.updateTime}}</span>
      </div>
      <div>
        <span class="spanName">交易完成时间：</span>
        <span>{{order.endTime}}</span>
      </div>
      <div>
        <span class="spanName">邮费：</span>
        <span>{{order.closeTime}}</span>
      </div>
      <div>
        <span class="spanName">物流名称：</span>
        <span>{{order.shippingName}}</span>
      </div>
      <div>
        <span class="spanName">物流单号：</span>
        <span>{{order.shippingCode}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     shippingCode: this.shippingCode,
  //     status: this.status,
  //     createTime: this.createTime,
  //     updateTime: this.updateTime,
  //     endTime: this.endTime,
  //     closeTime: this.closeTime,
  //     shippingName: this.shippingName
  //   };
  // },
  //   物流单号 || 订单单号，状态，订单创建时间，订单更新时间，交易完成时间，交易关闭时间 ，物流名称
  props: ['order'],
 };
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