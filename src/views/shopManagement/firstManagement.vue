<template>
  <div class="app">
    <el-input class="input" placeholder="请输入要查找的内容" suffix-icon="el-icon-search" v-model="input1"></el-input>
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
      input1: "",
      imgArr
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.fetchManagement();
  },
  methods: {
    fetchManagement() {
      this.$api.firstlevel.getfindByMain().then(res => {
        console.log(123);
        
      /*   this.isloading = false;
        let { items, total, page } = res;
        // console.log(items);
        // console.log(total);
        // console.log(page);
        this.jobs = items; */
        // //定制分页器
        // this.pagination = {
        //   page,
        //   total
        // };
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
  background-color: #fff;
  font-size: 14px;
  .input {
    width: 345px;
  }
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