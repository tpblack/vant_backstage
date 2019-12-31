// 路由配置文件只放路由信息
import Home from '@/views/Home.vue'

const routers = [{
    path: '/',
    component: Home,
    children: [
        { //配置一级分类
            path: '/firstManagement',
            component: () => import('@/views/shopManagement/firstManagement'),
            name: 'firstManagement',
        },
        { //配置二级分类
            path: '/Secondmanagement/:id',
            component: () => import('@/views/shopManagement/Secondmanagement'),
            name: 'Secondmanagement',
        },
        { //商品分类
            path: '/shop/:id',
            component: () => import('@/views/shopManagement/shop'),
            name: 'shop',
        },
        {
            //商品详情
            path: '/CommodityInfo/:id',
            component: () => import('@/views/shopManagement/CommodityInfo'),
            name: 'commodityInfo',
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