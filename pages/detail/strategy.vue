<template>
  <view>
    <view class="strategy-top">
      <view class="strategy-title">{{data.title}}</view>
      <view class="des-b-wrap">
        <view class="text-wrap">
          <u-icon name="eye" size="30" class="icon"/>
          <text>{{data.view_count}}</text>
        </view>

        <view class="text-wrap chat">
          <u-icon  name="chat" size="30" class="icon"/>
          <text>{{data.comment_count}}</text>
        </view>
      </view>
      <view class="des-t-wrap">
        <text>{{data.format_time}}</text>
        <view @click="favorite">
          <view class="icon"><u-icon :name="data.is_favorite?'star-fill':'star'"  class="d-w-icon"  color="#FED300" size="35"/></view>
          <view class="text">收藏</view>
        </view>
      </view>
    </view>
    <view  class="detail-des">
        <u-parse :html="data.content"/>
    </view>
    <view class="comment">
      <view class="comment-list-header">
        <view class="text-b">
          <view class="tag"></view>
          <view>评论({{data.comment_count}})</view>
        </view>
        <view @click="toUrl">
          <text class="all">查看全部</text>
          <u-icon name="arrow-right" size="28"/>
        </view>
      </view>
      <view class="comment-list">
        <view class="comment-item" v-for="item in data.comment_list" :key="item.id">
          <view class="comment-title">{{item.user_info.nick_name}}</view>
          <view class="comment-time">{{item.format_time}}</view>
          <view class="comment-des">{{item.comment}}</view>
          <view class="comment-icon">
            <u-image  :src="item.user_info.avatar" shape="circle" width="100rpx" height="100rpx"/>
          </view>
        </view>
      </view>
    </view>
    <view style="height:100rpx">
      <view class="f-d-body" >
        <u-button shape="circle" ripple  :custom-style="{width:'100%'}"   size="default"  @click="comment">发表评论</u-button>
      </view>
    </view>

    <u-popup v-model="show" mode="bottom">
      <view class="popup">
        <u-input v-model="commentDes" type="textarea"  height="500"  :auto-height="true" :clearable="false" />
        <u-button shape="circle" ripple  :custom-style="{width:'100%',background:'#FFBC1E',color:'#ffffff'}"   @click="onsubmit"  color="#FFBC1E" size="default">确定</u-button>
      </view>
    </u-popup>


  </view>
</template>

<script>
import UIcon from "../../uview-ui/components/u-icon/u-icon";
import UImage from "../../uview-ui/components/u-image/u-image";
import {commentApi, favoriteApi, strategyInfoApi} from "../../api/info";
export default {
  name: "strategy",
  components: {UImage, UIcon},
  data(){
    return{
     data:{
       content:''
     },
      show:false,
      commentDes:'',
      id:''
    }
  },
  methods:{
    toUrl(){
      uni.navigateTo({url: `/pages/detail/comments?id=${this.id}`})
    },
    async getData(id){
      const {data}=  await strategyInfoApi({strategy_id:id})

      this.data=data


    },
    comment(){
        this.show=true
    },
    async onsubmit(){
       await commentApi({strategy_id:1,comment:this.commentDes})
      this.show=false
      await this.getData()
    },
    async favorite(){
      const {data}=await favoriteApi({item:'strategy',item_id:this.id})
      this.data.is_favorite=data.is_favorite
    }
  },
  onLoad(ctx){
    this.id=ctx.id
   this.getData(ctx.id)
  },

}
</script>



<style scoped lang="scss">
u-button{
  width: 100%;
}
.popup{
  padding: 40rpx;

}
.strategy-top{
  background: #FFFFFF;
  padding: 22rpx 28rpx;
}
.strategy-title{
  font-size: 32rpx;
  font-weight: bold;
  color: #333333;
  padding-bottom: 10rpx;
}
.des-b-wrap{
  display: flex;
  align-items: center;

  .text-wrap{
    display: flex;
    align-items: center;
    color:#999999;
    .icon{
      margin: 0 8rpx;
    }
  }
  .chat{
    margin-left: 80rpx;
  }
}
.des-t-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:#999999;
  font-size: 24rpx;
  .icon{
    text-align: center;

  }
  .text{
    padding-top: 5rpx;
    color:#333333;
  }
}
.detail-des{
  margin: 8rpx 0;
  background: #FFFFFF;
  padding: 28rpx;
  line-height: 60rpx;
  font-size: 24rpx;
  color: #333333;
  font-weight: 400;
}
.comment{
  padding: 0 28rpx;

  background: #FFFFFF;
  .comment-list-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 0;
    color: #44495E;
    .text-b{
      font-size: 32rpx;
      font-weight: bold;
      display: flex;
      align-items: center;
      .tag{
        width: 8rpx;
        height: 40rpx;
        background: #FFBC1E;
        border-radius: 4rpx;
        margin-right: 10rpx;
      }
      .all{
        font-size: 28rpx;
        color: #44495E;
      }
    }



  }
}

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

.f-d-body{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  height: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 25rpx;
  /deep/.u-btn{

    background: #EFEFEF;
    color: #B8B8B8;
    font-size: 28rpx;
    font-weight: bold;
    border-color:#FFFFFF;
  }

}
</style>