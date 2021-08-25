import instance from "./server";

const loginApi=(data)=>instance({
    method:'post',
    isLogin: false,
    data,
    url:'/auth/auth_login/'
})

const bindMobile=(data)=>instance.post('/auth/bind_mobile/',data)


export {
    loginApi,
    bindMobile
}