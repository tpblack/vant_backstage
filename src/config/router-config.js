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
            component: () => import('@/views/customer/CustomerInfo.vue')
        },
        { // 订单管理页面
            path: '/orderInfo',
            name: 'orderInfo',
            component: () => import('@/views/order/OrderInfo.vue'),
        },
        {
            path: '/orderDetails',
            component: () => import('@/views/order/OrderDetails.vue'),
            children: [
                {
                    path: '',
                    name: 'orderDetails',
                },
                {
                    path: '/Order',
                    name: 'Order',
                    component: () => import('@/components/orderInfo/Order.vue'),
                },
                {
                    path: '/UserOrder',
                    name: 'UserOrder',
                    component: () => import('@/components/orderInfo/UserOrder.vue'),
                },
                {
                    path: '/TableOrder',
                    name: 'TableOrder',
                    component: () => import('@/components/orderInfo/TableOrder.vue'),
                },
            ]
        }
    ],
}]

export default routers;