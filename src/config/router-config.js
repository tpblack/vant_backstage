// 路由配置文件只放路由信息
import Home from '@/views/Home.vue'

const routers = [{
    path: '/',
    component: Home,
    children: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/homepage/home.vue')
        },
        {
            path: '/customerInfo',
            name: 'customerInfo',
            component: () => import('@/views/customer/customerInfo.vue')
        }
    ]
}, 
]

export default routers;