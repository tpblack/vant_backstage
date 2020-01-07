<template>
  <div class="main">
    <div class="onetext">修改密码</div>
    <hr />
    <div class="app">
      <div class="modfiy">
        <span class="span1">当前密码</span>
        <el-input class="inputtext" placeholder="请输入密码" v-model="input" show-password></el-input>
      </div>
      <div class="modfiy">
        <span class="span1">新密码</span>
        <el-input class="inputtext" placeholder="请输入密码" v-model="input2" show-password></el-input>
        <span class="span2">6到16个字符</span>
      </div>
      <div class="modfiy">
        <span class="span1">确认新密码</span>
        <el-input class="inputtext" placeholder="请输入密码" v-model="input3" show-password></el-input>
      </div>
      <div class="btn">
        <el-button type="primary">主要按钮</el-button>                                   
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      input2: "",
      input3: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
  .onetext {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 14px;
    padding-bottom: 8px;
    color: #666;
  }
  .modfiy {
    width: 100%;
    color: #666;
    padding-top: 20px;
    font-size: 14px;
    .span1 {
      width: 70px;
      float: left;
      padding-top: 10px;
      padding-left: 80px;
      margin-right: 20px;
    }
    .span2 {
      padding-left: 10px;
    }
    .inputtext {
      width: 300px;
    }
  }
}
.btn {
  padding-left: 170px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>