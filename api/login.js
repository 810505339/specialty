import instance from "./server";

const loginApi=(data)=>instance({
    method:'get',
    isLogin: false,
    data,
    url:'/api/consumer_login'
})

const bindMobile=(data)=>instance.post('/auth/bind_mobile/',data)


export {
    loginApi,
    bindMobile
}