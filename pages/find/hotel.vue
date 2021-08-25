<template>
  <view>
    <view class="t-wrap">
      <search @click.native="handleFocus"/>
      <view class="pos-wrap">
        <u-icon label="附近酒店"   @click="toMap" label-color="#FFBC1E" lab-size="10"     label-pos="bottom"  margin-top="10" size="32" :name="require('static/find/pos.png')"/>
      </view>
    </view>
    <my-swiper :swiperList="swiperList"/>

    <view class="tag-title">
      <view class="tag"></view>
      <view class="text">热门酒店</view>
    </view>
    <good-list @api="api"  @itemClick="itemClick"   ref="goodList"/>
  </view>
</template>

<script>
import Search from "./compoents/search";
import mySwiper from "../../components/swiper/mySwiper";
import GoodList from "../../components/good/goodList";
import {bannerApi} from "../../api/base";
import {hotelListApi} from "../../api/list";

export default {
  name: "route",
  components: { GoodList, mySwiper, Search},
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
    }
  },
  methods: {
    handleFocus() {
      uni.navigateTo({url: '/pages/find/searchView?type=hotel'})
    },
    async api(fn) {
      return fn(hotelListApi)

    },
    itemClick(item){

      uni.navigateTo({url: `/pages/detail/hotel?id=${item.id}`})
    },
    async getSwiperList(){
      const{data}= await bannerApi(3)
      this.swiperList=data
    },
    toMap(){

      uni.navigateTo({url:'/pages/map/map'})
    }
  },
  onLoad(){
    this.getSwiperList()

  },
  onReachBottom(){
    this.$refs['goodList'].pushList({is_hot:1})
  },
  onReady(){
    this.$refs['goodList'].pushList({is_hot:1})
  }
}
</script>

<style scoped lang="scss">
/deep/.search-wrapper{
  position: relative;
  padding-right: 140rpx !important;
}
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
.pos-wrap{
  position: absolute;
  right: 10rpx;
  top:50%;
  transform: translateY(-50%);

}
.t-wrap{
  position: relative;
}


</style>