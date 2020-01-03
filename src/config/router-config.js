// 路由配置文件只放路由信息
import Home from '@/views/Home.vue'

const routers = [{
    path: '/',
    component: Home,
    children: [{ //配置一级分类
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
        { // 商品页面
            path: '/goodsList',
            name: 'goodsList',
            component: () => import('@/views/shopManagement/Goodslist.vue')
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
        { // 客户消费详情页面
            path: '/customerDetails',
            name: 'customerDetails',
            component: () => import('@/views/customer/CustomerDetails.vue'),
        },
        { // 订单管理页面
            path: '/orderInfo',
            name: 'orderInfo',
            component: () => import('@/views/order/OrderInfo.vue'),
        },
        { // 订单详情页面
            path: '/orderDetails',
            component: () => import('@/views/order/OrderDetails.vue'),
            children: [{
                    path: '',
                    name: 'orderDetails',
                },
                { //详情页面的订单
                    path: '/Order',
                    name: 'Order',
                    component: () => import('@/components/orderInfo/Order.vue'),
                },
                { // 用户
                    path: '/UserOrder',
                    name: 'UserOrder',
                    component: () => import('@/components/orderInfo/UserOrder.vue'),
                },
                { // 表格详情
                    path: '/TableOrder',
                    name: 'TableOrder',
                    component: () => import('@/components/orderInfo/TableOrder.vue'),
                },
            ]
        },
        { //用户评价预览页面
            path: '/userEvaluate',
            name: 'userEvaluate',
            component: () => import('@/views/order/UserEvaluate.vue'),
        }
    ],
}]

export default routers;