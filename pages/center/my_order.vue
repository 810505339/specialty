<template>
	<view style="background: #FFFFFF;height: 100vh;">
		<uniNavBar left-icon="back" left-text="我的订单" fixed @clickLeft="back" statusBar></uniNavBar>
		<view class="list-item" v-for="(item,index) in orderList" :key='index' @click="naviTo(item.url)">
			<view class="item-left">
				<u-icon  :name="item.icon" size="40"></u-icon>
				<view class="text">
					{{item.title}}
				</view>
			</view>
			<u-icon  name="arrow-right" size="24"></u-icon>
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
				orderList: [{
					icon:'/static/center/order_1.png',
					title:"普通订单",
					url:'/pages/center/order/order?type=1'
				},{
					icon:'/static/center/order_2.png',
					title:"积分订单",
					url:'/pages/center/order/order?type=2'
				}] 
			}
		},
		methods: {
			naviTo(url){
				uni.navigateTo({
					url:url
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
.list-item{
	margin:  0 32rpx;
	height: 104rpx;
	border-bottom: 2rpx solid #F9F9F9;
	display: flex;
	justify-content: space-between;
	.item-left{
		display: flex;
		align-items: center;
		.text{
			padding-left: 16rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #333333;
		}
	}
	
}
</style>
