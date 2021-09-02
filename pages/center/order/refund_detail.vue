<template>
	<view style="padding-bottom: 100rpx;">
		<uniNavBar left-icon="back" fixed left-text="退款详情" @clickLeft="back" statusBar></uniNavBar>
		<view class="status_box">
			<view class="box_top">
				等待商家处理
			</view>
			<view class="box_btm">
				剩余23小时59分自动关闭订单
			</view>
		</view>
		<view class="status_box" v-if="status==-1">
			<view class="box_btm" style="text-align: center;color: #666666;padding-top: 0;">
				您已成功发起退款申请，请耐心等待商家处理。
			</view>
			<view class="box_btm" style="text-align: center;color: #666666;">
				商家同意或者超时未处理，系统将退款给您。
			</view>
		</view>
		<view class="address_box">
			<view class="address">
				重庆市江北区某某某小区1幢1-1
			</view>
			<view class="info_cell">
				<view class="name">
					茶女士
				</view>
				<view class="tel">
					12345678901
				</view>
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
						<view class="weight">
							125g
						</view>
						<view class="price">
							10000.00
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
		</view>

		<view class="order_box">
			<view class="label">
				订单信息
			</view>
			<view class="number">
				订单编号：123456798100
			</view>
			<view class="number">
				付款时间：2021-08-16 11:11:11
			</view>
			<view class="number">
				创建时间：2021-08-16 11:11:11
			</view>
		</view>
		<view class="log" v-if="true"  @click="log">
			<view class="label">
				物流信息
			</view>
			<view class="right">
				查看详情
				<u-icon name="arrow-right" style="margin-left: 8rpx;"></u-icon>
			</view>
		</view>
		<view class="list_title">
			<view class="icon">
			</view>
			退货信息
		</view>
		<view class="refund_box">
			<view class="cell_item">
				退款原因：质量问题，我要换货
			</view>
			<view class="cell_item">
				退款金额：￥100000.00
			</view>
			<view class="cell_item">
				备注：无
			</view>
			<view class="cell_item">
				售后申请时间：2021-08-16 11:11:11
			</view>
			<view class="cell_item" style="padding-bottom: 0;">
				凭证
			</view>
			<view class="photo_group">
				<u-image class="photo" src="/static/center/banner.png" width="144" height="144" v-for="item in 7"
					border-radius="8"></u-image>
			</view>
		</view>
		
		<view class="log" v-if="true" @click="toFill">
			<view class="label">
				填写快递单号
			</view>
			<view class="right" >
				<u-icon name="arrow-right" style="margin-left: 8rpx;"></u-icon>
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
				status: -3
			}
		},
		methods: {
			toFill(){
				uni.navigateTo({
					url: '/pages/center/order/fill_number'
				})
			},
			log() {
				uni.navigateTo({
					url: '/pages/center/order/log_list'
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
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #41AE37;
	}

	.box_btm {
		padding-top: 16rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #41AE37;
	}

	.address_box {
		margin: auto;
		margin-top: 16rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32rpx 16rpx;

		.address {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #333333;
		}

		.info_cell {
			padding-top: 32rpx;
			display: flex;

			.name {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #333333;
			}

			.tel {
				padding-left: 16rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #999999;
			}
		}
	}

	.shop_box {
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-top: 16rpx;
		padding: 32rpx 16rpx;
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
			padding: 32rpx 0 0 0;
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
							color: #FF0000;

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
	}

	.order_box {
		margin: auto;
		margin-top: 16rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32rpx 16rpx;

		.label {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333;
		}

		.number {
			padding-top: 32rpx;
			display: flex;
		}
	}



	.log {
		margin: auto;
		margin-top: 16rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		justify-content: space-between;
		padding: 32rpx 16rpx;

		.label {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333;
		}

		.right {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
			display: flex;
		}

		.icon {
			margin-left: 8rpx;
		}
	}

	.list_title {
		padding: 32rpx 0 16rpx 32rpx;
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

	.refund_box {
		margin: auto;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32rpx 16rpx;

		.cell_item {
			padding-bottom: 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.photo_group {
			display: flex;
			flex-wrap: wrap;

			.photo {
				margin-left: 16rpx;
				margin-top: 16rpx;
			}
		}
	}
</style>
