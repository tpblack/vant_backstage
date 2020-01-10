<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="5" class="el-icon-s-fold" @click="switching"></el-menu-item>
      <el-menu-item index="1" class="el-icon-refresh-right"></el-menu-item>
      <el-menu-item index="4">
        <el-input v-model="input" class="inputNavigation" size="small" autofocus placeholder="搜索"></el-input>
      </el-menu-item>
      <el-submenu index="2" style="margin-left:500px;">
        <template slot="title">个人中心</template>
        <!-- <el-menu-item index="2-1" @click="modifyPassword">修改密码</el-menu-item>
        <el-menu-item index="2-2" @click="userInfo">基本资料</el-menu-item> -->
        <el-menu-item index="2-1">欢迎你 : {{userText.username}}</el-menu-item>
        <el-menu-item index="2-2" @click="operationRecord">查看操作日志</el-menu-item>
        <el-menu-item index="2-3" @click="logout">退出登录</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="3">消息中心</el-menu-item> -->
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeIndex: "1",
      input: "",
      userText: []
    };
  },
  methods: {
    ...mapMutations(["fold"]),
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    switching() {
      this.fold();
    },
    // 退出登录
    logout() {
      this.$api.user.escLogin().then(res => {
        localStorage.removeItem("TOKEN");
        this.$store.commit("logout");
        this.userText = [];
        if (!this.$store.localStorageKey) {
          this.$router.push("/'login");
        }
      });
    },
    // 跳转到修改密码页面
    modifyPassword() {
      this.$router.push("/modifyPassword");
    },
    // 跳转到用户基本信息页面
    userInfo() {
      this.$router.push("/userInfo");
    },
    userInfoByToken() {
      this.$api.user.findByUser().then(res => {
        this.userText = res;
      });
    },
    // 跳转到操作日志页面
    operationRecord(){
      this.$router.push("operationRecord");
    }
  },
  mounted() {
    this.userInfoByToken();
  }
};
</script>

<style lang="scss" scoped>
.inputNavigation {
  width: 300px;
}
</style>