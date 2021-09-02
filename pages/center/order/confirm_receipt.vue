<template>
	<view style="background: #FFFFFF;height: 100vh;">
		<uniNavBar left-icon="back" left-text="确认收货" fixed @clickLeft="back" statusBar></uniNavBar>
		<view class="confirm">
			<u-image src="/static/center/confirm.png" border-radius="8rpx" shape="circle" width="196rpx"
				height="196rpx"></u-image>
		</view>
		<view class="text">
			收货成功
		</view>
		<view class="bttn_group">
			<view class="btn" @click="goHome">
				返回首页
			</view>
			<view class="btn" @click="goDetail">
				商品详情
			</view>
		</view>
		<view class="driver">

		</view>
		<view class="text">
			本次消费获得
		</view>
		<view class="intergral_box">
			<view class="label">
				积分
			</view>
			<view class="integral">
				1000
			</view>
			<view class="my_integral">
				已有积分:123456
			</view>
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
			goHome() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			goDetail() {

			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.confirm {
		margin: auto;
		margin-top: 156rpx;
		display: flex;
		justify-content: center;
	}

	.text {
		margin: auto;
		padding-top: 64rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		width: 100%;
		text-align: center;
	}

	.bttn_group {
		margin: auto;
		margin-top: 64rpx;
		width: 512rpx;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;

		.btn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 240rpx;
			height: 64rpx;
			border: 2rpx solid #999999;
			border-radius: 40rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}
	}

	.driver {
		margin-top: 66rpx;
		width: 100%;
		height: 2rpx;
		background: #F5F5F5;
	}

	.intergral_box {
		margin: auto;
		margin-top: 32rpx;
		width: 300rpx;
		height: 236rpx;
		background: #F9F9F9;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		.label {

			padding-top: 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.integral {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 800;
			line-height: 22px;
			color: #41AE37;
		}

		.my_integral {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
			padding-bottom: 32rpx;
		}
	}
</style>
