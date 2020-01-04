<template>
  <div class="app">
    <div class="Centered">
      <el-input class="input" placeholder="请输入要查找的内容" suffix-icon="el-icon-search" v-model="input"></el-input>
      <div class="main">
        <div
          class="cmdlist-text"
          v-for="item in typeList"
          :key="item.id"
          @click="serachManagement(item.id)"
        >
          <div class="img">
            <img src="@/assets/img/avatar3.jpg" />
          </div>
          <div class="shopname">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstManagement",
  data() {
    return {
      input: "",
      //商品类别
      typeList: [],
      // 分页器
      pagination: {}
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.fetchManagement();
  },
  methods: {
    fetchManagement() {
      this.$api.firstlevel.getfindByMain().then(res => {
        this.typeList = res;
        console.log("这是一级管理");
      });
    },
    serachManagement(id) {
      console.log(id);
      this.$router.push({ name: "Secondmanagement", params: { id: id } });
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
  // 设置阴影
  box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  background-color: #fff;
  font-size: 14px;
}
 .Centered{
      align-items: center;
    }
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .cmdlist-text {
    margin-top: 60px;
    width: 200px;
    .img {
      display: flex;
      justify-content: center;
      img {
        width: 100px;
        height: 100px;
      }
      .mypage {
        align-items: center;
      }
    }
    .shopname {
      padding: 20px;
      color: rgb(133, 133, 134);
      text-align: center;
    }
  }
  }
  .pageinfo{
    width: 100%;
    text-align: center;
      }
</style>