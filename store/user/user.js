import {loginApi} from "../../api/login";

export default {
    state: {
        token: '',
        code:'',
        user:{},
        session_key:''

    },
    getters: {},
    mutations: {
        setToken(state, token) {
            state.token = token
            uni.setStorageSync('token', token)
        },
        getToken(state) {

            const token = uni.getStorageSync('token')
            state.token = token ? token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6MSwidGltZSI6ZmFsc2V9.Tv4IpRcWzIYbZBwxNF1VhmW5wXdQ5hP3sXoXJA1ZC-X_JonckNPp-EE-gPuXoI_8a4FRnKglk0_lgkwuG8XI6MOKCQ8qR5os8KFiFY_pLUAExQXcZeNSqcfTPhksBWtg1A8QmhAHnGqZ8gVJf34NX4V59E0DQAZjENweIHygZlE'
        },
        setCode(state,code){
           state.code=code
        },
        setSession_key(state,session_key){
            state.session_key=session_key
        },
        setUser(state,user)
        {
            state.user=user
            uni.setStorageSync('user', user)
        },
        getUser(state){
            const user = uni.getStorageSync('user')
            state.user = user ? user : {}
        }
    },
    actions: {
        login({commit}) {
          return new Promise((resolve)=>{
            return  uni.login({
                  provider: 'weixin',
                  success: (loginRes) => {
                      const {code} = loginRes
                      commit('setCode',code)
                  }
              })
          })
        },
        auth({commit,state}){

            return new Promise((resolve => {

                wx.getUserProfile({
                    desc: "获取你的昵称、头像、地区及性别",
                    success:(res)=>{
                        const {iv,encryptedData}=res
						console.log("信息",res,res.userInfo.avatarUrl,res.userInfo.nickName)
                            commit('setUser',res.userInfo)
                        // loginApi({code:state.code,iv,encrypdata:encryptedData}).then(res => {
							loginApi({code:state.code,avatar:res.userInfo.avatarUrl,nick_name:res.userInfo.nickName}).then(res => {
                            // commit('setToken', res.data.token)
                            // commit('setUser',res.data.user_info)
                            // commit('setSession_key',res.data.session_key)
                            // if(res.data?.user_info?.mobile)
                            // {
                            //     uni.navigateTo({url: '/pages/index/index'})
                            // }else
                            // {
                            //     uni.$u.toast('绑定手机号之后自动登录');
                            // }
                            resolve(res)
                        })

                    }
                })
            }))

        }

    }
}