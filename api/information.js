import server  from "./server";


const information=(data)=>server.post('/api/user',data)


export {
    information 
}