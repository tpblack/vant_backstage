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
      <!-- 去除浮动的占位div -->
      <div></div>
      <div>
        <!-- 这是内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入header 和footer组件
import Right from "@/components/main/Right.vue";
import Navigation from "@/components/main/Navigation.vue";
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
    // display: block;
  }
  .right{
    width: 100%;
    // 滚动条
    overflow-y: scroll;
    & > div:nth-child(1){
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 999;
    }
    & > div:nth-child(2){
      // 去除浮动
      clear:both;
    }
    & > div:nth-child(3){
      margin: 20px;
      margin-top: 80px;
    }
  }
}
</style>