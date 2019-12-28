// 定义一个规范
const firstlevel = [{
        // 定义请求地址
        url: 'type/findByMain',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'findByMain',
        // 定义方法的作用
        title: ' 获取商品所有主类'
    },
    {
        // 定义请求地址
        url: 'type/findByAssistant',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'findByAssistant',
        // 定义方法的作用
        title: ' 获取某个主类下所有的副类（id）主类的id'
    }]
    
// 默认导出job
export default firstlevel;