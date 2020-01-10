<template>
  <div class="goodsMng">
    <div class="top_goodsMng">
      <el-input
        placeholder="请输入标题"
        prefix-icon="el-icon-search"
        @change="search"
        v-model="input2"
        clearable
      ></el-input>
    </div>

    <el-button @click="addGoodsList">点击新增</el-button>
    <div class="botton_goodsMng">
      <div class="title_goodsMng_tp">
        <el-table
          :data="tableData"
          v-loading="isLoading"
          :header-cell-style="{backgroundColor:'#f5f5f5',fontSize:'16px',color:'#616466'}"
        >
          <el-table-column prop="image" label="商品图片" align="center">
            <template scope="slotScope">
              <img :src="slotScope.row.image" style="width:70px;height:70px" />
            </template>
          </el-table-column>
          <el-table-column prop="title" label="商品标题" width="185px" align="center"></el-table-column>
          <el-table-column label="商品卖点" width="185px" align="center">
            <template scope="slotScope">
              <div v-html="slotScope.row.sellPoint"></div>
            </template>
          </el-table-column>
          <el-table-column prop="price" label="商品价格" align="center"></el-table-column>
          <el-table-column prop="num" label="库存数量" align="center"></el-table-column>
          <el-table-column prop="cid" label="所属类目" align="center"></el-table-column>
          <el-table-column prop="status" label="商品状态" align="center"></el-table-column>
          <el-table-column prop="created" label="创建时间" align="center" width="90px"></el-table-column>
          <el-table-column prop="updated" label="更新时间" align="center" width="90px"></el-table-column>
          <el-table-column label="操作" width="100px">
            <template scope="slotScope">
              <div style="cursor:pointer; color:#b4b4b4; margin-right:10px">查看详情></div>
              <div style="cursor:pointer; color:#b4b4b4" @click="modify(slotScope.row)">修改</div>
            </template>
          </el-table-column>
        </el-table>
        <div class="pageInfo">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pagination.totalElements"
            :current-page="pagination.page"
            @current-change="pageChange"
            class="mypage"
          />
        </div>
      </div>
    </div>

    <el-dialog title="新增商品" :visible.sync="centerDialogVisible_add" width="30%" center>
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <div class="addGoods">
        <span>商品图片：</span>
        <el-input size="small" placeholder="请输入图片" v-model="dalogFromAdd.image" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>商品标题：</span>
        <el-input size="small" placeholder="请输入标题" v-model="dalogFromAdd.title" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>商品卖点：</span>
        <el-input
          size="small"
          placeholder="请输入卖点"
          v-model="dalogFromAdd.sellPoint"
          style="width:270px"
        ></el-input>
      </div>
      <div class="addGoods">
        <span>商品价格：</span>
        <el-input
          size="small"
          placeholder="请输入价格(单位:分)"
          v-model="dalogFromAdd.price"
          style="width:270px"
        ></el-input>
      </div>
      <div class="addGoods">
        <span>库存数量：</span>
        <el-input size="small" placeholder="请输入数量" v-model="dalogFromAdd.num" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>所属类目：</span>
        <el-select
          v-model="dalogFromAdd.cid"
          @change="getCid"
          size="small"
          style="width:270px"
          placeholder="请选择"
        >
          <el-option v-for="item in optionsAdd" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>
      <!-- <div class="addGoods">
        <span>商品状态：</span>
        <el-input
          size="small"
          placeholder="请输入内容"
          v-model="dalogFromAdd.status"
          style="width:270px"
        ></el-input>
      </div>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible_add = false">取 消</el-button>
        <el-button type="primary" @click="goodsListAdd">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="修改商品" :visible.sync="centerDialogVisible_modify" width="30%" center>
      <!-- <span>需要注意的是内容是默认不居中的</span> -->
      <div class="addGoods">
        <span>商品图片：</span>
        <el-input size="small" placeholder="请输入内容" v-model="dalogFrom.image" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>商品标题：</span>
        <el-input size="small" placeholder="请输入内容" v-model="dalogFrom.title" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>商品卖点：</span>
        <el-input
          size="small"
          placeholder="请输入内容"
          v-model="dalogFrom.sellPoint"
          style="width:270px"
        ></el-input>
      </div>
      <div class="addGoods">
        <span>商品价格：</span>
        <el-input size="small" placeholder="请输入内容" v-model="dalogFrom.price" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>库存数量：</span>
        <el-input size="small" placeholder="请输入内容" v-model="dalogFrom.num" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>所属类目：</span>
        <el-input size="small" placeholder="请输入内容" v-model="dalogFrom.cid" style="width:270px"></el-input>
      </div>
      <div class="addGoods">
        <span>商品状态：</span>
        <el-select v-model="dalogFrom.status" size="small" style="width:270px" placeholder="请选择">
          <el-option
            v-for="item in optionsModify"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible_modify = false">取 消</el-button>
        <el-button type="primary" @click="goodsListModify">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { goodslistStatus, goodslistStatusBoolean } from "@/utils/goodslist";
