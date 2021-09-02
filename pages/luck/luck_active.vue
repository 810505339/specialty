<template>
	<view>
		<uniNavBar left-icon="back" left-text="抽奖活动" @clickLeft="back" fixed statusBar></uniNavBar>
		<view class="btn-bottom">
			<view class="add_btn" @click="join" :class="{'disable':false}">
				报名参加

				<!-- 已报名
				活动已结束
				活动暂未开始 -->
			</view>
		</view>
		<u-image :src="imgUrl" width="100%" height="750"></u-image>
		<view class="title">
			本次活动
		</view>
		<view class="content">
			一些富文本...
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				imgUrl: '/static/center/banner.png'
			}
		},
		methods: {
			join() {

			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.btn-bottom {
		position: fixed;
		bottom: 0;
		height: 100rpx;
		width: 100%;
		box-shadow: 0px 0px 12rpx rgba(0, 0, 0, 0.16);
		display: flex;
		justify-content: center;
		align-items: center;

		.add_btn {
			width: 686rpx;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-size: 28rpx;
			font-weight: bold;
			height: 80rpx;
			background: linear-gradient(90deg, #50C845 0%, #7FD269 49%, #50C845 100%);
			border-radius: 44rpx;
		}
	}

	.disable {
		color: #666666 !important;
		background: #E1E1E1 !important;
	}

	.title {
		padding: 46rpx 0 0 32rpx;
		font-size: 32rpx;
		font-family:PingFang SC Heavy;
		font-weight: bold;
		line-height: 22px;
		color: #333333;
	}
	.content{
		padding: 60rpx 32rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #333333;
		}
</style>
