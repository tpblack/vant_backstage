<template>
  <div>
    <div>
      <div class="top_orderInfo">
        <el-input placeholder="请输入商品" prefix-icon="el-icon-search" v-model="input2" clearable></el-input>
      </div>
    </div>
    <div class="goodslist">
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
      <div class="goodslist-tp">
        <div class="imgDiv">
          <img src="../../assets/img/works/img4.jpg" />
        </div>
        <div class="cmdlist-text">
          <p class="info">2018春夏季新款港味短款白色T恤+网纱中长款chic半身裙套装两件套</p>
          <div class="price">
            <span>￥79</span>
            <span>
              ¥
              <del>130</del>
            </span>
            <p class="flow">
              <i class="el-icon-star-off"></i>
              433
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: '',
    }
  },
};
</script>

<style lang="scss" scoped>
.top_orderInfo {
  max-width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
}
.goodslist {
  // background-color: #fff;
  // 设置阴影
  // box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .goodslist-tp {
    background-color: #fff;
    width: 160px;
    height: 270px;
    margin-bottom: 20px;
    .imgDiv {
      img {
        width: 100%;
        height: 155px;
      }
    }
    .cmdlist-text {
      padding: 20px;
      .info {
        height: 40px;
        font-size: 14px;
        line-height: 20px;
        width: 100%;
        overflow: hidden;
        color: #666;
        margin-bottom: 10px;
      }
      .price {
        font-size: 14px;
        & > span:nth-child(1) {
          font-weight: bold;
          margin-right: 20px;
        }
      }
      .flow {
        margin-top: 10px;
        margin-left: 77px;
      }
    }
  }
  .goodslist-tp:hover {
    box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
    cursor: pointer;
  }
}
</style>