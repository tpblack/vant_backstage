<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      
      <el-menu-item index="5" class="el-icon-s-fold" @click="switching"></el-menu-item>
      <el-menu-item index="1" class="el-icon-refresh-right"></el-menu-item>
      <el-menu-item index="4">
        <el-input v-model="input" class="inputNavigation" size="small" autofocus placeholder="搜索"></el-input>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">个人中心</template>
        <el-menu-item index="2-1" route="/modifyPassword">修改密码</el-menu-item>
        <el-menu-item index="2-2">基本资料</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
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
      input: ""
    };
  },
  methods: {
    ...mapMutations(["fold"]),
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    switching() {
      this.fold();
    }
  }
};
</script>

<style lang="scss" scoped>
.inputNavigation {
  width: 300px;
}
</style>