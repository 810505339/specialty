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
            state.token = token ? token : ''
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

                        loginApi({code:state.code,iv,encrypdata:encryptedData}).then(res => {
							console.log("获取用户信息的",res)
                            commit('setToken', res.data.token)
                            commit('setUser',res.data.user_info)
                            commit('setSession_key',res.data?.session_key)
                            if(res.data?.user_info?.mobile)
                            {
                                uni.navigateTo({url: '/pages/index/index'})
                            }else
                            {
                                uni.$u.toast('绑定手机号之后自动登录');
                            }
                            resolve(res)
                        })

                    }
                })
            }))

        }

    }
}