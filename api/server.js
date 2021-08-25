import ajax from '@/uni_modules/u-ajax/js_sdk'
import store from "../store";
import getPlatform from '../utlis/config'



const instance = ajax.create({
    baseURL:  `${getPlatform()==='H5'?'/api':'http://116.62.234.233:801'}/api`,
    timeout: 6000,
    isLogin: true,
    header:{
        'Content-Type':'application/x-www-form-urlencoded;charset=utf-8;'
    },
})                 // 创建请求实例

// 添加请求拦截器
instance.interceptors.request.use((config) => {


    //是否含有token
    if (config.isLogin) {
         store.commit('getToken');
         const token=store.state.user.token
        if (token) {
            config.header['authorization'] = token
        }
    }

    return config
})
instance.interceptors.response.use((response) => {

    const data=response.data
    const {code,msg}=data



    if(code===100)
    {
        store.commit('setToken','');
        store.commit('setUser',{});
        uni.navigateTo({url: '/pages/login/login'})
        return
    }

    if(code===590)
    {
        uni.navigateTo({url: '/pages/vip/index'})
    }

    if(code!==200)
    {
        uni.$u.toast(msg);

    }

    if (response.config.show)
    {

        uni.$u.toast(msg);
    }






   if(code===200)
   {
       return response.data
   }
})    // 添加响应拦截器


export default instance