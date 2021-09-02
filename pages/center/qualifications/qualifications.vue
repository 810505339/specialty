<template>
	<view>
		<uniNavBar left-icon="back" left-text="我的资格" fixed @clickLeft="back" statusBar></uniNavBar>
		<u-tabs-swiper ref="tabs" :list="tabList" :current="current" @change="tabsChange" :is-scroll="false"
			bar-height="4" bar-width="56" active-color="#41AE37"></u-tabs-swiper>
		<view class="card" v-for="(item,index) in List" :key="index"
			:style="{marginTop:index==0?'32rpx':'16rpx',background:true?'#F2F2F2':''}">
			<view class="card_top">
				<view class="label" :style="{background:true?'#D5D5D5':''}">
					购买资格
				</view>
			</view>
			<view class="card_middle">
				指定门店：卢正浩(江北店）
			</view>
			<view class="card_btm">
				<view class="time">
					有效期至：2021-08-16
				</view>
				<view class="btn" :style="{color:true?'#FFFFFF':false?'#666666':'#FF9602'}" @click="use()">
					{{true?'使用':false?'已使用':'已失效'}}
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
				tabList: [{
					name: "全部"
				}, {
					name: "未使用"
				}, {
					name: "已使用"
				}, {
					name: "已失效"
				}],
				List: [{}],
				current:0
			}
		},
		methods: {
			use(id){
				uni.navigateTo({
					url:'/pages/center/qualifications/buy'
				})
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
	.card {
		margin: auto;
		width: 686rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;

		.card_top {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-right: 16rpx;

			.label {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #FFFFFF;
				width: 176rpx;
				height: 56rpx;
				background: #41AE37;
				border-radius: 8rpx 0px 20rpx 0px;
			}
		}

		.card_middle {
			padding: 16rpx 32rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
		}

		.card_btm {
			padding: 0 16rpx 16rpx 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;

			.time {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999999;
			}

			.btn {
				width: 120rpx;
				height: 48rpx;
				background: linear-gradient(93deg, #ACDB8B 0%, #50C845 100%);
				border-radius: 44rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
			}
		}
	}
</style>
