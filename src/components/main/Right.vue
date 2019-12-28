<template>
  <div class="div1">
    <el-menu
      @select="indexpageFn"
      :default-active="indexpage"
      class="el-menu-vertical-demo"
      :router="true"
      :collapse="$store.state.isCollapse"
      :collapse-transition="false"
      :unique-opened="true"
      background-color="rgb(61,61,61)"
      text-color="white"
    >
      <el-menu-item index="0">
        <img src="@/assets/logo.png" alt class="img" />
        <span slot="title">tp_商品页面管理系统</span>
      </el-menu-item>
      <el-menu-item index="1" route="/">
        <i class="el-icon-setting"></i>
        <span slot="title">工作台</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-shopping-cart-full"></i>
          <span slot="title">商品管理</span>
        </template>
          <el-menu-item @click="getInfo"> 商品一级类别管理</el-menu-item>
          <el-menu-item index="2-2-1">商品二级类别管理</el-menu-item>
          <el-menu-item index="2-3-1">商品</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">消费客户管理</span>
        </template>
        <el-menu-item index="1-1" route="/customerInfo">消费客户的基本信息</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item index="4-1" route="/index/menu">菜单信息浏览</el-menu-item>
        <el-menu-item index="4-2" route="/index/tcmenu">套餐信息浏览</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">账户管理</span>
        </template>
        <el-menu-item index="5-1" route="/index/order">订单信息浏览</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myserch: "",
      indexpage: '1',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getInfo(){
      this.$router.push('/firstManagement')
    },
    indexpageFn(index, indexpage) {
      
      this.indexpage = index;
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 95%;
  border-right: none;
}

.div1 {
  height: 100%;
  background-color: rgb(61, 61, 61);
}

.toggle-button {
  padding-right: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5%;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333333;
    width: 40px;
    height: 40px;
  }
}

.el-input {
  width: 160px;
  color: rgb(61, 61, 61);
  border: 0px;
}
.img {
  width: 25px;
  height: 25px;
  padding-right: 20px;
}
</style>
