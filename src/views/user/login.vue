<template>
  <div class="main">
    <div class="app">
      <div class="login">TPAdmin</div>
      <p>TP 官方出品的单页面后台管理模板系统</p>
      <div class="inputxt">
        <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="input"></el-input>
      </div>
      <div class="inputxt1">
        <el-input placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="input1" show-password></el-input>
      </div>
      <div class="checked">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
        <span class="left">忘记密码?</span>
      </div>
      <div class="click">
        <el-button type="primary" class="btn" @click="homepage">登录按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  data() {
    return {
      input: "",
      input1: "",
      checked: false,
      listtype: ""
    };
  },
  methods: {
    // ...mapMutations({
    //   abc: "setLoginTOKEN"
    // }),
    homepage() {
      // 先判断文本框是否有内容
      if (!this.input) {
        // 使用el提供的友好提示
        this.$message.error({
          message: "用户名或手机号不能为空",
          duration: 1000
        });
        return;
      }
      if (!this.input1) {
        this.$message.error({
          message: "密码不能为空",
          duration: 1000
        });
        return;
      }
      this.$api.user
        .backstageLogin({ userName: this.input, password: this.input1 })
        .then(res => {
          // console.log(res);
          // this.abc("TOKEN_tp")
          // console.log(111)
          localStorage.setItem("TOKEN", res + "");
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  background-color: rgb(242, 242, 242);
  display: flex;
  justify-content: center;
  .app {
    padding-top: 140px;
    .login {
      font-size: 30px;
      text-align: center;
      padding-bottom: 15px;
    }
  }
  p {
    font-size: 14px;
    color: #999;
    text-align: center;
  }
  .inputxt {
    flex-flow: column;
    padding-top: 30px;
    width: 335px;
  }
  .inputxt1 {
    padding-top: 15px;
  }
  .checked {
    padding-top: 10px;
  }
  .left {
    float: right;
    font-size: 14px;
    padding-top: 5px;
    color: #029789;
  }
  .click {
    padding-top: 15px;
    .btn {
      width: 335px;
      background-color: #029789;
    }
  }
}
</style>