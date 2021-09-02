<template>
	<view>
		<uniNavBar left-icon="back" fixed :left-text="editor" @clickLeft="back" statusBar></uniNavBar>
		<u-form :model="form" ref="uForm">
			<u-form-item label="联系人" prop="name">
				<u-input v-model="form.name" placeholder="请输入联系人" />
			</u-form-item>
			<u-form-item label=" ">
				<view class="editor_cell">
					<view class="radio_group" @click="radioChange(0)">
						<view :class="['radio',form.sex==0?'select':'']">
						</view>
						<view class="text">
							先生
						</view>
					</view>
					<view class="radio_group" style="margin-left: 64rpx;" @click="radioChange(1)">
						<view :class="['radio',form.sex==1?'select':'']">
						</view>
						<view class="text">
							女士
						</view>
					</view>
				</view>
			</u-form-item>
			<u-form-item label="电话" prop="tel">
				<u-input v-model="form.tel" type="number" required maxlength="11" placeholder="请输入电话" />
			</u-form-item>
			<u-form-item label="地址" prop="province">
				<u-input v-model="address" @click="showPicker" type="select" placeholder="请选择" />
			</u-form-item>
			<u-form-item label="门牌号" prop="detail">
				<u-input v-model="form.detail" required placeholder="例：1号楼1层101室" />
			</u-form-item>
			<u-form-item label="设为默认地址">
				<u-switch slot="right" active-color="#41AE37" v-model="form.is_default"></u-switch>
			</u-form-item>
		</u-form>
		<view class="btn-bottom">
			<view class="add_btn" @click="confirm">
				确认
			</view>
		</view>
		<u-picker mode="region" v-model="show" @confirm="select"></u-picker>
	</view>
</template>

<script>
	import uniNavBar from '../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import {
		update,
		add
	} from '../../../api/address.js'
	export default {
		components: {
			uniNavBar
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad(k) {
			if (k.status == 1) {
				this.editor = '编辑地址'
				this.status = 1
			} else {
				this.editor = '地址新增'
				this.status = 0
			}
			if (uni.getStorageSync("address_info")) {
				console.log(uni.getStorageSync("address_info"))
				this.form = uni.getStorageSync("address_info")
				uni.removeStorageSync("address_info")
				this.address = this.form.province + this.form.city + this.form.area
			}
		},
		data() {
			return {
				editor: '',
				form: {
					name: '',
					tel: '',
					sex: 0,
					province: '',
					city: '',
					area: '',
					detail: '',
					is_default: 0
				},
				rules: {
					name: [{
							required: true,
							message: '请输入联系人',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /^[\u4e00-\u9fa5]/g,
							transform(value) {
								return String(value);
							},
							message: '联系人姓名必须为中文'
						},
					],
					tel: [{
							required: true,
							message: '请输入联系电话',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					province: [{
						required: true,
						message: '请选择地区',
						trigger: ['change', 'blur'],
					}],
					detail: [{
						required: true,
						message: '请填写门牌号',
						trigger: ['change', 'blur'],
					}],
				},
				address: '',
				show: false,
				status: 0
			}
		},
		methods: {
			async confirm() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// sumbit()

						if (this.status == 0) {
							add(this.form)
						} else {
							update(this.form)
						}
						console.log('验证成功');
					} else {

						console.log('验证失败');
					}
				});
			},
			// async sumbit(){

			// 		if(this.status==0){
			// 			await add(this.form)
			// 		}
			// 		else{
			// 			await update(this.form)
			// 		}
			// },
			select(params) {
				this.form.province = params.province.label
				this.form.city = params.city.label
				this.form.area = params.area.label
				this.address = this.form.province + this.form.city + this.form.area
				console.log(params)
			},
			showPicker() {
				this.show = true
			},
			radioChange(param) {
				this.form.sex = param
			},
			back() {
				uni.navigateBack({

				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.editor_cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		bottom: 16rpx;

		.radio_group {
			display: flex;
			flex-direction: row;
			align-items: center;
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
				padding-left: 40rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #333333;
			}
		}

	}

	.btn-bottom {
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

	/deep/ .u-form-item {
		padding: 20rpx 32rpx !important;

	}

	/deep/ .u-form-item--left__content__label {
		width: 200rpx !important;
	}
</style>
