<template>
	<view style="padding-bottom: 150rpx;">
		<uniNavBar left-icon="back" left-text="更多分类" @clickLeft="back" fixed statusBar></uniNavBar>
		<u-image :src="imgUrl" width="100%" height="750"></u-image>
		<view class="shop_info">
			<view class="name">
				卢正浩安吉白茶
			</view>
			<view class="num">
				月销量:123456
			</view>
			<view class="price">
				10000.00
			</view>
			<view class="intergarl">
				积分:10000
			</view>

			<u-number-box class="num_box" v-model="value" @change="valChange" size="24" :min="1" :max="100">
			</u-number-box>
		</view>
		<view class="log">
			<view class="label">
				规格:
			</view>
			<view class="right">
				500g/盒
			</view>
		</view>
		<view class="log" style="padding: 16rpx 32rpx;">
			<view class="label">
				地址:
			</view>
			<u-input v-model="address" style="padding-left: 32rpx;width: 100%;" @click="selectAddress" type="select"
				placeholder="请选择配送地址" />
		</view>
		<view class="title">
			商品信息
		</view>
		<view class="content">
			一些富文本...
		</view>
		<view class="bottm_btn ">
			<view class="btn_left" @click="addCart">
				加入购物车
			</view>
			<view class="btn_right" @click="buy">
				立即购买
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
				value: 1,
				imgUrl: '/static/center/banner.png',
				address: ''
			}
		},
		methods: {
			buy() {
				uni.navigateTo({
					url: '/pages/cart/sumbit_order'
				})
			},
			addCart(data) {
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			},
			selectAddress() {
				uni.navigateTo({
					url: '/pages/center/address/address'
				})
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.shop_info {
		padding: 32rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		background: #FFFFFF;

		.name {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333;
		}

		.num {
			padding-top: 16rpx;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #999999;
		}

		.price {
			padding-top: 20rpx;
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

		.num_box {
			position: absolute;
			bottom: 32rpx;
			right: 32rpx;
		}
	}

	.log {
		margin-top: 16rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32rpx;

		.label {
			width: 84rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.right {
			padding-left: 32rpx;
			width: 100%;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #666666;
			display: flex;
		}

		.icon {
			margin-left: 8rpx;
		}
	}


	.bottm_btn {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 12rpx rgba(0, 0, 0, 0.16);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;

		.btn_left {
			width: 342rpx;
			height: 80rpx;
			background: linear-gradient(270deg, #FEBC55 0%, #FF9602 100%);
			border-radius: 200rpx 0px 0px 200rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn_right {
			width: 342rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #ACDB8B 0%, #41AE37 100%);
			border-radius: 0px 200rpx 200rpx 0px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.btn {
			width: 686rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #50C845 0%, #7FD269 49%, #50C845 100%);
			border-radius: 44rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.title {
		background: #FFFFFF;
		margin-top: 16rpx;
		padding: 32rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}

	.content {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #333333;
	}
</style>
