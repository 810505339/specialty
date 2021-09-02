<template>
	<view>
		<uniNavBar left-icon="back" fixed :left-text="title" @clickLeft="back" statusBar></uniNavBar>
		<u-tabs-swiper color="#41AE37" bar-height="4" bar-width="56" :current="current" @change="tabsChange"
			active-color="#41AE37" ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper>
		<!-- <swiper :current="current">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index"> -->
		<scroll-view scroll-y style="height:80vh;width: 100%;" @scrolltolower="onreachBottom">
			<view class="card" v-for="index in 6" :key="index">
				<view class="top">
					<view class="text">
						<u-icon style="margin-right: 16rpx;" name="/static/center/cell_icon_1.png" size="40"></u-icon>
						卢正浩旗舰店
					</view>
					<view class="status"
						:style="{color:status==0||status==1||status==2?'#FF9602':status==3?'':'#E50000'}">
						{{status==0?'待付款':status==1?'待发货':status==2?'待收货':status==3?'已完成':'售后'}}
						<!-- 0:待确认, 1:已支付, 2:配送中, 3:确认收货, -1:申请售后, -2:已取消, -3:售后已处理 -->
					</view>
				</view>
				<view class="middle">
					<view class="middle_left" @click="toDetail">
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
						<view class="intergarl" v-if="true">
							积分:10000
						</view>
					</view>
				</view>

				<view class="btm" v-if="status==0">
					<view class="btn confirm">
						立即支付
					</view>
					<view class="btn cancel">
						取消订单
					</view>
				</view>

				<view class="btm" v-else-if="status==1">
					<view class="btn confirm">
						提醒发货
					</view>
				</view>

				<view class="btm" v-else-if="status==2">
					<view class="btn confirm" @click="confirm">
						确认收货
					</view>
					<view class="btn cancel" @click="after_sale()">
						申请售后
					</view>
				</view>

				<view class="btm" v-else-if="status==3">
					<view class="btn cancel">
						删除订单
					</view>
				</view>

				<view class="btm" v-else>
					<view class="btn cancel">
						查看详情
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- </swiper-item>
		</swiper> -->
		<u-popup v-model="show" mode="bottom" border-radius="20" height="554" width="100%">
			<view class="popup_cell apply">
				申请售后
			</view>
			<view class="popup_cell refund">
				仅退款
			</view>
			<view class="popup_cell refund_return" @click="refund_return">
				退货退款
			</view>
			<view class="popup_cell exchange">
				换货
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		detail
	} from "../../../api/order";
	import uniNavBar from '../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		onLoad(option) {
			if (option.type == 1) {
				this.title = '普通订单'
			} else {
				this.title = '积分订单'
			}
		},
		mounted() {
			// detail()
		},
		data() {
			return {
				title: '',
				list: [{
					name: '全部'
				}, {
					name: '待付款'
				}, {
					name: '待发货'
				}, {
					name: '售后',
					count: 5
				}],
				current: 0,
				swiperCurrent: 0,
				tabs: [{}],
				status: 2,
				btnList: [{
					text: '删除订单'
				}, {
					text: '删除订单'
				}, {
					text: '删除订单'
				}, ],
				show: false
			}
		},
		methods: {
			refund_return(){
				uni.navigateTo({
					url:'/pages/center/order/return_refund'
				})
			},
			toDetail(id){
				uni.navigateTo({
					url:'/pages/center/order/detail'
				})
			},
			//申请售后
			after_sale(id) {
				this.show = true
			},
			//确认收货
			confirm() {
				//确认收货操作
				//....
				uni.navigateTo({
					url: '/pages/center/order/confirm_receipt'
				})

			},
			onreachBottom() {

			},
			tabsChange(index) {
				this.current = index;
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		margin-top: 16rpx;
	}

	.card {
		width: 686rpx;
		// height: 374rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		margin: auto;
		margin-top: 16rpx;
		padding: 32rpx 0 0 0;
		display: flex;
		flex-direction: column;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 16rpx;

			.text {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}

			.status {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}

		.middle {
			padding: 32rpx 16rpx;
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
						&::before{
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

			.confirm {
				border: 2rpx solid #41AE37;
				color: #41AE37;
			}
		}
	}

	swiper {
		height: 80vh !important;
	}

	uni-swiper {
		height: 80vh !important;
	}

	.popup_cell {
		text-align: center;
		width: 100%;
		height: 104rpx;
		border-bottom: 2rpx solid #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.apply {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}

	.refund {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333
	}

	.refund_return {
		font-size: 28rpx;
		font-family: PingFang SC;
		// font-weight: 800;
		color: #333333
		// color: #FFFFFF;
		// background: linear-gradient(268deg, rgba(65, 174, 55, 0) 0%, rgba(65, 174, 55, 0.8) 51%, rgba(65, 174, 55, 0) 100%);
	}

	.exchange {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
</style>
