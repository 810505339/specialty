<template>
	<view style="position: relative;">
		<uniNavBar left-text="登录" fixed backgroundColor="transparent" color="white" @clickLeft="back" statusBar>
		</uniNavBar>
		<u-image :src="require('static/login/bg.png')" width="750rpx" height="100vh"
			style="position: absolute;top: 0;left: 0;z-index: -1;" />
		<view class="logo">
			<view class="text">
				icon
			</view>
		</view>
		<view class="app_name">
			特产商城
		</view>
		<view class="slogan">
			一家专注于特产的商城
		</view>
		<button type="default" class="login_btn" open-type="getUserInfo" @click="login">微信一键登录</button>
		<view class="editor_cell">
			<view class="radio_group" @click="radioChange()">
				<view :class="['radio',radio?'select':'']">
				</view>
				<view class="text">
					已阅读并同意《用户协议》和《隐私政策》
				</view>
			</view>
		</view>
		<view class="foot">
			请完成微信授权以继续使用
		</view>
	</view>
</template>

<script>
	import store from '../../store/index';

	import {
		bindMobile
	} from "../../api/login";
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				radio: false
			}
		},
		methods: {
			async login() {
				if (!this.radio) {
					uni.showToast({
						title: "请阅读并同意",
						icon: "error",
						duration: 2e3
					})
					return
				}
				store.dispatch('login')
				const d = await store.dispatch('auth')
				// if (data.user_info.mobile) {
				// uni.switchTab({url: '/pages/home/index'})
				uni.navigateBack({
					delta: 1
				})
				// } 
			},
			radioChange() {
				console.log(4444)
				this.radio = true
			},
		}
	}
</script>

<style scoped lang="scss">
	.logo {
		width: 160rpx;
		height: 160rpx;
		background: #FFFFFF;
		border-radius: 50%;
		font-size: 60rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #39CD75;
		margin: auto;
		margin-top: 230rpx;

		.text {
			padding: 32rpx 20rpx 44rpx 20rpx;
		}
	}

	.app_name {
		padding-top: 64rpx;
		font-size: 48rpx;
		font-family: PingFang SC;
		font-weight: bold;
		width: 100%;
		text-align: center;
		color: #FFFFFF;
	}

	.slogan {
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
		padding-top: 16rpx;
	}

	.login_btn {
		margin-top: 64rpx;
		width: 688rpx;
		height: 80rpx;
		background: #FFFFFF;
		border-radius: 40rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #41AE37;
	}

	.editor_cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		bottom: 16rpx;
		width: 686rpx;
		margin-top: 32rpx;
		margin-left: 32rpx;

		.radio_group {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding-left: 16rpx;

			.radio {
				border-radius: 50%;
				border: #FFFFFF 2rpx solid;
				width: 10rpx;
				height: 10rpx;
				padding: 12rpx;
				position: relative;
			}

			.select::after {
				content: '';
				position: absolute;
				background: #FFFFFF;
				width: 13rpx;
				height: 13rpx;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}

			.text {
				padding-left: 8rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
	}

	.foot {
		margin-top: 164rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		width: 100%;
		text-align: center;
	}
</style>
