<template>
  <view>
    <view class="search-wrapper">
      <u-search placeholder="请输入" v-model="keyword"   @search="(val)=>$emit('search',val)" :show-action="false" @focus="focus($event)"></u-search>
    </view>
  </view>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      show: false,
      keyword: ''
    }
  },
  methods: {
    focus(e){

      this.$emit('focus',e)
    }
  }
}
</script>

<style scoped lang="scss">
.search-wrapper {
  padding: 18rpx 28rpx;
  background: #FFFFFF;
}

</style>