<template>
  <div class="app">
    <div class="Centered">
      <div class="main">
        <div class="cmdlist-text" v-for="(item,index) in typeList" :key="index">
          <div @click="six(item,item.id)">
            <div class="img">
              <img src="@/assets/img/avatar3.jpg" />
            </div>
            <div class="shopname">{{item.name}}</div>
          </div>
           <div class="btn">
            <el-button type="success" size="mini" @click="modifyName(item)">修改表名</el-button>
          </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-input v-model="input"></el-input>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="modifyKeep">确 定</el-button>
        </span>
      </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Secondmanagement",
  data() {
    return {
      // 分页器
      pagination: {},
      typeList: []
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.classification();
  },
  methods: {
    classification() {
      // 如果文本框有值
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
      if (!this.query) {
        console.error("没有这个商品分类");
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
.Centered {
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
.btn {
  padding-left: 60px;
}
.pageinfo {
  width: 100%;
  text-align: center;
}
</style>