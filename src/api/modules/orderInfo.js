const orderInfo = [{
        // 定义请求地址
        url: 'order/findAll',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'findByUserName',
        // 定义方法的作用
        title: '分页模糊查询订单信息'
    },
    {
        // 定义请求地址
        url: 'order/findById',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'findById',
        // 定义方法的作用
        title: '根据订单id查询订单订单信息'
    }
]

export default orderInfo;