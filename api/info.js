import server from "./server";

const strategyInfoApi=(data)=>server.post('/strategy/strategy_info/',data)
const hotelInfoApi=(data)=>server.post('/hotel/hotel_info/',data)
const routeInfoApi=(data)=>server.post('/route/route_info/',data)
const favoriteApi=(data)=>server.post('/user/do_favorite/',data,{show:true})
const commentApi=(data)=>server.post('/strategy/comment/',data,{show:true})
const bookHotelApi=(data)=>server.post('/hotel/book_hotel/',data,{show:true})
const agreementApi=(data)=>server.post('/other/agreement_info/',data)
const bookInfoApi=(data)=>server.post('/hotel/book_info/',data)
const customizeInfoApi=(data)=>server.post('/user/customize_info/',data)



export {
    routeInfoApi,
    hotelInfoApi,
    strategyInfoApi,
    favoriteApi,
    commentApi,
    bookHotelApi,
    agreementApi,
    bookInfoApi,
    customizeInfoApi
}