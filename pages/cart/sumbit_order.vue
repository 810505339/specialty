<template>
	<view style="padding-bottom: 170rpx;">
		<uniNavBar left-icon="back" left-text="确认订单" @clickLeft="back" fixed statusBar></uniNavBar>
		<view class="address_box" @click="selectAddress">
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

			<u-icon class="icon" name="arrow-right" size="24"></u-icon>
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
			</view>

			<u-number-box class="num_box" v-model="value" @change="valChange" size="24" :min="1" :max="100">
			</u-number-box>
		</view>
		<view class="log" v-if="true">
			<view class="label">
				消耗总积分
			</view>
			<view class="right">
				10000
			</view>
		</view>

		<view class="detailed" v-if="show">
			<view class="cell" v-for="item in 3" :key="index">
				<view class="label">
					商品价格：
				</view>
				<view class="text">
					10000.00
				</view>
			</view>
		</view>
		<view class="sumbit_box">
			<view class="left">
				<view class="left_top">
					合计：
					<view class="price">
						￥10030.00
					</view>
				</view>
				<view class="detailed_btn" @click="changeDetail">
					明细    
					<u-icon style="margin-left: 8rpx;" :name="[show?'arrow-down-fill':'arrow-up-fill']" size="14"></u-icon>
				</view>
			</view>
			<view class="sumbit_btn" @click="sumbit">
				提交订单
			</view>
		</view>
		
		<u-popup v-model="showPoup" mode="center" width="480" height="272" border-radius="20">
			<view class="rect">
				温馨提示
			</view>
			<view class="content">
				您目前还未获得购买资格
				<!-- 您的购买资格与门店不符 -->
			</view>
			<view class="bttn_group">
				<view class="btn btn_cancel" @click="confirm">
					确定
				</view>
			</view>
		</u-popup>
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
				show:false,
				value: 1,
				showPoup:false
			}
		},
		methods: {
			confirm(){
				this.showPoup=false
			},
			sumbit(){
				if(true){
				this.showPoup=true
				}
			},
			changeDetail(){
				this.show=!this.show
			},
			selectAddress() {

			},
			back() {
				uni.navigateBack({})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.address_box {
		margin: auto;
		position: relative;
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

		.icon {
			position: absolute;
			top: 50%;
			right: 16rpx;
			transform: translateY(-50%);
		}
	}


	.shop {
		margin-top: 16rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.shop_box {
		position: relative;
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
		}


		.num_box {
			position: absolute;
			bottom: 32rpx;
			right: 16rpx;
		}
	}

	.log {
		margin: 16rpx 32rpx 0 32rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 32rpx;

		.label {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.right {
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #41AE37;
			display: flex;
		}

		.icon {
			margin-left: 8rpx;
		}
	}

	.sumbit_box {
		position: fixed;
		bottom: 0;
		width: 686rpx;
		padding: 16rpx 32rpx;
		height: 88rpx;
		background: #FFFFFF;
		box-shadow: 0px 0px 12rpx rgba(0, 0, 0, 0.16);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		.left {
			display: flex;
			flex-direction: column;
			.left_top{
				display: flex;
				align-items: center;
				font-size:28rpx;
				font-family: PingFangSC-Regular;
				color: #999999;
				.price{
					padding-left: 8rpx;
					font-size: 32rpx;
					font-family: PingFangSC-Medium;
					color: #FF5C5C;
				}
			}
			.detailed_btn {
				margin-top: 10rpx;
				width: 86rpx;
				height: 36rpx;
				border: 2rpx solid #FF9602;
				border-radius: 18rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #FF9602;
			}
		}
		.sumbit_btn{
			width: 300rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #ACDB8B 0%, #50C845 100%);
			border-radius: 44rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF
		}
	}

	.detailed {
		background-color: #FFFFFF;
		position: fixed;
		bottom: 120rpx;
		width: 686rpx;
		padding: 16rpx 32rpx 0 32rpx;
		border-radius: 20rpx 20rpx 0px 0px;
		display: flex;
		flex-direction: column;

		.cell {
			padding-bottom: 32rpx;
			display: flex;
			align-items: center;
			font-size: 28rpxpx;
			font-family: PingFang SC;
			font-weight: 500;

			.label {
				color: #333333;
			}

			.text {

				color: #E50000;
			}
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
		justify-content: center;
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
