<template>
	<view>
		<uniNavBar left-icon="back" left-text="门店选择" @clickLeft="back" fixed statusBar></uniNavBar>
		<view class="search">
			<view class="search_box">
				<view class="right">
					<u-input style="padding-left: 16rpx;width: 100%;" confirmType="search" @confirm="search"></u-input>
					<u-icon style="margin-left: 8rpx;" size="40" name="search"></u-icon>
				</view>
			</view>
		</view>
		<view class="address_group">
			<view class="address_item" v-for="(item,index) in positionList" @click="radioChange(index)" :key="index">
				<view class="left">
					<view class="radio_group">
						<view :class="['radio',item.is_true==1?'select':'']">
						</view>
					</view>
					<view class="middle">
						<view class="name">
							卢正浩(江北店）
						</view>
						<view class="position">
							<u-icon class="icon" name="map" size="36"></u-icon>
							重庆市江北区某某大厦1-101
						</view>
					</view>
				</view>

				<view class="right">
					距离：1.5km
				</view>
			</view>
		</view>
		<view class="btn-bottom">
			<view class="add_btn" @click="confirm">
				确认
				<!-- 确认报名 -->
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
				positionList: [{
					is_true: 1
				}, {
					is_true: 0
				}]
			}
		},
		methods: {
			search() {
			},
			radioChange(param) {
				this.positionList.map((item, index) => {
					if (index == param) {
						item.is_true = 1
					} else {
						item.is_true = 0
					}
					return item
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

	.address_group {
		margin-top: 16rpx;
		display: flex;
		flex-direction: column;

		.address_item {
			margin-top: 16rpx;
			padding: 32rpx;
			height: 100rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.middle {
				height: 100%;
				padding-left: 32rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name {
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #333333;
				}

				.position {
					margin-top: 16rpx;
					display: flex;
					align-items: center;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #666666;

					.icon {
						margin-right: 8rpx;
					}
				}
			}

			.left {
				display: flex;
				height: 100%;
				align-items: center;
			}

			.right {
				height: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: flex-start;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #666666;
			}
		}
	}

	.radio_group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.radio {
			border-radius: 50%;
			border: #CCCCCC 2rpx solid;
			width: 10rpx;
			height: 10rpx;
			padding: 12rpx;
			position: relative;
		}

		.select::after {
			content: '';
			position: absolute;
			background: #41AE37;
			width: 13rpx;
			height: 13rpx;
			border-radius: 50%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.text {
			padding-left: 8rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #CCCCCC;
		}
	}

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
</style>
