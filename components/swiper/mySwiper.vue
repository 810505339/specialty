<template>
  <view class="swiper-wrapper">
    <u-swiper :list="swiperList" :haveSlot="true">
      <template v-slot="{elem}">
        <view class="swiper-image-wrapper">
          <u-image width="100%" height="380rpx" :src="elem.img_url"></u-image>
          <view class="swiper-context">
            <view class="title">{{ elem.title }}</view>
            <view class="des">{{ elem.brief }}</view>
          </view>
        </view>
      </template>
    </u-swiper>
  </view>
</template>

<script>
export default {
  name: "swiper",
  props:{
    swiperList:{
      type:Array,
      default:()=>[]
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-wrapper {
  padding: 20rpx 28rpx;
  background: #FFFFFF;
}
.u-swiper-wrap {
  height: 380rpx !important;
}

.swiper-wrapper {
  padding: 20rpx 28rpx;
  background: #FFFFFF;
}

.swiper-image-wrapper {
  position: relative;
  height: 380rpx;

  .swiper-context {
    position: absolute;
    bottom: 40rpx;
    left: 32rpx;
    color: #FFFFFF;
    font-size: 24rpx;
    font-weight: 400;

    .title {
      font-size: 28rpx;
      font-weight: bold;
      padding-bottom: 10rpx;
    }


  }
}

</style>