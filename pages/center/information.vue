<template>
	<view>
		<uniNavBar left-icon="back" left-text="完善信息" fixed @clickLeft="back" statusBar></uniNavBar>
		<view style="width: 716rpx;margin: auto;">
			<u-form :model="form" class="form" label-position="top" ref="uForm">
				<u-form-item label="真实姓名" prop="name">
					<u-input v-model="form.name" placeholder="请输入真实姓名" />
				</u-form-item>
				<u-form-item label="联系电话" prop="phone">
					<u-input v-model="form.phone" type="number" placeholder="请输入联系电话" maxlength="11" />
				</u-form-item>
				<u-form-item label="身份证号" prop="card">
					<u-input v-model="form.card" placeholder="请输入身份证号" maxlength="18" />
				</u-form-item>
				<!-- <u-form-item label="手机号">
					<u-input v-model="form.intro" placeholder="请输入手机号" />
				</u-form-item> -->
				<u-form-item label="验证码" prop="code">
					<u-input v-model="form.code" placeholder="请输入验证码" />
					<u-toast ref="uToast"></u-toast>
					<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange">
					</u-verification-code>
					<u-button @click="getCode" style="border: 0;background: transparent;" slot="right">{{tips}}
					</u-button>
				</u-form-item>
			</u-form>
		</view>
		<view class="btn-bottom">
			<view class="add_btn" @click="submit">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import {
		information
	} from "../../api/information";
	export default {
		components: {
			uniNavBar
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		data() {
			return {
				form: {
					name: '',
					phone: '',
					card: '',
					code: ''
				},
				rules: {
					name: [{
							min: 2,
							required: true,
							message: '请输入完整姓名',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /^[\u4e00-\u9fa5]/g,
							transform(value) {
								return String(value);
							},
							message: '姓名必须为中文'
						},
					],
					phone: [{
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
					card: [{
							required: true,
							message: '请输入身份证号',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
							transform(value) {
								return String(value);
							},
							message: '身份证号不正确',
						}
					],
					code: [{
						required: true,
						message: '请输入验证码',
						trigger: ['change', 'blur'],
					}, ]
				},
				tips: '',
				seconds: 60,
			}
		},
		methods: {
			// async submit() {

			// 	const params = {
			// 		real_name: this.form.name,
			// 		phone: this.form.phone,
			// 		id_card: this.form.card,
			// 	}
			// 	const k = information(params)
			// },
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log(valid, '验证通过');

						//验证码对比
						const params = {
							real_name: this.form.name,
							phone: this.form.phone,
							id_card: this.form.card,
						}
						const k = information(params)
						console.log("信息啊啊", k)
					} else {
						console.log('验证失败');
					}
				});
			},
			back() {
				uni.navigateBack({

				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				// this.$u.toast('倒计时结束');
			},
			start() {
				// this.$u.toast('倒计时开始');
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .form .u-hairline-border:after {
		border: 0 !important;
	}

	/deep/ 	.form .u-size-default {
		background: transparent !important;
		color: #41AE37 !important;
		font-size: 24rpx !important;
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
</style>
