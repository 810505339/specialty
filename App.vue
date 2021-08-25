<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "uview-ui/index.scss";
/*每个页面公共css */

html {
  font-family: PingFang SC, serif;
}


page {
  background: #F9F9F9;
}
.text-nowrap{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.text-all-nowrap{

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  word-break: break-all;
}
swiper{
  height:380rpx!important; ;
}
uni-swiper{
  height:380rpx!important; ;
}

view {
  box-sizing: content-box;
}
</style>
