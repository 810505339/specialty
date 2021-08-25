<template>
  <view class="login-wrap">
    <u-image  :src="require('static/center/logo.png')" width="100%" height="500rpx"/>
    <view class="btn-wrap">
      <u-button @click="login" class="login-btn" type="success" >登录</u-button>
      <u-button open-type="getPhoneNumber" @getphonenumber="getPhone" class="phone-btn" type="primary" >绑定手机号</u-button>
    </view>
  </view>
</template>

<script>
import store from '../../store/index';
import {bindMobile} from "../../api/login";


export default {
  name: "login",
  methods: {
    async login() {
      store.dispatch('login')
     const {data}=await store.dispatch('auth')
      if(data.user_info.mobile)
      {
         // uni.switchTab({url: '/pages/home/index'})
        uni.navigateBack({
          delta: 1
        })
      }
    },
    async getPhone(e) {
      if (!this.session_key) {
        uni.$u.toast('请先登录');
        return
      }
      const {encryptedData, iv} = e.detail
      await bindMobile({
        encrypdata: encryptedData,
        iv: iv,
        session_key: this.session_key
      })
      uni.navigateBack({
        delta: 1
      })


    }
  },
  computed: {
    mobile() {

      return store.state.user.user?.mobile
    },
    session_key() {
      return store.state.user.session_key
    },
    getToken(){
      return store.state.user.token
    }
  },
  onLoad() {
      if(this.getToken)
      {
        uni.navigateBack({
          delta: 1
        })
      }

  }
}
</script>
<style>
page{
  background: #FFFFFF;
}
</style>
<style scoped lang="scss">
.login-wrap{
  padding-top: 50rpx;
  background: #FFFFFF;

  .btn-wrap{
    padding: 50rpx;
  }
    .login-btn{
      /deep/ button{
        margin: 50rpx 0;
      }
    }
    .phone-btn{

    }
}

</style>