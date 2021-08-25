<template>
  <good-list ref="goodList"  @api="api" @itemClick="itemClick"  />
</template>

<script>
import {recordApi} from "../../api/center";
import GoodList from "../../components/good/goodList";

export default {
  name: "record",
  components: {GoodList},
  methods:{
    async api(fn){
      return  fn(recordApi)
    },
    itemClick(item)
    {

      let type=''
      switch (item.category_id)
      {
        case 1:
          type='route'
              break;
        case 2:
          type='hotel'
          break;
        case 3:
          type='strategy'
          break;
      }


      uni.navigateTo({url: `/pages/detail/${type}?id=${item.association_id}`})
    }
  },
  onReachBottom() {
    this.$refs['goodList'].pushList()
  },
  onReady() {
    this.$refs['goodList'].pushList()
  }
}
</script>

<style scoped>

</style>