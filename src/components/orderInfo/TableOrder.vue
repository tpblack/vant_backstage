<template>
  <div>
    <el-table
      :data="tableData"
      v-loading="isLoading"
      :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'18px',color:'#616466'}"
    >
      <el-table-column prop="title" label="商品"></el-table-column>
      <el-table-column prop="num" label="购买数量"></el-table-column>
      <el-table-column prop="price" label="商品单价"></el-table-column>
      <el-table-column prop="totalFee" label="商品总金额"></el-table-column>
    </el-table>
    <!-- <el-pagination
      background
       layout="prev, pager, next"
      :total="pagination.total"
      :current-page="pagination.page"
      class="mypage"
    /> -->
  </div>
</template>

<script>
export default {
  props: ["order"],

  // computed: {
  //   // 遇到父组件的值是动态数据  就需要对props的值进行监听 监听props的改变
  //   orderCmp(){
  //     // console.log(1)
  //     return this.order;
  //   }
  // },
  data() {
    return {
      tableData: this.order || [],
      // 表格加载状态
      isLoading: false,
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {},
      
    };
  },
  watch: {
    order: {
      handler(val) {
        console.log(val);
        this.tableData = val;
      },
      deep: true
    }
  },
  methods: {
    a() {
      // console.log(this.orderCmp);
      // console.log(Object.keys( this.order).length)
      // if(!Object.keys( this.order).length) return;
      // console.log(this.order)
      // this.title = this.order.tbOrderItems[0].title;
      // this.num = this.order.tbOrderItems[0].num
      // console.log('456456',this.title,this.num)
    }
  },
  mounted() {
    // console.log('table',this.order)
    this.a();
  }
};
</script>

<style lang="scss" scoped>
</style>