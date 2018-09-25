// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.setNavigationBarTitle({ title: '登录' }),
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })

  },
  bindgetuserinfo: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      // wx.login({
      //   success: res => {
      //     console.log(res.code, e.detail.iv, e.detail.encryptedData)
      //     wx.request({
      //       //后台接口地址
      //       url: '',
      //       data: {
      //         code: res.code,
      //         iv: e.detail.iv,
      //         encryptedData: e.detail.encryptedData,
      //       },
      //       method: 'GET',
      //       header: {
      //         'content-type': 'application/json'
      //       },
      //       success: function (res) {
      //         console.log('请求成功')
      //       }
      //     })
      //   }
      // })
    } else {
      console.log(333, '执行到这里，说明拒绝了授权')
      wx.showToast({
        title: "为了您更好的体验,请先同意授权",
        icon: 'none',
        duration: 2000
      });
    }
  },
  bindGetUserInfo: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})