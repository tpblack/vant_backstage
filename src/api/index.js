// 用来聚合所有的接口
// 引入网络请求地址
import {
    BASE_URL
} from '@/config/gateway'

// 引入firstlevel模块
import firstlevel from './shopManagement/firstlevel';

// 引入api生成器
import ApiGenerator from '@/utils/apiGenerator';


//定义模块对象 聚合所有模块
const Modules = {
    firstlevel, //属性和值用于 省略一个可以不写
}


//定义一些其他的配置
const CONFIG = {
    BASE_URL, //请求的根路径
    TIMEOUT: 30000, //请求超时时间 30s
    WITHCORS: false, //请求是否携带session验证
    Modules //配置所有模块信息
}
// 实例化api生成器
var apiGenerator = new ApiGenerator(CONFIG);

var api = apiGenerator.create();

export default api;
