// 路由配置文件只放路由信息
import Home from '@/views/Home.vue'

const routers = [{
    path: '/',
    component: Home,
    children: [
        { //配置登录
            path: '/firstManagement',
            component: () => import('@/views/shopManagement/firstManagement'),
            name: 'firstManagement',
        },
        { // 工作台页面  默认
            path: '/',
            name: 'home',
            component: () => import('@/views/homepage/home.vue')
        }, 
        { // 客户消费页面
            path: '/customerInfo',
            name: 'customerInfo',
            component: () => import('@/views/customer/customerInfo.vue')
        },
        { // 订单管理页面
            path: '/orderInfo',
            name: 'orderInfo',
            component: () => import('@/views/order/OrderInfo.vue')
        }
    ],
}]

export default routers;