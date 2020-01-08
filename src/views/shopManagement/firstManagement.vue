<template>
  <div class="app">
    <div class="Centered">
      <div class="main">
        <div class="cmdlist-text" v-for="item in typeList" :key="item.id">
          <div @click="serachManagement(item.id)">
            <div class="img">
              <img src="@/assets/img/avatar3.jpg" />
            </div>
            <div class="shopname">{{item.name}}</div>
          </div>
          <div class="btn">
            <el-button type="success" size="mini" @click="modifyName(item)">修改表名</el-button>
          </div>
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
</template>

<script>
export default {
  name: "firstManagement",
  data() {
    return {
      //商品类别
      typeList: [],
      // 分页器
      pagination: {},
      dialogVisible: false,
      //input获取的值
      input: "",
      //接收item值
      activeItem: {}
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.fetchManagement();
  },
  methods: {
    //从数据库查找商品管理数据
    fetchManagement() {
      this.$api.firstlevel.getfindByMain().then(res => {
        this.typeList = res;
      });
    },
    //页面跳转
    serachManagement(id) {
      console.log(id);
      this.$router.push({ name: "Secondmanagement", params: { id: id } });
    },
    //将表面映射在弹出框input中
    modifyName(item) {
      this.activeItem = item;
      this.input = item.name;
      this.dialogVisible = true;
    },
    //关闭表名弹框提示
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //修改名字保存
    modifyKeep() {
      var id = this.activeItem.id;
      this.$api.firstlevel.updateName({id:id,name:this.input}).then(res => {
          this.$message.success({
            message: "修改成功",
            duration: 1000
          });
          this.fetchManagement();
        });
      this.dialogVisible = false;
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