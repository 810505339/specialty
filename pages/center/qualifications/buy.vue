<template>
	<view>
		<uniNavBar left-icon="back" left-text="购买资格" fixed @clickLeft="back" statusBar></uniNavBar>
		<u-image class="code" src="/pages/static/center/banner.png"  width="480rpx" height="480rpx"></u-image>
		<view class="tip">
			线下购买请出示该二维码获取资格
		</view>
		<view class="btn">
			线上使用
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			
			back() {
				uni.navigateBack({
			
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.code{
	display: flex;
	justify-content: center;
	margin-top: 128rpx;
}
.tip{
	width: 100%;
	text-align: center;
	margin-top: 128rpx;
	font-size: 28rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #CCCCCC;
}
.btn{
	margin: auto;
	margin-top: 200rpx;
	width: 686rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80rpx;
	background: linear-gradient(90deg, #50C845 0%, #7FD269 49%, #50C845 100%);
	border-radius:44rpx;
	font-size: 28rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #FFFFFF;
}
</style>
