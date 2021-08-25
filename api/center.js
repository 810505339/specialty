import server from "./server";


const collectApi=(data)=>server.post('/user/favorite_list/',data)
const recordApi=(data)=>server.post('/user/view_list/',data)

export {
    collectApi,
    recordApi
}