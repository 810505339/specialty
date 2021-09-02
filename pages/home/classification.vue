<template>
	<view style="padding-bottom: 50rpx;">
		<uniNavBar left-icon="back"  left-text="更多分类" @clickLeft="back" fixed statusBar></uniNavBar>

		<view style="display: flex;">
			<view class="tab">
				<view :class="['tab_item',active==index?'select':'']" v-for="(item,index) in tabList" :key="index"
					@click="changeTab(index)">
					{{item.name}}
				</view>
			</view>
			<view class="shop">
				<view class="shop_box" v-for="(item,index) in 11" :key="index">
					<view class="middle">
						<view class="middle_left">
							<u-image src="/static/center/banner.png" border-radius="8rpx" width="152rpx"
								height="152rpx">
							</u-image>
							<view class="text_box">
								<view class="name">
									SMOOTH SAILING
								</view>
								<view class="weight">
									125g
								</view>
								<view class="price">
									10000.00
								</view>
							</view>
						</view>
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
		onLoad(o) {
			this.active = o.index
		},
		data() {
			return {
				tabList: [{
					name: '茶叶'
				}, {
					name: '水果'
				}, {
					name: '酒类'
				}, {
					name: '咖啡'
				}, {
					name: '零食'
				}, {
					name: '干货'
				}, {
					name: '坚果'
				}],
				active: 0
			}
		},
		methods: {
			changeTab(index) {
				this.active = index
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.tab {
		display: flex;
		flex-direction: column;
		width: 200rpx;

		.tab_item {
			height: 108rpx;
			width: 100%;
			background: #F5F5F5;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			display: flex;
			justify-content: center;
			align-items: center;

		}

		.select {
			font-weight: 800;
			color: #41AE37;
			position: relative;
			background: #F9F9F9 !important;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				height: 108rpx;
				width: 4rpx;
				background: #41AE37;
			}
		}
	}

	.shop {
		width: calc(100% - 200rpx);
		display: flex;
		flex-direction: column;
	}

	.shop_box {
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-top: 16rpx;
		padding: 16rpx;
		width: 470rpx;
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
					padding-left: 16rpx;
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
						color: #666666;
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
		}
	}
</style>
