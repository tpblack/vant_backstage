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

export var orderTimeInterception = function(timeStr){
    return timeStr.slice(0,timeStr.indexOf("T"))
}
