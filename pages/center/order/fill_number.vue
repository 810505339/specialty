<template>
	<view style="padding-bottom: 100rpx;">
		<uniNavBar left-icon="back" left-text="填写快递单号" fixed @clickLeft="back" statusBar></uniNavBar>
		<view class="shop_box" v-for="item in 3">
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
							x1
						</view>
					</view>
				</view>
			</view>
			<u-input type="number" placeholder="请输入快递单号"
				:custom-style="{paddingLeft:'16rpx',width: '654rpx',height: '80rpx',background: '#F9F9F9',borderRadius: '8rpx'}">
			</u-input>
		</view>
		<view class="bottm_btn">
			<view class="btn" @click="sumbit">
				提交
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
			sumbit() {
				uni.showToast({
					title:"提交成功",
					icon:"success",
					duration:1500
				})
				setTimeout(()=>{
					
					this.back()
				},1500)
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
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

		.middle {
			padding: 0 0 32rpx 0;
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
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
					}
				}
			}

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
</style>
