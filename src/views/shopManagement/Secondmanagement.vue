<template>
  <div class="app">
    <div class="Centered">
      <el-input
        class="input"
        placeholder="请输入要查找的内容"
        suffix-icon="el-icon-search"
        v-model="query"
        @change="queryList"
      ></el-input>
      <div class="main">
        <div
          class="cmdlist-text"
          v-for="(item,index) in typeList"
          :key="index"
          @click="six(item,item.id)"
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
  name: "Secondmanagement",
  data() {
    return {
      query: '',
      // 分页器
      pagination: {},
      typeList: [],
      typeList1: []
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.classification();
  },
  methods: {
    classification() {  // 如果文本框有值
      var id = this.$route.params.id;
      this.$api.firstlevel.findByAssistant({ id }).then(res => {
        this.typeList = res;
      });
    },
    //如果isParent是1则跳转到shop页面再次调用方法
    six(item) {
      if (item.isParent) {
        this.$router.push({ name: "shop", params: { id: item.id } });
      }
    },
    queryList(value) {
      this.query = value;
      if(!this.query){
        console.error('没有这个商品分类')
      }
      // 每次进行查询page归1
            console.log(value); // 重新查询

      this.classification();
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