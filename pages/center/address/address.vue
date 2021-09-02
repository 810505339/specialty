<template>
	<view>
		<uniNavBar left-icon="back" fixed left-text="地址管理" @clickLeft="back" statusBar></uniNavBar>
		<view class="card_box">
			<view v-for="(item,index) in addressList" class="box_item" :key="index">
				<view class="address_cell">
					{{item.detail}}
				</view>
				<view class="info_cell">
					<view class="name">
						{{item.name}}
					</view>
					<view class="phone">
						{{item.tel}}
					</view>
				</view>
				<view class="driver">

				</view>
				<view class="editor_cell">
					<view class="radio_group" @click="radioChange(index)">
						<view :class="['radio',item.is_default==1?'select':'']">
						</view>
						<view class="text">
							默认地址
						</view>
					</view>
					<view class="btn_box">
						<view class="editor" @click="editor(item)">
							编辑
						</view>
						<view class="delete" @click="del">
							删除
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn-bottom">
			<view class="add_btn" v-if="addressList.length<10" @click="add">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	import {del,set_default} from'../../../api/address.js'
	import uniNavBar from '../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				addressList: [{
						name: '宋',
						tel: "13350689805",
						sex: 0,
						province: '四川',
						city: '成都市',
						area: '双流区',
						detail: '金桂园',
						is_default: 0
					},
					{
						name: 'aa',
						tel: "13350689805",
						sex: 0,
						province: '四川',
						city: '成都市',
						area: '双流区',
						detail: '金桂园',
						is_default: 1
					}
				]
			}
		},
		methods: {
			add(){
				uni.navigateTo({
					url: '/pages/center/address/editor?status=0'
				})
			},
			editor(item) {
				uni.setStorageSync("address_info",item)
				uni.navigateTo({
					url: '/pages/center/address/editor?status=1'
				})
			},
			async del(){
				const params={
					
				}
				const {data}=await del(params)
			},
			radioChange(param) {
				this.addressList.map((item, index) => {
					if (index == param) {
						item.is_default = 1
						console.log(item.name)
					} else {
						item.is_default = 0
					}
					return item
				})
				//set_default() 设置默认接口
				uni.showToast({
					title: "设置成功！",

				})
				console.log(this.addressList)
			},
			back() {
				uni.navigateBack({
			
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.card_box {
		width: 100%;
		margin-top: 16rpx;
		padding-bottom: 100rpx;
		.box_item {
			width: 100%;
			height: 186rpx;
			margin-top: 16rpx;
			display: flex;
			flex-direction: column;
			padding: 32rpx 32rpx 16rpx 32rpx;
			background: #FFFFFF;
			position: relative;

			.address_cell {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: bold;
			}

			.info_cell {
				padding-top: 16rpx;
				display: flex;
				flex-direction: row;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;

				.name {
					color: #333333;
				}

				.phone {
					padding-left: 16rpx;
					color: #999999;
				}
			}

			.driver {
				position: absolute;
				top: 160rpx;
				left: -32rpx;
				width: 100%;
				height: 2rpx;
				background: #F9F9F9;
			}

			.editor_cell {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				bottom: 16rpx;
				width: 686rpx;

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

				.btn_box {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					width: 208rpx;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;

					.editor {
						width: 96rpx;
						height: 40rpx;
						border: 2rpx solid #41AE37;
						border-radius: 20rpx;
						color: #41AE37;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.delete {
						width: 96rpx;
						height: 40rpx;
						border: 2rpx solid #999999;
						border-radius: 20rpx;
						color: #999999;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}
	.btn-bottom{
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
	

	/deep/ .u-radio__label {
		color: #CCCCCC !important;
		font-size: 24rpx !important;
	}
</style>
