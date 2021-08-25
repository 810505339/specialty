<template>
  <view class="customized-list-wrapper">
    <view class="customized-item-wrapper" v-for="item in list" @click="toDetails(item)">
      <view class="title">
        {{ item.title }}
      </view>
      <view class="context">
        <view>
          <text class="name"> {{ item.true_name }}</text>
          <text class="phone"> {{ item.mobile }}</text>
        </view>
        <view>
          <text class="time"> {{ item.format_date }}</text>
        </view>
      </view>
    </view>
    <u-loadmore :status="status" icon-type="circle"/>
  </view>
</template>

<script>
import {customizedListApi} from "../../api/list";

export default {
  name: "customer",
  data() {
    return {
      list: [],
      page:0,
      status:'loading',
      is_more:1
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
         page_size:20
       }

    const {data,is_more}=  await customizedListApi(params)
       this.is_more=is_more
       if(!this.is_more)
       {
         this.status='nomore'
       }
       this.list.push(...data)

    },
    toDetails(item) {

      uni.navigateTo({url:`/pages/detail/customized?id=${item.item_id}&type=${item.item}`})
    }
  },
  onReachBottom(){
    this.getList()

  },
  onLoad(){
    this.getList()
  }
}
</script>

<style scoped lang="scss">
.customized-list-wrapper {

  .customized-item-wrapper {
    background: #FFFFFF;
    margin: 8rpx 0;
    padding: 28rpx;

    .context {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #333333;
      font-size: 24rpx;
    }

    .title {
      font-weight: bold;
      color: #44495E;
      font-size: 32rpx;
      padding-bottom: 16rpx;
    }

    .name {
      padding-right: 8rpx;
    }

    .time {
      color: #999999;

    }

  }

}


</style>