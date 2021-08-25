import instance from './server'

/*页面id 1=>发现页轮播;2=>线路页轮播;3=>酒店页轮*/
const bannerApi=(page_id=1)=>instance.post({
    url:'/banner/banner_list/',
    data:{
        page_id:page_id
    }
})

const payApi=(data)=>instance.post('/order/vip_preOrder/',data)
const vipPriceApi=(data)=>instance.post('/other/get_vip_price/',data)


export {
    bannerApi,
    payApi,
    vipPriceApi
}