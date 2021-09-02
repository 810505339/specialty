<template>
	<view>
		<uniNavBar left-text="首页" fixed statusBar></uniNavBar>
		<u-popup v-model="show" mode="center" width="480" height="272" border-radius="20">
			<view class="rect">
				温馨提示
			</view>
			<view class="content">
				还没有选择门店哦
			</view>
			<view class="bttn_group">
				<view class="btn btn_confirm" @click="select_store">
					去选择
				</view>
				<view class="btn btn_cancel" @click="cancel">
					取消
				</view>
			</view>
		</u-popup>
		<view class="search">
			<view class="search_box">
				<view class="left" @click="select_store">
					门店选择
					<u-icon style="margin-left: 8rpx;" size="16" name="arrow-down-fill"></u-icon>
				</view>
				<view class="right">
					<u-input style="padding-left: 16rpx;width: 100%;" confirmType="search" @confirm="search"></u-input>
					<u-icon style="margin-left: 8rpx;" size="40" name="search"></u-icon>
				</view>
			</view>
		</view>
		<view class="banner">
			<u-swiper :list="list" mode="none" height="412"></u-swiper>
		</view>
		<view class="class_cell">
			<view class="cell_item" v-for="(item,index) in classList" :key="index" @click="toClass(index)">
				<u-image style="margin-bottom: 8rpx;" :src="item.path" width="88" height="88"></u-image>
				{{item.name}}
			</view>
		</view>
		<view class="list_title">
			<view class="icon">
			</view>
			精选商品
		</view>
		<view class="shop_group">
			<view class="shop_item" v-for="item in 5" :key="index">
				<u-image src="/static/center/banner.png" width="330" height="330"></u-image>
				<view class="shop_info">
					<view class="name">
						SMOOTH SAILING
					</view>
					<view class="num">
						月销量:12345
					</view>
					<view class="price">
						10000.00
					</view>

					<u-image class="cart" src="/static/home/cart.png" width="52" height="52"></u-image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getLocation
	} from '../../utlis/getLocation.js'
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		onLoad() {
			
			getLocation().then((res) => {
				console.log("位置信息", res)
			})
		},
		data() {
			return {
				show:false,
				list: [{
						image: '/static/home/banner.png'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				classList: [{
					path: '/static/home/icon_1.png',
					name: '茶叶'
				}, {
					path: '/static/home/icon_2.png',
					name: '水果'
				}, {
					path: '/static/home/icon_3.png',
					name: '酒类'
				}, {
					path: '/static/home/icon_4.png',
					name: '咖啡'
				}, {
					path: '/static/home/icon_5.png',
					name: '更多'
				}]
			}
		},
		methods: {
			search(){
				uni.navigateTo({
					url:'/pages/home/search_result'
				})
				console.log(111)
			},
			select_store(){
				uni.navigateTo({
					url:'/pages/home/select_store'
				})
			},
			cancel(){
				this.show=false
			},
			toClass(index){
				
				let i;
				if(index==4){
					i=0
				}
				else{
					i=index
				}
				uni.navigateTo({
					url:`/pages/home/classification?index=${i}`
				})
			}
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
				width: 500rpx;
				padding-right: 16rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	.banner {
		margin: auto;
		width: 686rpx;
		padding-top: 16rpx;
	}

	.class_cell {
		display: flex;
		justify-content: space-between;
		padding: 32rpx;

		.cell_item {
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.list_title {
		padding: 0 0 26rpx 32rpx;
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

	.shop_group {
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.shop_item {
			margin-bottom: 26rpx;
			display: flex;
			flex-direction: column;
			border-radius: 8rpx;
			overflow: hidden;

			.shop_info {
				display: flex;
				flex-direction: column;
				padding: 16rpx;
				position: relative;
				background: #FFFFFF;

				.name {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #333333;
				}

				.num {
					padding-top: 8rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}

				.price {
					padding-top: 16rpx;
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

				.cart {
					position: absolute;
					bottom: 16rpx;
					right: 16rpx;
				}
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
		justify-content: space-between;
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
			background:rgba(65, 174, 55, 0.15);
			color: #41AE37;
		}
	
		.btn_cancel {
			background: #F5F5F5;
			color: #333333;
		}
	}
</style>
