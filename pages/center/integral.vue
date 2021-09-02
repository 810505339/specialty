<template>
	<view style="background: #FFFFFF;height: 100vh;">
		<uniNavBar left-icon="back" left-text="我的积分" fixed @clickLeft="back" statusBar></uniNavBar>
		<view class="intergral_group">
			<view class="available">
				<view class="title">可用积分</view>
				<view class="number">15500</view>
			</view>
			<view class="row">
				<view class="count">
					<view class="title">总积分</view>
					<view class="number" style="font-size: 28rpx;">15500</view>
				</view>
				<view class="used">
					<view class="title">已使用</view>
					<view class="number" style="font-size: 28rpx;">15500</view>
				</view>
			</view>
		</view>
		<view class="list_title">
			<view class="icon">
			</view>
			积分记录
		</view>
		<view class="list_group">
			<view class="list-item" v-for="(item,index) in historyList" :key="index">
				<view class="item_left">
					<view class="name">
						购买卢正浩安吉白茶
					</view>
					<view class="time">
						2021-08-16
					</view>
				</view>
				<view class="item-right">
					+10000
				</view>
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
				historyList: [{}]
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
	.intergral_group {
		width: 686rpx;
		height: 340rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 4rpx rgba(0, 0, 0, 0.16);
		border-radius: 8rpx;
		margin: auto;
		margin-top: 32rpx;
		display: flex;
		flex-direction: column;

		.available {
			height: 186rpx;
			width: 100%;
			border-bottom: 2rpx #F5F5F5 solid;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
		}

		.count {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 2rpx;
				height: 124rpx;
				background: #F5F5F5;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}

		.used {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
		}

		.title {
			padding-top: 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.number {
			padding-bottom: 32rpx;
			font-size: 48rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333;

			&::after {
				content: '分';
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 800;
			}
		}

	}

	.row {
		display: flex;
		flex-direction: row;
		height: 152rpx;
		width: 100%;
	}

	.list_title {
		padding: 32rpx 0 32rpx 32rpx;
		border-bottom: 2rpx solid #F9F9F9;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
		display: flex;
		align-items: center;

		.icon {
			width: 8rpx;
			height: 36rpx;
			background: linear-gradient(180deg, #ACDB8B 0%, #50C845 100%);
			border-radius: 4rpx;
			margin-right: 16rpx;
		}
	}

	.list_group {
		margin: 0 32rpx;
		display: flex;
		flex-direction: column;
		padding-bottom:42rpx;

		.list-item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 32rpx 0;
			border-bottom: 2rpx solid #F9F9F9;

			.item_left {
				display: flex;
				flex-direction: column;

				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 800;

				.name {
					color: #333333;
				}

				.time {
					padding-top: 8rpx;
					font-weight: 500;
					color: #999999;
				}
			}

			.item-right {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
			}
		}
	}
</style>
