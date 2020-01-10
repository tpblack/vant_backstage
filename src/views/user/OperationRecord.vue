<template>
  <div class="operationRecord_tp">
    <div class="top_orderInfo">
      <el-input placeholder="请输入标题" prefix-icon="el-icon-search" v-model="input2" clearable></el-input>
    </div>
    <!-- <div class="queryTime">
      <span>时间范围 :</span>
      <input type="date" />
      <div>至</div>
      <input type="date" />
      
      <el-button type="primary" size="small ">查询</el-button>
    </div>-->
    <div class="queryTime">
      <span class="demonstration">时间范围 :</span>
      <el-date-picker
        v-model="valueTime"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        size="small "
      ></el-date-picker>
      <el-button type="primary" size="small ">查询</el-button>
    </div>
    <div class="botton_operationRecord">
      <div class="title_operationRecord_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'16px',color:'#616466'}"
        >
          <el-table-column prop="userName" label="操作的用户名" align="center"></el-table-column>
          <el-table-column prop="operation" label="操作方式" width="185px" align="center"></el-table-column>
          <el-table-column prop="myTable" label="操作的表" width="185px" align="center"></el-table-column>
          <el-table-column prop="modifyContent" label="操作内容" align="center"></el-table-column>
          <el-table-column prop="time" label="操作时间" align="center"></el-table-column>
        </el-table>
        <div class="pageInfo">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pagination.totalElements"
            :current-page="pagination.page"
            class="mypage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderTimeInterception } from "@/utils/order.js";
export default {
  data() {
    return {
      input2: "",
      tableData: [],
      isLoading: false,
      // 分页器
      pagination: {},
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      valueTime: ""
    };
  },
  methods: {
    queryOperationRecord() {
      // 如果this.pagination.page有值就选他的值，如果没有就是1
      let page = this.pagination.page || 1;
      // 在发送请求之前  将表格设为加载状态
      this.isLoading = true;
      // 发送请求
      this.$api.history.findAll({ page, row: 10 }).then(res => {
        // 请求成功后  将表格设为完成状态
        this.isLoading = false;
        console.log(res);
        let { content, totalElements } = res;
        this.tableData = content.filter(item => {
          item.time = orderTimeInterception(item.time);
          return item;
        });
        this.pagination = { page, totalElements };
        console.log(this.tableData);
      });
    }
  },
  mounted() {
    //   页面渲染完毕 分页查询操作页面信息
    this.queryOperationRecord();
  }
};
</script>

<style lang="scss" scoped>
.operationRecord_tp {
  padding: 20px;
  background-color: #fff;
  .top_orderInfo {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .queryTime {
    display: flex;
    align-items: center;
    padding-bottom: 50px;
    border-bottom: 1px solid #ededed;
    .demonstration {
      font-weight: 600;
      margin-right: 8px;
    }
    // button{
    //     padding: 5.5px 15px;
    //     background-color: rgb(59, 142, 180);
    // }
  }
  .botton_operationRecord {
    margin-top: 50px;
    // padding-bottom: 30px;
    border-top: 1px solid rgb(237, 237, 237);
    .pageInfo {
      padding-top: 20px;
      text-align: center;
    }
  }
}
</style>