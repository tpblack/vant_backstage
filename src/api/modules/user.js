const user = [{
        // 定义请求地址
        url: '/user/backstageLogin',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'backstageLogin',
        // 定义方法的作用
        title: '后台登录'
    },
    {
        // 定义请求地址
        url: '/user/escLogin',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'escLogin',
        // 定义方法的作用
        title: '退出登录'
    },
    {
        // 定义请求地址
        url: '/user/findByUser',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'findByUser',
        // 定义方法的作用
        title: '根据token获取用户信息'
    }
]

export default user;