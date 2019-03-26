// pages/index/index.js
const app = getApp();
Page({

  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: null,
    elements: [
      {title: '报道流程', name: 'process',color: 'orange',icon: 'icloading'},
      {title: '信息采集', name: 'collect', color: 'cyan', icon: 'newsfill' },
      {title: '个人信息', name: 'student',color: 'red',icon: 'myfill'},
      {title: '学校信息', name: 'school',color: 'olive',icon: 'copy'},
      {title: '录取通知', name: 'notification',color: 'blue',icon: 'formfill'},
      {title: '校园导航', name: 'navigation',color: 'purple',icon: 'album'},
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
    });
    console.log(this.data.userInfo);
    if (!this.data.userInfo){
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
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