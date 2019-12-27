<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="1" class="el-icon-s-fold"></el-menu-item> -->
      <el-menu-item index="1" class="el-icon-refresh-right"></el-menu-item>
      <el-menu-item index="4">
        <el-input v-model="input" class="inputNavigation" size="small" autofocus placeholder="搜索"></el-input>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">个人中心</template>
        <el-menu-item index="2-1">修改密码</el-menu-item>
        <el-menu-item index="2-2">基本资料</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.inputNavigation {
  width: 300px;
}
</style>