import { orderTimeInterception } from "@/utils/order";
export default {
  data() {
    return {
      input2: "",
      tableData: [],
      isLoading: false,
      // 分页器
      pagination: {},
      // 控制新增页面改变的属性
      centerDialogVisible_add: false,
      // 控制修改页面改变的属性
      centerDialogVisible_modify: false,
      // 新增页面的所有input文本框的属性
      dalogFromAdd: {},
      // 修改页面的所有input文本框的属性
      dalogFrom: {},
      // 修改  状态属性的下拉框
      optionsModify: [
        {
          value: 1,
          label: "正常"
        },
        {
          value: 0,
          label: "下架"
        }
      ],
      // 新增  所属类目的下拉框容器
      optionsAdd: []
    };
  },
  methods: {
    search() {
      this.goodsListFindAll();
    },
    // 根据商品名称模糊查询商品，分页获取商品（当前页，每页条数，name）
    goodsListFindAll() {
      // 文本框的值
      let inputText = this.input2;
      // 如果this.pagination.page有值就选他的值，如果没有就是1
      let page = this.pagination.page || 1;
      // 在发送请求之前  将表格设为加载状态
      this.isLoading = true;
      // 发送请求
      this.$api.firstlevel
        .findByName({ page, row: 10, name: inputText })
        .then(res => {
          // 在发送请求之前  将表格加载状态取消
          this.isLoading = false;
          let { content, totalElements } = res;
          // console.log(res);
          this.tableData = content.filter(item => {
            item.status = goodslistStatus(item.status);
            item.created = orderTimeInterception(item.created);
            item.updated = orderTimeInterception(item.updated);
            item.price = item.price / 100;
            return item;
          });
          this.pagination = { page, totalElements };
        });
    },
    // 页面改变的方法
    pageChange(index) {
      this.pagination.page = index;
      this.goodsListFindAll();
    },
    // 点击修改 将当前点击的行值复制到修改模板页面的文本框里
    modify(item) {
      console.log(item);
      this.centerDialogVisible_modify = true;
      this.dalogFrom = { ...item };
    },
    // 点击新增按钮  查询所属类目
    addGoodsList() {
      this.centerDialogVisible_add = true;
      this.$api.firstlevel.findSubClass({}).then(res => {
        console.log(res);
        this.optionsAdd = res;
      });
    },
    getCid(id) {
      this.dalogFromAdd.cid = id;
      console.log(id);
    },
    // 根据id修改用户点击的当前行数据
    goodsListModify() {
      let dalogFrom = this.dalogFrom;
      dalogFrom.status = goodslistStatusBoolean(dalogFrom.status);
      dalogFrom.price = parseInt(dalogFrom.price * 100);
      console.log(dalogFrom);
      this.$api.firstlevel
        .save({
          id: dalogFrom.id,
          title: dalogFrom.title,
          image: dalogFrom.image,
          sellPoint: dalogFrom.sellPoint,
          price: dalogFrom.price,
          num: dalogFrom.num,
          cid: dalogFrom.cid,
          status: dalogFrom.status
        })
        .then(res => {
          console.log(res);
          this.centerDialogVisible_modify = false;
          this.$message.success({
            message: "修改成功",
            duration: 1000
          });
          this.goodsListFindAll();
          this.dalogFrom = {};
        });
    },
    // 新增一行商品数据
    goodsListAdd() {
      let dalogFromAdd = this.dalogFromAdd;
      // let reg = new RegExp("/^[0-9]*$/");
      if (!dalogFromAdd.title) {
        this.$message.error({
          message: "标题不能为空",
          duration: 1000
        });
        return;
      }
      if (!dalogFromAdd.price) {
        this.$message.error({
          message: "价格不能为空",
          duration: 1000
        });
        return;
      } else if (!typeof dalogFromAdd.price === "number") {
        this.$message.error({
          message: "请输入数字(单位:分)",
          duration: 1000
        });
        return;
      }
      if (!dalogFromAdd.num) {
        this.$message.error({
          message: "数量不能为空",
          duration: 1000
        });
        return;
      } else if (!typeof dalogFromAdd.price === "number") {
        this.$message.error({
          message: "请输入数字",
          duration: 1000
        });
        return;
      }
      if (!dalogFromAdd.cid) {
        this.$message.error({
          message: "状态不能为空",
          duration: 1000
        });
        return;
      }
      dalogFromAdd.price = parseInt(dalogFromAdd.price);
      dalogFromAdd.num = parseInt(dalogFromAdd.num);
      // dalogFromAdd.cid = parseInt(dalogFromAdd.cid);
      console.log(dalogFromAdd);
      // dalogFromAdd.status = parseInt(dalogFromAdd.status);
      this.$api.firstlevel
        .save({
          title: dalogFromAdd.title,
          image: dalogFromAdd.image,
          sellPoint: dalogFromAdd.sellPoint,
          price: dalogFromAdd.price,
          num: dalogFromAdd.num,
          cid: dalogFromAdd.cid
        })
        .then(res => {
          // 将页面关闭
          this.centerDialogVisible_add = false;
          // 友好提示
          this.$message.success({
            message: "新增成功",
            duration: 1000
          });
          // 重新查询 刷新效果
          this.goodsListFindAll();
          // 清空新增的容器对象
          this.dalogFromAdd = {};
        });
    }
  },
  mounted() {
    this.goodsListFindAll();
  }
};
</script>

<style lang="scss" scoped>
.goodsMng {
  padding: 20px;
  background-color: #fff;
  .top_goodsMng {
    max-width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .botton_goodsMng {
    margin-top: 50px;
    // padding-bottom: 30px;
    border-top: 1px solid rgb(237, 237, 237);
    .pageInfo{
      padding-top: 20px; 
      text-align: center;
    }
  }
  .addGoods {
    display: flex;
    margin-bottom: 5px;
    span {
      line-height: 2;
      font-size: 16px;
    }
  }
}
</style>

<style scoped>
.title_customerInfo_tp >>> .el-table .cell {
  font-size: 12px;
}
.title_customerInfo_tp >>> .el-table th > .cell {
  font-size: 14px;
}
</style>