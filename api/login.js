import instance from "./server";

const loginApi=(data)=>instance({
    method:'get',
    isLogin: false,
    data,
    url:'/api/consumer_login'
})


export {
    loginApi 
}