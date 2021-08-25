import server from "./server";


/*  线路列表
* page:第几页
page_size:每页条数(默认10条)
is_recommend:推荐线路该参数必传且值为1
keyword:关键词搜索
is_hot:热门线路该参数必传且值为1
* */
const routeListApi=(data)=>server.post('/route/route_list/',data)

/*
* page:第几页
page_size:每页条数
is_hot:热门酒店必传1,其他的不传
keyword:关键词搜搜*/
const hotelListApi=(data)=>server.post('/hotel/hotel_list/',data)


/*
* page:第几页
page_size:每页条数
is_recommend:推荐列表传1,其余不传该参数
is_hot:热门列表传1,其余不传该参数
keyword:关键词搜索*/

const strategyListApi=(data)=>server.post('/strategy/strategy_list/',data)


const commitListApi=(data)=>server.post('/strategy/comment_list/',data)

const customized=(data)=>server.post('/user/customize/',data,{show:true})

const customizedListApi=(data)=>server.post('/user/customize_list/',data)


const destinationListApi=(data)=>server.post('/destination/destination_list/',data)


const destinationDetail=(data)=>server.post('/destination/get_destination_detail/',data)

export {
    routeListApi,
    hotelListApi,
    strategyListApi,
    commitListApi,
    customized,
    customizedListApi,
    destinationListApi,
    destinationDetail
}






