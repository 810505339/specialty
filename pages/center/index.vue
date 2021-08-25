<template>
  <view>
    <view class="header-wrapper">
      <u-image width="100%" height="360rpx" mode="center" class="header-bg" :src="require('static/center/bg.png')"/>
      <view class="header-context" >
        <view class="header-icon" @click="logoClick">
          <u-image :src="user.avatar" width="112rpx" height="112rpx" shape="circle">
            <view slot="error">
              <u-icon name="account-fill"  size="60"/>
            </view>
          </u-image>
        </view>
        <view class="header-name">{{user.nick_name ||'游客'}}</view>
        <view class="header-type" v-if="user.is_vip">定制会员</view>
      </view>
        <view class="f-box-wrapper" @click="toVip">
          <u-image width="100%" height="240rpx" mode="scaleToFill" :src="require('static/center/banner.png')"/>
        </view>
    </view>
    <view class="nav-list-wrapper">
      <u-cell-group :border="false">
        <u-cell-item v-for="(item,index) in navList" :index="index" :key="index" :title="item.title"
                     @click="handleToUrl">
          <button :open-type="token?'contact':''" v-if="item.btn" @click="logoClick" class="btn">11</button>
        </u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>


import store from "../../store";
import UIcon from "../../uview-ui/components/u-icon/u-icon";

export default {
  components: {UIcon},
  data() {
    return {
      navList: [
        {
          title: '我的收藏',
          url: '/pages/center/collect',
        },
        {
          title: '我的定制',
          url: '/pages/center/customer',
        },
        {
          title: '浏览记录',
          url: '/pages/center/record',
        },
        {
          title: '在线客服',
          url: '/pages/center/customer',
          btn:true
        },
      ]
    }
  },
  onLoad() {
    console.log(this.user)
  },
  computed:{
    user(){
      store.commit('getUser')
      return store.state.user.user
    },
    token(){
      return store.state.user.token
    }

  },
  methods: {
    handleToUrl(index) {
      if(index===3)
      {
        return
      }
      uni.navigateTo({url: this.navList[index].url})
    },
    logoClick(){
      if(store.state.user.token===''){
        uni.navigateTo({url:'/pages/login/login'})
      }
    },
    toVip(){
      uni.navigateTo({url:'/pages/vip/index'})
    },
  },


}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: relative;

  .header-bg {
    position: relative;
    z-index: 10;
  }

  .f-box-wrapper {
    position: absolute;
    bottom: -160rpx;
    left: 40rpx;
    right: 40rpx;
    z-index: 20;
  }

  .header-context {
    position: absolute;
    z-index: 20;
    text-align: center;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #FFFFFF;

    .header-icon {
      /deep/ .u-image {
        margin: auto;

      }
    }

    .header-name {
      margin-top: 10rpx;
      font-size: 32rpx;
      font-weight: bold;
    }

    .header-type {
      font-size: 24rpx;
      font-weight: 400;
    }

  }


}

.nav-list-wrapper {
  padding-top: 160rpx;

  /deep/ .u-cell {
    color: #333333;
  }

  /deep/ .u-cell__right-icon-wrap {
    color: #000000;
  }
  .btn{
    position: absolute;
    width: 100%;
    top:0rpx;
    left:0rpx;
    opacity: 0;
  }
}

</style>
