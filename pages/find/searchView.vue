<template>
  <view>
    <search @search="search"/>
    <view>
      <view class="history-title-wrapper">
        <view class="history-title">搜索历史</view>
        <view>
          <u-icon name="trash-fill" color="#44495E" size="28" v-if="historyList.length>0" @click="deleteHistory"/>
        </view>
      </view>
      <view class="item-list">
        <view v-for="(item,index) in historyList" :key="index" @click="toUrl(item)" class="history-item text-nowrap">
          <text>{{ item }}</text>
        </view>
      </view>
    </view>
    <u-modal v-model="show" :content="content" @confirm="confirm" show-cancel-button/>
  </view>
</template>

<script>
import Search from "./compoents/search";

export default {
  name: "searchView",
  components: {Search},
  data(){
    return{
      show:false,
      content:'确定删除历史记录吗?',
      type:''
    }
  },
  methods: {
    search(val) {

      const flag=this.historyList.some(item=>item===val)


      if(!flag)
      {
        this.historyList.push(val)
      }

      if(this.historyList.length>5)
      {
        this.historyList= this.historyList.slice(0,5)
      }
      this.historyList=[...this.historyList]

      this.toUrl(val)
    },
    deleteHistory() {
      this.show=true;

    },
    confirm(){
      this.historyList=[]
    },
    toUrl(val){
      if(this.type==='all')
      {

        uni.redirectTo({url:`/pages/find/destinationList?search=${val}`})
        return
      }
      uni.redirectTo({url:`/pages/find/searchDetails?search=${val}&type=${this.type}`})
    }
  },
  computed: {
    historyList: {
      get(){
        try {
          const value = uni.getStorageSync('historyList');
          if (value) {
            return JSON.parse(value)
          }


        } catch (e) {
          console.log(e)
        }
        return []
      },
      set(val){
        uni.setStorageSync('historyList', JSON.stringify(val));
      }
    }
  },
  onLoad(ctx){
    this.type=ctx.type
    console.log(ctx)
  }
}
</script>

<style scoped lang="scss">
.history-title-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:18rpx;
  .history-title{
    font-size: 32rpx;
    color: #44495E;
    font-weight: bold;
  }
}

.item-list{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .history-item{
    width: 160rpx;
    height: 60rpx;
    background: #FFFFFF;
    font-size: 24rpx;
    color: #44495E;
    text-align: center;
    line-height: 60rpx;
    margin: 10rpx 10rpx;
    border-radius: 40rpx;

  }
}


</style>