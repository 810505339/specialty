<template>
  <view>
    <view class="title">
      联系专属顾问，享受量身定制
    </view>
    <view class="van-list">
      <view class="van-item" v-for="(item,index) in vanList" :key="index">
        <view>
          <u-image width="120rpx" shape="circle" height="120rpx" :src="item.img"/>
        </view>
        <view class="txt">{{item.text}}</view>
      </view>
    </view>
    <view>
      <view class="input-list">
        <u-form :model="form" ref="uForm" :error-type="['toast']">

          <u-form-item v-for="(item,index) in inputList" :key="item.key"   :prop="item.key">
            <view  class="input-item"  :class="{'has':item.required}">
              <u-input  v-model="form[item.key]" :type="item.type"  :maxlength="item.maxlength"   :placeholder="item.placeholder"  :disabled="item.disabled"   border  @click="inputClick(item)"/>
              <view class="input-icon">
                <u-icon  v-if="item.disabled" name="arrow-right"/>
              </view>
            </view>
          </u-form-item>
        </u-form>

      </view>
      <view class="sm" @click="open">
        且凡服务说明
      </view>
      <u-picker v-model="show" mode="time" @confirm="confirm" :params="params"/>
    </view>
    <view style=" height: 100rpx;">
      <view class="f-d-body">
        <u-button shape="circle" ripple :custom-style="{width:'100%'}" :loading="loading"    :disabled="loading"     @click="onSubmit">提交</u-button>
      </view>
    </view>
    <u-popup v-model="agreementOpen" mode="center"   border-radius="14"  width="500rpx" height="600px" >
      <view class="agreement">
        <view class="agreement-title">服务说明</view>
        <u-parse :html="content"/>
      </view>
    </u-popup>
  </view>
</template>

<script>

import UIcon from "../../uview-ui/components/u-icon/u-icon";
import {customized} from "../../api/list";
import {agreementApi} from "../../api/info";
import UButton from "../../uview-ui/components/u-button/u-button";
export default {
  name: "customized",
  components: {UButton, UIcon},
  data(){
    return{
      vanList:[
        {
          img:require('static/find/bar4.png'),
          text:'会员终身',
        },
        {
          img:require('static/find/bar1.png'),
          text:'沟通方案',
        },
        {
          img:require('static/find/bar2.png'),
          text:'预订落实',
        },
        {
          img:require('static/find/bar3.png'),
          text:'出行保障',
        },
      ],
      inputList:[
        {placeholder:'填写目的地',disabled:false,key:'destination',required:false,type:'text',maxlength:140},
        {placeholder:'填写手机号',disabled:false,key:'mobile',required:true,type:'number',maxlength:11},
        {placeholder:'出行人数',disabled:false,key:'people_count',required:true,type:'number',maxlength:140},
        {placeholder:'出行日期',disabled:true,key:'start_date',required:false,type:'text',maxlength:140},
        {placeholder:'返程日期',disabled:true,key:'end_date',required:false,type:'text',maxlength:140},
      ],
      show:false,
      params: {
        year: true,
        month: true,
        day: true,
        hour: false,
        minute: false,
        second: false
      },
      key:'',//所选的ley
      content:'',
      agreementOpen:false,
      loading:false,
      form:{
        destination:'',
        mobile:'',
        people_count:'',
        start_date:'',
        end_date:'',
      },
      rules:{
        destination:[
          {
            required: false,
            message: '请输入目的地',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          }
        ],
        mobile:[
          {
            required: true,
            message: '请输入手机号',
            trigger: ['change','blur'],
          },
          {
            min: 11,
            max:11,
            message: '手机号码必须是11位',
            trigger: ['change','blur'],
          },
          {
            pattern:/1[3456789]{1}\d{9}$/,
            trigger: ['change','blur'],
            message: '请输入正确的手机号',

          }
        ],
        people_count:[
          {
            required: true,
            message: '请输入出行人数',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          },{
            type:'number',
            message: '出行人数必须是数字',
            trigger: ['change','blur'],
          }
        ],
        start_date:[],
        end_date:[],
      }

    }
  },
  methods:{
    inputClick(item){
        this.show=item.disabled;
        this.key=item.key;
    },
    confirm(val){
      const{year,month,day}=val
      const value=`${year}-${month}-${day}`
     const active=this.inputList.find(item=>item.key===this.key)
      this.form[active.key]=value

    },
    async onSubmit(){


      this.$refs.uForm.validate(async (valid) => {
        if (valid) {
          console.log(1)
          this.loading=true
          const data= await customized(this.form)
          this.loading=false
          if(data)
          {
            const id = setTimeout(()=>{
              uni.navigateBack({
                delta: 1
              })
              clearTimeout(id)
            },500)
          }


        } else {
          console.log('验证失败');
        }
      });





    },
    async agreement(){
    const{data}=  await agreementApi({type:'service'})
      this.content=data.content
    },
    open(){
      this.agreementOpen=true
    }
  },
  onLoad(){
    this.agreement()

  },
  onReady(){
    this.$refs.uForm.setRules(this.rules);
  }
}
</script>

<style scoped lang="scss">
.has{
  &:after{
    content: '*';
    position: absolute;
    left: -30rpx;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    color: red;
  }
}
/deep/.u-form-item{
  padding: 0;

}

.title{
  color: #333333;
  font-size: 32rpx;
  font-weight: bold;
  text-align: center;
  padding:60rpx 0;
}
/deep/.u-border-bottom:after{
  border-width: 0;
}
.van-list{
  display: flex;
  align-items: center;
  justify-content: space-around;
  .van-item{
    font-weight: 400;
    color: #333333;
    font-size: 24rpx;
    text-align: center;
    .txt{
      margin-top: 16rpx;
    }
  }
}
.input-list{
  padding:40rpx 66rpx;
  .input-item{
    position: relative;
    .input-icon{
      position: absolute;
      right: 20rpx;
      top:50%;
      transform: translateY(-50%);
    }


    /deep/ .uni-input-placeholder{
      color:#44495E !important;
    }
  }
}
.sm{
  padding-left: 66rpx;
  font-size: 28rpx;
  color: #818181;
  text-decoration:underline;
  font-weight: 400;
}
.f-d-body{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  height: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 25rpx;
  /deep/.u-btn{
    width: 100%;
    background: #FED300;
    color: #FFFFFF;
    font-size: 32rpx;
    font-weight: bold;
  }

}
u-button{
  width: 100%;
}
.agreement{
  margin: 50rpx 20rpx;

  .agreement-title{
    font-size: 40rpx;
    font-weight: 500;
    padding: 10rpx 0;
    text-align: center;
  }

}

</style>