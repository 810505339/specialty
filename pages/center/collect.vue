<template>
  <good-list ref="goodList"  @api="api" @itemClick="itemClick"  />
</template>

<script>
import GoodList from "../../components/good/goodList";
import {collectApi} from "../../api/center";

export default {
  name: "collect",
  components: {GoodList},
  methods:{
   async api(fn){
      return fn(collectApi)
    },
    itemClick(item)
    {
      uni.navigateTo({url: `/pages/detail/${item.item}?id=${item.item_id}`})
      console.log(item)
    }
  },
  onReachBottom() {
    this.$refs['goodList'].pushList()
  },
  onShow() {
    this.$refs['goodList'].clear()
    this.$refs['goodList'].pushList()
  }

}
</script>

<style scoped>

</style>