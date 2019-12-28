<template>
  <div class="app">
    <div class="main">
      <div class="cmdlist-text" v-for="(item,index) in imgArr" :key="index">
        <div class="img">
          <img :src="item" />
        </div>
        <div class="shopname">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</div>
      </div>
    </div>
  </div>
</template>

<script>
const imgArr = [
  require("@/assets/logo.png"),
  require("@/assets/s1.jpg"),
  require("@/assets/s2.jpg"),
  require("@/assets/s3.jpg"),
  require("@/assets/s1.jpg"),
  require("@/assets/s3.jpg"),
  require("@/assets/logo.png"),
  require("@/assets/s2.jpg")
];
export default {
  name: "firstManagement",
  data() {
    return {
      imgArr
    };
  }
};
</script>


<style lang="scss" scoped>
.app {
  font-size: 14px;
}
.main {
  display: flex;
  flex-wrap: wrap;
  .cmdlist-text {
    margin-left: 60px;
    margin-top: 60px;
    width: 200px;
    .img {
      display: flex;
      justify-content: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .shopname {
      padding: 20px;
      color: rgb(133, 133, 134);
      text-align: center;
    }
  }
}
</style>