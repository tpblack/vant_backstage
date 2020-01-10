// 判断商品状态  
export var goodslistStatus = function (status) {
    if (status) {
        return '正常'
    } else {
        return '下架'
    }
}

// 判断商品状态  
export var goodslistStatusBoolean = function (status) {
    if (status == "正常") {
        return 1;
    } else {
        return 0;
    }
}

// 在数字最后两个数前面加一个小数点
export var goodsListPriceInsertSpot = function (price) {
    return price.slice(0, -2) + '.' + price.slice(-2)
}