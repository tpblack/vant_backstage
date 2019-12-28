<template>
    <el-card class="box-card">
        <div class="text item">
            <span class="gztSpan">工作台</span>
            <span class="ckSpan">窗口</span>
        </div>
        <!-- <div class="text item top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/index' }"><i class="el-icon-s-home"></i></el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>工作台</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <div class="text item top homeTp">
            <span class="fSpan_1">
                <span class="sSpan_1">
                    <span class="tSpan_1"><i class="el-icon-chat-line-round i1"></i></span>
                    <span class="tSpan_2">
                        <span class="nSpan_1">1349</span>
                        <span class="nSpan_2">本月总的订单数</span>
                    </span>
                </span>
                <span class="sSpan_2">
                    <a href="#">
                        <span>查看详情</span>
                        <i class="el-icon-right"></i>
                    </a>
                </span>
            </span>
            <span class="fSpan_1" style="background-color:rgb(40,183,121);">
                <span class="sSpan_1">
                    <span class="tSpan_1"><i class="el-icon-shopping-cart-full i1"></i></span>
                    <span class="tSpan_2">
                        <span class="nSpan_1">549</span>
                        <span class="nSpan_2">今日订单</span>
                    </span>
                </span>
                <span class="sSpan_2" style="background-color:rgb(16,160,98);">
                    <a href="#">
                        <span>查看详情</span>
                        <i class="el-icon-right"></i>
                    </a>
                </span>
            </span>
            <span class="fSpan_1" style="background-color:rgb(133,43,153);">
                <span class="sSpan_1">
                    <span class="tSpan_1"><i class="el-icon-document-copy i1"></i></span>
                    <span class="tSpan_2">
                        <span class="nSpan_1">+89%</span>
                        <span class="nSpan_2">餐桌预订率</span>
                    </span>
                </span>
                <span class="sSpan_2" style="background-color:rgb(117,30,136);">
                    <a href="#">
                        <span>查看详情</span>
                        <i class="el-icon-right"></i>
                    </a>
                </span>
            </span>
            <span class="fSpan_1" style="background-color:rgb(255,184,72);">
                <span class="sSpan_1">
                    <span class="tSpan_1"><i class="el-icon-tickets i1"></i></span>
                    <span class="tSpan_2">
                        <span class="nSpan_1">12，500RMB</span>
                        <span class="nSpan_2">今日营业额</span>
                    </span>
                </span>
                <span class="sSpan_2" style="background-color:rgb(219,150,41);">
                    <a href="#">
                        <span>查看详情</span>
                        <i class="el-icon-right"></i>
                    </a>
                </span>
            </span>
        </div>
        <div class="text item top">
            <el-collapse>
                <el-collapse-item name="1">
                    <template slot="title">
                        <i class="el-icon-s-comment" style="font-size: 20px"></i>
                        订单信息
                    </template>
                    <div>
                        <ul>
                            <li class="in">
                                <img src="@/assets/img/avatar2.jpg" alt="">
                                <div>
                                    <span class="triangle-left"></span>
                                    <a href="#">Lisa</a>
                                    <span class="datetime">at Jul 25, 2014 11:09</span>
                                    <span class="body">下了预约订单，人数5，预定时间：at Jul 27, 2014 11:09</span>
                                </div>
                            </li>
                            <li class="out">
                                <img src="@/assets/img/avatar2.jpg" alt="">
                                <div>
                                    <span class="triangle-right"></span>
                                    <a href="#">Lisa</a>
                                    <span class="datetime">at Jul 25, 2014 11:09</span>
                                    <span class="body">下了预约订单，人数5，预定时间：at Jul 27, 2014 11:09</span>
                                </div>
                            </li>
                        </ul>
                        <el-input placeholder="请输入内容" v-model="msg" class="input-with-select">
                            <el-button slot="append" icon="el-icon-check"></el-button>
                        </el-input>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "home",
        data:function(){
            return({
                msg:'我是信息'
            })
        },
        method:{
            handleChange(){

            },
            activeNames(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .box-card{
        height: 560px;
    }

    .fSpan_1 {
        box-sizing: border-box;
        background-color: rgb(39, 169, 227);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 22%;
        height: 120px;
        .i1 {
            font-size: 60px;
            margin: 15px;
        }

        .sSpan_1 {
            margin-right: 15px;
            display: flex;
            justify-content: space-between;

            .tSpan_2 {
                color: white;
                align-self: center;

                span {
                    display: flex;
                    justify-content: flex-end;
                }

                .nSpan_1 {
                    font-size: 34px;
                }

                .nSpan_2 {
                    font-size: 16px;
                }
            }
        }

        .sSpan_2 {
            font-size: 15px;
            background-color: rgb(34, 149, 201);
            opacity: 0.7;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 20px;

            a {
                padding-left: 5px;
                padding-right: 5px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                text-decoration: none;
                color: rgb(178, 223, 243);
            }
        }
    }

    .top {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }

    .gztSpan {
        font-size: 30px;
        color: rgb(102, 102, 102);
    }

    .ckSpan {
        margin-left: 5px;
        color: rgb(143, 143, 143);
    }

    .el-collapse {
        width: 100%;
    }

    ul {
        list-style: none;

    }

    .in {
        list-style: none;
        padding: 5px 0;
        margin: 10px auto;
        font-size: 12px;

        img {
            float: left;
            margin-right: 10px;
            display: block;
            height: auto;
            max-width: 100%;
        }

        div {
            display: block;
            padding: 5px;
            position: relative;
            text-align: left;
            border-left: 2px solid #35aa47;
            margin-left: 65px;
            background: #fafafa;

        }

        .triangle-left {
            display: block;
            position: absolute;
            top: 5px;
            left: -8px;
            width: 0;
            height: 0;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-right: 8px solid #35aa47;
        }

        .datetime {
            color: #333;
            font-size: 13px;
            font-weight: 400;
        }

        .body {
            display: block;
        }
    }

    .out {
        list-style: none;
        padding: 5px 0;
        margin: 10px auto;
        font-size: 12px;

        img {
            float: right;
            margin-left: 10px;
            display: block;
            height: auto;
            max-width: 100%;
            height: 45px;
            width: 45px;
            -webkit-border-radius: 50% !important;
            -moz-border-radius: 50% !important;
            border-radius: 50% !important;
            vertical-align: middle;
        }

        div {
            border-right: 2px solid #da4a38;
            margin-right: 65px;
            background: #fafafa;
            text-align: right;
            display: block;
            padding: 5px;
            position: relative;

        }

        .triangle-right {
            display: block;
            position: absolute;
            top: 5px;
            right: -8px;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-left: 8px solid #da4a38;
            box-sizing: border-box;
            border-radius: 0 !important;
            text-align: right;
        }

        .datetime {
            color: #333;
            font-size: 13px;
            font-weight: 400;
        }

        .body {
            display: block;
        }
    }
    
</style>
