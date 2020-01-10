// 订单详情状态判断
export var orderPaymentStatus =  function (num){
    if(num==1){
        return "未付款";
    }else if(num==2){
        return "已付款"
    }else if(num==3){
        return "未发货"
    }else if(num==4){
        return "已发货"
    }else if(num==5){
        return "交易成功"
    }else if(num==6){
        return "交易关闭"
    }
}
// 时间截取
export var orderTimeInterception = function(timeStr){
    return timeStr.slice(0,timeStr.indexOf("T"))
}
// 判断用户是否评价
export var orderBuyerRate = function(buyerRate){
    if(buyerRate==1){
        return "是";
    }else if(buyerRate==2){
        return "否"
    }
}
