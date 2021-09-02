<template>
	<view>
		<uniNavBar left-text="积分商城" fixed statusBar></uniNavBar>
		<u-popup v-model="show" mode="center" width="480" height="272" border-radius="20">
			<view class="rect">
				温馨提示
			</view>
			<view class="content">
				还没有选择门店哦
			</view>
			<view class="bttn_group">
				<view class="btn btn_confirm" @click="select_store">
					去选择
				</view>
				<view class="btn btn_cancel" @click="cancel">
					取消
				</view>
			</view>
		</u-popup>
		<view class="search">
			<view class="search_box">
				<view class="left" @click="select_store">
					门店选择
					<u-icon style="margin-left: 8rpx;" size="16" name="arrow-down-fill"></u-icon>
				</view>
				<view class="right">
					<u-input style="padding-left: 16rpx;width: 100%;" confirmType="search" @confirm="search"></u-input>
					<u-icon style="margin-left: 8rpx;" size="40" name="search"></u-icon>
				</view>
			</view>
		</view>
		<view class="tips">
			剩余购买次数：1次，三天后重置
		</view>
		<view class="shop">
			<view class="shop_box" v-for="(item,index) in 11" :key="index">
				<view class="middle">
					<view class="middle_left"  @click="shopDetail(item)">
						<u-image src="/static/center/banner.png" border-radius="8rpx 0 0 8rpx" width="240" height="240">
						</u-image>
						<view class="text_box">
							<view class="name">
								SMOOTH SAILING
							</view>
							<view class="weight">
								月销量:123456
							</view>
							<view class="intergarl">
								积分:10000
							</view>
							<view class="price">
								10000.00
							</view>
						</view>
					</view>
				</view>

				<u-image class="cart" src="/static/home/cart.png" width="52" height="52" @click="addCart(item)"></u-image>
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
		onLoad() {
			this.show = true
		},
		data() {
			return {
				show: false
			}
		},
		methods: {
			addCart(data) {
				uni.switchTab({
					url:'/pages/cart/cart'
				})
			},
			shopDetail(data) {
				uni.navigateTo({
					url:'/pages/shop/shop_detail'
				})
			},
			search() {
				uni.navigateTo({
					url: '/pages/home/search_result'
				})
			},
			select_store() {
				uni.navigateTo({
					url: '/pages/home/select_store'
				})
			},
			cancel() {
				this.show = false
			}
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
				width: 500rpx;
				padding-right: 16rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	.tips {
		margin: 16rpx 0;
		width: 100%;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #41AE37;
	}

	.shop {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.shop_box {
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-bottom: 16rpx;
		width: 686rpx;
		height: 240rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		position: relative;

		.middle {
			display: flex;
			justify-content: space-between;

			.middle_left {

				display: flex;
				flex-direction: row;

				.text_box {
					padding: 16rpx 0 16rpx 16rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.name {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: #333333;
					}

					.weight {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
					}

					.intergarl {
						margin-top: 16rpx;
						width: max-content;
						height: 40rpx;
						padding: 0 8rpx;
						border: 2rpx solid #41AE37;
						border-radius: 4rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #41AE37;
					}

					.price {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF0000;

						&::before {
							content: '￥';
							font-size: 24rpx;
							font-family: PingFang SC;
							font-weight: bold;

						}
					}
				}
			}
		}

		.cart {
			position: absolute;
			bottom: 16rpx;
			right: 16rpx;
			z-index: 20;
		}
	}

	.rect {
		padding-top: 32rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.content {
		padding-top: 40rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.bttn_group {
		display: flex;
		justify-content: space-between;
		padding: 40rpx 60rpx 32rpx 60rpx;

		.btn {
			width: 140rpx;
			height: 48rpx;
			border-radius: 8rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
		}

		.btn_confirm {
			background: rgba(65, 174, 55, 0.15);
			color: #41AE37;
		}

		.btn_cancel {
			background: #F5F5F5;
			color: #333333;
		}
	}
</style>
