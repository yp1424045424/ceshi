//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    category:[],
    background: [
      { url:'../image/1.jpg'}, 
      { url:'../image/2.jpg'},
      { url: '../image/3.jpg'}
      ],
    iccoo:[
      { url: '../image/w1.png'}, 
      { url: '../image/w2.png' }, 
      { url: '../image/w3.png' }, 
      { url: '../image/w4.png' }, 
      { url: '../image/w5.png' }, 
      { url: '../image/w6.png' }, 
      { url: '../image/w7.png' }
    ] , 
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },


getCategory(){
  wx.showLoading({
    title: '正在加载~',
    mask:true
  })
  wx.request({
    url: 'http://localhost:3000/shop/menu/insert?pid=0',
    dataType:'json',
    success:(res)=>{
      wx.hideLoading();
      this.setData({
        category:res.data
      })
    }
  })
},

onShow(){
this.getCategory();
},
onLoad(){
  wx.getUserInfo({
    success(res) {
      // wx.navigateTo({
      //   url: '../car/car',
      // })
    },
    fail(err) {
      console.log(err, '获取用户信息失败')
      wx.showModal({
        content: '尚未进行授权请点击确定跳转到授权页面进行授权',
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login',
            })
          } else {
            wx.showModal({
              title: '警告',
              content: '为了给您提供更好的服务，是否重新授权',
              success: function (res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '../login/login',
                  })
                } else {
                  wx.navigateTo({
                    url: '../login/login',
                  })
                }
              }
            })
          }
        }
      })
    }
  })
}




})
