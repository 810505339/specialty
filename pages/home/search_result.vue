<template>
	<view style="padding-bottom: 50rpx;">
		<uniNavBar left-icon="back" left-text="搜索结果" @clickLeft="back" fixed statusBar>
		</uniNavBar>
		<view class="search">
			<view class="search_box">
				<view class="right">
					<u-input style="padding-left: 16rpx;width: 100%;" confirmType="search" @confirm="search"></u-input>
					<u-icon style="margin-left: 8rpx;" size="40" name="search"></u-icon>
				</view>
			</view>
		</view>
		<view class="shop_group">
			<view class="shop_item" v-for="item in 5" :key="index">
				<u-image src="/static/center/banner.png" width="330" height="330"></u-image>
				<view class="shop_info">
					<view class="name">
						SMOOTH SAILING
					</view>
					<view class="num">
						月销量:12345
					</view>
					<view class="price">
						￥10000.00
					</view>

					<u-image class="cart" src="/static/home/cart.png" width="52" height="52"></u-image>
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

			}
		},
		methods: {
			search() {
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		height: 100rpx;
		width: 100%;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;

		.search_box {
			width: 686rpx;
			background: #F9F9F9;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 72rpx;

			.left {
				height: 40rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
				padding: 0 16rpx;
				border-right: 2rpx solid #EEEEEE;
			}

			.right {
				width: 100%;
				padding-right: 16rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	.shop_group {
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.shop_item {
			margin-bottom: 26rpx;
			display: flex;
			flex-direction: column;
			border-radius: 8rpx;
			overflow: hidden;

			.shop_info {
				display: flex;
				flex-direction: column;
				padding: 16rpx;
				position: relative;
				background: #FFFFFF;

				.name {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #333333;
				}

				.num {
					padding-top: 8rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}

				.price {
					padding-top: 16rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #FF0000;
				}

				.cart {
					position: absolute;
					bottom: 16rpx;
					right: 16rpx;
				}
			}
		}
	}
</style>
