<template>
  <view>
    <search @click.native="handleFocus"/>
    <my-swiper :swiperList="swiperList"/>

      <view class="tag-title">
        <view class="tag"></view>
        <view class="text">热门目的地</view>
      </view>
      <good-list @api="api" @itemClick="itemClick"    ref="goodList"/>
  </view>
</template>

<script>
import Search from "./compoents/search";
import mySwiper from "../../components/swiper/mySwiper";
import GoodList from "../../components/good/goodList";
import {bannerApi} from "../../api/base";
import {routeListApi} from '../../api/list'
export default {
  name: "route",
  components: {GoodList, mySwiper, Search},
  data() {
    return {
      swiperList: [
        {
          img_url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '这些景点美爆了',
          brief: '旅游打卡圣地，乡村景点欢乐多'
        },
        {
          img_url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '这些景点美爆了',
          brief: '旅游打卡圣地，乡村景点欢乐多'
        },
        {
          img_url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
          title: '这些景点美爆了',
          brief: '旅游打卡圣地，乡村景点欢乐多'
        }],
      page:1
    }
  },
  methods: {
    handleFocus() {
      uni.navigateTo({url: '/pages/find/searchView?type=route'})
    },
   async api(fn) {
      fn(routeListApi)
    },
    itemClick(item){

      uni.navigateTo({url: `/pages/detail/route?id=${item.id}`})
    },
    async getSwiperList(){
      const{data}= await bannerApi(2)
      this.swiperList=data
    }
  },
  onLoad(){
    this.getSwiperList()

  },
  onReachBottom(){
    this.$refs['goodList'].pushList()
  },
  onReady(){
    this.$refs['goodList'].pushList()
  }
}
</script>

<style scoped lang="scss">
.tag-title {
  display: flex;
  align-items: center;
  padding: 16rpx 28rpx 0 16rpx ;

  .tag {
    width: 8rpx;
    height: 36rpx;
    background: #FFBC1E;
    border-radius: 4rpx;
    margin-right: 10rpx;
  }

  .text {
    font-size: 32rpx;
    font-weight: bold;
    color: #44495E;
  }

}


</style>