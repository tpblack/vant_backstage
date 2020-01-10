<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import store from "@/store";

window.onbeforeunload = function() {
  if (
    (event.clientX > document.body.clientWidth && event.clientY < 0) ||
    event.altKey
  ) {
    localStorage.removeItem("TOKEN");
    this.$store.commit("logout");
    alert("你关闭了浏览器");
  } else {
    alert("你正在刷新页面");
  }
};
export default {};
</script>

<style lang="scss">
// 初始化css
// 在style标签中引入css
@import url("../public/reset.css");
html,
body,
#app {
  height: 100%;
}
</style>
