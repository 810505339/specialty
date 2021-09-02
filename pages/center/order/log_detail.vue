<template>
	<view style="padding-bottom: 100rpx;">
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
						<view class="weight">
							顺丰快递
						</view>
						<view class="price">
							快递单号：12346579841
						</view>
					</view>
				</view>
				<view class="middle_right">
				</view>
			</view>
		</view>
		<view class="log">
			<view class="label">
				物流信息
			</view>
			<view class="time_line_box"  >
				<u-time-line class="none"  v-for="item in 10">
					<u-time-line-item  nodeTop="-5">
						<!-- 此处自定义了左边内容，用一个图标替代 -->
						<template v-slot:node>
							<view class="u-node">
								<!-- 此处为uView的icon组件 -->
								<view class="icon">
								</view>
							</view>
						</template>
						<template v-slot:content>
							<view>
								<view class="u-order-title">
									<view class="status">
										已签收
									</view>
									<view class="time">
										2021-08-16 11:11
									</view>
								</view>
								<view class="u-order-desc">
									[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
							</view>
						</template>
					</u-time-line-item>
				</u-time-line>
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
						font-weight: 800;
						color: #333333;
					}

					.price {
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
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

	.log {
		margin: auto;
		margin-top: 32rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		padding: 32rpx 16rpx;

		.label {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333;
			padding-bottom: 32rpx;
		}

		.time_line_box {
			padding: 0 16rpx;
			.u-order-title{
				display: flex;
			}
			.status{
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight:600;
				color: #41AE37;
			}
			.time{
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				line-height: 17px;
				color: #41AE37;
				display: flex;
				align-items: center;
				padding-left: 16rpx;
			}
			.u-order-desc{
				padding-top: 8rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular;
				color: #6D7278;
			}
			.none{
				&:not(:first-child){
					.status{
						color: #CCCCCC !important;
					}
					.time{
						color: #CCCCCC !important;
					}
					.u-order-desc{
						color: #CCCCCC !important;
					}
				}
				&:last-child{
					/deep/ .u-time-axis {
							&::before{
								border: 0;
							}
					}
				}
				/deep/ .u-time-axis{
					padding-bottom: 32rpx;
				}
			}
			/deep/ .u-time-axis-item{
				margin-bottom: 0;
			}
			
		}

		.icon {
			width: 22rpx;
			height: 22rpx;
			background: #D8D8D8;
			border-radius: 50%;
		}
	}
</style>
