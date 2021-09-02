import server  from "./server";


const del=(data)=>server.post('/api/user_address/30/delete',data)
const add=(data)=>server.post('/api/user_address',data)
const update=(data)=>server.post('/api/user_address/29',data)

export {
    del,
	add,
	update
}