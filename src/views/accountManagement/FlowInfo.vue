<template>
  <div class="main">
    <div class="query">
      <el-input class="input" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input"></el-input>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="序号" width="50"></el-table-column>
      <el-table-column prop="date" label="业务日期" width="100"></el-table-column>
      <el-table-column prop="number" label="业务编号" width="100"></el-table-column>
      <el-table-column prop="unitname" label="往来单位名称" width="150"></el-table-column>
      <el-table-column prop="rpname" label="收支项目名称" width="150"></el-table-column>
      <el-table-column prop="Personincharge" label="经手人" width="80"></el-table-column>
      <el-table-column prop="Settlement" label="结算帐户" width="80"></el-table-column>
      <el-table-column prop="income" label="收入(元)"></el-table-column>
      <el-table-column prop="expenditure" label="支出(元)"></el-table-column>
      <el-table-column prop="balance" label="当前余额"></el-table-column>
    </el-table>
      <div class="pageInfo">
        <el-pagination layout="prev, pager, next" :total="90"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2020-01-02",
          number: "0000001",
          unitname: "湖南众智互联网学院",
          rpname: "两年半年教育",
          Personincharge: "陈龙",
          Settlement: "微信",
          income: "6666666",
          expenditure: "3649765",
          balance: "2461345"
        },
        {
          id: "2",
          date: "2020-01-02",
          number: "0000001",
          unitname: "湖南众智互联网学院",
          rpname: "两年半年教育",
          Personincharge: "陈龙",
          Settlement: "微信",
          income: "6666666",
          expenditure: "3649765",
          balance: "2461345"
        },
        {
          id: "3",
          date: "2016-05-02",
          number: "0000001",
          unitname: "湖南众智互联网学院",
          rpname: "两年半年教育",
          Personincharge: "陈龙",
          Settlement: "微信",
          income: "6666666",
          expenditure: "3649765",
          balance: "2461345"
        },
        {
          id: "4",
          date: "2016-05-02",
          number: "0000001",
          unitname: "湖南众智互联网学院",
          rpname: "两年半年教育",
          Personincharge: "陈龙",
          Settlement: "微信",
          income: "6666666",
          expenditure: "3649765",
          balance: "2461345"
        }
      ],
      input: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  .query {
    width: 100%;
    text-align: center;
    .input {
      width: 345px;
    }
  }
  .pageInfo{
      width: 100%;
      text-align: center;
    }
}
</style>