<template>
  <view class="vip-wrap">
    <u-image :src="require('static/vip/bg.png')" height="100vh" width="100vw" class="vip-bg"  />
    <u-navbar  title="开通VIP" :background="'#252531'"    title-color="#ffffff"   back-icon-color="#ffffff"   />
    <view class="vip-banner">
      <view class="banner-title"><text>VIP会员升级后可获<text class="bx">得如下奖励</text></text></view>
      <view class="banner-ctx">
        <view class="banner-l" v-for="(item,i) in bannerList" :key="i">
            <view>
                <u-image  :src="item.img" width="100rpx" height="100rpx"  class="banner-l-img" />
            </view>
            <view class="banner-l-title"><text>{{item.title}}</text></view>
        </view>
      </view>
    </view>
    <view class="context-warp">
      <view class="context-title">VIP特权</view>
      <view class="context-list" v-for="(item,i) in list" :key="i">
        <view class="title">
          {{item.title}}
        </view>
        <view class="context">
          {{item.context}}
        </view>
      </view>
    </view>
    <view>
      <view style="height: 100rpx;">
        <view class="f-d-body">
          <u-button   shape="circle" ripple :custom-style="{width:'100%'}"  @click="toPay">立即开通</u-button>
        </view>
      </view>
    </view>

  </view>
</template>

<script>

import {payApi, vipPriceApi} from "../../api/base";
import store from "../../store";

export default {
  name: "index",
  data(){
    return{
      list:[{
        title:'·私人定制旅游路线',
        context:'充值且凡vip的用户，可享受终身私人定制旅游线路我们的工作人员会根据你的实际情况，为你定制一条你满意的线路。',
      },{
        title:'·提前预约酒店',
        context:'充值且凡vip的用户，可在且凡小程序联系相应的酒店，进行免费的预约！',
      }],
      bannerList:[
        {
          img:require('static/vip/siren.png'),
          title:'私人定制',
        },
        {
          img:require('static/vip/yuyue.png'),
          title:'酒店预约'
        }
      ],
      vip_price:'',
      pay_info:{}
    }
  },
  methods:{
    async getPrice(){
      const {data}= await vipPriceApi()
         this.vip_price=data.vip_price
    },
    async toPay(){
       await  this.pay()
      uni.requestPayment({
        provider:'wxpay',
        ...this.pay_info,

        success:(res)=>{
          uni.$u.toast('支付成功');
          this.user.is_vip=1
          store.commit('setUser',this.user)
          uni.navigateBack({
            delta: 1
          });
        }
      })
    },
    async pay(){
      const pampas={
        open_id:this.open_id?this.open_id:'',
      }
     const {data}= await payApi(pampas)
      this.pay_info=data.pay_info
      console.log(this.pay_info)
    }
  },
  computed:{
    open_id(){
      return store.state.user.user.open_id
    },
    user(){
      return store.state.user.user
    }
  },
  onLoad(){
    this.getPrice()



  }

}
</script>

<style scoped lang="scss">
u-button{
  width: 100%;
}
/deep/.u-border-bottom{
  background: none !important;
  &:after{
    border-bottom-width: 0;
  }
  color:#FFFFFF;
}
.vip-wrap{
  .vip-bg{
    position: absolute;
    z-index: 0;
  }


  .context-warp{
    position: relative;
    top: 250rpx;
    z-index: 10;
    border: 4rpx solid #CAAD86;
    border-radius: 40rpx;
    padding: 60rpx 32rpx 40rpx 32rpx;
    margin: 0 28rpx;
    position: relative;
    .context-list{
      color:#FFFFFF;
      .title{
        font-size:28rpx;
        font-weight: bold;
        padding-bottom: 16rpx;
      }
      .context{
        font-size:24rpx;
        padding-bottom: 40rpx;
      }
    }
    .context-title{
      position: absolute;
      font-size: 32rpx;
      font-weight: bold;
      color: #F3CF9E;
      top:-20rpx;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .vip-banner{
    top: 250rpx;
    position: relative;
    z-index: 10;
    margin: 0 30rpx;
    background: linear-gradient(90deg, #303145 0%, #44495E 100%);
    box-shadow: 0 11px 62px rgba(21, 21, 34, 0.67);
    border-radius: 20rpx;
    margin-bottom: 90rpx ;
    overflow: hidden;
    .banner-title{
      font-weight: bold;
      text-align: center;
      font-size: 32rpx;
      color:#FFFFFF;
      padding: 34rpx 0;
      .bx{
        color:#FFBC1E
      }

    }
    .banner-ctx{
      display: flex;
      align-items: center;
      justify-content: center;
      .banner-l{
        flex: 1;
        text-align: center;

      }
      .banner-l-img{
        display: inline-block;

      }

      .banner-l-title{
        padding:  10rpx 0 40rpx 0;
        color:#FFFFFF;
        font-size: 24rpx;
        font-family: SourceHanSansCN-Normal;
      }
    }
  }


}

.f-d-body{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 50;
  bottom: 0;
  background: linear-gradient(90deg, #303145 0%, #44495E 100%);
  box-shadow: 0 11px 62px rgba(21, 21, 34, 0.67);
  height: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 25rpx;
  /deep/.u-btn{
    width: 100%;
    background: linear-gradient(90deg, #E9B87A 0%, #F8D9AD 100%, #F8D9AD 100%);
    color: #44495E;
    font-size: 32rpx;
    font-weight: bold;
    &:after{
      border-radius: 0;
    }
  }

}

</style>