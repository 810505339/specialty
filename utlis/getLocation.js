
//根据经纬度使用腾讯位置服务获取具体地址
export function getLocation() {
  return new Promise((resolve) => {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const { longitude, latitude } = res
        // 引入SDK核心类
        var QQMapWX = require('./qqmap-wx-jssdk.js')
        // 实例化API核心类
        var qqmapsdk = new QQMapWX({
          key: '5YMBZ-IU6CR-O5GWF-WKL6A-I6T55-MGBUN'
        })
        qqmapsdk.reverseGeocoder({//地址解析
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: (res) => {
            wx.setStorageSync('m_lat', latitude)
            wx.setStorageSync('m_lng', longitude)
            console.log("ressasd", res)
            resolve(res.result.address_component)
          },
          fail: function (res) {
          },
          complete: function (res) {
          }
        })
      }
    })
  })
}

module.export = {
  getLocation
}