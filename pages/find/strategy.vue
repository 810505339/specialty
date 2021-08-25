<template>
  <view class="">
    <u-navbar title="攻略" title-color="#ffffff"   back-icon-color="#ffffff" />
    <view class="search-bg">
      <u-image class="bg" :src="bg"     width="100%" height="100%" />
      <view class="search">
        <u-search placeholder="九寨沟七日游" @click.native="handleFocus" clearabled :show-action="false" v-model="keyword"/>
      </view>
    </view>
    <u-tabs class="tabs" :list="list" :is-scroll="false" :current="current" @change="change" active-color="#FED300"/>
    <view class="des-list">
      <view class="des-item" v-for="item in data.list" :key="item.id" @click="itemClick(item)">
        <view class="time">{{item.format_time}}</view>
        <view class="des-c-wrap">
          <view class="title">{{item.title}}</view>
          <view class="des text-all-nowrap">{{item.brief}}</view>
          <view class="des-img"><u-image  width="220rpx" height="220rpx" :src="item.cover_img_url"/></view>
          <view class="des-b-wrap">
            <view class="text-wrap">
              <u-icon name="eye" size="30" class="icon"/>
              <text>{{item.view_count}}</text>
            </view>

            <view class="text-wrap chat">
              <u-icon  name="chat" size="30" class="icon"/>
              <text>{{item.comment_count}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <u-loadmore :status="status" icon-type="circle"/>
  </view>
</template>

<script>
import UNavbar from "../../uview-ui/components/u-navbar/u-navbar";
let systemInfo = uni.getSystemInfoSync();
import UImage from "../../uview-ui/components/u-image/u-image";
import {strategyListApi} from '../../api/list'
import {bannerApi} from "../../api/base";
export default {
  name: "strategy",
  components: {UNavbar, UImage},
  data() {
    return {
      keyword: '',
      list: [
        {name: '热门攻略'},
        {name: '推荐攻略'}
      ],
      current: 0,
      dataList:[{page:0,list:[],is_more:1},{page:0,list: [],is_more: 1}],
      status:'loading',
      bg:'',
      background: {
        background:'',
      },
      statusBarHeight: systemInfo.statusBarHeight
    }
  },
  methods: {
    change(index) {
      this.current = index;
      this.getStrategyList()
    },
    itemClick(item){
      console.log(item)
      uni.navigateTo({url: `/pages/detail/strategy?id=${item.id}`})
    },
    handleFocus(){
      uni.navigateTo({url: '/pages/find/searchView?type=strategy'})
    },
    async getStrategyList(){
      const rootData=this.dataList[this.current]

      if(!rootData.is_more)
      {
        return
      }


      const params={
        page_size:10,
        page:rootData.page+=1,
        is_recommend:this.current===1?1:undefined,
        is_hot:this.current===0?1:undefined
      }
      const {data,is_more}=await strategyListApi(params)
      rootData.is_more=is_more
      if(!rootData.is_more)
      {
        this.status='nomore'
      }
      rootData.list.push(...data)



    },
    async getBg(){
     const{data}= await bannerApi(4)
      this.bg=data[0].img_url
      this.background.background=`url('${this.bg}') no-repeat fixed 50px 100px`
      this.background.backgroundPositon=`0 45px`
      this.background.backgroundSize='contain'
    }
  },
  computed:{
    data(){
     return  this.dataList[this.current]
    }
  },

  onReachBottom(){
      this.getStrategyList()

  },
  onLoad(){
    this.getStrategyList()
        this.getBg()

  }

}
</script>
<style>

page{
  background: #FFFFFF;
}
</style>

<style scoped lang="scss">

/deep/.u-navbar-placeholder{
  height:auto !important;
}
/deep/.u-border-bottom{
  background: none !important;
  &:after{
    border-bottom-width: 0;
  }
  color:#FFFFFF;
}



.search-bg {
  position: relative;
  width: 100%;
  height: 500rpx;
  position: relative;
  .bg{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    top: 0;

  }

  .search {
    position: absolute;
    left: 28rpx;
    right: 28rpx;
    bottom: 20rpx;

  }

}

.u-search {

  /deep/ .u-icon__icon {
    color: #FFFFFF !important;
  }


  /deep/ .u-input {
    color: #FFFFFF !important;
    background: none !important;
  }

  /deep/ .uni-input-placeholder {
    color: #FFFFFF !important;
  }

  /deep/ .uni-input-wrapper {

  }


  /deep/ .u-content {
    background: rgba(0, 0, 0, 0.3) !important;
    backdrop-filter: blur(10px);
    color: #FFFFFF !important;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(15px);
      opacity: 0.1;

    }


  }
}

/deep/ .u-tabs {
  border-bottom: 1px solid #DFDFDF;
  padding: 16rpx;
  border-radius: 10rpx 10rpx 0 0;
}

.des-list {

  .des-item {
    border-bottom: 1px solid #DFDFDF;
    border-left: 1px solid #DFDFDF;
    margin-left: 27rpx;
    position: relative;
    padding: 32rpx 40rpx;
    &:before{
      content: '';
      position: absolute;
      left: -10rpx;
      top: 40rpx;
      width: 20rpx;
      height: 20rpx;
      background: #999999;
      border-radius: 50%;

    }
    .time{
      font-size: 28rpx;
      font-weight: 400;
      color: #999999;

    }
    .des-c-wrap{
      padding-right: 250rpx;
      position: relative;
      .des-img{
        position: absolute;
        right: 0;
        top:0;
        /deep/ .u-image__image{
          border-radius: 16rpx !important;
        }
      }

    }
    .des-b-wrap{
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .title{
      font-size: 36rpx;
      font-weight: bold;
      padding-top: 32rpx;
      padding-bottom: 20rpx;
    }
    .des{
      font-size: 24rpx;
      color: #333333;
      font-weight: 400;
      margin-bottom: 30rpx;
    }
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

}

</style>