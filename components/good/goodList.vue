<template>
  <view class="good-list-wrapper">
    <good-item :key="item.id"
               :format_time="item.format_time" :title="item.title" :brief="item.brief"
               :view_count="item.view_count"  :cover_img_url="item.cover_img_url" v-for="item in dataList" @click.native="$emit('itemClick',item)"/>

    <u-loadmore :status="status" icon-type="circle"  v-if="showLoading"/>
  </view>
</template>

<script>
import GoodItem from "./goodItem.vue";


export default {
  name: "goodList",
  components: {GoodItem},
  props: {

    showLoading: {
      type: Boolean,
      default: () => true
    },
  },
  data() {
    return {
      status: 'loading',
      page: 0,
      dataList: [],
      is_more: 1
    }
  },
  methods: {
    async pushList(params) {
      if (!this.is_more) {
        return
      }
      this.page += 1

      this.$emit('api',async (fn)=>{
        const {data, is_more} = await  fn({page:this.page,page_size:10,...params})
        this.is_more=is_more
        if(!this.is_more)
        {
          this.status='nomore'
        }
        console.log(this.dataList)
        this.dataList.push(...data)
      })



    },
    clear() {
      this.is_more = 1
      this.page = 0
      this.dataList = []

    },
    updateList(list) {
      this.list = list
    },

  }
}
</script>

<style scoped lang="scss">
.good-list-wrapper {
  margin: 40 rpx 28 rpx;

}

</style>