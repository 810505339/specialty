<template>
	<view>
		<uniNavBar left-text="我的" fixed statusBar></uniNavBar>
		<view class="header-wrapper">
			<!-- <u-image width="100%" height="230rpx" mode="center" class="header-bg" :src="require('static/center/bg.png')"/> -->
			<view class="header-context">
				<view class="header-icon" @click="logoClick">
					<u-image :src="user.avatarUrl" border="2rpx solid #707070" width="120rpx" height="120rpx"
						shape="circle">
						<view slot="error">
							<u-icon name="account-fill" size="60"/>
						</view>
					</u-image>
				</view>
				<view class="header-name">{{user.nickName ||'未登录'}}</view>
				<!-- <view class="header-type" v-if="user.is_vip">定制会员</view> -->
			</view>
			<!-- <view class="f-box-wrapper" @click="toVip">
          <u-image width="100%" height="240rpx" mode="scaleToFill" :src="require('static/center/banner.png')"/>
        </view> -->
		</view>
		<view class="nav-list-wrapper">
			<u-cell-group :border="false">
				<u-cell-item v-for="(item,index) in navList" :index="index" :titleStyle="{fontSize:'28rpx'}"
					:key="index" :title="item.title" :icon="item.icon" iconSize="44rpx" @click="handleToUrl">
					<button :open-type="token?'contact':''" v-if="item.btn" @click="logoClick" class="btn"></button>
				</u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'

	import store from "../../store";
	import UIcon from "../../uview-ui/components/u-icon/u-icon";

	export default {
		components: {
			UIcon,
			uniNavBar
		},
		data() {
			return {
				navList: [{
						title: '活动结果',
						url: '/pages/center/active_results',
						icon: '/static/center/cell_icon_1.png',
						btn: true
					},
					{
						title: '我的资格',
						url: '/pages/center/qualifications/qualifications',
						icon: '/static/center/cell_icon_2.png',
						btn: true
					},
					{
						title: '我的积分',
						url: '/pages/center/integral',
						icon: '/static/center/cell_icon_3.png',
						btn: true
					},
					{
						title: '我的订单',
						url: '/pages/center/my_order',
						icon: '/static/center/cell_icon_4.png',
						btn: true
					},
					{
						title: '收货地址',
						url: '/pages/center/address/address',
						icon: '/static/center/cell_icon_5.png',
						btn: true
					},
					{
						title: '完善信息',
						url: '/pages/center/information',
						icon: '/static/center/cell_icon_6.png',
						btn: true
					}
				]
			}
		},
		onLoad() {
			console.log(this.user)
		},
		computed: {
			user() {
				store.commit('getUser')
				console.log("aa",store.state.user)
				return store.state.user.user
			},
			token() {
				return store.state.user.token
			}

		},
		methods: {
			handleToUrl(index) {
				// if(index===3)
				// {
				//   return
				// }
				uni.navigateTo({url: this.navList[index].url})
			},
			logoClick(){
			  if(store.state.user.token===''){
			    uni.navigateTo({url:'/pages/login/login'})
			  }
			},
			// toVip(){
			//   uni.navigateTo({url:'/pages/vip/index'})
			// },
		},


	}
</script>

<style lang="scss" scoped>
	.header-wrapper {
		position: relative;
		height: 230rpx;

		.header-bg {
			position: relative;
			z-index: 10;
		}

		.f-box-wrapper {
			position: absolute;
			bottom: -160rpx;
			left: 40rpx;
			right: 40rpx;
			z-index: 20;
		}

		.header-context {
			position: absolute;
			z-index: 20;
			display: flex;
			align-items: center;
			left: 32rpx;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			color: #FFFFFF;

			.header-icon {
				/deep/ .u-image {
					margin: auto;

				}
			}

			.header-name {
				margin-left: 16rpx;
				font-size: 32rpx;
				font-weight: 800;

				color: #333333;
			}

			.header-type {
				font-size: 24rpx;
				font-weight: 400;
			}

		}


	}

	.nav-list-wrapper {
		// padding-top: 160rpx;

		/deep/ .u-cell {
			color: #333333;
			height: 124rpx;
			font-size: 28rpx !important;
			font-weight: 400 !important;
		}

		/deep/ .u-cell__right-icon-wrap {
			color: #707070;
		}

		.btn {
			position: absolute;
			width: 100%;
			top: 0rpx;
			left: 0rpx;
			opacity: 0;
		}
	}
</style>
