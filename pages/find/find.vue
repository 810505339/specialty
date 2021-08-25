<template>
  <view class="find-wrapper">
    <search @focus="handleFocus"/>
    <my-swiper :swiperList="swiperList"/>
    <view class="nav-list-wrapper">
      <view v-for="(item,index) in navList"  :key="index" class="nav-item" @click="toNavUrl(item.url)">
        <u-image :src="item.icon" width="60rpx" height="60rpx"/>
        <view class="text">
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>
    <view class="banner-wrapper" @click="toCustomized">
      <u-image :src="require('static/find/banner@2x.png')"  width="100%" height="200rpx" />
    </view>
    <view class="card-list-wrapper">
        <view class="card-list-title">

        </view>
      <view class="card-list">
        <view class="card-item" v-for="(item,index) in cardList" @click="itemClick(item)" :key="index">
          <u-image :src="item.cover_img_url"  width="200rpx" height="200rpx" />
          <view class="card-text">
            <text >{{item.title}}</text>
          </view>
        </view>
      </view>
      <u-loadmore :status="status" icon-type="circle"  />

    </view>

  </view>
</template>

<script>

import Search from "./compoents/search.vue";
import GoodList from "../../components/good/goodList";
import UImage from "../../uview-ui/components/u-image/u-image";
import mySwiper from "../../components/swiper/mySwiper";
import {bannerApi} from '../../api/base'
import {destinationListApi} from "../../api/list";

export default {
  components: {mySwiper, UImage, GoodList, Search},
  data() {
    return {
      swiperList: [],
      navList: [
        {
          icon: require('static/find/route@2x.png'),
          text: '线路',
          url: '/pages/find/route'
        },
        {
          icon: require('static/find/hotel@2x.png'),
          text: '名宿/酒店',
          url: '/pages/find/hotel'
        }, {
          icon: require('static/find/strategy@2x.png'),
          text: '攻略',
          url: '/pages/find/strategy'
        }, {
          icon: require('static/find/customized@2x.png'),
          text: '私人定制',
          url: '/pages/find/customized'
        },
      ],
      cardList:[],
      is_more:1,
      page:0,
      status: 'loading',
    }
  },
  methods: {
    handleFocus() {
      uni.navigateTo({url: '/pages/find/searchView?type=all'})
    },
    toNavUrl(url) {
      uni.navigateTo({url})
    },
    itemClick(item){

      uni.navigateTo({url: `/pages/find/destinationList?id=${item.id}`})
    },
    async getSwiperList(){
     const {data}= await bannerApi()
      this.swiperList=data
    },
    async getCardList(){
      if (!this.is_more) {
        return
      }

      const params={
        page:this.page+=1,
        page_size:30
      }

     const {data,is_more}= await  destinationListApi(params)
      this.is_more=is_more
      if(!this.is_more)
      {
        this.status='nomore'
      }
      this.cardList.push(...data)

    },
    toCustomized(){
      uni.navigateTo({url:'/pages/find/customized'})
    }

  },
  onReachBottom(){
    this.getCardList()
  },
  onLoad(){
    this.getSwiperList()
    this.getCardList()
  }
}
</script>

<style scoped lang="scss">
.find-wrapper {
  /deep/ .u-indicator-item-round-active {
    background-color: #FFD400;
  }



  .nav-list-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 20rpx 0;
    background: #FFFFFF;

    .nav-item {
      flex: 1;
      text-align: center;
      /deep/ .u-image{
        margin: auto;

      }
      .text{
       padding-top: 20rpx;
        font-size: 24rpx;
        font-weight: 500;
        color: #333333;
      }

    }
  }
  .banner-wrapper{
    margin: 16rpx 0;
  }

}
.card-list-wrapper{
  background: #FFFFFF;
  .card-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    .card-item{
      margin: 16rpx 0;
      text-align: center;
      .card-text{
        font-size: 28rpx;
        font-weight: 500;
        color:#44495E;
        padding-top: 12px;
      }
    }

  }
}
</style>
