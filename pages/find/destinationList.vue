<template>
  <view>
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
              <u-icon  name="calendar" size="30" class="icon"/>
              <text>{{item.format_time}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <u-loadmore :status="status" icon-type="circle"/>
  </view>
</template>

<script>
import {destinationDetail} from "../../api/list";

export default {
  name: "destinationList",
  data(){
    return{
      id:'',
      list: [
        {name: '攻略'},
        {name: '酒店'},
        {name: '线路'},
      ],
      current: 0,
      status:'loading',
      dataList:[{page:0,list:[],is_more:1},{page:0,list: [],is_more: 1},{page:0,list: [],is_more: 1}],
      search:''
    }
  },
  methods:{
    change(index) {
      this.current = index;
      this.getList()

    },
   async getList(){

      const rootData=this.dataList[this.current]

      if(!rootData.is_more)
      {
        return
      }


      const params={
        page_size:10,
        page:rootData.page+=1,
        destination_id:this.id?this.id:'',
        item:this.current+1,
        keyword:this.search
      }
      const {data,is_more}=await destinationDetail(params)
      rootData.is_more=is_more
      if(!rootData.is_more)
      {
        this.status='nomore'
      }
      rootData.list.push(...data)
    },
    itemClick(item){
      const type=['strategy','hotel','route']
      uni.navigateTo({url: `/pages/detail/${type[this.current]}?id=${item.id}`})
    }
  },
  computed:{
    data(){
      return  this.dataList[this.current]
    }
  },
  onReachBottom(){
    this.getList()

  },
  onLoad({id,search})
  {
    this.id=id
    this.search=search
    this.getList()
  }
}
</script>

<style scoped lang="scss">
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