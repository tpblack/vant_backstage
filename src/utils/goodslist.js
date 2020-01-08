export var goodslistStatus = function (status) {
    if (status) {
        return '正常'
    } else {
        return '下架'
    }
}
export var goodslistStatusBoolean = function (status) {
    if (status == "正常") {
        return 1;
    } else {
        return 0;
    }
}

export var goodsListPriceInsertSpot = function (price) {
    return price.slice(0, -2) + '.' + price.slice(-2)
}