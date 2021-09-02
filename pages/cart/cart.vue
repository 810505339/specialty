<template>
	<view style="padding-bottom: 160rpx;">
		<uniNavBar left-text="购物车" fixed statusBar></uniNavBar>
		<u-tabs-swiper color="#41AE37" bar-height="4" bar-width="64" :current="current" @change="tabsChange"
			active-color="#41AE37" ref="tabs" :list="list" :is-scroll="false"></u-tabs-swiper>
		<view class="shop_box" v-for="(item,index) in 2" :key="index">
			<view class="top">
				<view class="radio_group" style="padding-right: 16rpx;" @click="selectItem(index)">
					<view :class="['radio',item.is_default==1?'select':'']">
					</view>
				</view>
				<u-image src="/static/center/confirm.png" width="40rpx" height="40rpx"></u-image>
				<view class="text" @click="toStore(item)">
					卢正浩旗舰店
					<u-icon style="margin-left: 16rpx;" size="24" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="middle" v-for="(t,i) in 3" :key="i">
				<view class="middle_left">
					<view class="radio_group" style="padding-right: 16rpx;">
						<view :class="['radio',t.is_default==1?'select':'']" @click="select(i)">
						</view>
					</view>
					<u-image src="/static/center/banner.png" border-radius="8rpx" width="200" height="200">
					</u-image>
					<view class="text_box">
						<view class="name">
							SMOOTH SAILING
						</view>
						<view class="weight">
							125g
						</view>
						<view class="intergarl" v-if="current==1">
							积分:10000
						</view>
						<view class="price">
							10000.00
						</view>
					</view>
				</view>

				<u-number-box class="num_box" v-model="value" size="24" @change="valChange" input-width="60" :min="1"
					:max="100">
				</u-number-box>
			</view>
		</view>
		
		<view class="invalid_box">
			<view class="top">
				<view class="title">
					失效宝贝{{'num'}}件
				</view>
				<view class="clear">
					清空失效宝贝
				</view>
			</view>
			<view class="middle">
				<u-image src="/static/center/banner.png" border-radius="8rpx" width="200" height="200">
				</u-image>
				<view class="content">
					<view class="name">
						SMOOTH SAILING
					</view>
					<view class="tips">
						宝贝已不能购买,请联系客服
					</view>
				</view>
			</view>
		</view>
		
		<view class="sumbit">
			<view class="select_all">
				<view class="radio_group" style="padding-right: 16rpx;" @click="selectAll(index)">
					<view :class="['radio',select_all==1?'select':'']">
					</view>全选
				</view>
			</view>
			<view class="count">
				<view class="count_cell">
					<view class="label">
						合计：
					</view>
					<view class="price">
						￥20000.00
					</view>
				</view>
				<view class="count_cell" v-if="current==1">
					<view class="label">
						消耗积分：
					</view>
					<view class="int">
						10000
					</view>
				</view>
			</view>
			<view class="sumbit_btn">
				结算({{'2'}})
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
				list: [{
					name: '宝贝'
				}, {
					name: '积分换购'
				}],
				current: 0,
				select_all: 1
			}
		},
		methods: {
			toStore(){
				uni.navigateTo({
					
				})
			},
			selectAll(index) {
				if (this.select_all) {
					//取消所有勾选
				} else {

				}
				this.select_all = !this.select_all
			},
			select(index) {

			},
			selectItem(index) {

			},
			tabsChange(index) {
				this.current = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
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
				display: flex;
				align-items: center;
				margin-left: 16rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
		}

		.middle {
			position: relative;
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
					position: relative;

					.name {
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 800;
						color: #333333;
					}

					.weight {
						padding-top: 16rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #666666;
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
						position: absolute;
						left: 16rpx;
						bottom: 0;
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


			.num_box {
				position: absolute;
				bottom: 0rpx;
				right: 0rpx;
			}
		}

	}

	.sumbit {
		position: fixed;
		width: 686rpx;
		bottom: 0;
		padding: 32rpx;
		height: 80rpx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.count{
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;
			width: 384rpx;
			.count_cell{
				display: flex;
				align-items: center;
				.label{
					font-size: 28rpx;
					font-family: PingFangSC-Regular;
					color: #999999;
				}
				.price{
					font-size: 32rpx;
					font-family: PingFangSC-Medium;
					color: #FF5C5C;
				}
				.int{
					font-size:32rpx;
					font-family: PingFangSC-Medium;
					color: #41AE37;
				}
			}
		}
		.sumbit_btn{
			width: 176rpx;
			height: 80rpx;
			background: linear-gradient(90deg, #ACDB8B 0%, #41AE37 100%);
			border-radius:44rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #FFFFFF;
		}
	}

	.radio_group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size:28rpx;
		font-family: PingFangSC-Regular;
		color: #333333;
		.radio {
			margin-right: 10rpx;
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
	}
	
	.invalid_box{
		margin: auto;
		margin-top: 16rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		padding: 32rpx 16rpx;
		display: flex;
		flex-direction: column;
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}
			.clear{
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FF9602;
			}
		}
		.middle{
			display: flex;
			padding-top: 32rpx;
			padding-left: 48rpx;
			
			.content{
				padding-left: 16rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name{
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #999999;
				}
				.tips{
					font-size:28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
		}
	}
</style>
