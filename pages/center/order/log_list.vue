<template>
	<view>
		<uniNavBar left-icon="back" left-text="物流信息" fixed @clickLeft="back" statusBar></uniNavBar>
		<view class="status_box">
			<view class="box_top">
				订单编号：132416548913210
			</view>
		</view>
		<view class="shop_box">
			<view class="top">
				<u-image src="/static/center/confirm.png" width="40rpx" height="40rpx"></u-image>
				<view class="text">
					卢正浩旗舰店
				</view>
			</view>
			<view class="middle">
				<view class="middle_left">
					<u-image src="/static/center/banner.png" border-radius="8rpx" width="152rpx" height="152rpx">
					</u-image>
					<view class="text_box">
						<view class="name">
							SMOOTH SAILING
						</view>
						<view class="price">
							<view class="label">
								已签收
							</view>
							<view class="time">
								2021-08-16 11:11
							</view>
						</view>
					</view>
				</view>
				<view class="middle_right">
					<view class="num">
						x1
					</view>
					<view class="intergarl" v-if="false">
						积分:10000
					</view>
				</view>
			</view>
			<view class="btm" @click="toDetail">
				<view class="btn cancel">
					物流详情
				</view>
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
			toDetail(){
				uni.navigateTo({
					url:'/pages/center/order/log_detail'
				})
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.status_box {
		margin: auto;
		margin-top: 32rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32rpx 16rpx;
	}

	.box_top {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 20px;
		color: #333333;
	}

	.shop_box {
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-top: 16rpx;
		padding: 32rpx 16rpx 0 16rpx;
		width: 654rpx;
		background: #FFFFFF;
		opacity: 1;
		border-radius: 8rpx;

		.top {
			display: flex;

			.icon {}

			.text {
				margin-left: 16rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}

		.middle {
			padding: 32rpx 0rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #F9F9F9;
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


					.price {
						display: flex;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #41AE37;

						.label {
							font-size: 28rpx;
							font-weight: 800;
						}

						.time {
							margin-left: 8rpx;
							display: flex;
							align-items: center;
						}
					}
				}
			}

			.middle_right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.intergarl {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #41AE37;
				}

				.num {
					text-align: right;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
		}
		.btm {
			padding: 16rpx 0;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		
			.btn {
				margin-right: 16rpx;
				width: 152rpx;
				height: 48rpx;
				border-radius: 24rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		
			.cancel {
				border: 2rpx solid #999999;
				color: #999999;
			}
		
		}
	}
</style>
