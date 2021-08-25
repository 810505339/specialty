<template>
  <view>
    <view>
      <u-swiper  :list="data.banner_list"  :haveSlot="true" mode="number" :autoplay="false"    indicator-pos="bottomRight">
        <template v-slot="{elem}">
          <u-image :src="elem.url" witdth="100%" height="100%"  v-if="elem.is_img"  />
          <video :src="elem.url" :muted="true" :loop="true"  :autoplay="true" object-fit="fill"  :enable-progress-gesture="false"  :show-center-play-btn="false"   :controls="false"   v-else  />
        </template>
      </u-swiper>

      <view class="detail-context">
        <view class="context-title">{{data.title}}</view>
        <view class="context-btm-list">
          <view class="text-wrapper">
            <view>{{data.view_count}}次浏览</view>
            <view>{{data.format_time}}</view>
          </view>
          <view  class="text-wrapper d-wrp">
            <view class="d-w">
              <view class="d-w-icon">
                <button :open-type="token?'contact':''"  class="btn" @click="logoClick">11</button>
                <u-icon name="chat"  color="#FED300" size="35"/>
              </view>
              联系客服
            </view>
            <view class="d-w" @click="favorite">
              <u-icon :name="data.is_favorite?'star-fill':'star'"  class="d-w-icon"  color="#FED300" size="35"/>
              收藏
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="detail-des">
        <view class="detail-des-title">{{data.title}}</view>
        <view class="detail-des-context">
          <u-parse :html="data.content"/>

        </view>
    </view>
    <view>
      <view class="form-wrapper">
        <view class="form-title">酒店预定</view>
        <view class="form-des">预定须知：收到短信表示预定成功，收到短信表示预定成功， 收到短信表示预定成功</view>
        <view class="input-list">
          <u-form :model="form" ref="uForm" :error-type="['toast']">
            <u-form-item  v-for="(item,index) in inputList"   :prop="item.key" :key="index" >
              <view  class="input-item"  :class="{'has':item.required}">
                <u-input  v-model="form[item.key]"   :type="item.type" :maxlength="item.maxlength"  :placeholder="item.placeholder"   @click="dateClick(item)"  border />
              </view>
            </u-form-item>
          </u-form>

          <u-calendar  v-model="date.show" mode="date" :min-date="now"   btn-type="warning" active-bg-color="#FED300"  :max-date="'2050-12-30'"  @change="change">
            <view slot="tooltip">
              <view class="title">
                请选择入住时间
              </view>
            </view>
          </u-calendar>
        </view>
      </view>
    </view>
    <view style=" height: 100rpx;">
      <view class="f-d-body">
        <u-button shape="circle"  :loading="loading" :disabled="loading"   ripple :custom-style="{width:'100%'}" @click="bookHotel">提交预约</u-button>
      </view>
    </view>
  </view>
</template>

<script>
import {bookHotelApi, favoriteApi, hotelInfoApi} from "../../api/info";
import {customized} from "../../api/list";
import store from "../../store";

