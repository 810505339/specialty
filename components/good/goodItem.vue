<template>
  <view class="good-item-wrapper">
    <view class="good-item-icon">
      <u-image height="320rpx" width="100%" :src="cover_img_url"/>
    </view>
    <view class="good-item-item">
      <view class="context">
        <text class="title">{{ title }}</text>
      </view>
      <view  class="context">
        <text class="des">{{ brief }}</text>
      </view>
      <view class="bottom-wrapper context">
        <text class="count">{{ view_count }}次浏览</text>
        <text class="time">{{ format_time }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "goodItem",
  props: {
    title: {
      type: String
    },
    brief: {
      type: String
    },
    view_count: {
      type: Number
    },
    format_time: {
      type: String
    },
    cover_img_url: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.good-item-wrapper {
  background: #FFFFFF;
  margin: 28rpx 0;
  border-radius: 20rpx;

  .good-item-icon {
    width: 100%;

  }

  .good-item-item {
    padding: 16rpx 26rpx;
    color: #333333;
    .context{
      padding-bottom: 7rpx;
    }

    .title {
      font-weight: bold;
      font-size: 32rpx;
    }
    .des {
      font-weight: 400;
      font-size: 24rpx;
    }
    .bottom-wrapper{
      font-size: 20rpx;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

  }


}
</style>