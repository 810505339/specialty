<template>
  <view class="home-wrap">
<!--    <view class="home-list">-->
<!--      <view class="home-item-wrapper" v-for="item in list" :key="item.id" @click="itemClick(item)">-->
<!--        <u-image width="100%" height="300rpx" :src="item.cover_img_url" class="home-img"></u-image>-->
<!--        <view class="bg-mask"></view>-->
<!--        <view class="home-context">-->
<!--          <view class="home-title">-->
<!--            <text>{{item.title}}</text>-->
<!--          </view>-->
<!--          <view class="home-text">-->
<!--            <text>{{item.view_count}}次浏览</text>-->
<!--            <text>{{item.format_time}}</text>-->
<!--          </view>-->
<!--        </view>-->
<!--      </view>-->
<!--    </view>-->
<!--    <u-loadmore :status="status" icon-type="circle"/>-->

    <view class="img-wrap">
    <u-image width="100%" height="400rpx" :src="data[0].img_url"/>
    </view>
    <view class="btn-wrap"><u-button open-type='contact' type="warning" :open-type="token?'contact':''"  class="btn" @click="logoClick">1v1旅行顾问</u-button></view>
    <view class="img-wrap">
      <u-image  width="100%" height="400rpx" :src="data[1].img_url" />
    </view>


  </view>
</template>

<script>
import {routeListApi} from "../../api/list";
import store from "../../store";
import {bannerApi} from "../../api/base";

export default {
  data() {
    return {
      list: [],
      status:'loading',
      page:0,
      is_more:1,
      data:[]


    }
  },
  methods: {
    async getList(){
      if(!this.is_more)
      {
        return
      }
      const params={
        page:this.page+=1,
        page_size:10
      }

      const {data,is_more}=  await routeListApi(params)
      this.is_more=is_more
      if(!this.is_more)
      {
        this.status='nomore'
      }
      this.list.push(...data)

    },
    itemClick(item){
      uni.navigateTo({url: `/pages/detail/route?id=${item.id}`})
    },
    logoClick(){
      if(store.state.user.token===''){
        uni.redirectTo({url:'/pages/login/login'})
      }
    },
    async banner(){
     const {data}= await bannerApi(5)
      this.data=data
    },

  },
  computed:{
    token(){
      return store.state.user.token
    }
  },
  onReachBottom(){
    // this.getList()
  },
  onLoad(){
    this.banner()
  }
}
</script>


<style>
page {
  position: relative;
  height: 100vh;

}
</style>

<style lang="scss" scoped>


.img-wrap{

}
.home-wrap{
    position: absolute;
  left: 0;
  right: 0;
  top:50%;
  transform: translateY(-50%);
}

.btn-wrap{
  margin: 80rpx 0;
  text-align: center;
}

.btn{

  font-size: 28rpx;
  font-weight: bold;
  display: inline-block;
  /deep/ button{

    width: 300rpx;
  }

}
//.home-list {
//
//
//  .home-item-wrapper {
//
//    .bg-mask {
//      position: absolute;
//      z-index: 15;
//      background: rgba(0,0,0,0.2);
//      right: 0;
//      left: 0;
//      top: 0;
//      bottom: 0;
//    }
//
//    position: relative;
//
//    margin: 28rpx 32rpx;
//
//
//    .home-img {
//      position: relative;
//      z-index: 10;
//      left: 0;
//      right: 0;
//    }
//
//    .home-context {
//      position: absolute;
//      z-index: 20;
//      left: 0;
//      right: 0;
//      bottom: 0;
//      padding: 20rpx 40rpx;
//
//
//      .home-title {
//        font-size: 28rpx;
//        padding-bottom: 10rpx;
//        color: #FFFFFF;
//        font-weight: bold;
//
//      }
//
//      .home-text {
//        display: flex;
//        font-size: 20rpx;
//        justify-content: space-between;
//        align-items: center;
//        font-weight: 400;
//        color: #DFDFDF;
//      }
//    }
//
//
//  }
//}
</style>