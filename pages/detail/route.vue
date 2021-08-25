<template>
  <view>
    <view>
      <u-swiper  :list="data.banner_list"  :haveSlot="true" mode="number" :autoplay="false"    indicator-pos="bottomRight">
        <template v-slot="{elem}">
          <u-image :src="elem.url" witdth="100%" height="100%"  v-if="elem.is_img"  />
          <video :src="elem.url" :muted="true" :loop="true"  :autoplay="true" object-fit="fill"  :enable-progress-gesture="false"  :show-center-play-btn="false"   :controls="false"   v-else  />
        </template>
      </u-swiper>

      <view class="detail-context">
        <view class="context-title">{{data.title}}</view>
        <view class="context-btm-list">
          <view class="text-wrapper">
            <view>{{data.view_count}}次浏览</view>
            <view>{{data.format_time}}</view>
          </view>
          <view  class="text-wrapper d-wrp">
            <view class="d-w">

              <view class="d-w-icon">
                <button :open-type="token?'contact':''"  class="btn" @click="logoClick">11</button>
                <u-icon name="chat"  color="#FED300" size="35"/>
              </view>

              联系客服
            </view>
            <view class="d-w" @click="favorite">
              <u-icon :name="data.is_favorite?'star-fill':'star'"  class="d-w-icon"  color="#FED300" size="35"/>
              收藏
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="detail-des">
      <view class="detail-des-title">线路简介</view>
      <view class="detail-des-context">
        <u-parse :html="data.content"/>
      </view>
    </view>

  </view>
</template>

<script>
import {favoriteApi, routeInfoApi} from '../../api/info'
import store from "../../store";


export default {
  name: "hotel",
  data(){
    return{
      data:{},
      id:'',

    }
  },
  methods:{
    logoClick(){
      if(store.state.user.token===''){
        uni.redirectTo({url:'/pages/login/login'})
      }
    },
    async getData(id){
    const {data}=  await routeInfoApi({route_id:id})
      this.data=data

    },
   async favorite(){
    const{data}=await favoriteApi({item:'route',item_id:this.id})
     this.data.is_favorite=data.is_favorite
    }
  },
  computed:{
    token(){
      return store.state.user.token
    }
  },
  onLoad(ctx){
    this.id=ctx.id
    this.getData(ctx.id)
  }
}
</script>

<style scoped lang="scss">
video{
  width: 100%;
  height: 100%;
}
.btn{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;

}
/deep/.u-swiper-indicator{
  bottom: 50rpx !important;
  right: 20rpx !important;
  /deep/.u-indicator-item-number{
    background: rgba(256, 256, 256, 0.3);
    color:#FFFFFF;
  }
}
.detail-context{
  padding:28rpx 22rpx;
  background: #FFFFFF;
  .context-title{
    font-size: 32rpx;
    font-weight: bold;
    color: #333333;

  }
  .context-btm-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20rpx;
    .text-wrapper{
      font-size: 24rpx;
      color: #333333;
      display: flex;
      align-items: center;
      & view{
        margin-right: 20rpx;
      }
    }
    .d-wrp{
      color:#44495E;
    }


  }

}
.detail-des{
  margin-top: 24rpx;
  background: #FFFFFF;
  .detail-des-title{
    text-align: center;
    font-size: 32rpx;
    color: #333333;
    font-weight: 400;
    padding: 28rpx 0;
  }
  .detail-des-context{
    padding: 0 28rpx;
    line-height: 60rpx;
    font-size: 24rpx;
    color: #333333;
  }
}
.d-w{
  position: relative;

  .d-w-icon{
    position: absolute;
    top: -50rpx;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 50rpx;
    width: 100%;
    text-align: center;
  }

}
</style>