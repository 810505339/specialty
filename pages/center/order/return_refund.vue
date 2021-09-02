<template>
	<view style="padding-bottom: 100rpx;">
		<uniNavBar left-icon="back" fixed left-text="退款退货" @clickLeft="back" statusBar></uniNavBar>
		<view class="shop_box">
			<view class="top">
				<u-image src="/static/center/confirm.png" width="40rpx" height="40rpx"></u-image>
				<view class="text">
					卢正浩旗舰店
				</view>
			</view>
			<view class="middle" v-for="(item,index) in List" :key="index" @click="radioChange(index)">
				<view class="middle_left">
					<view class="radio_group" style="padding-right: 16rpx;">
						<view :class="['radio',item.is_default==1?'select':'']">
						</view>
					</view>
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
				<view class="middle_right">
					<view class="num">
						x1
					</view>
					<view class="intergarl" v-if="false">
						积分:10000
					</view>
				</view>
			</view>
		</view>
		<view class="reason_box">
			<u-form>
				<u-form-item label="售后原因">
					<u-input v-model="reason" @click="show_reason" input-align="right" type="select"
						placeholder="请选择" />
				</u-form-item>
				<u-form-item label="退款金额:">
					<view class="price">
						100000.00
					</view>
				</u-form-item>
				<u-form-item label="退款说明:">
					<input v-model="explain" placeholder-style="color: #c0c4cc;" style="padding-left: 50rpx;" placeholder="选填" />
				</u-form-item>
				<u-form-item label="备注:">
					<u-input v-model="remarks" placeholder="选填" />
				</u-form-item>
			</u-form>
		</view>

		<view class="upload_box">
			<view class="top">
				上传凭证
			</view>
			<u-upload :action="action" :file-list="fileList" width="144" height="144"></u-upload>
		</view>
		<view class="bottm_btn">
			<view class="btn" @click="sumbit">
				提交
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="20" height="620" width="654">
			<view class="tip">
				售后原因
			</view>
			<view class="popup_cell" v-for="(item,index) in reason_group" :key="index"  @click="select_reason(index)">
				{{item.text}}
				<view class="radio_group">
					<view :class="['radio',item.is_true?'select':'']">
					</view>
				</view>
			</view>
			<view class="bottm_btn" style="box-shadow:0 0 white;">
				<view class="btn" @click="sumbit_reason">
					提交
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import uniNavBar from '../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		onload(option){
			//1.换货 2.退款退货 3.仅退款
			if(option.type==1){
				this.type=1
			}
			else if(option.type==2){
					this.type=2
			}
			else if(option.type==3){
					this.type=3
			}
				
		},
		data() {
			return {
				type:'',//操作类型
				bottom: false,
				List: [{
					is_default: 1
				}, {
					is_default: 0
				}, {
					is_default: 0
				}],
				show: false,
				reason:'',//原因
				explain:'',//退款说明
				price:'',//退款金额
				remarks:'',//备注
				reason_group: [{
					text: '质量问题，我要换货',
					is_true: 1
				}, {
					text: '质量问题，我要换货',
					is_true: 0
				}, {
					text: '质量问题，我要换货',
					is_true: 0
				}, {
					text: '其他',
					is_true: 0
				}]
			}
		},
		methods: {
			sumbit(){
				if(this.reason==""){
					uni.showToast({
						title:"请选择原因",
						icon:"none",
						duration:2e3
					})
					return
				}
				uni.navigateTo({
					url:'/pages/center/order/refund_complate'
				})
			},
			//提交理由
			sumbit_reason(){
				this.show=0
				this.reason_group.map((item)=>{
					if(item.is_true==1){
						
						this.reason=item.text
					}
				})
			},
			select_reason(index) {
				this.reason_group.map((item, i) => {
					if (index == i) {
						item.is_true = 1
					} else {
						item.is_true = 0
					}
				})
			},
			//申请售后
			show_reason(id) {
				this.show = true
			},
			radioChange(index) {
				this.List.map((item, i) => {
					if (index == i) {
						item.is_default = 1
					} else {
						item.is_default = 0
					}
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

						}
					}
				}
			}

			.middle_right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.intergarl {
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #41AE37;
				}

				.num {
					text-align: right;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #333333;
				}
			}
		}
	}


	.radio_group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

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
	}

	.reason_box {
		margin: auto;
		margin-top: 32rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 20rpx 16rpx;

		.price {
			padding-left: 50rpx;

			&::before {
				content: '￥';
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: bold;

			}
		}
	}

	.upload_box {
		margin: auto;
		margin-top: 32rpx;
		width: 654rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32rpx 16rpx;

		.top {
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #333333
		}

	}

	/deep/ .u-form-item {
		padding: 0 !important;

	}

	/deep/ .u-form-item--left__content__label {
		width: 200rpx !important;
	}

	/deep/ .u-border-bottom:after {
		border: 0;
	}

	.label_style {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		color: #333333;
	}

	u-form-item {
		&:first-child {
			/deep/ .u-form-item--left__content__label {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 800;
				color: #333333;
			}
		}
	}

	/deep/ .u-list-item {
		margin: 0 !important;
		margin-top: 32rpx !important;
		;
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

	.tip {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 32rpx;
		color: #333333
	}

	.popup_cell {
		margin: 0 32rpx;
		text-align: center;
		height: 104rpx;
		border-bottom: 2rpx solid #F5F5F5;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