export default {
  name: "hotel",
  data(){
    return{
      id:'',
      data:{
        is_favorite:0
      },
      inputList:[
        {placeholder:'姓名',value:'',key:'true_name',required:true,type:'text',maxlength:140},
        {placeholder:'电话',value:'',key:'mobile',required:true,type:'number',maxlength:11},
        {placeholder:'入住人数',value:'',key:'people_count',required:true,type:'number',maxlength:140},
        {placeholder:'需要房间数',value:'',key:'room_count',required:true,type:'number',maxlength:140},
        {placeholder:'入住天数',value:'',key:'days',required:true,type:'number',maxlength:140},
        {placeholder:'入住日期',value:'',show:false,key:'date',required:true,type:'text',maxlength:140},
      ],
      loading:false,
      form:{
        true_name:'',
        mobile:'',
        people_count:'',
        room_count:'',
        days:'',
        date:''
      },
      rules:{
        true_name:[
          {
            required: true,
            message: '请输入姓名',
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
            pattern: /1[3456789]{1}\d{9}$/,
            trigger: ['change','blur'],
            message: '请输入正确的手机号',
          }
        ],
        people_count:[
          {
            required: true,
            message: '请输入入住行人数',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          },{
            type:'number',
            message: '入住行人数必须是数字',
            trigger: ['change','blur'],
          }
        ],
        room_count:[
          {
            required: true,
            message: '请输入需要房间人数',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          },{
            type:'number',
            message: '需要房间必须是数字',
            trigger: ['change','blur'],
          }
        ],
        days:[
          {
            required: true,
            message: '请输入需要入住天数',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          },{
            type:'number',
            message: '入住天数必须是数字',
            trigger: ['change','blur'],
          }
        ],
        date:[
          {
            required: true,
            message: '请输入入住天数',
            // 可以单个或者同时写两个触发验证方式
            trigger: ['change','blur'],
          }
        ],
      }
    }
  },
  methods:{
    logoClick(){
      if(store.state.user.token===''){
        uni.redirectTo({url:'/pages/login/login'})
      }
    },
    async getData(id){
      const {data}=  await hotelInfoApi({hotel_id:id})
      this.data=data

    },
    async bookHotel(){



      this.$refs.uForm.validate(async (valid) => {
        if (valid) {

          const params={
            hotel_id:this.id,
            ...this.form
          }

          this.loading=true
          const data=  await  bookHotelApi(params)
          this.loading=false
          if(data)
          {
          const id=  setTimeout(()=>{
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
    change(e){

      this.form.date=e.result

    },
    dateClick(item){
      if(item.key==='date'){
        item.show=true
      }
    },
    async favorite(){
     const {data} =await favoriteApi({item:'hotel',item_id:this.id})
      this.data.is_favorite=data.is_favorite

    }
  },
  computed:{
    date(){
      return   this.inputList.find(item=>item.key==='date')
    },
    now(){
      const date=new Date()
      const year=date .getFullYear()
      const month=date .getMonth()
      const day=date .getDate()
      return `${year}-${month}-${day}`
    },
    token(){
      return store.state.user.token
    }
  },
  onLoad(ctx){
    this.id=ctx.id
    this.getData(ctx.id)
  },
  onReady(){
    this.$refs.uForm.setRules(this.rules);
  }

}
</script>

<style scoped lang="scss">
video{
  width: 100%;
  height: 100%;
}
/deep/.u-border-bottom:after{
  border-bottom-width:0;
}
u-button{
  width: 100%;
}

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
.btn{
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;

}


.detail-context{
  padding:28rpx 22rpx;
  background: #FFFFFF;
  .context-title{
    font-size: 32rpx;
    font-weight: bold;
    color: #333333;

  }
  .context-btm-list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20rpx;
    .text-wrapper{
      font-size: 24rpx;
      color: #333333;
      display: flex;
      align-items: center;
      & view{
        margin-right: 20rpx;
      }
    }
    .d-wrp{
      color:#44495E;
    }


  }

}
.detail-des{
  margin-top: 24rpx;
  background: #FFFFFF;
  .detail-des-title{
    text-align: center;
    font-size: 32rpx;
    color: #333333;
    font-weight: 400;
    padding: 28rpx 0;
  }
  .detail-des-context{
    padding: 0 28rpx;
    line-height: 60rpx;
    font-size: 24rpx;
    color: #333333;
  }
}
.d-w{
  position: relative;

  .d-w-icon{
    position: absolute;
    top: -50rpx;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 50rpx;
    width: 100%;
    text-align: center;
  }

}
.form-wrapper{
  margin:16rpx 32rpx;
  background: #FFFFFF;
  padding: 38rpx 26rpx;
  border-radius: 16rpx;
  .form-title{
    color: #333333;
    font-size: 32rpx;
    text-align: center;
    padding-bottom: 16rpx;
    font-weight: 400;
  }
  .form-des{
    font-size: 24rpx;
    color: #818181;
    font-weight: 400;
  }

  .input-list{
    .input-item{

    }
  }

}
.f-d-body{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFFFFF;
  z-index: 10;
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
.title{

  text-align: center;
  padding: 20rpx 0 0 0;
  font-size: 24rpx;
}
/deep/ .u-swiper-wrap{
  .u-swiper-indicator{
    bottom: 50rpx !important;
    right: 20rpx !important;
    /deep/ .u-indicator-item-number{
      background: rgba(256, 256, 256, 0.3);
      color:#FFFFFF;
    }
  }
}


</style>