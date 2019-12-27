<template>
  <div class="home">
    <!-- 每个组件有且只有一个根元素 -->

    <div class="left">
      <!-- 这是右边导航 -->
      <Right></Right>
    </div>
    <div class="right">
      <div>
        <!-- 这是顶部导航 -->
        <Navigation></Navigation>
      </div>
      <div >
        <!-- 这是内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入header 和footer组件
import Right from "@/views/main/Right.vue";
import Navigation from "./main/Navigation.vue";
export default {
  name: "home",
  // 局部组件引入
  components: {
    Right,
    Navigation
  }
};
</script>
<style lang="scss" scoped>
// 设置.home容器高度占满全屏
.home {
  height: 100%;
  background-color: rgb(237, 237, 237);
  display: flex;
  .left{
    height: 100%;
  }
  .right{
    width: 100%;
    display: flex;
    flex-direction: column;
    & > div:nth-child(2){
      margin: 20px;
    }
  }
}
</style>