<template>
	<view>
		<uniNavBar left-icon="back" fixed left-text="活动结果" @clickLeft="back" statusBar></uniNavBar>
		<view class="card" v-for="(item,index) in resultsList" :key="index" :style="{marginTop:index==0?'32rpx':'16rpx'}">
			<view class="card_top">
				<view class="label">
					茶道资格
				</view>
				<view class="time">
					2021-08-16
				</view>
			</view>
			<view class="card_middle">
				本次活动主要是为了让大家获得购买本产品的资格
				望大家踊跃报名参加
			</view>
			<view class="card_btm" :style="{color:true?'#41AE37':'#FF9602'}">
				{{true?'恭喜您，获得本次资格':'很遗憾，您未获得资格'}}
			</view>
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
				resultsList: [{}]
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
	.card{
		margin: auto;
		width: 686rpx;
		// height: 224rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		.card_top{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 16rpx;
			.label{
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #FFFFFF;
				width:176rpx;
				height: 56rpx;
				background: #41AE37;
				border-radius: 8rpx 0px 20rpx 0px;
			}
			.time{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}
		}
		.card_middle{
			padding: 16rpx 38rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
		}
		.card_btm{
			padding: 0 16rpx 16rpx 16rpx;
			text-align: right;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
		}
	}
</style>
