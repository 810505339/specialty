<template>
  <view>


    <view class="search-wrapper">
      <u-search placeholder="请输入" v-model="keyword" @change="handleChange"  @search="search" :show-action="false" />
    </view>
    <good-list @api="api"  ref="goodList" @itemClick="itemClick"  />
  </view>
</template>

<script>

import GoodList from "../../components/good/goodList";
import {hotelListApi, routeListApi, strategyListApi} from "../../api/list";

export default {
  name: "searchDetails",
  components: {GoodList},
  data(){
  return{
    keyword:'',
    type:''
  }
  },
  methods:{
    handleChange(val) {

      if(!val)
      {
        uni.redirectTo({url:`/pages/find/searchView?type=${this.type}`})
      }



    },
    search(val){
      console.log(val)
      this.$refs['goodList'].clear()
      this.$refs['goodList'].pushList({keyword:val})
    },
    types(){
      switch (this.type){
        case "route":
          return  routeListApi
        case "hotel":
          return  hotelListApi
        case "strategy":
          return  strategyListApi
      }
    },
    async api(fn) {
      console.log(fn)
      return   fn(this.types())
    },
    itemClick(item){
      uni.navigateTo({url:`/pages/detail/${this.type}?id=${item.id}`})
    }

  },
  onLoad(ctx){
    this.keyword=ctx.search
    this.type=ctx.type
    console.log(ctx)

  },
  onReady(){
    this.$refs['goodList'].pushList({keyword:this.keyword})
  },
  onReachBottom(){
    this.$refs['goodList'].pushList()
  },


}
</script>

<style scoped lang="scss">
.search-wrapper {
  padding: 18rpx 28rpx;
  background: #FFFFFF;
}

</style>