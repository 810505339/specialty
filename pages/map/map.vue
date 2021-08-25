<template>
  <view>
    <!--  <map style="width: 100%; height:100vh;" :latitude="position.latitude" :longitude="position.longitude" :markers="markers">-->
    <!--  </map>-->
    <good-list @api="api" @itemClick="itemClick" ref="goodList"/>
  </view>
</template>

<script>
import {hotelListApi} from "../../api/list";
import GoodList from "../../components/good/goodList";

export default {
  name: "map",
  components: {GoodList},
  data() {
    return {

      lat: '',
      lng: ''
      // markers:[{
      //   id:0,
      //   width:20,
      //   height:20,
      //   alpha:0.5,   //透明度
      //   color:'red',
      // }]
    }
  },
  methods: {
    getLocationInfo() {

      return new Promise(resolve => {
        uni.getLocation({
          type: 'wgs84',
          altitude: true,
          success: (res) => {
            const {latitude, longitude} = res  //纬度  //经度
            this.lat = latitude
            this.lng = longitude
            resolve(true)
          }
        })
      })

    },
    async api(fn) {

      return   fn(hotelListApi)
    },
    itemClick(item) {

      uni.navigateTo({url: `/pages/detail/hotel?id=${item.id}`})
    },
  },
  onReachBottom() {
    this.$refs['goodList'].pushList({lat: this.lat, lng: this.lng})
  },

  async onLoad() {
    await this.getLocationInfo()
    await this.$refs['goodList'].pushList({lat: this.lat, lng: this.lng})
  }
}
</script>

<style scoped>

</style>