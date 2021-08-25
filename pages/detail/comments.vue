<template>
  <view class="comment-list">
    <view class="comment-item" v-for="item in list" :key="item.id">
      <view class="comment-title">{{item.user_info.nick_name}}</view>
      <view class="comment-time">{{item.format_time}}</view>
      <view class="comment-des">{{item.comment}}</view>
      <view class="comment-icon">
        <u-image   :src="item.user_info.avatar" shape="circle" width="100rpx" height="100rpx"/>
      </view>

    </view>
    <u-loadmore :status="status" icon-type="circle"/>
  </view>
</template>

<script>
import {commitListApi} from '../../api/list'
export default {
  name: "comments",
  data(){
    return{
      page:0,
      id:'',
      list:[],
      status:'loading',
      is_more:1
    }
  },
  methods:{
     async  getCommit(){


       if(!this.is_more)
       {
         return
       }
       const params={
         strategy_id:this.id,
         page_size:10,
         page:this.page+=1
       }
        const {data,is_more}= await  commitListApi(params)
       this.is_more=is_more
       if(!this.is_more)
       {
         this.status='nomore'
       }
       this.list.push(...data.list)
      }
  },
  onLoad(ctx){
    this.id=ctx.id
    this.getCommit()
  },
  onReachBottom(){
    this.getCommit()
  }

}
</script>

<style scoped lang="scss">
.comment-list{
  .comment-item{
    padding: 28rpx 0 28rpx 120rpx;
    position: relative;
    border-bottom: 1rpx solid #FBFBFB;
  }
  .comment-title{
    font-size: 28rpx;
    color:#44495E;
  }
  .comment-time{
    font-size: 24rpx;
    color: #999999;
    padding-bottom: 16rpx;
    padding-top: 2rpx;
  }
  .comment-des{
    font-size: 24rpx;
    color:#333333;
  }
  .comment-icon{
    position: absolute;
    left: 0;
    top:50%;
    transform: translateY(-50%);
  }

}

</style>