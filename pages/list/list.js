Page({

  /**
   * 页面的初始数据
   */
  data: {
    cid: 0,
    cid1: 1,
    name: {},
    title: [],
    goods: [],
    sort: 'gid',
    page: 0,
    classname:"gid"
  },

  gettitle() {
    wx.request({
      url: 'http://localhost:3000/list/title',
      data:{cid:this.data.cid},
      dataType: 'json',
      success: (res) => {
        console.log(res),
        this.setData({
          title: res.data.list,
          name: res.data.title
        })
      }
    })
    this.getgoods();
  },
  changesort(e){

    this.setData({
      sort: e.currentTarget.dataset.sort,
      page:0,
      list:[],
      classname: e.currentTarget.dataset.sort
    })
    this.getgoods();
  },
  getgoods() {
    let page = this.data.page + 1;
    this.setData({
      page: page
    })
    wx.request({
      url: 'http://localhost:3000/list/query',
      data: {
        cid: this.data.cid1,
        page: this.data.page,
        sort: this.data.sort
      },
      dataType: 'json',
      success: (res) => {
       
        this.setData({
          goods: res.data
        })
      }
    })
  },
  addhot: function (e) {
    console.log(e)
    this.setData({
      cid1: e.currentTarget.dataset.cid,
      page: 0
    })
    this.getgoods();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     cid: options.cid
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
    this.gettitle();
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // wx.startPullDownRefresh()
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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
