<template>
  <view class="customized-details">
    <view class="title">{{ data.destination  ||data.hotel_title }}</view>
    <view class="detail-list">
      <view class="detail-item" v-for="(value,key) in format" :key="key" v-if="data[key]">
        <text class="key">{{ value }}</text>
        <text class="value"> {{ data[key] }}</text>
      </view>
    </view>
  </view>
</template>
<script>
import {customizeInfoApi,bookInfoApi} from "../../api/info";

export default {
  data() {
    return {
      data:{
        start_date:''
      },
      format: {
        true_name:'姓名',
        name: '姓名',
        mobile: '电话',
        people_count: '入住人数',
        room_count: '房间人数',
        start_date: '开始时间',
        end_date: '结束时间',
        date: '入住日期',
      },
      id:'',
      type:''
    }
  },
  methods:{
    async Api(){
     const {data}= await this.api({id:this.id})
      this.data=data
    }
  },
  computed:{
    api(){
     return  this.type==='hotel_book'?bookInfoApi:customizeInfoApi
    }
  },
  onLoad(ctx) {
    this.id=ctx.id
    this.type=ctx.type
    this.Api()
  }
}
</script>

<style scoped lang="scss">

.customized-details {
  background: #FFFFFF;
  .title{
    text-align: center;
    font-size: 32rpx;
    color: #44495E;
    font-weight: bold;
    padding: 26rpx 0;
  }
  .detail-list {
    .detail-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28rpx;
      font-size: 28rpx;
      font-weight: bold;
      color: #44495E;

      .key {
        color: #999999;
      }
    }
  }

}

</style>